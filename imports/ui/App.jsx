import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class App extends Component {
  render() {
    return (
      <h1>Styleguide</h1>
      <AccountsUIWrapper />
    );
  }
}
