import axios from 'axios';

const baseEventService = axios.create({
  baseURL: '/api/event'
})

const listEvents = () => {
  return baseEventService
    .get('/list')
    .then((response) => {
      console.log(response);
      const events = response.data;
      return Promise.resolve(events);
    })
    .catch((error) => Promise.reject(error));
};

export default listEvents;