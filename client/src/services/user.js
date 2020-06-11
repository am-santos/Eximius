import axios from 'axios';

const baseUserService = axios.create({
  baseURL: '/api/user'
});

const editUserProfile = (body) => {
  console.log('BODY OF EDIT USER PROFILE ->', body);
  return baseUserService
    .post(`/profile/edit`, body)
    .then((response) => Promise.resolve(response.data.user))
    .catch((error) => Promise.reject(error));
};

const sendInvitation = () => {
  return baseAuthenticationService
    .post('server invitation path', body)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
};

export { editUserProfile, sendInvitation };
