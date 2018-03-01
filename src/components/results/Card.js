import React from 'react';
import {Link} from 'react-router';

//A single card with a user profile pic and blurb
const Card = (props) => {
    return (
        <div style={{padding:'5px', border:'1px solid', width:'300px'}}>
            <img src={props.avatar_url} width="75" height="75" />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

export default Card;