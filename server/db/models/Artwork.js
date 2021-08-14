const Sequelize = require('sequelize')
const db = require('../db')

const Artwork = db.define('artwork', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Artwork;
