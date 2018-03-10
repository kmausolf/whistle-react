import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
    {
        id: 'rusty-shackleford',
        firstName: 'Rusty',
        lastName: 'Shackleford',
        email: 'rs@koth.com',
        pass: 'rs'
    },
    {
        id: 'hank-hill',
        firstName: 'Hank',
        lastName: 'Hill',
        email: 'hh@koth.com',
        pass: 'hh'
    },
    {
        id: 'jeff-boomhauer',
        firstName: 'Jeff',
        lastName: 'Boomhauer',
        email: 'jb@koth.com',
        pass: 'jb'
    },
    {
        id: 'fred-flintstone',
        firstName: 'Fred',
        lastName: 'Flintstone',
        email: 'ff@stone.com',
        pass: 'ff'
    },
    {
        id: 'barney-rubble',
        firstName: 'Barney',
        lastName: 'Rubble',
        email: 'br@stone.com',
        pass: 'br'
    },
    {
        id: 'bambam-flintstone',
        firstName: 'Bam Bam',
        lastName: 'Flintstone',
        email: 'bb@stone.com',
        pass: 'bb'
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
                if (user.firstName.length == 0){
                    reject('Please supply your first name.');
                }

                if(user.lastName.length == 0){
                    reject('Please supply your last name.');
                }

                if(user.email.length == 0){
                    reject('Please supply your email.');
                }
                
                if(user.pass.length == 0){
                    reject('Please supply a password.');
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