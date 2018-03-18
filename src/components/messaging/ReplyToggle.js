import React, {PropTypes} from 'react';
import {Link} from 'react-router';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';

//will have an on and off state.
class ReplyToggle extends React.Component {
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
        var userIDList = Object.assign([], this.props.thread.users)
        var senderID = JSON.parse(localStorage.getItem('currUser')).id
        var message = this.state.replyMessage
        this.props.actions.sendMessage(userIDList, senderID, message)
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
        let replyBox = null;

        if(!showing){
            button = <button onClick={this.showTextArea}>Quick Reply</button>;
            replyBox = null;
        }
        else{
            button = <button onClick={this.hideTextArea}>Send</button>;
            replyBox = <textarea id="reply-message" value={this.state.replyMessage} onChange={this.handleReplyChange} rows="5" cols="50"></textarea>;
        }

      return (
        <div>
            {replyBox}
            <br/>
            {button}
        </div>  
      );
    }
  }

ReplyToggle.propTypes = {
    thread: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

// function mapStateToProps(state, ownProps) {
//     return{
//       threads: state.thread
//     };
//   }

// function mapDispatchToProps(dispatch){
//     return{
//         actions: bindActionCreators(threadActions, dispatch)
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReplyToggle);


export default ReplyToggle;
