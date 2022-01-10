const express = require('express');
const coursesRouter = express.Router();
const Course = require('../models/course');
const { append } = require('express/lib/response');


// Index Route
coursesRouter.get('/', (req, res) => {
    res.render('index.ejs', {
        courses: allCourses,
    });
});

// Show Route
coursesRouter.get('/:id', (req, res) => {
    Course.findById(req.params.id, (err, foundCourse) => {
        res.render('show.ejs', {
            course: foundCourse,
        });
    });
});

module.exports = coursesRouter;