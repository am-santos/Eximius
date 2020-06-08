import axios from 'axios';

const baseAuthenticationService = axios.create({
  baseURL: '/api/authentication'
});


const signUp = body => {
  const form = new FormData();
  form.append('username', body.username);
  form.append('email', body.email);
  form.append('password', body.password);
  console.log('services authentication life')
  return baseAuthenticationService
    .post('/sign-up', form)
    .then(response => {
      console.log(response)
      const user = response.data.user;
      return Promise.resolve(user);
    })
    .catch(error => Promise.reject(error));
}

//const signIn = () => {};

export default signUp;