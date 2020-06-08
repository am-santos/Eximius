import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

/* Events */
import HomeView from './views/HomeView';
//import EventSingleView from './views/EventSingleView';
//import MyEventListView from './views/MyEventListView';
//import CreateEventView from './views/CreateEventView';
//import EventEditView from './views/EventEditView';

/* Authentication */
//import LogInView from './views/Authentication/LogInView';
import SignUpView from './views/Authentication/SignUpView';

/* Profile */
//import ProfileView from './views/ProfileView';
//import EditProfileView from './views/EditProfileView';

/* Contact Us */
//import ContactUsView from './views/ContactUsView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  updateUser = (user) => {
    this.setState({
      user
    });
  };

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          {/* LogoBar or NavBar */}

          <Switch>
            {/* Authentication /> */}
            {/* <Route path='/authentication/log-in' component={LogInView} /> */}
            {/* <Route path='/authentication/sign-up' exact component={SignUpView} /> */}

            <Route
              path='/authentication/sign-up/:token'
              render={(props) => <SignUpView {...props} updateUser={this.updateUser} />}
            />

            {/* Events /> */}
            <Route path='/' component={HomeView} />
            {/* <Route path='/event/:id' component={EventSingleView} />
            <Route path='/my-events' component={MyEventListView} />
            <Route path='/event/create' component={CreateEventView} />
            <Route path='/event/:id/edit' component={EventEditView} /> */}

            {/* Profile /> */}
            {/* <Route path='/profile' component={ProfileView} />
            <Route path='/profile/edit' component={EditProfileView} /> */}

            {/* Contact Us /> */}
            {/* <Route path='/contact-us' component={ContactUsView} />
            <Route path='/contact-us/edit' component={EditProfileView} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
