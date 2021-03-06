import React from 'react';
import {Link} from 'react-router';
import PetList from "./PetList";
class MyPets extends React.Component {

    constructor(props){
        super(props);
        this.state = { pets: [], species: "dog", pic:"http://www.dog-find.com/img/default-image-450.jpg"};
        this.addPet = this.addPet.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);
        this.handleInsuranceNoChange = this.handleInsuranceNoChange.bind(this);
        this.handleMedsChange = this.handleMedsChange.bind(this);
        this.handleMedCondsChange = this.handleMedCondsChange.bind(this);
        this.handleVetNoChange = this.handleVetNoChange.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);

    }
    
    addPet() {
      var newArray = this.state.pets.slice();
      var newKey = newArray.length + 1;
    
      newArray.push(
          {key:newKey,
           name: this.state.name,
           breed: this.state.breed,
           insuranceNo: this.state.insuranceNo,
           meds: this.state.meds,
           medConds: this.state.medConds,
           vetNo: this.state.vetNo,
           bio: this.state.bio,
           species:this.state.species,
           pic: this.state.pic})

      this.setState((prevState) => ({
       pets:newArray
    
      }));
     
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    handleBreedChange(event) {
        this.setState({breed: event.target.value});
    }
    handleInsuranceNoChange(event) {
        this.setState({insuranceNo: event.target.value});
    }
    handleMedsChange(event) {
        this.setState({meds: event.target.value});
    }
    handleMedCondsChange(event) {
        this.setState({medConds: event.target.value});
    }
    handleVetNoChange(event) {
        this.setState({vetNo: event.target.value});
    }
    handleBioChange(event) {
        this.setState({bio: event.target.value});
    }
    handleDropdown(event) {
        let spc = event.target.value;
        
        let img = "https://club-pet.net/commerce/wp-content/uploads/sites/3/2016/05/pet-default.jpg"; //default pic
        
        if(spc === "dog"){
            img = "http://www.dog-find.com/img/default-image-450.jpg";
        
        
        } else if (spc===("cat")){
            img = "https://i.pinimg.com/originals/81/0a/44/810a44be6ad030363e29cdc37aee1e94.jpg";
        } else if (spc===("bird")){
            img="http://files.kollabora.com/sites/default/files/styles/250x250-square/public/493448/files/643_useablelogo.jpg?itok=hE9z8hX1";
        }
        
         this.setState({pic: img});
         
        
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
                <h2><center>My Pets</center> </h2>

                        <PetList pets={this.state.pets} />
                </div>
                <div style={borderStyle} className="petForm">
                    <form> <center>
                        <h2>Add a new pet...</h2>

                        Pet Species:
                        <select  onChange={this.handleDropdown}>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="bird">Bird</option>
                        </select><br/>
                        Name: <input type="text" id="pet-name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/><br/>
                        Breed: <input type="text" id="pet-breed" placeholder="Breed" value={this.state.breed} onChange={this.handleBreedChange}/><br/>
                        Pet insurance No.: <input type="text" id="pet-insurance" placeholder="Pet insurance No" value={this.state.insuranceNo} onChange={this.handleInsuranceNoChange} /><br/>
                        Medicines: <input type="text" id="medicines" placeholder="Medicines" value={this.state.meds} onChange={this.handleMedsChange}/><br/>
                        Medical Conditions: <input type="text" id="medical-conditions" placeholder="Medical Conditions" value={this.state.medConds} onChange={this.handleMedCondsChange}/><br/>
                        Emergency Vet No.: <input type="text" id="emergency-vet" placeholder="Emergency Vet No." value={this.state.vetNo} onChange={this.handleVetNoChange}/><br/>
                        
                        Any other notes: <br /> <textarea rows="5" cols="50" id="pet-bio" placeholder="Enter Bio here..." value={this.state.bio} onChange={this.handleBioChange}></textarea> <br />
                        <button onClick={this.addPet}  type="button">Add Another Pet</button>
                    </center> </form>        
                </div>
            </div>
        );
    }

}
export default MyPets;