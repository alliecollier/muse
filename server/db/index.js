const db = require('./db')

const User = require('./models/User')
const Museum = require('./models/Museum')
const Review = require('./models/Review')
const Artwork = require('./models/Artwork')
const Favorite = require('./models/Favorite')

//associations
User.belongsToMany(Museum, { through: Review });
Museum.belongsToMany(User, { through: Review });

User.belongsToMany(Museum, { through: Favorite });
Museum.belongsToMany(User, { through: Favorite });

Artwork.belongsTo(Museum);
Museum.hasMany(Artwork);

module.exports = {
  db,
  models: {
    User,
    Museum,
    Review,
    Favorite,
    Artwork
  },
}
