'user strict';

const { Router } = require('express');
const EventRouter = new Router(); 
const routeGuard = require('./../middleware/route-guard');

// Models
const Event = require('../models/event');
const User = require('../models/user');

EventRouter.get('/list', (req, res, next) => {
  Event.find()
    .then((events) => {
      res.json({
        Event: events
      });
    })
    .catch((error) => {
      next(error);
    });
});

EventRouter.post('/create', routeGuard, (req, res, next) => {
  const { name, category, limit, description, date } = req.body;
  const userId = req.user._id;

  Event.findOne({ name })
  .then(document => {
    if (!document) {
      return Event.create({
        name,
        userId,
        category,
        limit,
        description, 
        date
      });
    } else { 
      const error = new Error("There's already an Event with that name.");
      return Promise.reject(error);
    }
  })
  .then(event => {
    res.json({ });
  })
  .catch(error => {
    next(error);
  });
});

EventRouter.post('/:id/edit', routeGuard, (req, res, next) => {
  const eventId = req.params.eventId;

  Event.findByIdAndUpdate(
    eventId,
    {...req.body}
  )
  .then(event => {
    console.log('Updated event on server side', event)
  })
  .catch(error => {
    console.log('Not updated on server side', error)
  });
});

EventRouter.post('/:id/delete', (req, res, next) => {
  const eventId = req.params.eventId;

  Event.findByIdAndDelete(
    eventId
  )
  .then(event => {
    console.log('Delete event on server side', event)
  })
  .catch(error => {
    console.log('Not deleted on server side', error)
  });
});

module.exports = EventRouter;
