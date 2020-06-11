import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: '/api/attendance'
});

// Find all users for a specific event
const listUsersForEvent = (id) => {
  // get from /users/:eventId
  return baseAuthenticationService
    .get(`/users/${id}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

// Find all events for a specific user
const listEventsForUser = (id) => {
  // get from /events/:userId
  return baseAuthenticationService
    .get(`/events/${id}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

// Find specific registration
const attendanceRegistration = (userId, eventId) => {
  // get from /:userId/:eventId
  return baseAuthenticationService
    .get(`/${userId}/${eventId}`)
    .then((response) => Promise.resolve(response.data.users))
    .catch((error) => Promise.reject(error));
};

// Create specific document
const createRegistration = (userId, eventId) => {
  // post from /create/:userId/:eventId
  return baseAuthenticationService
    .post(`/create/${userId}/${eventId}`)
    .then((response) => {
      console.log('RESPONSE FROM THE SERVER', response);
      return Promise.resolve(response.data.registration);
    })
    .catch((error) => Promise.reject(error));
};

// POST Delete specific document
const deleteRegistration = (userId, eventId) => {
  // get from /delete/:userId/:eventId
  return baseAuthenticationService
    .post(`/delete/${userId}/${eventId}`)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};

export {
  listUsersForEvent,
  listEventsForUser,
  attendanceRegistration,
  createRegistration,
  deleteRegistration
};
