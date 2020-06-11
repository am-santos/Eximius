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

UserRouter.post('/user/profile/edit', routeGuard, (req, res, next) => {
  const userId = req.user._id;
  User.findByIdAndUpdate(userId, { ...req.body }, {new: true})
    .then((user) => res.json({user}))
    .catch((error) => next(error));
});

module.exports = UserRouter;
