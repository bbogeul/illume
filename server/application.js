 /*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
 
/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('Recording', function () {
  return Recording.find();
});
Meteor.publish('Montha', function () {
	return Months.find();
  });
Meteor.methods({
	'submitRecords': function (rsvp) {
        Recording.insert(rsvp);
		console.log('new record:', rsvp);
		 
	} 
});