import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
// import { createContainer } from 'meteor/react-meteor-data';
import {Mongo} from 'meteor/mongo';

import Header from './Header.jsx';
import AddGuide from './dashboard/AddGuide.jsx';
import AllGuides from './dashboard/Guides.jsx';
import Login from './login.jsx';

import {Guide} from '../api/guides.js';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // test: "hoi",
      // username: "",
    };
  }

  loadAll() {
    var that = this;
    this.getUsername(that);
    this.renderStyleGuides(that);
  }

  getUsername(that) {
    var span = that.refs.userName;
    Meteor.call("user.find", Meteor.userId(), function(err, results){
      span.innerHTML = results[0].username;
    });
  }


  logout() {
    Meteor.call("user.logout");
    Meteor.logout();
    render(<Login />, document.querySelector(".containerer"));
  }

  toggleUserBox() {
    document.querySelectorAll("nav button:nth-of-type(1)")[0].classList.toggle("open");
  }

  renderStyleGuides(that) {
    var forState = that;
    Meteor.call("guide.find", Meteor.userId(), function(err, results){
      if (err) {
        console.log(err);
      }
      var all = [];
      results.forEach(function(result) {
        var datum = result.createdAt.toLocaleDateString();
        all.push(<AllGuides key={result._id} name={result.name} owner={result.owner} itemId={result._id} date={datum} />);
      });
      forState.setState({
        guides: all,
      });
    });
  }

  render() {
    var user = Meteor.user();
    return (
      <div className="dashboard" onLoad={this.loadAll.bind(this)}>
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
          {this.state.guides}
          <AddGuide />
        </main>
      </div>
    );
  }
}

// Dashboard.propTypes = {
//   guides: PropTypes.array.isRequired,
// };
//
// export default createContainer(() => {
//   Meteor.subscribe('guides');
//
//   return {
//     guides: Meteor.call("guide.find", Meteor.userId()),
//   };
// }, Dashboard);
