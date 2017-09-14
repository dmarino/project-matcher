const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;

let database;

module.exports = {
    connectToServer(callback) {
        MongoClient.connect(MONGODB_URI, (err, db) => {
            database = db;
            return callback(err);
        });
    },
    getDatabase() {
        return database;
    }
};