import axios from 'axios';

const baseUserService = axios.create({
  baseURL: '/api/user'
});

const editUserProfile = (body) => {
  return baseUserService
    .post(`/profile/edit`, body)
    .then((response) => Promise.resolve(response.data.user))
    .catch((error) => Promise.reject(error));
};

const sendInvitation = (body) => {
  return baseUserService
    .post('/profile/invitation', body)
    .then((response) => Promise.resolve(response.data.emailResult))
    .catch((error) => Promise.reject(error));
};

const sendContactMessage = (body) => {
  return baseUserService
    .post('/profile/contact-us', body)
    .then((response) => Promise.resolve(response.data.emailResult))
    .catch((error) => Promise.reject(error));
};

export { editUserProfile, sendInvitation, sendContactMessage };
