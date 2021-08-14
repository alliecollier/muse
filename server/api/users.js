const router = require('express').Router()
const { models: { User }} = require('../db')
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

module.exports = router
