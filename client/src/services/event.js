import axios from "axios";

const baseEventService = axios.create({
  baseURL: "/api/event",
});

const listEvents = () => {
  return baseEventService
    .get("/list")
    .then((response) => {
      const events = response.data.event;
      return Promise.resolve(events);
    })
    .catch((error) => Promise.reject(error));
};

const createEvent = (body) => {
  console.log('i got here')
  console.log(body.date);
  const form = new FormData();
  form.append("name", body.name);
  form.append("image", body.image);
  form.append("date", body.date);
  form.append("description", body.description);
  form.append("category", body.category);
  form.append("capacity", body.capacity);
  form.append("city", body.city);

  return baseEventService
    .post("/create", form)
    .then((response) => {
      console.log("response", response);
      const form = response.data.form;
      return Promise.resolve(form);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const singleEvent = (id) => {
  return baseEventService
    .get(`/${id}`)
    .then((response) => {
      const event = response.data.event;
      return Promise.resolve(event);
    })
    .catch((error) => Promise.reject(error));
};

const editEvent = (body, id) => {
  console.log("Im in edit event, body", body);
  const form = new FormData();
  form.append("name", body.name);
  form.append("image", body.image);
  form.append("date", body.date);
  form.append("description", body.description);
  form.append("category", body.category);
  form.append("capacity", body.capacity);
  form.append("city", body.city);

  //console.log("This is my form, form", form);
  for (var key of form.entries()) {
    console.log(key[0] + ", " + key[1]);
  }

  return baseEventService
    .post(`/${id}/edit`, form)
    .then((response) => {
      const form = response.data.form;
      return Promise.resolve(form);
    })
    .catch((error) => Promise.reject(error));
};

const deleteEvent = (id) => {
  return baseEventService
    .post(`/${id}/delete`)
    .then(response => Promise.resolve(response.data))
    .catch(err => console.log(err))
}

export { listEvents, createEvent, singleEvent, editEvent, deleteEvent };
