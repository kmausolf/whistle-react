import React from 'react';

import ThreadList from "./ThreadList";

class MessageBoard extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
=======
  constructor(props, context) {
    super(props, context);
>>>>>>> d01f20b2705ae88c341c155c338a66b2d7a8cce4
  }

  render(){
    const borderStyle = {
      padding:'7px', 
      border: '1.5px solid',
      borderRadius: '10px',
      borderColor: "#707070",
      width:"100%"
    }

    return(
      <div>
        <div style={borderStyle}>
<<<<<<< HEAD
          <ThreadList threads = {this.props.threads} />
=======
          <ThreadList 
            threads = {this.props.threads} 
            actions = {this.props.actions}
          />
>>>>>>> d01f20b2705ae88c341c155c338a66b2d7a8cce4
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default MessageBoard;

// MessageBoard.propTypes = {
//   actions: PropTypes.object.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   return{
//     threads: this.props.actions.getAllThreads()
//   };
// }

// function mapDispatchToProps(dispatch){
//   return{
//     actions: bindActionCreators(threadActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard);
=======

MessageBoard.propTypes = {
  threads: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default MessageBoard;
>>>>>>> d01f20b2705ae88c341c155c338a66b2d7a8cce4
