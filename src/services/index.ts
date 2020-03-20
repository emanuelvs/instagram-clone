const data = require('./server.json');



export class FeedServer{
    data: any
    constructor(data) {
        this.data = data
    }

    async getData() {
        return await Promise.resolve(this.data)
    }

    async saveData(data) {
        let arr = this.data.feed;
        arr.unshift(data);
        this.data.feed = arr;
    }
}

const Server = new FeedServer(data);

export default Server;