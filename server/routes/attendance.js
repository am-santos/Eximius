'use strict';

const { Router } = require('express');
const router = new Router();

const routeGuard = require('./../middleware/route-guard');

const User = require('./../models/user');
const Attendance = require('./../models/attendance');

/*
Needed routes:
  - GET all users by event
  - GET all events by userId
  - GET document by both
  - POST document with both (user and event)
*/

router.get('/users/:eventId', (req, res, next) => {
  const eventId = req.params.eventId;
  Attendance.find({ eventId })
    .then((users) => res.json({ users }))
    .catch((error) => next(error));
});

router.get('/events/:userId', (req, res, next) => {
  const userId = req.params.userId;
  Attendance.find({ userId })
    .then((users) => res.json({ users }))
    .catch((error) => next(error));
});

router.get('/:userId/:eventId', (req, res, next) => {
  const userId = req.params.userId;
  const eventId = req.params.eventId;
  Attendance.find({ eventId, userId })
    .then((users) => res.json({ users }))
    .catch((error) => next(error));
});

// NOT DONE
/* router.post('/user/:id/edit', (req, res, next) => {
  const userId = req.params.id;

  Attendance.findByIdAndUpdate(userId, { ...req.body })
    .then((user) => console.log(user))
    .catch((error) => next(error));
}); */

module.exports = router;
