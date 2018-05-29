 
if (Meteor.isClient) {
  // This code only runs on the client
  
 Template.application.events({
    
    "click .delete": function () {
      Rsvps.remove(this._id);
    }
  });
}


 
 