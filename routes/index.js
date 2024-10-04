/*
  Thanh Tam Dang 301393448
*/
var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

/* About Me page */
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

/* Projects page */
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

/* Services page */
router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

/* Contact page */
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

/* Handle form submission */
router.post('/contact', (req, res) => {
  const { firstName, lastName, email, contactNumber, message } = req.body;

  // Log the submitted data to the console
  console.log('Form Submission:', {
    firstName,
    lastName,
    email,
    contactNumber,
    message
  });

  // Redirect to the home page
  res.redirect('/');
});

module.exports = router;
