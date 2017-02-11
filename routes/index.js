let express = require('express');
let router = express.Router();

// Global Route Variables
let currentDate = new Date();
currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
    res.render('content/index', {
        title: 'Home',
        skills: "Web Developer &#x25CF; .NET Developer &#x25CF; Software Engineer",
        description: "I am a responsible, proactive, and fast-learning IT professional with over 2 years’ hands-on experience and strong educational background in Software Engineering, who is passionate about ambitious projects, robust development, and high-quality software"
    });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
    res.render('content/about', {
        title: 'About'
    });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
    res.render('content/projects', {
        title: 'Projects'
    });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
    res.render('content/services', {
        title: 'Services'
    });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
    res.render('content/contact', {
        title: 'Contact'
    });
});

module.exports = router;