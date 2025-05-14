const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  const data = { title: 'Home' };
  res.render('Pages/Home', data);
});

router.get('/About', (req, res) => {
  const data = { title: 'About Us' };
  res.render('Pages/About', data);
});

router.get('/Events', (req, res) => {
  const data = {
    title: 'Events',
    events: [
      { title: 'Book Club Meeting', date: '2025-03-10', location: 'Online', image: '/Images/bookclub.jpg' },
      { title: 'Author Talk', date: '2025-03-15', location: 'Library', image: '/Images/author.jpg' },
      { title: 'Workshop', date: '2025-03-20', location: 'Online', image: '/Images/workshop.jpg' },
    ],
  };
  res.render('Pages/Events', data);
});

router.get('/Contact', (req, res) => {
  const data = { title: 'Contact Us' };
  res.render('Pages/Contact', data);
});

router.post('/Contact', (req, res) => {
  const submission = req.body;
  contactSubmissions.push(submission);
  console.log('Form Submission:', submission);
  res.redirect('/ThankYou');
});

router.get('/ThankYou', (req, res) => {
  const data = { title: 'Thank You' };
  res.render('Pages/ThankYou', data);
});

// Export the router
module.exports = router;
