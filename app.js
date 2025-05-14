const express = require('express');
const path = require('path');
const pageRoutes = require('./Routes/PagesRoutes'); // Import routes

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

app.use(express.static(path.join(__dirname, 'Public')));

// Parse request body
app.use(express.urlencoded({ extended: false }));

// Use imported routes
app.use('/', pageRoutes);

// 404 Error Handling
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
