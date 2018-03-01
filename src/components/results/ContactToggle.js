import React from 'react';
import {Link} from 'react-router';

//will have an on and off state.
class ContactToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { showing: false};
        this.showToggle = this.showToggle.bind(this);
    }
    
    showToggle(){
        this.setState({showing: !this.showing});
    }

    render() {
        const { showing } = this.state;
      return (
        <div>
            
            {showing 
                ? <textarea rows="5" cols="50"> </textarea> 
                : null
            } <br />
            <button onClick={this.showToggle}> Contact</button>
        </div>  
      );
    }
  }


export default ContactToggle;
