//Create web server
var express = require('express');
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');

// Create a connection to the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

// Create a schema for the data
var commentSchema = new mongoose.Schema({
  name: String,
  comment: String
});

// Create a model for the data
var Comment = mongoose.model('Comment', commentSchema);

// Create a new comment in the database
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/comment', function(req, res) {
  var name = req.body.name;
  var comment = req.body.comment;
  var newComment = new Comment({ name: name, comment: comment });
  newComment.save(function(err) {
    if (err) {
      res.send('Error saving comment');
    } else {
      res.send('Comment saved');
    }
  });
});

// Get the comments from the database
app.get('/comment', function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err) {
      res.send('Error retrieving comments');
    } else {
      res.json(comments);
    }
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});