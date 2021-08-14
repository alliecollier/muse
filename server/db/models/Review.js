const Sequelize = require('sequelize')
const db = require('../db')

const Reviews = db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
    allowNull: false,
  },
  review: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Reviews;
