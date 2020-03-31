import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMovies, toggleMessage } from "./actions";

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.messageVisibility && <p>You can see me if toggled!</p>}
        <button onClick={this.props.toggleMessage}>Toggle Me</button>
        <button onClick={this.props.getMovies}>Load Movies</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies, toggleMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
