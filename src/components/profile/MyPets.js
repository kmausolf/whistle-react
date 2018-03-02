import React from 'react';
import {Link} from 'react-router';
import PetList from "./PetList";
class MyPets extends React.Component {

    constructor(props){
        super(props);
    
        this.state = { pets: [] };
        
        this.addPet = this.addPet.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

    }
    
    addPet() {
      
      var newArray = this.state.pets.slice();
      var newKey = newArray.length + 1;
      newArray.push(
          {key:newKey,
           name: this.state.name})

      this.setState((prevState) => ({
       pets:newArray
    
      }));
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value});
      }
    

    render(){
        const borderStyle = {
            padding:'7px', 
            border: '1.5px solid',
            borderRadius: '10px',
            borderColor: "#707070",
            width:"100%"
          }
        return(
            <div>
                <div style={borderStyle}>
                <h2><center> My Pets </center> </h2>

                        <PetList pets={this.state.pets} />
                </div>
                <div style={borderStyle}>
                    <form> <center>
                        <h2>Add a new pet...</h2>

                        Pet Species:
                        <select id="species-selector">
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="bird">Bird</option>
                        </select><br/>
                        Name: <input type="text" id="pet-name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/><br/>
                        Breed: <input type="text" id="pet-breed" placeholder="Breed"/><br/>
                        Pet insurance No.: <input type="text" id="pet-insurance" placeholder="Pet insurance No"/><br/>
                        Medicines: <input type="text" id="medicines" placeholder="Medicines"/><br/>
                        Medical Conditions: <input type="text" id="medical-conditions" placeholder="Medical Conditions"/><br/>
                        Emergency Vet No.: <input type="text" id="emergency-vet" placeholder="Emergency Vet No."/><br/>
                        Walk Frequency: <input type="text" id="walk-frequency-times" placeholder="Number of times"/>
                        per <input type="text" id="walk-frequency-days" placeholder="days"/><br/>
                        Any other notes: <br /> <textarea rows="5" cols="50" id="pet-bio" placeholder="Enter Bio here..."></textarea> <br />
                        <button onClick={this.addPet}  type="button">Add Another Pet</button>
                    </center> </form>        
                </div>
            </div>
        );
    }

}
export default MyPets;