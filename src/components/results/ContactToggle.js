import React from 'react';
import {Link} from 'react-router';

//will have an on and off state.
class ContactToggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { showing: false};
        
        
    }
   

    render() {
        const { showing } = this.state
      return (
        <div>
            
            {showing 
                ? <textarea rows="5" cols="50"> </textarea> 
                : null
            } <br />
            <button onClick={() => this.setState({ showing: !showing })}> Contact</button>
        </div>  
      );
    }
  }


export default ContactToggle;
