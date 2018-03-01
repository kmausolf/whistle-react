import React from 'react';
import {Link} from 'react-router';
import Card from "./Card"

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};


export default CardList;
