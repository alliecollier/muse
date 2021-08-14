const Sequelize = require('sequelize')
const db = require('../db')

const Favorite = db.define('favorite', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Favorite;
