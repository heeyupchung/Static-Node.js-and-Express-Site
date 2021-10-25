const express = require('express');
const data = require('./data.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.locals.projects = data.projects;
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res, next) => {
    res.locals.project = data.projects[req.params.id];
    res.render('project');
});

module.exports = router;