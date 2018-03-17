import delay from './delay';

const messages = [
    {
        id: 0,
        tid: 0,
        sender: 'rusty-shackleford',
        message: 'Hello to hank',
        read: true
    },
    {
        id: 1,
        tid: 1,
        sender: 'hank-hill',
        message: 'hello to fred',
        read: false
    },
    {
        id: 3,
        tid: 0,
        sender: 'hank-hill',
        message: 'hello back',
        read: false
    }
];

const generateMessageId = () => {
    return messages.length();
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

// Get the threadID of the thread with the given users
function findThread(usersList) {
    usersListUnique = createUniqueList(usersList)
    for(i = 0; i < threads.length(); i++) {
        if (listEqual(usersListUnique, threads[i].users)) {
            return i
        }
    }
    return -1
}

class MessageApi {

    static sendMessage(tid, usersList, senderID, messageString) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // no thread is given
                if(tid < 0) {
                    // check if there is already a thread with given usersList
                    usersListUnique = createUniqueList(usersList)
                    tid = findThread(usersListUnique)
                    if(tid == -1) {
                        // create a new thread
                        tid = generateTreadId()
                        thread = {
                            tid: tid,
                            users: usersListUnique,
                            messages: []
                        }
                        threads.push(thread)
                    }
                }

                // make sure sender is in thread
                if(threads[tid].users.indexOf(senderID) == -1) {
                    reject('Message sender is not in the message thread.')
                }

                mid = generateMessageId()

                message = {
                    id: mid,
                    tid: tid,
                    sender: senderID,
                    message: messageString,
                    read: false,
                }

                messages.push(message)
                threads[tid].messages.unshift(mid)
                resolve(message)
            },delay);
        });
    }

    static getMessagesIdList(tid) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(tid < 0 || tid >= threads.length()) {
                    reject('Thread requested does not exist.')
                }
                resolve(threads[tid].messages)
            },delay);
        });
    }

    static getMessage(mid) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(mid < 0 || mid >= messages.length()) {
                    reject('Message requested does not exist.')
                }
                resolve(messages[mid])
            },delay);
        });
    }
}

export default MessageApi;