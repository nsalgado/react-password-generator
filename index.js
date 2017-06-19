const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

// serve static files from React App
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (request, response) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // return passwords as json
  response.json(passwords);
  console.log(`Send ${count} passwords`);

});


// other url send to index page
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);






