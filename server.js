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

app.get('/', function(request, response) {
  response.sendFile(
    path.resolve(__dirname, './studebtly-frontend/build', 'index.html')
  );
});

// GET REQUEST ALL COLLEGES
app.get('/api/v1/colleges', (request, response) => {
  database('colleges').select()
    .then(college => response.status(200).json(college))
    .catch(error => response.status(500).json({ error }));
});

// GET REQUEST FOR COLLEGES BY ID
app.get('/api/v1/colleges/:id', (request, response) => {
  const id  = request.params.id;

  database('colleges').where({ id }).select()
    .then(college =>
      college.length
        ? response.status(200).json(college)
        : response.status(404).json({
          error: `No college found with ID: ${id}.`
        })
    )
    .catch(error => response.status(500).json({ error }));
});

// GET REQUEST FOR ALL FAVORITES

app.get('/api/v1/favorites', (request, response) => {
  database('create_favorites').select()
    .then(favorites => response.status(200).json(favorites))
    .catch(error => response.status(500).json({ error }));
});

// GET REQUEST FAVORITES BY ID

app.get('/api/v1/favorites/:id', (request, response) => {
  const id = request.params.id;

  database('create_favorites').where({ id }).select()
    .then(favorite =>
      favorite.length
        ? response.status(200).json(favorite)
        : response.status(422).json({
          error: `No favorite found with ID: ${id}.`
        })
    )
    .catch(error => response.status(500).json({ error }));
});

app.post('/api/v1/favorites', (request, response) => {
  let body = request.body;

  for (let requiredParameter of [
    'name',
    'tuition_in_state',
    'tuition_out_of_state',
    'state',
    'city',
    'zip',
    'url'
  ]) {
    if (!body[requiredParameter]) {
      return response.status(422).json(
        { error: `Favorite is missing ${requiredParameter} property` }
      );
    }
  }

  return database('create_favorites').insert(body, '*')
    .then(favorite => response.status(201).json(favorite[0]))
    .catch(error => response.status(500).json({ error }));
});

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
