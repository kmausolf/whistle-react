import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
    {
        id: 'rusty-shackleford',
        firstName: 'Rusty',
        lastName: 'Shackleford'
    },
    {
        id: 'hank-hill',
        firstName: 'Hank',
        lastName: 'Hill'
    },
    {
        id: 'jeff-boomhauer',
        firstName: 'Jeff',
        lastName: 'Boomhauer'
    },
    {
        id: 'fred-flintstone',
        firstName: 'Fred',
        lastName: 'Flintstone'
    },
    {
        id: 'barney-rubble',
        firstName: 'Barney',
        lastName: 'Rubble'
    },
    {
        id: 'bambam-flintstone',
        firstName: 'Bam Bam',
        lastName: 'Flintstone'
    }
];

const generateId = (user) => {
    return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }

    static saveUser(user) {
        //Make a deep copy of the object passed in to prevent modification
        user = Object.assign({}, user);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //Simulate server-side validation
                const minUserNameLength = 1;
                if (user.firstName.length < minUserNameLength){
                    reject('Please supply your first name.');
                }

                if(user.lastName.length < minUserNameLength){
                    reject('Please supply your last name.');
                }

                else{
                    //Otherwise create the user
                    user.id = generateId(user);
                    users.push(user);
                }

                resolve(user);
            },delay);
        });
    }
}

export default UserApi;