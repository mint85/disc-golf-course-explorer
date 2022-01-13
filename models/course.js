const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseOrder: Number,
    name: String,
    location: String,
    zipcode: Number,
    holes: Number,
    length: Number,
    parInfo: Number,
    waterHoles: Boolean,
    teeType: String,
    cost: Number,
    beginnerFriendly: Boolean,
    description: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;