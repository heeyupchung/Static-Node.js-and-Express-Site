// Require libraries
const express = require('express');
const data = require('./data.json');
const routes = require('./routes');
const errorHandlers = require('./errorHandlers.js');

// Instantiate Express app
const app = express();
app.set('view engine', 'pug');

app.use(routes);
app.use('/static', express.static('public'));

// 404 error handler
app.use(errorHandlers.error404);

// Global error handler
app.use(errorHandlers.globalError);

// Listener
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});