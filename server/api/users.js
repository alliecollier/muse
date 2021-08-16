const router = require('express').Router()
const { models: { User, Favorite }} = require('../db')
const {
  requireToken,
  isLoggedIn
} = require('./middleware');

router.get('/', requireToken, isLoggedIn, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email'] //information we do want back, and hide away all the rest from our client!
    });
    res.json(users)
  } catch (error) {
    next(error)
  }
});

router.post('/:userId/favorite', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const museumId = req.body.museumId;
    const isFavorite = req.body.favorite;
    const [favorite, created] = await Favorite.findOrCreate({
      where: {
        userId: userId,
        museumId: museumId
      },
    });
    favorite.setFavorite(isFavorite);
    res.json();

  } catch (error) {
    next (error)
  }
})

module.exports = router
