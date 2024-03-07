var express = require('express');
var router = express.Router();

// Define the messages array with sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  // Pass the messages array to the index view
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

// Render New Form
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Post a New Message' });
});

// Router Method
router.post('/new', function(req, res, next) {
  // Extract the message and user from the request body
  const messageText = req.body.text;
  const messageUser = req.body.user; 

  // Create a new message object and add it to the messages array
  const newMessage = {
    text: messageText,
    user: messageUser,
    added: new Date() // Adds the current date and time as the added timestamp
  };

  messages.push(newMessage); // Add the new message to the array

  // Redirect the user back to the index page to see the new message
  res.redirect('/');
});



module.exports = router;
