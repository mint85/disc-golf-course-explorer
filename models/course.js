const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    location: String,
    zipcode: Number,
    holes: Number,
    waterHoles: Boolean,
    teeType: String,
    cost: Number,
    beginnerFriendly: Boolean,
    description: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;