const favoritesArray = [
  {
    "name": "Colorado Northwestern Community College",
    "tuition_in_state": "3554",
    "tuition_out_of_state": "5805",
    "state": "CO",
    "city": "Rangely",
    "zip": "81648-3598",
    "url": "www.cncc.edu"
  },
  {
    "name": "Concorde Career College-Aurora",
    "tuition_in_state": null,
    "tuition_out_of_state": null,
    "state": "CO",
    "city": "Aurora",
    "zip": "80010-4314",
    "url": "www.concorde.edu",
  }
];

const createFavorite = (knex, favorite) => (
  knex('create_favorites').insert(favorite)
);

exports.seed = function(knex, Promise) {
  return knex('create_favorites').del()
    .then(function() {
      const arrayToResolve = favoritesArray.map(favorite =>
        createFavorite(knex, {
          name: favorite.name,
          tuition_in_state: favorite.tuition_in_state,
          tuition_out_of_state: favorite.tuition_out_of_state,
          state: favorite.state,
          city: favorite.city,
          zip: favorite.zip,
          url: favorite.url
        }));
      return Promise.all(arrayToResolve);
    })
    //eslint-disable-next-line
    .catch(error => console.log(`Error seeding data: ${error}`));
};
