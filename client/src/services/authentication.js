import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: '/api/authentication'
});

const signUp = (body) => {
  return baseAuthenticationService
    .post(`/sign-up/${body.token}`, body)
    .then((response) => {
      const user = response.data.user;
      return Promise.resolve(user);
    })
    .catch((error) => Promise.reject(error));
};

const logIn = (body) => {
  return baseAuthenticationService
    .post('/sign-in', body)
    .then((response) => {
      const user = response.data.user;
      return Promise.resolve(user);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const signOut = () => {
  return baseAuthenticationService
    .post('/sign-out')
    .then((response) => {
      return Promise.resolve();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const loadAuthenticatedUser = () => {
  return baseAuthenticationService
    .get('/me')
    .then((response) => {
      return Promise.resolve(response.data.user);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export { signUp, logIn, loadAuthenticatedUser, signOut };
