// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const coursesController = require('./controllers/courses');

const app = express();

require('dotenv').config();

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use('/public/', express.static('public'));
app.use(methodOverride('_method'));

app.use('/courses', coursesController);

app.get('/*', (req, res) => {
    res.render('404.ejs');
});

// Database Connection With Connection Error/Success Check
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo is connected'));
db.on('disconnected', () => console.log('mongo is disconnected'));

// Routes
app.get('/', (req, res) => {
    res.redirect('/courses');
}); 

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));