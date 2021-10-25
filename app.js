const express = require('express');
const {data} = require('./data.json');

const app = express();

const routes = require('./routes');
const errorHandlers = require('./errorHandlers.js');

app.use(routes);

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.use(errorHandlers.error404);

app.use(errorHandlers.globalError);

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});