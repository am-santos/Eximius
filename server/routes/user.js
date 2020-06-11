'use strict';

const { Router } = require('express');
const UserRouter = new Router();

const routeGuard = require('./../middleware/route-guard');

const User = require('./../models/user');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

UserRouter.get('/profile', routeGuard, (req, res) => {
  res.json({
    user: req.user || null
  });
});

UserRouter.post('/user/profile/edit', routeGuard, (req, res, next) => {
  const userId = req.user._id;
  User.findByIdAndUpdate(userId, { ...req.body }, { new: true })
    .then((user) => res.json({ user }))
    .catch((error) => next(error));
});

UserRouter.post('/user/profile/invitation', (req, res, next) => {
  const { email, message } = req.body;
  const userId = req.user._id;
  console.log('user information', req.user);

  let token;
  let user;
  User.findById(userId)
    .then((doc) => {
      user = doc;
      console.log('user was found. USER ->', user);
      console.log('user.invitationToken ->', user.invitationToken);
      console.log('user.invitationToken.length ->', user.invitationToken.length);
      if (!user.invitationToken.length) {
        return Promise.reject(new Error('You have no invitations left'));
      } else {
        token = user.invitationToken[0];
        return transporter.sendMail({
          from: `Eximius ${process.env.NODEMAILER_EMAIL}`,

          // Development
          // to: `${process.env.NODEMAILER_EMAIL}`,
          // Production
          to: `${email}`,

          subject: `Invited to a new society`,

          // Development
          // html: `<br/><br/><strong>Welcome to Eximius</strong><br/> <br/> <p>You have been invited by ${user.username} to join us. </p> <br/><br/> <p> ${message} </p> <br/> <br/> <em>Click on the following link to accept your invitation.</em> <br/> <a href="http://localhost:3000/authentication/sign-up/${token}">Accept your invitation</a> <br/> <p>${user.username} & Eximius Team,<p/> <br/> <p>See you around<p/>`
          // Production
          html: `<br/><br/><strong>Welcome to Eximius</strong><br/> <br/> <p>You have been invited by ${user.username} to join us. </p> <br/><br/> <p> ${message} </p> <br/> <br/> <em>Click on the following link to accept your invitation.</em> <br/> <a href="https://eximius.herokuapp.com/authentication/sign-up/${token}">Accept your invitation</a> <br/> <p>${user.username} & Eximius Team,<p/> <br/> <p>See you around<p/>`
        });
      }
    })
    .then((emailResult) => {
      console.log('RESULT OF SENDING EMAIL ->', emailResult);
      res.json({ emailResult });
    })
    .catch((err) => {
      console.log('error on sending email. ERROR ->', err);
      next(err);
    });
});

module.exports = UserRouter;
