const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('index', data.projects);
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/project/:id', (req, res, next) => {
    
    const {id} = req.params;

    const templateData = {};
    res.render('project', templateData);
});

module.exports = router;