const express = require('express');
const morgan = require('morgan'); // middleware package for logging
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://bambi:oluwabambi@nodeexpresstuts.lpvwdzm.mongodb.net/node-tuts';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static('public')) // middleware that allows us to serve up static files from the public directory in our project.
app.use(express.urlencoded({ extended: true }))  // used for accepting form data
app.use(morgan('dev'));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});