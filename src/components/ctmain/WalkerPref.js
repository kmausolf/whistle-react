import React from 'react';
import {Link} from 'react-router';

class WalkerPref extends React.Component{
    constructor(props){
        super(props);
        this.state = {takingRequests: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({takingRequests: !this.state.takingRequests});
        event.preventDefault();
    }

    render(){
        const buttonStyle = {
            width: "20vw",
            marginTop: "1%"
        };
        const reqOnButton = (
            <div>
                <button className="btn btn-success" style={buttonStyle} onClick={this.handleChange}>
                    I'm Taking Requests
                </button>
            </div>
        );
        const reqOffButton = (
            <div>
                <button className="btn btn-danger" style={buttonStyle} onClick={this.handleChange}>
                    I'm Not Taking Requests
                </button>
            </div>
        );

        return(
            <div>
                <form>
                    {this.state.takingRequests ? reqOnButton : reqOffButton}
                </form>
            </div>
        );
    }
}

export default WalkerPref;