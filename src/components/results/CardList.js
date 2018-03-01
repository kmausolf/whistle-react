import React from 'react';
import {Link} from 'react-router';
import Card from "./Card";

const CardList = (props) => {
    const cardStyle = {
        padding:'7px', 
        border: '1.5px solid',
        borderRadius: '10px',
        borderColor: "#707070",
        width:"100%"
        
      };
    return (
        <div>
            {props.cards.map(card =>
                <div key={card.key} style={cardStyle}>
                    <Card {...card} />
                </div>
            )}
        </div>
    );
};

CardList.propTypes = {
    cards: React.PropTypes.array.isRequired
};


export default CardList;
