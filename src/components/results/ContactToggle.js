import React from 'react';
import {Link} from 'react-router';
import userApi from '../../api/mockUserApi';
//will have an on and off state.
class ContactToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { showing: false};
        this.showTextArea = this.showTextArea.bind(this);
        this.hideTextArea = this.hideTextArea.bind(this);
    }
    
    showTextArea(){
        this.setState({showing: true});
    }

    hideTextArea(){
        this.setState({showing: false});
        //send request to user
        
        //sending is based on first last... lol, hope no one has a weird name. whatever it's past midnight.
        let fullname = JSON.stringify(this.props.Name).split(" ");
        let first = fullname[0];
        let last = fullname[1];
        let send_to_id = first.toLowerCase() + '-' + last.toLowerCase();
        let currUser = JSON.parse(localStorage.getItem('currUser'));
        let sender_id = currUser.id;

        let ids = [sender_id, send_to_id];
        //TODO implement message sending
        //this.props.actions.sendMessage(ids, sender_id, "Hi "+fullname+". I'd like to hire you.");
        //then we would call message to send 
    }

    render() {
        const { showing } = this.state;

        let button = null;
        let contactBox = null;

        if(!showing){
            button = <button onClick={this.showTextArea}>Contact</button>;
            contactBox = null;
        }
        else{
            button = <button onClick={this.hideTextArea}>Send</button>;
            contactBox = <textarea rows="5" cols="50"></textarea>;
        }

      return (
        <div>
            {contactBox}
            <br />
            {button}
        </div>  
      );
    }
  }


export default ContactToggle;
