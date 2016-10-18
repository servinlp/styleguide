import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Guide} from '../../api/guides.js';

export default class Nav extends Component {
  toggleUserBox() {
    document.querySelectorAll("nav button:nth-of-type(1)")[0].classList.toggle("open");
  }

  logout() {
    Meteor.call("user.logout");
    Meteor.logout();
    render(<Login />, document.querySelector(".containerer"));
  }

  getUsername(that) {
    var span = this.refs.userName;
    Meteor.call("user.find", Meteor.userId(), function(err, results){
      span.innerHTML = results[0].username;
    });
  }

  render() {
    return (
      <nav onLoad={this.getUsername.bind(this)}>
        <button onClick={this.toggleUserBox}>
          <img src="/img/user-white.svg" alt="user button" />
          <span ref="userName"></span>
        </button>
        <section>
          <header>Account settings</header>
          <button>...</button>
          <button onClick={this.logout}>
            logout
          </button>
        </section>
        {this.props.app ?
          <ul>
            <li><a href="#">Color pallet</a></li>
          </ul>
        : ""}
        {this.props.app}
      </nav>
    );
  }
}

this.Proptype = {
  app: React.PropTypes.boolean,
}
