const express = require('express');
const coursesRouter = express.Router();
const Course = require('../models/course');
const { append } = require('express/lib/response');

// Seed Route
const courseSeed = require('../models/courseSeed.js');

coursesRouter.get('/seed', (req, res) => {
    Course.deleteMany({}, (error, allCourses) => { });
    Course.create(courseSeed, (error, data) => {
        res.redirect('/courses');
    });
});

// Index Route
coursesRouter.get('/', (req, res) => {
    Course.find({}, (error, allCourses) => {
        res.render('index.ejs', {
            courses: allCourses,
        });
    });
});

// New Route
coursesRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});

// Edit Route
coursesRouter.get('/:id/edit', (req, res) => {
    Course.findById(req.params.id, (error, foundCourse) => {
        res.render('edit.ejs', {
            couse: foundCourse,
        });
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