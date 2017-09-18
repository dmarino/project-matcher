const express = require('express');
const router = express.Router();
const ProjectModel = require('../models/project_model');

router.get('/', function (req, res, next) {
    const tags = req.query.tags;
    const query = tags ? {tags: {$all: tags}} : {};
    ProjectModel.find(query, (err, projects) => {
        if (err) {
            throw err;
        }
        res.json(projects);
    });
});

router.post('/', function (req, res, next) {
    console.log(req.body);
    ProjectModel.create(req.body, (err, project) => {
        if (err) {
            throw err;
        }
        res.status(200).json(project);
    });
});

module.exports = router;