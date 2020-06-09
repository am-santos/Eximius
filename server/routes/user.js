'use strict';

const { Router } = require('express');
const UserRouter = new Router();

const routeGuard = require('./../middleware/route-guard');

const User = require('./../models/user');

UserRouter.get('/profile', routeGuard, (req, res) => {
  res.json({
    user: req.user || null
  });
});

UserRouter.get('/user', (req, res, next) => {
  User.find()
    .then((users) => res.json({ users }))
    .catch((error) => next(error));
});

UserRouter.post('/user/:id/edit', (req, res, next) => {
  const userId = req.params.id;

  User.findByIdAndUpdate(userId, { ...req.body })
    .then((user) => console.log(user))
    .catch((error) => next(error));
});

module.exports = UserRouter;
