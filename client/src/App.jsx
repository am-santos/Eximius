import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

/*Import Services */
import { loadAuthenticatedUser } from './services/authentication';

/* Events */
import HomeView from './views/HomeView';
//import EventSingleView from './views/EventSingleView';
//import MyEventListView from './views/MyEventListView';
import CreateEventView from './views/CreateEventView';
import EventEditView from './views/EventEditView';

/* Authentication */
import LogInView from './views/Authentication/LogInView';
import SignUpView from './views/Authentication/SignUpView';

/* Profile */
import ProfileView from './views/ProfileView';
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

  componentDidMount() {
    loadAuthenticatedUser()
      .then((user) => {
        this.updateUser(user);
      })
      .catch((err) => {
        console.log('ERROR ON COMPONENT DID MOUNT, ERROR ->', err);
      });
  }

  updateUser = (user) => {
    console.log('INSIDE UPDATE USER ->', user);
    this.setState({
      user
    });
  };

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          {/* LogoBar or NavBar */}
          <Link to='/authentication/log-in/'>Log-In</Link>
          <Link to='/authentication/sign-up/eximius-staff-laa'>Sign-up</Link>

          <Switch>
            {/* Authentication /> */}
            <Route
              path='/authentication/log-in'
              render={(props) => <LogInView {...props} updateUser={this.updateUser} />}
            />
            {/* <Route path='/authentication/sign-up' exact component={SignUpView} /> */}

            <Route
              path='/authentication/sign-up/:token'
              render={(props) => <SignUpView {...props} updateUser={this.updateUser} />}
            />

            <Route
              exact
              path='/authentication/sign-up/eximius-staff-laa'
              render={(props) => <SignUpView {...props} updateUser={this.updateUser} />}
            />

            {/* Events /> */}
            {/* <Route path='/event/:id' component={EventSingleView} />
            <Route path='/my-events' component={MyEventListView} /> */}
            <Route path='/event/:id/edit' component={EventEditView} />
            <Route exact path='/event/create' component={CreateEventView} />

            {/* Profile /> */}
            <Route
              path='/profile'
              updateUser={this.updateUser}
              render={(props) => <ProfileView {...props} user={this.state.user} />}
            />
            {/*<Route path='/profile/edit' component={EditProfileView} /> */}

            {/* Contact Us /> */}
            {/* <Route path='/contact-us' component={ContactUsView} />
            <Route path='/contact-us/edit' component={EditProfileView} /> */}
            <Route path='/' component={HomeView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
