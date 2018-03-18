import React, {PropTypes} from 'react';

import userApi from '../../api/mockUserApi';
import threadApi from '../../api/threadApi';
import messageApi from '../../api/mockMessageApi';

var name = ""

class ThreadCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNames: [],
            lastMessage: "",
            currUser: JSON.parse(localStorage.getItem('currUser'))
        }

        this.loadUserNames(this.props.thread.users);
        this.getLastMessage();
    }

    loadUserNames(userIDs) {
        let numUsers = Object.keys(userIDs).length;
        for(var i = 0; i < numUsers; i++) {
            var userId = (userIDs)[i];
            userApi.getUser(userId).then(user => {
                name = user.firstName + " " + user.lastName;
                var temp = this.state.userNames
                if(this.state.currUser.id != user.id) {
                    temp.push(name)
                }
                this.setState({userNames: temp})
            }).catch(error => {
                throw(error);
            })
        }
    }

    getLastMessage() {
        threadApi.getLastMessageId(this.props.thread.tid).then( mid => {
            messageApi.getMessage(mid).then( message => {
                this.setState({lastMessage: message.message})
            }).catch(error => {
                throw(error);
            })
        }).catch(error => {
            throw(error);
        })
        
    }

    render() {
        const imgStyle = {
            borderRadius: "10px",
            width: "100px",
            height: "100px",
            float:'left' 
        };

        return (
            <div>
                <left>
                    <p>From:
                    {this.state.userNames.map(name =>
                        <nobr> {name} | </nobr>
                    )}</p>
                    <p>Last Message: {this.state.lastMessage}</p>
                    
                </left>
                <center>
                    <button className="quickReply" >Quick Reply</button>
                </center>
            </div>
        );
    }
}

ThreadCard.propTypes = {
    thread: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default ThreadCard;