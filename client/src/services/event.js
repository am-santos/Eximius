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

const createEvent = body => {
  const form = new FormData();
  form.append(name, body.name);
  form.append(image, body.image);
  form.append(date, body.date);
  form.append(theme, body.theme);
  form.append(description, body.description);
  form.append(category, body.category);

  return baseAuthenticationService
  .post('/create', form)
  .then(response => {
    const form = response.data.form;
    return Promise.resolve(form)
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export { listEvents, createEvent };