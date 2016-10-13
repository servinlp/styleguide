import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};
