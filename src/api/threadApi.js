import delay from './delay';

import messageApi from './mockMessageApi';
import userApi from './mockUserApi';

const threads = [
    {
        tid: 0,
        users: ['rusty-shackleford', 'hank-hill'],
        messages: [2, 0]
    },
    {
        tid: 1,
        users: ['hank-hill', 'fred-flintstone'],
        messages: [1]
    }
]

const generateTreadId = () => {
    return Object.keys(threads).length;
};

// check if both lists contain the same UNIQUE elements
function listEqual(l1, l2) {
    if(l1.length() != l2.length) {
        return false
    }

    for(i = 0; i < l1.length(); i++) {
        if(l2.indexOf(l1[i]) == -1) {
            return false
        }
    }
    return true
}

// Return a list without duplicates
function createUniqueList(l) {
    newList = []
    for(i = 0; i < l.length(); i++) {
        if(newList.indexOf(l[i]) == -1) {
            newList.push(l[i])
        }
    }
    return newList;
}

// given a list of userid, return thread id if a thread with these users exist, -1 if not
function findThread(usersList) {
    var usersListUnique = createUniqueList(usersList)
    for(i = 0; i < Object.keys(threads).length; i++) {
        if (listEqual(usersListUnique, threads[i].users)) {
            return i
        }
    }
    return -1
}

// Create a thread and sending a message
function sendMessage(userList, senderID, message) {
    var usersListUnique = userList.push(senderID);
    usersListUnique = createUniqueList(usersListUnique);

    var tid = findThread(usersListUnique);

    if (tid == -1) {
        var newThread = {}

        tid = generateTreadId();

        newThread.tid = tid;
        newThread.users = usersListUniquel;
        newThread,message = [];

        threads.push(newThread)
    }

    threads[tid].messages.unshift(messageApi.sendMessage(tid, senderID, message));
    return tid;
}

class ThreadApi {
    static getAllThreads() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var threadsArray = [];
                for(var i = 0; i < Object.keys(threads).length; i++) {
                    threadsArray.push({});
                    threadsArray[i].tid = threads[i].tid;
                    threadsArray[i].users = Object.assign([], threads[i].users);
                    threadsArray[i].messages = Object.assign([], threads[i].messages);
                }
                resolve(threadsArray);
            }, delay);
        });
    }

    static getThreadsByUser(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var threadsArray = [];
                for(var i = 0; i < Object.keys(threads).length; i++) {
                    if(threads[i].users.indexOf(userId) != -1) {
                        threadsArray.push({});
                        threadsArray[i].tid = threads[i].tid;
                        threadsArray[i].users = Object.assign([], threads[i].users);
                        threadsArray[i].messages = Object.assign([], threads[i].messages);
                    }
                }
                resolve(threadsArray);
            }, delay);
        });
    }

    static getLastMessageId(tid) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(tid < 0 || tid > Object.keys(threads).length) {
                    reject('getLastMessage: Thread does not exist');
                }
                else if (Object.keys(threads).length == 0){
                    resolve(-1);
                }
                else {
                    resolve(threads[tid].messages[0]);
                }
            }, delay);
        });
    }

    static sendMessage(usersIDList, senderID, message) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var usersIDListUnique = usersIDList.push(senderID);
                usersIDListUnique = createUniqueList(usersIDListUnique);

                if(usersIDListUnique.length() == 1) {
                    reject('createThread: there is only one user')
                }

                userApi.userIDExist(senderID).then(bool => {
                    if(bool) {
                        resolve(sendMessage(usersIDListUnique, senderID, message))
                    }
                    else {
                        reject('createThread: sender does not exist')
                    }
                }).catch(error => {
                    throw(error)
                })

                
            }, delay);
        });
    }

    static userInThread(userID, tid) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(tid < 0 || tid > generateTreadId) {
                    reject('userInThread: thread does not exist');
                }
                else if (threads[tid].users.indexOf(userID) != -1) {
                    resolve(true)
                }
                else {
                    resolve(false)
                }
            }, delay);
        });
    }
}

export default ThreadApi;