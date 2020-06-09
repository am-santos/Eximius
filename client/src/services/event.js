import axios from 'axios';

const baseEventService = axios.create({
  baseURL: '/api/event'
});

const listEvents = () => {
  return baseEventService
    .get('/list')
    .then((response) => {
      console.log(response);
      const events = response.data.event;
      return Promise.resolve(events);
    })
    .catch((error) => Promise.reject(error));
};

const createEvent = (body) => {
  console.log(body.date);
  const form = new FormData();
  form.append('name', body.name);
  form.append('image', body.image);
  form.append('date', body.date);
  form.append('theme', body.theme);
  form.append('description', body.description);
  form.append('category', body.category);

  return baseEventService
    .post('/create', form)
    .then((response) => {
      console.log('response', response);
      const form = response.data.form;
      return Promise.resolve(form);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { listEvents, createEvent };
