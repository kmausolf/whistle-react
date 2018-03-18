import React from 'react';
import {Link} from 'react-router';
import ContactToggle from './ContactToggle';

//A single card with a user profile pic and blurb
const Card = (props) => {
      const imgStyle = {
        borderRadius: "10px",
        width: "100px",
        height: "100px", 
        float: "left"
      };
    return (
        <div>
            <img src={props.avatar_url} style={imgStyle} />
            <div> <center>
                <div> <h2> {props.name}  </h2></div>
                <div><h4> {props.title} </h4> </div>
                <div><p> {props.bio} </p> </div> 
                
                </center></div> 
                <br />

                <center>
                    
                    <ContactToggle
                        uid = {props.id}
                    />
                </center>

        </div>
    );
};

Card.propTypes = {
    avatar_url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    bio: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
};

export default Card;