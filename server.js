const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const path = require('path');

const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  return next();
};

if (process.env.NODE_ENV === 'production') {
  app.use(requireHTTPS);
}

app.set('port', process.env.PORT || 3001);
//eslint-disable-next-line
app.use(express.static(path.resolve(__dirname, './studebtly-frontend/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.locals.title = 'Studebtly';

app.get('/api/v1', function(request, response) {
  response.sendFile(
    path.resolve(__dirname, './studebtly-frontend/build', 'index.html')
  );
});

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
