
exports.seed = function(knex, Promise) {

  return knex('colleges').del()
    .then(() => knex('users').del())

    .then(function () {

      return Promise.all([
        knex('users').insert(
          {
            username: 'Bryan Deloeste',
            password: 'kaybruh'
          }, 'id')
          .then(colleges => {
            return knex('colleges').insert([
              {
                name: 'Moss',
                tuition_in_state: '30000',
                tuition_out_of_state: '50000',
                state: 'TA',
                city: 'Cambridge',
                zip: '90246',
                url: 'www.mit.com',
                user_id: colleges[0]
              },
              {
                name: 'Poss',
                tuition_in_state: '50000',
                tuition_out_of_state: '75000',
                state: 'TA',
                city: 'Newton',
                zip: '90200',
                url: 'www.harvard.com',
                user_id: colleges[0]
              }
            ]);
          })
          // eslint disable next line
          .then(() => console.log('seeding complete'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]) //end Promise.all
    });
};
