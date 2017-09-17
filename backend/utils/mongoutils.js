const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('env variable MONGODB_URI must be defined!');
}
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