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
        isOwner: false,
        threads: [0],
        avatar_url: "https://i.imgur.com/5mXfwr1.jpg",
        title: "Animal Caretaker",
        bio: "I will walk or sit any type of animal. EXCEPT dog. No dog. Dog are off-limits."
    },
    {
        id: 'hank-hill',
        firstName: 'Hank',
        lastName: 'Hill',
        email: 'hh@koth.com',
        pass: 'hh',
        isOwner: false,
        threads: [0, 1],
        avatar_url: "https://i.imgur.com/LbDUJDk.jpg",
             title: "Professional Animal Handler",
        bio: "Professional pet caretaker. 25 years of experience at the SF Zoo. \n" +
            "The mission of San Francisco Zoo & Gardens is to Connect people with wildlife, "
             +"inspire Caring for nature and advance Conservation action." +
             " Open 365 days a year, San Francisco Zoo is home to more than 2,000 exotic, "+
            " endangered and rescued animals in 100 acres of majestic and peaceful gardens located "+
           "directly on the Pacific Coast."
    },
    {
        id: 'jeff-boomhauer',
        firstName: 'Jeff',
        lastName: 'Boomhauer',
        email: 'jb@koth.com',
        pass: 'jb',
        isOwner: false,
        threads: [],
        avatar_url: "https://i.imgur.com/7qG7Nc7.jpg",
         title: "Fitness Enthusiast and Animal Lover",
        bio: "I'd love to take your pet on my morning jogging routine. I am looking for dogs who like to run. "+
         "Preferrably large dogs so I do not accidentally kick them. I am extremely fast and powerful, I hope your pet can keep up."
    },
    {
        id: 'fred-flintstone',
        firstName: 'Fred',
        lastName: 'Flintstone',
        email: 'ff@stone.com',
        pass: 'ff',
        isOwner: true,
        threads: [1]
    },
    {
        id: 'barney-rubble',
        firstName: 'Barney',
        lastName: 'Rubble',
        email: 'br@stone.com',
        pass: 'br',
        isOwner: true,
        threads: []
    },
    {
        id: 'bambam-flintstone',
        firstName: 'Bam Bam',
        lastName: 'Flintstone',
        email: 'bb@stone.com',
        pass: 'bb',
        isOwner: true,
        threads: []
    }
];

const generateId = (user) => {
    return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

function getCopyOfUser(user) {
    // create and return a deep copy of user
    var newUser = {};
    newUser.id = user.id;
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.email = user.email;
    newUser.pass = user.pass;
    newUser.isOwner = user.isOwner;
    newUser.threads = Object.assign({}, user.threads);

    return newUser;
}

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }

    static getUser(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var user = {};
                for(var i = 0; i < Object.keys(users).length; i++) {
                    if(users[i].id == id) {
                        user = getCopyOfUser(users[i]);
                        break;
                    }
                }
                if(user == {}) {
                    reject('User does not exist');
                }
                else {
                    
                    resolve(user);
                }
            }, delay);
        });
    }

    //non promise version
    static getUserById(id){
       
        var user = {};
        for(var i = 0; i < Object.keys(users).length; i++) {
            alert(users[i].id.toString() +" vs. my "+id)
            if(users[i].id.toString() === id.toString()) {
                
                user = getCopyOfUser(users[i]);
                break;
            }
        }
        return user;
    }
    static userIDExist(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                for(var i = 0; i < Object.keys(users).length; i++) {
                    if(users[i].id == id) {
                        resolve(true);
                        return;
                    }
                }
                resolve(false);
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
                    localStorage.clear(); //remove previously logged in user (will be implemented in log out)
                    var deepUserCpy = users.find(function(usr) {
                        return usr.email === user.email && usr.pass === user.pass;
                      });
                    //we want to save fields like name etc.
                    localStorage.setItem('currUser', JSON.stringify(deepUserCpy));
                    //User exists and pass is correct, returns true in this case
                    resolve(true);
                }
            }
        },delay);
    }


    //updates a user's properties
    static updateUser(updated_user){
        //alert("update 2");
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               
                for(let i = 0; i < Object.keys(users).length; i++) {
                    if(users[i].id == updated_user.id) {
                        
                        users[i] = updated_user; //replace the old version of the user with the new one. Should push pointer to original
                       
                        break;
                    }
                }
                if(updated_user == {}) {
                    reject('User does not exist');
                }
                else {
                     
                    resolve(users);
                }
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
                    user.avatar_url = 'https://i.imgur.com/jNNT4LE.png';
                    user.title = "";
                    users.push(user);
                }
                
                //save this user since they are logged in
                localStorage.clear(); //remove previously logged in user (will be implemented in log out)
                //we want to save fields like name etc.
                localStorage.setItem('currUser', JSON.stringify(user));

                resolve(user);
            },delay);
        });
    }
}

export default UserApi;