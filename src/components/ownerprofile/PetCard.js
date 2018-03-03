import React from 'react';
import {Link} from 'react-router';

const PetCard = (props) => {
    const imgStyle = {
        borderRadius: "10px",
        width: "150px",
        height: "150px",
        float:'left' 
      };
    return (
        
        <div>
            <div>
            <img id="profile_pic" src={props.pic} alt="Test profile pic" style={imgStyle}/><br/>
           </div>
                <div> <center>
                    <h3> {props.name} </h3> 
                    <h4> {props.breed} </h4>
                     <p> Insurance Number: {props.insuranceNo} </p> 
                    <p> Medicines: {props.meds} </p>
                    <p> Medical Conditions: {props.medConds} </p> 
                    <p> Vet Number: {props.vetNo} </p> 
                    <p> {props.bio} </p>
                   
                <br/>
                </center>
                </div>
                
        </div>
    );
}

export default PetCard;