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
    }).sort({courseOrder:1});
});

// New Route
coursesRouter.get('/new', (req, res) => {
    res.render('new.ejs');
});

// Delete Route
coursesRouter.delete('/:id', (req, res) => {
    Course.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/courses');
    });
});

// Update Route
coursesRouter.put('/:id', (req, res) => {
    Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    }, (err,updatedCourse) => {
        res.redirect('/courses/' + req.params.id);
    });
});

// Create Route
coursesRouter.post('/', (req, res) => {
    Course.create(req.body, (err, createdCourse) => {
        console.log(err);
        res.redirect('/courses');
    });
});

// Edit Route
coursesRouter.get('/:id/edit', (req, res) => {
    Course.findById(req.params.id, (err, foundCourse) => {
        res.render('edit.ejs', {
            course: foundCourse,
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