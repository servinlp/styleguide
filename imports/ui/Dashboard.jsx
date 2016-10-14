import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import Login from './login.jsx';
import Header from './Header.jsx';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "hoi",
      username: "",
    };
  }

  getUsername() {
    var user, span = this.refs.userName;
    setTimeout(function() {
      user = Meteor.user().username;
      span.innerHTML = user;
    }, 300);
  }


  logout() {
    Meteor.logout();
    render(<Login />, document.querySelector(".containerer"));
  }

  userName() {
    console.log(Meteor.user().username);
    return (Meteor.user().username);
  }

  render() {
    var user = Meteor.user();
    return (
      <div className="dashboard" onLoad={this.getUsername.bind(this)}>
        <nav>
          <button>
            <img src="/img/user.svg" alt="user button" />
            <span ref="userName"></span>
          </button>
        </nav>
        <Header title="You're styleguides"/>
        <main>
          <button onClick={this.logout}>
            logout
          </button>
        </main>
      </div>
    );
  }
}

// Dashboard.propTypes = {
//   userId: React.PropTypes.string.isRequired,
// };
