const router = require('express').Router()
const { models: { Review, Museum, User }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    console.log(req.body)
    const reviews = await Review.findAll({
      where: {
        userId: req.body.userId
      }
    });
    res.json(reviews)
  } catch (error) {
    next(error)
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    console.log(req.params)
    const reviews = await Review.findAll({
      where: {
        userId: req.params.userId
      }
    });

    const completeReviews = []
    for (let i = 0; i < reviews.length; i++) {
      const museum = await Museum.findOne({where: {id: reviews[i].museumId}});
      completeReviews.push({review: reviews[i], museum: museum.name});
    }

    res.json(completeReviews)
  } catch (error) {
    next(error)
  }
});

module.exports = router
