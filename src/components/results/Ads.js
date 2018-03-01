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
                    name: "Paul O'Shannessy",
                    avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
                    title: "Dog and Cat walker",
                    bio: "Sup dude I will walk your pet man"
                },
                {
                     name: "Ben Alpert",
                    avatar_url: "https://avatars.githubusercontent.com/u/7585659?v=3",
                    title: "Professional Animal Handler",
                    bio: "Professional pet caretaker. 25 years of experience at the SF Zoo."
                }
            ]
        }));
    }


    render(){
        const searchStyle = {
            float: "right",
            width: "35%",
            borderRadius: '5px'
          };
          const searchButtonStyle = {
            float: "right",
            borderRadius: '5px'
          };
        return(
            <div>
            <form>
             Search for a specific name, location...
            <button style= {searchButtonStyle} onClick={this.loadCards}  type="button">Search</button>
            <input style={searchStyle} type="text" placeholder="Enter a tag..." />
            
          </form> 
          <br />
                
                <CardList cards={this.state.cards} />

            </div>
        );
    }
}

export default Ads;