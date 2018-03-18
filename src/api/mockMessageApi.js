import delay from './delay';

import threadApi from './threadApi';

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
        id: 2,
        tid: 0,
        sender: 'hank-hill',
        message: 'hello back',
        read: false
    }
];

const generateMessageId = () => {
    return Object.keys(messages).length;
};


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

class MessageApi {

    static sendMessage(tid, senderID, messageString) {
        var mid = generateMessageId()

        var message = {
            id: mid,
            tid: tid,
            sender: senderID,
            message: messageString,
            read: false,
        }

        messages.push(message)
        return mid
    }

    static getMessage(mid) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(mid < 0 || mid >= Object.keys(messages).length) {
                    reject('Message requested does not exist.')
                }
                resolve(messages[mid])
            },delay);
        });
    }
}

export default MessageApi;