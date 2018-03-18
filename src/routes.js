import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Register from './components/register/Register';
import OwnerMain from './components/ownermain/OwnerMain';
import CtMain from './components/ctmain/CtMain';
import Messaging from './components/messaging/Messaging';
import Thread from './components/thread/Thread';
import Settings from './components/settings/Settings';
import OwnerProfile from './components/ownerprofile/OwnerProfile';
import CaretakerProfile from './components/ctprofile/CaretakerProfile';
import Results_Walkers from './components/results/Results_Walkers';
import Results_Sitters from './components/results/Results_Sitters';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="register" component={Register} />
    <Route path="ownermain" component={OwnerMain} />
    <Route path="ctmain" component={CtMain} />
    <Route path="messaging" component={Messaging} />
    <Route path="thread" component={Thread} />
    <Route path="settings" component={Settings} />
    <Route path="ownerprofile" component={OwnerProfile} />
    <Route path="ctprofile" component={CaretakerProfile} />
    <Route path="results_walkers" component={Results_Walkers} />
    <Route path="results_sitters" component={Results_Sitters} />
  </Route>
);
