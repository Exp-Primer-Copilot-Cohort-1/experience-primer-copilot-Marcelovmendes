// Create web server application using Node.js
// Set up a web server to listen to port 3000
const express = require('express');
const app = express();
const port = 3000;
// Set up a static folder for images, css, js files
app.use(express.static('public'));
// Set up a route for root
app.get('/', (req, res) => {
  res.send('Welcome to my web app');
});
// Set up a route for comments
app.get('/comments', (req, res) => {
  res.send('Welcome to my comments page');
});
// Set up a route for comments
app.get('/comments/new', (req, res) => {
  res.send('Welcome to my new comments page');
});
// Set up a route for comments
app.get('/comments/:id', (req, res) => {
  res.send('Welcome to my comments page with id of ' + req.params.id);
});
// Set up a route for comments
app.get('/comments/:id/edit', (req, res) => {
  res.send('Welcome to my edit comments page with id of ' + req.params.id);
});
// Set up a route for comments
app.get('/comments/:id/delete', (req, res) => {
  res.send('Welcome to my delete comments page with id of ' + req.params.id);
});
// Set up a route for comments
app.get('/comments/:id/flag', (req, res) => {
  res.send('Welcome to my flag comments page with id of ' + req.params.id);
});
// Set up a route for comments
app.get('/comments/:id/like', (req, res) => {
  res.send('Welcome to my like comments page with id of ' + req.params.id);
});
// Set up a route for comments
app.get('/comments/:id/dislike', (req, res) => {
  res.send('Welcome to my dislike comments page with id of ' + req.params.id);
});
// Set up a route for comments
app.get('/comments/:id/approve', (req, res) => {
  res.send('Welcome to my approve comments page with id of ' + req.params.id);
});
// Set up a route for comments
app.get('/comments/:id/reject', (req, res) => {
  res.send('Welcome to my reject comments page with id of ' + req.params.id);
});