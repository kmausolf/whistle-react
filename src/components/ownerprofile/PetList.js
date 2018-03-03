import React from 'react';
import {Link} from 'react-router';
import PetCard from "./PetCard";

//will be functional bc just accesses props, doesn't have much interaction
const PetList = (props) => {
    return (
        <div>

            {props.pets.map(pet =>
                <div key={pet.key}>
                    <PetCard {...pet} />
                </div>
            )}
        </div>
    );

}

export default PetList;