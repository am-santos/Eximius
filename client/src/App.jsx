import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

/*Import Services */
import { loadAuthenticatedUser } from './services/authentication';

/* Events */
import HomeView from './views/HomeView';
import EventSingleView from './views/Event/EventSingleView';
//import MyEventListView from './views/MyEventListView';
import CreateEventView from './views/Event/CreateEventView';
import EventEditView from './views/Event/EventEditView';

/* Authentication */
import LogInView from './views/Authentication/LogInView';
import SignUpView from './views/Authentication/SignUpView';

/* Profile */
import ProfileView from './views/Profile/ProfileView';
import EditProfileView from './views/Profile/EditProfileView';
import InvitationView from './views/Profile/InvitationView';

/* Contact Us */
import ContactUsView from './views/ContactUsView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loaded: false
    };
  }

  componentDidMount() {
    loadAuthenticatedUser()
      .then((user) => {
        this.updateUser(user);
        this.setState({
          loaded: true
        });
      })
      .catch((err) => {
        console.log('ERROR ON APP.JSX - COMPONENTDIDMOUNT, ERROR ->', err);
      });
  }

  updateUser = (user) => {
    console.log('i am being called')
    this.setState({
      user
    });
  };

<<<<<<< HEAD
  /* componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      loadAuthenticatedUser()
        .then((user) => {
          this.updateUser(user);
        })
        .catch((error) => console.log(error));
    }
  } */
=======
>>>>>>> 9e5d6227bf7524984dd0844d6a80685d73c0ba2f

  render() {
    return (
      <div className='App'>
        {this.state.loaded && (
          <BrowserRouter>

            <Switch>
              <Route
                path='/authentication/log-in'
                exact
                render={(props) => <LogInView {...props} updateUser={this.updateUser} />}
              />

              <Route
                path='/authentication/sign-up/:token'
                exact
                render={(props) => <SignUpView {...props} updateUser={this.updateUser} />}
              />

              <Route
                exact
                path='/authentication/sign-up/eximius-staff-laa'
                exat
                render={(props) => <SignUpView {...props} updateUser={this.updateUser} />}
              />

              <Route
                path='/'
                exact
                render={(props) => (
                  <HomeView {...props} user={this.state.user} updateUser={this.updateUser} />
                )}
              />

              <Route
                path='/event/create'
                render={(props) => <CreateEventView {...props} user={this.state.user} />}
              />

              <Route
                path='/event/:id'
                exact
                render={(props) => <EventSingleView {...props} userId={this.state.user._id} updateUser={this.updateUser} />}
              />

              <Route
                path='/profile/edit'
                component={(props) => (
                  <EditProfileView {...props} user={this.state.user} updateUser={this.updateUser} />
                )}
              />

              <Route
                path='/profile/invite'
                component={(props) => (
                  <InvitationView {...props} user={this.state.user} updateUser={this.updateUser} />
                )}
              />

              <Route
                path='/profile'
                render={(props) => (
                  <ProfileView {...props} user={this.state.user} updateUser={this.updateUser} />
                )}
              />

              <Route path='/event/:id/edit' exact component={EventEditView} />

              <Route path='/contact-us' component={ContactUsView} />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
