import React, {PropTypes} from 'react';

class MessageCard extends React.Component {
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
                </left> </div>
            </div>
        );
    }
}

MessageCard.propTypes = {
    thread: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default MessageCard;