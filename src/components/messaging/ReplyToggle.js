import React from 'react';
import {Link} from 'react-router';

//will have an on and off state.
class ReplyToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { showing: false };
        this.showTextArea = this.showTextArea.bind(this);
        this.hideTextArea = this.hideTextArea.bind(this);
    }
    
    showTextArea(){
        this.setState({showing: true});
    }

    hideTextArea(){
        this.setState({showing: false});
    }

    render() {
        const { showing } = this.state;

        let button = null;
        let contactBox = null;

        if(!showing){
            button = <button onClick={this.showTextArea}>Reply</button>;
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


export default ReplyToggle;
