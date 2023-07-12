// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const session = require('express-session');

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use(session({
  secret: 'secretsecret',
  resave: false,
  saveUninitialized: true
}));

// Handlebars setup
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const htmlRoutes = require('./controllers/htmlroutes');
app.use(htmlRoutes);

app.post('/api/user/login', (req, res) => {
  const { username, password } = req.body;

  // Perform login logic here, such as checking credentials
  if (username === 'admin' && password === 'password') {
    // Successful login
    req.session.userId = 1;
    req.session.username = username;
    req.session.loggedIn = true;
    res.json({ message: 'You are now logged in!' });
  } else {
    // Invalid credentials
    res.status(401).json({ message: 'Invalid username or password!' });
  }
});

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
