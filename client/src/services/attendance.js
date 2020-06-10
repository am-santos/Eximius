import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: '/api/attendance'
});

// Find all users for a specific event
const listUsersForEvent = (body) => {
  // get from /users/:eventId
  return baseAuthenticationService
    .get(`/users/${body.id}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

// Find all events for a specific user
const listEventsForUser = (body) => {
  // get from /events/:userId
  return baseAuthenticationService
    .get(`/events/${body.id}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

// Find specific registration
const attendanceRegistration = (body) => {
  // get from /:userId/:eventId
  return baseAuthenticationService
    .get(`/${body.userId}/${body.eventId}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

// Create specific document
const createRegistration = (body) => {
  // post from /create/:userId/:eventId
  return baseAuthenticationService
    .get(`/create/${body.userId}/${body.eventId}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

// POST Delete specific document
const deleteRegistration = (body) => {
  // get from /delete/:userId/:eventId
  return baseAuthenticationService
    .get(`/delete/${body.userId}/${body.eventId}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

export {
  listUsersForEvent,
  listEventsForUser,
  attendanceRegistration,
  createRegistration,
  deleteRegistration
};
