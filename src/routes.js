import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Register from './components/register/Register';
import OwnerMain from './components/ownermain/OwnerMain';
import CtMain from './components/ctmain/CtMain';
import Messaging from './components/messaging/Messaging';
import Settings from './components/settings/Settings';
import Profile from './components/profile/Profile';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="register" component={Register} />
    <Route path="ownermain" component={OwnerMain} />
    <Route path="ctmain" component={CtMain} />
    <Route path="messaging" component={Messaging} />
    <Route path="settings" component={Settings} />
    <Route path="profile" component={Profile} />
  </Route>
);
