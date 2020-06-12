'user strict';

const { Router } = require('express');
const EventRouter = new Router();

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'event-image-eximius'
  }
});

const uploader = multer({ storage });

// Models
const Event = require('../models/event');

EventRouter.get('/list', (req, res, next) => {
  const now = new Date();

  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hrs = now.getHours();
  let mins = now.getMinutes();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  if (hrs < 10) hrs = '0' + hrs;
  if (mins < 10) mins = '0' + mins;
  // '2000-01-01,01:01'
  const strNow = now.getFullYear() + '-' + month + '-' + day + ',' + hrs + ':' + mins;
  console.log('time now in string', strNow, typeof strNow);
  Event.find({ date: { $gte: strNow } })
    .sort({ date: 1 })
    .then((events) => {
      res.json({
        event: events
      });
    })
    .catch((error) => {
      next(error);
    });
});

EventRouter.post('/create', uploader.single('image'), (req, res, next) => {
  const { name, category, description, date, city, capacity } = req.body;
  console.log('EVENT CREATED ->', req.body);
  const userId = req.user._id;
  let image;
  if (req.file.path) image = req.file.path;

  Event.findOne({ name })
    .then((document) => {
      if (!document) {
        return Event.create({
          name,
          userId,
          image,
          category,
          description,
          date,
          city,
          capacity
        });
      } else {
        const error = new Error("There's already an Event with that name.");
        return Promise.reject(error);
      }
    })
    .then((event) => {
      res.json({ event });
    })
    .catch((error) => {
      next(error);
    });
});

EventRouter.post('/:id/edit', uploader.single('image'), (req, res) => {
  const eventId = req.params.id;
  console.log('THIS IS THE BODY', req.body);
  let image;
  if (req.file) {
    image = req.file.path;
  } else {
    image = req.body.image;
  }

  const { name, category, description, date, city, capacity } = req.body;
  Event.findByIdAndUpdate(
    eventId,
    { name, category, description, date, image, city, capacity },
    { new: true }
  )
    .then((event) => {
      res.json({ event });
      console.log('Updated event on server side', event);
    })
    .catch((error) => {
      console.log('Not updated on server side', error);
    });
});

EventRouter.post('/:id/delete', (req, res) => {
  const eventId = req.params.id;
  console.log(eventId);

  Event.findByIdAndDelete(eventId)
    .then((event) => {
      res.json({ event });
      console.log('Delete event on server side', event);
    })
    .catch((error) => {
      console.log('Not deleted on server side', error);
    });
});

EventRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  Event.findById(id)
    .then((event) => res.json({ event: event }))
    .catch((error) => console.log('event not found', error));
});

module.exports = EventRouter;
