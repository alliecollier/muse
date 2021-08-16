const Sequelize = require('sequelize')
const db = require('../db')

const Favorite = db.define('favorite', {
  favorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }
})

module.exports = Favorite;
