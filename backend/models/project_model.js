const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: String,
    short_description: String,
    long_description: String,
    about_us: String,
    video: String,
    image: String,
    contact_email: String,
    tags: [String]
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;