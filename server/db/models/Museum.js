const Sequelize = require('sequelize')
const db = require('../db')

const Museum = db.define('museum', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgUrl: {
    type: Sequelize.TEXT
  },
  hours: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.DECIMAL(8, 5)
  },
  longitude: {
    type: Sequelize.DECIMAL(8, 5)
  },
  typeOf: {
    type: Sequelize.ENUM,
    values: ['general', 'history', 'science', 'contemporary art', 'art']
  },
  currentExhibits: {
    type: Sequelize.STRING
  },
})

module.exports = Museum;
