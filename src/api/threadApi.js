import delay from './delay';

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
}

export default ThreadApi;