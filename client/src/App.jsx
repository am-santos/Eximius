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
        <BrowserRouter>
          {/* LogoBar or NavBar */}
          <Link to='/authentication/log-in/'>Log-In</Link>
          <Link to='/authentication/sign-up/eximius-staff-laa'>Sign-up</Link>

          <Switch>
            <Route
              path='/'
              exact
              updateUser={this.updateUser}
              render={(props) => <HomeView {...props} user={this.state.user} />}
            />
            {this.state.user && (
              <>
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

            <Route
              exact
              path='/event/create'
              exact
              render={(props) => <CreateEventView {...props} user={this.state.user} />}
            />
            <Route path='/event/:id' exact 
            render={(props) => <EventSingleView {...props} userId={this.state.user._id} />}
            />
            {/* <Route path='/my-events' component={MyEventListView} /> */}

            {/* Profile /> */}
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

            {/* Events /> */}
            <Route path='/event/:id/edit' component={EventEditView} />
            {/* Contact Us /> */}
            {/* <Route path='/contact-us' component={ContactUsView} />
            <Route path='/contact-us/edit' component={EditProfileView} /> */}
            </>
            )}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
