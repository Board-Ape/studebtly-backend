module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/studebtly',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
