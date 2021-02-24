const knex = require('../config/database')

  exports.userList = (req, res) =>{
    knex.select('id', 'name', 'email', 'phone').from('users')
    .then( 
      data => res.json(data)
      )
  }