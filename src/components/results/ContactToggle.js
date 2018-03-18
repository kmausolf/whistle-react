import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as threadActions from '../../actions/threadActions';


//will have an on and off state.
class ContactToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showing: false,
            replyMessage: ""
        };
        this.showTextArea = this.showTextArea.bind(this);
        this.hideTextArea = this.hideTextArea.bind(this);
        this.handleReplyChange = this.handleReplyChange.bind(this);
    }
    
    showTextArea(){
        this.setState({showing: true});
    }

    hideTextArea(){
        var userIDList = []
        var senderID = JSON.parse(localStorage.getItem('currUser')).id
        userIDList.push(senderID)
        userIDList.push(this.props.uid)
        console.log(userIDList)
        var message = this.state.replyMessage
        this.props.actions.sendMessage(userIDList, senderID, message)
        .then(() => this.props.update())
        .catch(error => {
            toastr.error(error);
        }); 
        this.setState({
            showing: false,
            replyMessage: ""
        });
    }

    handleReplyChange(event) {
        this.setState({replyMessage: event.target.value});
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
            contactBox = <textarea id="reply-message" value={this.state.replyMessage} onChange={this.handleReplyChange}rows="5" cols="50"></textarea>;
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


// export default ContactToggle;

ContactToggle.propTypes = {
    actions: PropTypes.object.isRequired,
    uid: React.PropTypes.string.isRequired
  };
  
  
  function mapStateToProps(state, ownProps) {
    return{
    };
  }
  
  function mapDispatchToProps(dispatch){
    return{
      actions: bindActionCreators(threadActions, dispatch)
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactToggle);
