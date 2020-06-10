"user strict";

const { Router } = require("express");
const EventRouter = new Router();
const routeGuard = require("./../middleware/route-guard");

const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "event-image-eximius"
  }
});

const uploader = multer({ storage });

// Models
const Event = require("../models/event");
const User = require("../models/user");

EventRouter.get("/list", (req, res, next) => {
  Event.find()
    .then((events) => {
      res.json({
        event: events,
      });
    })
    .catch((error) => {
      next(error);
    });
});

EventRouter.post("/create", uploader.single("image"), (req, res, next) => {
  const { name, category, description, date, city, capacity } = req.body;
  console.log(req.body);
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

EventRouter.post("/:id/edit", uploader.single("image"), (req, res, next) => {
  const eventId = req.params.id;
  console.log("THIS IS THE BODY", req.body);
  let image = req.body.image;
  if (req.file.path) image = req.file.path;

  Event.findByIdAndUpdate(eventId, { ...req.body, image }, { new: true })
    .then((event) => {
      console.log("Updated event on server side", event);
    })
    .catch((error) => {
      console.log("Not updated on server side", error);
    });
});

EventRouter.post("/:id/delete", (req, res, next) => {
  const eventId = req.params.eventId;

  Event.findByIdAndDelete(eventId)
    .then((event) => {
      console.log("Delete event on server side", event);
    })
    .catch((error) => {
      console.log("Not deleted on server side", error);
    });
});

EventRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  Event.findById(id)
    .then((event) => res.json({ event: event }))
    .catch((error) => console.log("event not found", error));
});

module.exports = EventRouter;
