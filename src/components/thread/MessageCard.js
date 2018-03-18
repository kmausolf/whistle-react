import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import userApi from '../../api/mockUserApi';
import threadApi from '../../api/threadApi';
import messageApi from '../../api/mockMessageApi';

class MessageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            message: [],
            currUser: JSON.parse(localStorage.getItem('currUser'))
        }

        this.loadMessage();
    }

    loadMessage() {
        messageApi.getMessage(this.props.mid).then( message => {
            this.setState({message: message})
            this.loadUserName();
        }).catch(error => {
            throw(error);
        })
    }

    loadUserName() {
        userApi.getUser(this.state.message.sender).then(user => {
            name = user.firstName + " " + user.lastName;
            if(this.state.currUser.id != user.id) {
                this.setState({userName: name})
            }
            else {
                this.setState({userName: "You"})
            }
        }).catch(error => {
            throw(error);
        })
    }

    render() {
        // const imgStyle = {
        //     borderRadius: "10px",
        //     width: "100px",
        //     height: "100px",
        //     float:'left' 
        // };

        var code = (
            <div>
                <p>From: {this.state.userName}</p><br/>
                <p>{this.state.message.message}</p>
            </div>
        );

        if(this.state.userName == "You") {
            return (
                <div>
                    {code}
                </div>
            );
        }
        else {
            return (
                <center>
                    {code}
                </center>
            );
        }

        return code;

        
    }
}

MessageCard.propTypes = {
    mid: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

export default MessageCard;