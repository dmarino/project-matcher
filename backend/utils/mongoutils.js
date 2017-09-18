const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('env variable MONGODB_URI must be defined!');
}

module.exports = {
    connectToServer() {
        mongoose.connect(MONGODB_URI);
    }
};