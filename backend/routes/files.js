const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const crypto = require('crypto');

let Grid = require('gridfs-stream');
let conn = mongoose.connection;
Grid.mongo = mongoose.mongo;
let gfs;

function storeFile(req, res) {
    let part = req.files.file;
    let writeStream = gfs.createWriteStream({
        filename: crypto.createHash('md5').update(part.name).digest('hex'),
        mode: 'w',
        content_type: part.mimetype
    });

    writeStream.on('close', (file) => {
        return res.status(200).send({
            message: 'success',
            file: file
        });
    });

    writeStream.write(part.data);
    writeStream.end();
}

function findFile(req, res, type) {
    gfs.files.find({
        filename: req.params.name
    }).toArray((err, files) => {
        if (files.length === 0) {
            return res.status(400).send({
                message: 'File not found'
            });
        }

        console.log(files);
        let data = [];
        let readStream = gfs.createReadStream({
            filename: files[0].filename
        });

        readStream.on('data', chunk => {
            data.push(chunk);
        });

        readStream.on('end', () => {
            data = Buffer.concat(data);
            res.writeHead(200, {
                'Content-Type': type,
                'Content-Length': data.length
            });
            let file = Buffer.from(data, 'base64');
            res.end(file);
        });

        readStream.on('error', err => {
            console.log('Error', err);
            throw err;
        });
    });
}

conn.once('open', () => {
    gfs = Grid(conn.db);

    router.get('/', (req, res) => {
        res.send('uploading');
    });

    router.post('/img', (req, res) => {
        storeFile(req, res);
    });

    router.get('/img/:name', (req, res) => {
        findFile(req, res, 'image/png');
    });

    router.post('/vid', (req, res) => {
        storeFile(req, res);
    });

    router.get('/vid/:name', (req, res) => {
        findFile(req, res, 'video/mp4');
    });
});

module.exports = router;