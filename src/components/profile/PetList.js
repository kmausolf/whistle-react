import React from 'react';
import {Link} from 'react-router';
import PetCard from "./PetCard";

//will be functional bc just accesses props, doesn't have much interaction
const PetList = (props) => {
    return (
        <div>
            {props.cards.map(card =>
                <div key={card.key} style={cardStyle}>
                    <PetCard {...card} />
                </div>
            )}
        </div>
    );

}

export default PetList;