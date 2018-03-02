import React from 'react';
import {Link} from 'react-router';

const PetCard = (props) => {
    return (
        <div>
           
                <div> <h2> {props.name}  </h2></div>
        </div>
    );
}

export default PetCard;