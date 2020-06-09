import axios from 'axios';

const baseEventService = axios.create({
  baseURL: '/api/event'
})

const listEvents = () => {
  return baseAuthenticationService
    .post('/list')
    .then((response) => {
      const events = response.data.event;
      return Promise.resolve(events);
    })
    .catch((error) => Promise.reject(error));
};

export default listEventsl;