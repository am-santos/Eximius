import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: '/api/user'
});

const editUserProfile = (body) => {
  console.log('BODY OF EDIT USER PROFILE ->', body);
  return baseAuthenticationService
    .post(`/${body.id}/edit`, body)
    .then((response) => Promise.resolve(response.data.user))
    .catch((error) => Promise.reject(error));
};

export default editUserProfile;
