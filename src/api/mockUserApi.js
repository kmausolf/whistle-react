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
        pass: 'rs',
        isOwner: false
    },
    {
        id: 'hank-hill',
        firstName: 'Hank',
        lastName: 'Hill',
        email: 'hh@koth.com',
        pass: 'hh',
        isOwner: false
    },
    {
        id: 'jeff-boomhauer',
        firstName: 'Jeff',
        lastName: 'Boomhauer',
        email: 'jb@koth.com',
        pass: 'jb',
        isOwner: false
    },
    {
        id: 'fred-flintstone',
        firstName: 'Fred',
        lastName: 'Flintstone',
        email: 'ff@stone.com',
        pass: 'ff',
        isOwner: true
    },
    {
        id: 'barney-rubble',
        firstName: 'Barney',
        lastName: 'Rubble',
        email: 'br@stone.com',
        pass: 'br',
        isOwner: true
    },
    {
        id: 'bambam-flintstone',
        firstName: 'Bam Bam',
        lastName: 'Flintstone',
        email: 'bb@stone.com',
        pass: 'bb',
        isOwner: true
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

    static validateUser(user){
        return new Promise((resolve, reject) => {
            const userToSearchFor = users.filter(usr => usr.email == user.email); //makes a shallow copy. Cannot ref userToSearchFor.pass
            const userToSearchForPass = users.filter(usr => usr.pass == user.pass && usr.email == user.email);
            const correctType = users.filter(usr => usr.isOwner == user.isOwner && usr.pass == user.pass && usr.email == user.email);
            if(userToSearchFor.length == 0){
                //Returns an error object
                reject('User does not exist.');
            }
            else{
                if(userToSearchForPass == 0){
                    //Returns an error object
                    reject('Incorrect password.');
                } 
                /*else if (correctType == 0){
                    reject('Wrong account type.');
                }*/
                else{
                    //User exists and pass is correct, returns true in this case
                    resolve(true);
                }
            }
        },delay);
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