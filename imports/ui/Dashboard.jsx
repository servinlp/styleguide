import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import Login from './login.jsx';
import Header from './Header.jsx';
import AddGuide from './dashboard/AddGuide.jsx';
import Guide from './dashboard/Guides.jsx';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // test: "hoi",
      // username: "",
    };
  }

  getUsername() {
    var user, span = this.refs.userName;
    setTimeout(function() {
      user = Meteor.user().username;
      span.innerHTML = user;
    }, 400);
  }


  logout() {
    Meteor.call("logout");
    // Meteor.logout();
    // render(<Login />, document.querySelector(".containerer"));
  }

  toggleUserBox() {
    document.querySelectorAll("nav button:nth-of-type(1)")[0].classList.toggle("open");
  }

  render() {
    var user = Meteor.user();
    return (
      <div className="dashboard" onLoad={this.getUsername.bind(this)}>
        <nav>
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
        </nav>
        <Header title="You're styleguides"/>
        <main>
          <Guide name="test" owner="ik zelf" date="today"/>
          <AddGuide />
        </main>
      </div>
    );
  }
}

// Dashboard.propTypes = {
//   userId: React.PropTypes.string.isRequired,
// };
