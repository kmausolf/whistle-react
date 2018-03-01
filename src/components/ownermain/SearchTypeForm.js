import React from 'react';
import {Link} from 'react-router';

class SearchTypeForm extends React.Component {
  render() {
    const buttonStyle = {
      width: "20vw",
      marginTop: "1%"
  };
    return (
     <form>
       <Link 
          className="btn btn-primary"
          role="button"
          to="/ownermain"
          style={buttonStyle}
        >
       Find me a Walker!
       </Link>
       <br />
       <Link 
          className="btn btn-primary"
          role="button"
          to="/ownermain"
          style={buttonStyle}
        >
       Find me a Sitter!
       </Link>
     </form>
    );
  }
}

export default SearchTypeForm;
