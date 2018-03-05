const SCHOOL_API_KEY = require('./settings.js');
const http = require('http');
const fs = require('fs');
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/studebtly',
});
const request = require('request');

// knex('colleges').select('*').then(res => console.log(res))

// Code left purposefully: Rate limit would only allow a single FOR loop
// Requests had to be made in segments

// for (let iterator = 0; iterator <= 10; iterator++)
// for (let iterator = 11; iterator <= 20; iterator++)
// for (let iterator = 21; iterator <= 30; iterator++)
// for (let iterator = 31; iterator <= 40; iterator++)
// for (let iterator = 41; iterator <= 50; iterator++)
// for (let iterator = 51; iterator <= 60; iterator++)
// for (let iterator = 61; iterator <= 70; iterator++)
for (let iterator = 71; iterator <= 75; iterator++)

// eslint-disable-next-line
request(`https://api.data.gov/ed/collegescorecard/v1/schools.json?_fields=id,school.faculty_salary,school.school_url,school.name,school.state,school.city,school.zip,2015.cost.tuition.in_state,2015.cost.tuition.out_of_state&_per_page=100&_page=${iterator}&api_key=${SCHOOL_API_KEY}`, function (error, response, body) {
  // eslint-disable-next-line
  console.log('error:', error);
  // eslint-disable-next-line
  console.log('statusCode:', response && response.statusCode);

  const parsedBody = JSON.parse(body);
  const colleges = parsedBody.results.map(college => ({
    name: college["school.name"],
    tuition_in_state: college["2015.cost.tuition.in_state"],
    tuition_out_of_state: college["2015.cost.tuition.out_of_state"],
    state: college["school.state"],
    city: college["school.city"],
    zip: college["school.zip"],
    url: college["school.school_url"],
  }));
  // eslint-disable-next-line
knex("colleges").insert(colleges, "id").then(() => console.log(`Inserting page# ${iterator} into colleges table`));

  return;
});
