// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const courseController = require('./controllers/courses');

const app = express();

require('dotenv').config();

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));