import React, {PropTypes} from 'react';

class ThreadCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const imgStyle = {
            borderRadius: "10px",
            width: "100px",
            height: "100px",
            float:'left' 
        };
        return (
            <div>
                <div> <left>
                    <p>User in this thread: </p>
                    {console.log(this.props.thread)}
                </left> </div>
            </div>
        );
    }
}

ThreadCard.propTypes = {
    thread: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default ThreadCard;