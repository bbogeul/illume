Template.header.rendered = function() {    
    $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});
 
// Mobile Navigation
 
 
  
};
 Template.fixedHeader.rendered = function() {    
 
     $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
};
 