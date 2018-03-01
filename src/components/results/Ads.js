import React from 'react';
import {Link} from 'react-router';
import CardList from './CardList';
class Ads extends React.Component {

    constructor(props){
        super(props);
        this.state = { cards: [] };

        this.loadCards = this.loadCards.bind(this);
    }

    loadCards() {
        this.setState(() => ({
            cards: [
                {
                    key: 1, name: "Paul O'Shannessy",
                    avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
                    company: "Facebook"
                },
                {
                    key: 2, name: "Ben Alpert",
                    avatar_url: "https://avatars.githubusercontent.com/u/7585659?v=3",
                    company: "Facebook"
                }
            ]
        }));
    }


    render(){
        const searchStyle = {
            float: "right",
            width: "35%"
          };
          const searchButtonStyle = {
            float: "right"
          };
        return(
            <div>
                 <form>
          Search for a specific name, location...
            <button style= {searchButtonStyle} onClick={this.loadCards}  type="button">Search</button>
            <input style={searchStyle} type="text" placeholder="Enter a tag..." />
            
          </form> 
                
                <CardList cards={this.state.cards} />

            </div>
        );
    }
}

export default Ads;