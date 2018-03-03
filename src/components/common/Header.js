import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav className="text-center">
      <IndexLink to="/" activeClassName="active">Login</IndexLink>
      {" | "}
      <Link to="/ownermain" activeClassName="active">Main Page (Owner)</Link>
      {" | "}
      <Link to="/ctmain" activeClassName="active">Main Page (Caretaker)</Link>
      {" | "}
      <Link to="/messaging" activeClassName="active">Messaging</Link>
      {" | "}
      <Link to="/ownerprofile" activeClassName="active">Owner Profile</Link>
      {" | "}
      <Link to="/ctprofile" activeClassName="active">Caretaker Profile</Link>
      {" | "}
      <Link to="/settings" activeClassName="active">Settings</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
