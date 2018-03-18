import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import userApi from '../../api/mockUserApi';
import threadApi from '../../api/threadApi';
import messageApi from '../../api/mockMessageApi';
import ReplyToggle from './ReplyToggle';

class ThreadCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userNames: [],
            lastMessage: "",
            currUser: JSON.parse(localStorage.getItem('currUser'))
        }

        this.loadUserNames(this.props.thread.users);
        this.getLastMessage = this.getLastMessage.bind(this);
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
        var mid = this.props.thread.messages[0]
        messageApi.getMessage(mid).then( message => {
            this.setState({lastMessage: message.message})
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
                    {this.getLastMessage()}
                    <p>Last Message: {this.state.lastMessage}</p>
                    
                </left>
                <center>
                <ReplyToggle
                    thread = {this.props.thread}
                    actions = {this.props.actions}
                />

                <Link to={{
                    pathname: '/thread',
                    state: {
                        thread: this.props.thread,
                        actions: this.props.actions
                    }
                    }}>
                    <button>See Full Message Thread</button>
                </Link>
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