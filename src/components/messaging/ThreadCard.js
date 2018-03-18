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

        let currUser = JSON.parse(localStorage.getItem('currUser'));


        return (
            <div>
                <div> <left>
                    <p>users in this Message Thread: </p>
                    {/* {this.props.threads.map(thread =>
                        <div key={thread.tid} style={cardStyle}>
                            <ThreadCard 
                                thread = {thread}
                                actions = {this.props.actions}
                            />
                        </div>
                    )} */}
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