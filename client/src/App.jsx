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
    this.setState({
      user
    });
  };

  render() {
    return (
      <div className='App'>
        {this.state.loaded && (
          <BrowserRouter>
            {/* LogoBar or NavBar */}
            <Link to='/authentication/log-in/'>Log-In</Link>
            <Link to='/authentication/sign-up/eximius-staff-laa'>Sign-up</Link>

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
                render={(props) => <EventSingleView {...props} userId={this.state.user._id} />}
              />

              <Route
                path='/profile/edit'
                updateUser={this.updateUser}
                component={(props) => <EditProfileView {...props} user={this.state.user} />}
              />

              <Route
                path='/profile'
                updateUser={this.updateUser}
                render={(props) => <ProfileView {...props} user={this.state.user} />}
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
