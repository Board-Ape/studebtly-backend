exports.seed = function(knex, Promise) {
  return knex('colleges').del()
    .then(() => knex('users').del())
    .then(() => {
      return Promise.all([
        knex('users').insert({
          id: 1,
          username: 'Bryan Deloeste',
          password: 'kaybruh'
        }, 'id')
          .then(user => {
            return knex('colleges').insert([
              {
                id: 8000,
                name: 'Moss.',
                tuition_in_state: '30000',
                tuition_out_of_state: '50000',
                state: 'TA',
                city: 'Cambridge',
                zip: '90246',
                url: 'www.mit.com',
                user_id: user[0]
              },
              {
                id: 8001,
                name: 'Poss',
                tuition_in_state: '50000',
                tuition_out_of_state: '75000',
                state: 'TA',
                city: 'Newton',
                zip: '90200',
                url: 'www.harvard.com',
                user_id: user[0]
              },
              {
                id: 8002,
                name: 'Bagoss',
                tuition_in_state: '15000',
                tuition_out_of_state: '30000',
                state: 'TA',
                city: 'Boston',
                zip: '90411',
                url: 'www.tufts.com',
                user_id: user[0]
              }
            ]);
          })
          .then(() => console.log('Seeding complete!'))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
