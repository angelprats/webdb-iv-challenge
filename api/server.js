const express = require('express');
const helmet = require('helmet');

// const tracksRouter = require('../track/tracks-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.use('/api/tracks', tracksRouter);

// sanity check
server.get('/', (req, res) => {
    res.status(200).json({ hello: 'World!' });
});

module.exports = server;