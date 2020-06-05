'user strict';

const { Router } = require('express');
const router = new Router();

// Models
const Event = require('../models/event');
const User = require('../models/user');

router.get('/', (req, res, next) => {
  Event.find()
    .then((restaurants) => {
      res.json({
        restaurants: restaurants
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/:id', (req, res, next) => {
  // get specific event
});

router.post('/:id', (req, res, next) => {
  // create specific event
});

router.post('/:id/edit', (req, res, next) => {
  // edit specific event
});

router.post('/:id/delete', (req, res, next) => {
  // delete specific event
});

module.exports = router;
