Template.Rsvp.rendered = function() {
       
 new WOW().init();
   $('.collapsible').collapsible({
   
  });
         
};
 Template.applications.rendered = function() {
       
 new WOW().init();
   $('.collapsible').collapsible({
    
  });
         
};
AutoForm.setDefaultTemplate('materialize');
AutoForm.addHooks('insertRsvpForm', {
	onSuccess: function () {
		console.log("Got application");
		return Session.set('successfulRsvp', true);

	}
})

/*****************************************************************************/
/* Rsvp: Event Handlers */
/*****************************************************************************/
Template.Rsvp.events({
});

/*****************************************************************************/
/* Rsvp: Helpers */
/*****************************************************************************/
Template.Rsvp.helpers({
	isSuccessfulRsvp: function () {
		return Session.get('successfulRsvp');

	}
});

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.Rsvp.created = function () {
	return Session.set('successfulRsvp', false);
};

 

Template.Rsvp.destroyed = function () {
	return Session.set('successfulRsvp', false);
};
 
