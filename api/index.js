const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app; // This is required for Vercel serverless functions
