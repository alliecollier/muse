const router = require('express').Router()
const { models: { Museum }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const museums = await Museum.findAll();
    res.json(museums)
  } catch (error) {
    next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const museum = await Museum.findByPk(req.params.id);
    if (!museum) {
      res.sendStatus(404);
    }
    res.status(200).json(museum);
  } catch (err) {
    next(err);
  }
});

module.exports = router
