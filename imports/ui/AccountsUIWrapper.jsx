import React, {Component} from "react";
import ReactDom from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
  renderLoginButton() {
    this.view = Blaze.render(Template.loginButtons,
    ReactDOM.findDOMNode(this.refs.container));
  }

  render() {
    return (
      <span ref="container">
    );
  }
}
