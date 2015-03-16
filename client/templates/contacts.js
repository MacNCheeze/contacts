Template.contacts.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('contacts');
  }.bind(this));
};

Template.contacts.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.contacts.helpers({
  contacts: function () {
    return Contacts.find({}, {sort: {order: 1}});
  },
  collection: function() {
    return Contacts;
  }
});


Template.contacts.events({
    'click .item-delete': function(event) {
        event.preventDefault();

        Contacts.remove({
            _id: this._id
        }, function(error, result) {});
    }
});
