'use strict'

// ref: https://devhints.io/knex
// TODO: implement more dynamic env var settings loader
module.exports = {
  development: {
    client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'dbfirst'
  }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
