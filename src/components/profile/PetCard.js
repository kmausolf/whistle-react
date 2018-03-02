import React from 'react';
import {Link} from 'react-router';

const PetCard = (props) => {
    return (
        <div>
           
                <div> 
                    <h4> {props.name} </h4> <br />
                    <h4> {props.breed} </h4> <br />
                    <h4> {props.insuranceNo} </h4> <br />
                    <h4> {props.meds} </h4> <br />
                    <h4> {props.medConds} </h4> <br />
                    <h4> {props.vetNo} </h4> <br />
                
                
                
                </div>
        </div>
    );
}

export default PetCard;