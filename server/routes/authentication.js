'use strict';

const { Router } = require('express');

const bcryptjs = require('bcryptjs');
const User = require('./../models/user');

const router = new Router();

router.post('/sign-up/:token', (req, res, next) => {
  const { username, email, password } = req.body;
  const token = req.params.token;

  let hashedPassword;
  let invitationToken1;
  let invitationToken2;
  let invitationToken3;

  User.findOne({ invitationToken: token })
    .then((oldUser) => {
      const invitationList = oldUser.invitationToken;
      invitationList.splice(invitationList.indexOf(token), 1);
      return User.findByIdAndUpdate(oldUser._id, { invitationToken: invitationList });
    })
    .then((oldUser) => {
      return bcryptjs.hash(password, 10);
    })
    .then((hash) => {
      hashedPassword = hash;
      return bcryptjs.hash(hashedPassword.slice(0, 1), 10);
    })
    .then((hash) => {
      invitationToken1 = String(hash)
        .split('/')
        .join();
      return bcryptjs.hash(hashedPassword.slice(0, 2), 10);
    })
    .then((hash) => {
      invitationToken2 = String(hash)
        .split('/')
        .join();
      return bcryptjs.hash(hashedPassword.slice(0, 3), 10);
    })
    .then((hash) => {
      invitationToken3 = String(hash)
        .split('/')
        .join();
      return User.create({
        username,
        email,
        passwordHash: hashedPassword,
        invitationToken: [invitationToken1, invitationToken2, invitationToken3]
      });
    })
    .then((user) => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then((result) => {
      if (result) {
        req.session.user = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

module.exports = router;
