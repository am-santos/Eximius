'use strict';

const { Router } = require('express');
const router = new Router();

const routeGuard = require('./../middleware/route-guard');

const Event = require('./../models/event');
const Attendance = require('./../models/attendance');

/*
Needed routes:
  - GET all users by event
  - GET all events by userId
  - GET document by both
  - POST create document with both (user and event)
  - POST delete document with both (user and event)
*/

// GET all users for a specific event
router.get('/users/:eventId', (req, res, next) => {
  const eventId = req.params.eventId;
  Attendance.find({ eventId })
    .then((users) => res.json({ users }))
    .catch((error) => next(error));
});

// GET all events for a specific user
router.get('/events/:userId', (req, res, next) => {
  const userId = req.params.userId;
  Attendance.find({ userId }).populate('eventId')
    .then((users) => {
      console.log(users);
      res.json({ users });
    })  
    .catch((error) => next(error));
});

// GET specific document, with specific userID and eventID.
router.get('/:userId/:eventId', (req, res, next) => {
  const userId = req.params.userId;
  const eventId = req.params.eventId;
  Attendance.find({ eventId, userId })
    .then((users) => res.json({ users }))
    .catch((error) => next(error));
});

// Create registration
router.post('/create/:userId/:eventId', (req, res, next) => {
  const { userId, eventId } = req.params;

  Attendance.create({ userId, eventId })
    .then((registration) => res.json({ registration }))
    .catch((error) => next(error));
});

// Delete registration
router.post('/delete/:userId/:eventId', (req, res, next) => {
  const { userId, eventId } = req.params;

  Attendance.findOneAndDelete({ userId, eventId })
    .then((registration) => {
      console.log('Delete registration on server side', registration); 
      res.json({registration});
    })
    .catch((error) => next(error));
});

module.exports = router;
