import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import Login from './login.jsx';

export default class Dashboard extends Component {
  logout() {
    Meteor.logout();
    render(<Login />, document.querySelector(".containerer"));
  }

  render() {
    return (
      <div className="test">
        <h1>Styleguide</h1>
        <button onClick={this.logout}>
          logout
        </button>
      </div>
    );
  }
}
