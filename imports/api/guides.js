import {Meteor} from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {check} from 'meteor/check';

export const Guide = new Mongo.Collection("guides");

// if (Meteor.isServer) {
//   Meteor.publish('guide', function tasksPublication() {
//     return Guide.find();
//   });
// }

Meteor.methods({
  "guide.insert"(obj) {
    check(obj, Object);
    if (! this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Guide.insert({
      name: "Your new Style Guide",
      owner: Meteor.user().username,
      ownerId: Meteor.userId(),
      createdAt: new Date(),
    });
  },

  "guide.find"(selector) {
    // check(id, String);
    // Guide.find({ownerId: id}).fetch();
    console.log("test");
    return Guide.find(selector);
  },

  "logout"(){
    Meteor.logout();
    render(<Login />, document.querySelector(".containerer"));
  }

});
