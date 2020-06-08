import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomeView from './views/HomeView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* LogoBar or NavBar */}

        <Switch>
          {/* Events /> */}
          <Route path='/' component={HomeView} />
          <Route path='/event/:id' component={EventSingleView} />
          <Route path='/my-events' component={MyEventListView} />
          <Route path='/event/create' component={CreateEventView} />
          <Route path='/event/:id/edit' component={EventEditView} />

          {/* Authentication /> */}
          <Route path='/authentication/log-in' component={LogInView} />
          <Route path='/authentication/sign-up/:token' component={SignUpView} />

          {/* Profile /> */}
          <Route path='/profile/sign-up' component={ProfileView} />
          <Route path='/profile/edit' component={EditProfileView} />

          {/* Contact Us /> */}
          <Route path='/contact-us' component={ContactUsView} />
          {/* <Route path='/contact-us/edit' component={EditProfileView} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
