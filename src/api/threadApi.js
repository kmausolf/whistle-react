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
    return threads.length();
};

class ThreadApi {
    static getAllThreads() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], threads));
            }, delay);
        });
    }
}

export default ThreadApi;