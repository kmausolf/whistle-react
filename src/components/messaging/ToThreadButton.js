import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class ToThreadButton extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
      return (
      );
    }
  }

ToThreadButton.propTypes = {
    thread: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default ToThreadButton;
