const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views')); // Serve static assets (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));
// Parse the request body for POST requests
app.use(express.urlencoded({ extended: false })); // Define a simple data store for the contact form (in-memory array)
const contactSubmissions = []; // Define routes (pageRoutes.js) - separate file for better organization
// app.use('/', pageRoutes); // Mount the pageRoutes.js file // Define the routes for each page
app.get('/', (req, res) => {
  const data = {
    title: 'Home',
    events: [
      { title: 'Book Club Meeting', date: '2025-03-10', location: 'Online' },
      { title: 'Author Talk', date: '2025-03-15', location: 'Library' },
    ],
  };
  res.render('Pages/Home', data);
});
app.get('/About', (req, res) => {
  const data = {
    title: 'About Us',
    team: [
      { name: 'John Doe', role: 'Organizer' },
      { name: 'Jane Smith', role: 'Moderator' },
    ],
  };
  res.render('Views/Pages/About', data);
});
app.get('/Events', (req, res) => {
  const data = {
    title: 'Events',
    events: [
      { title: 'Book Club Meeting', date: '2025-03-10', location: 'Online', image: '/images/bookclub.jpg' },
      { title: 'Author Talk', date: '2025-03-15', location: 'Library', image: '/images/author.jpg' },
      { title: 'Workshop', date: '2025-03-20', location: 'Online', image: '/images/workshop.jpg' },
    ],
  };
  res.render('Views/Pages/Events', data);
});
app.get('/Contact', (req, res) => {
  const data = { title: 'Contact Us' };
  res.render('pages/contact', data);
});
app.post('/Contact', (req, res) => {
  const submission = req.body;
  contactSubmissions.push(submission);
  console.log('Form Submission:', submission);
  res.redirect('/Thankyou');
});
app.get('/ThankYou', (req, res) => {
  const data = { title: 'Thank You' };
  res.render('Views/Pages/ThankYou', data);
}); // Error handling (404 - Page Not Found)
app.use((req, res) => {
  res.status(404).send('Page Not Found');
}); // Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
