const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');

let Grid = require('gridfs-stream');
let conn = mongoose.connection;
Grid.mongo = mongoose.mongo;
let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db);

    router.get('/', (req, res) => {
        res.send('uploading');
    });

    router.post('/img', (req, res) => {
        let part = req.files.file;
        let writeStream = gfs.createWriteStream({
            filename: 'img_' + part.name,
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
    });

    router.get('/img/:imgname', (req, res) => {
        gfs.files.find({
            filename: req.params.imgname
        }).toArray((err, files) => {
            if (files.length === 0) {
                return res.status(400).send({
                    message: 'Image not found'
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
                let img = 'data:image/png;base64,' + Buffer(data).toString('base64');
                res.end(img);
            });

            readStream.on('error', err => {
                console.log('Error', err);
                throw err;
            });
        });
    });
});

module.exports = router;