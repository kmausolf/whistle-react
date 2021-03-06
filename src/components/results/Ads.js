import React from 'react';
import {Link} from 'react-router';
import CardList from './CardList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import toastr from 'toastr';

class Ads extends React.Component {

    constructor(props){
        super(props);
        this.state = { cards: [] };

        this.loadCards = this.loadCards.bind(this);
        this.loadUsers = this.loadUsers.bind(this);
        this.loadAction = this.loadAction.bind(this);
    }

    loadCards() {
        this.setState(() => ({
            cards: [
               
                // {
                //     key: 0,
                //     name: "Amanda Fitzgerald",
                //     avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
                //     title: "Animal Caretaker",
                //     bio: "I will walk or sit any type of animal. EXCEPT fish. No fish. Fish are off-limits."
                // },
                // {
                //     key: 1,
                //      name: "Gregory Brzęczyszczykiewicz",
                //     avatar_url: "https://i.imgur.com/LbDUJDk.jpg",
                //     title: "Professional Animal Handler",
                //     bio: "Professional pet caretaker. 25 years of experience at the SF Zoo. \n" +
                //     "The mission of San Francisco Zoo & Gardens is to Connect people with wildlife, "
                //     +"inspire Caring for nature and advance Conservation action." +
                //     " Open 365 days a year, San Francisco Zoo is home to more than 2,000 exotic, "+
                //    " endangered and rescued animals in 100 acres of majestic and peaceful gardens located "+
                //    "directly on the Pacific Coast."
                    
                // },
                // {
                //     key: 2,
                //      name: "Pablo Herrara",
                //     avatar_url: "https://i.imgur.com/qaxb5aS.jpg",
                //     title: "Dog Walker",
                //     bio: "Hello. I love dogs. I am available for walking five days a week from 3pm - 7pm."
                // },
                // {
                //     key: 3,
                //      name: "Anita Salads",
                //     avatar_url: "https://i.imgur.com/7qG7Nc7.jpg",
                //     title: "Fitness Enthusiast and Animal Lover",
                //     bio: "I'd love to take your pet on my morning jogging routine. I am looking for dogs who like to run. "+
                //     "Preferrably large dogs so I do not accidentally kick them. I am extremely fast and powerful, I hope your pet can keep up."
                // },
                // {
                //     key: 4,
                //      name: "Dylan",
                //     avatar_url: " https://i.imgur.com/OmYpJPd.jpg",
                //     title: "Young Entrepreneur",
                //     bio: "I am 7 years old but I am very responsible! I am saving up to buy GTA 5 because my mom said I need to "+
                //     "get a job and pay for it myself like a 'real adult'. So this is my job now. I walk dogs."
                // }
                
                
            ]
        }));
    }

    loadUsers(users) {
  //const users = this.props.users;
          //alert(JSON.stringify(users));

          // make sure user is logged in
            var currUser = JSON.parse(localStorage.getItem('currUser'))
            if(currUser == null) {
                toastr.error("Please log in first");
                browserHistory.push('/');
            }
          
          let k = 0;
          
          let ct = users.filter(usr => usr.isOwner === false && usr.id !== currUser.id); //err could be from a shallow copy in here
          let careTakers = [];
          for (let i = 0; i < ct.length; i++){
           careTakers[i] = this.getCopyOfUser(ct[i]);
           
          }
        //   alert(JSON.stringify(careTakers));
          for(let i = 0; i < careTakers.length; i++){
              careTakers[i].key = k++;
              careTakers[i].name = careTakers[i].firstName + " " + careTakers[i].lastName;
          }
          
          this.setState( { cards: careTakers}); 
    }
    getCopyOfUser(user) {
        // create and return a deep copy of user
        var newUser = {};
        newUser.id = user.id;
        newUser.firstName = user.firstName;
        newUser.lastName = user.lastName;
        newUser.email = user.email;
        newUser.pass = user.pass;
        newUser.isOwner = user.isOwner;
        newUser.threads = Object.assign({}, user.threads);
        newUser.avatar_url = user.avatar_url;
        newUser.title = user.title;
        newUser.bio = user.bio;
        return newUser;
    }

    loadAction(){
        const users = this.props.users;
        this.loadUsers(users);
        /*
        this.props.actions.loadUsers()
        .then((usrs) => this.loadUsers(usrs))
        .catch(error => {
          toastr.error(error);
        }); */
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

          
        
          //alert(JSON.stringify(this.state.cards));
        return(
            <div>
            <form>
             Search for a specific name, location...
            <button style= {searchButtonStyle} onClick={this.loadAction}  type="button">Search</button>
            <input style={searchStyle} type="text" placeholder="Enter a tag..." />
            
          </form> 
          <br />
                
                <CardList cards={this.state.cards} />

            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    //alert("mapState to props: "+JSON.stringify(state.users));
    return{
        users: state.users
    };
  }
  
  function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(userActions, dispatch)
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Ads);