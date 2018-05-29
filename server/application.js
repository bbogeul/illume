 /*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
	'submitRsvp': function (rsvp) {
		console.log('new RSVP:', rsvp);
		Rsvps.insert(rsvp);
	}
});
/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('rsvps', function () {
  return Rsvps.find();
});