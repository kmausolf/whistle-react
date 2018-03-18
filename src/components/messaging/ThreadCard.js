import React, {PropTypes} from 'react';

import userApi from '../../api/mockUserApi';

var name = ""

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

        let numUsers = Object.keys(this.props.thread.users).length;
        var userNames = [];
        for(var i = 0; i < numUsers; i++) {
            var userId = (this.props.thread.users)[i];
            userApi.getUser(userId).then(user => {
                name = user.firstName + " " + user.lastName;
                userNames.push(name);
                console.log(name)
            }).catch(error => {
                throw(error);
            })
        }

        console.log(userNames);
        console.log(userNames.length);

        var testArray = [];
        testArray.push("string 1");
        testArray.push("string 2");
        console.log(testArray);


        return (
            <div>
                <div> <left>
                    <p>Users in this Message Thread: </p>
                    {/* {console.log(userNames)}
                    {userNames.map(name =>
                        console.log(name)
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