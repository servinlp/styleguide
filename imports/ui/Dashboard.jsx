import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import Header from './Header.jsx';
import AddGuide from './dashboard/AddGuide.jsx';
import AllGuides from './dashboard/Guides.jsx';
import Login from './login.jsx';
import Nav from './dashboard/Nav.jsx';

import {Guide} from '../api/guides.js';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // test: "hoi",
      // username: "",
    };
  }

  renderStyleGuides() {
    var forState = this;
    Meteor.call("guide.find", Meteor.userId(), function(err, results){
      if (err) { console.log(err); }

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

  updateStyleGuides(){
    var that = this;
    console.log(this);
    console.log(that);
    Meteor.call("guide.find", Meteor.userId(), function(err, results){
      if (err) { console.log(err); }
      var result = results[results.length - 1],
          datum  = result.createdAt.toLocaleDateString();
      console.log(result);

      that.state.guides.push(<AllGuides key={result._id} name={result.name} owner={result.owner} itemId={result._id} date={datum} />)
      console.log(that.state.guides);
    });
  }

  render() {
    var user = Meteor.user();
    return (
      <div className="dashboard" onLoad={this.renderStyleGuides.bind(this)}>
        <Nav />
        <Header title="You're styleguides"/>
        <main>
          {this.state.guides}
          <AddGuide onClick={this.updateStyleGuides.bind(this)}/>
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
