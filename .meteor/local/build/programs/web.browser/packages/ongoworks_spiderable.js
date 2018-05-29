//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Spiderable;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/ongoworks_spiderable/packages/ongoworks_spiderable.js                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
(function () {                                                                                    // 1
                                                                                                  // 2
//////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                          //    // 4
// packages/ongoworks:spiderable/spiderable.js                                              //    // 5
//                                                                                          //    // 6
//////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                            //    // 8
Spiderable = {};                                                                            // 1  // 9
                                                                                            // 2  // 10
                                                                                            // 3  // 11
//////////////////////////////////////////////////////////////////////////////////////////////    // 12
                                                                                                  // 13
}).call(this);                                                                                    // 14
                                                                                                  // 15
                                                                                                  // 16
                                                                                                  // 17
                                                                                                  // 18
                                                                                                  // 19
                                                                                                  // 20
(function () {                                                                                    // 21
                                                                                                  // 22
//////////////////////////////////////////////////////////////////////////////////////////////    // 23
//                                                                                          //    // 24
// packages/ongoworks:spiderable/spiderable_client.js                                       //    // 25
//                                                                                          //    // 26
//////////////////////////////////////////////////////////////////////////////////////////////    // 27
                                                                                            //    // 28
// We want to provide a deteriministic indicator of when the page is 'done'                 // 1  // 29
// This is non-trivial: e.g. an infinite stream of tweets is never done.                    // 2  // 30
//                                                                                          // 3  // 31
// We do this instead:                                                                      // 4  // 32
//   We are done sometime after all initial subscriptions are ready                         // 5  // 33
//   Initial subscriptions are those started in the top-level script execution,             // 6  // 34
//   or from a Meteor.startup callback when Meteor.startup is called in                     // 7  // 35
//   top-level script execution.                                                            // 8  // 36
//                                                                                          // 9  // 37
// Note that we don't guarantee that we won't wait longer than we have to;                  // 10
// extra subscriptions may be made, and extra data past the minimum may be                  // 11
// received.                                                                                // 12
//                                                                                          // 13
// We set this 'started' flag as Package.spiderable.Spiderable._initialSubscriptionsStarted // 14
// This is used by our phantomjs to determine when the subscriptions are started;           // 15
// it then polls until all subscriptions are ready.                                         // 16
                                                                                            // 17
Spiderable._initialSubscriptionsStarted = false;                                            // 18
                                                                                            // 19
var startupCallbacksDone = function () {                                                    // 20
  Spiderable._initialSubscriptionsStarted = true;                                           // 21
};                                                                                          // 22
                                                                                            // 23
// This extra indirection is how we get called last                                         // 24
var topLevelCodeDone = function () {                                                        // 25
  // We'd like to use Meteor.startup here I think, but docs/behaviour of that is wrong      // 26
  Meteor._setImmediate(function () { startupCallbacksDone(); });                            // 27
};                                                                                          // 28
                                                                                            // 29
Meteor.startup(function () { topLevelCodeDone(); });                                        // 30
                                                                                            // 31
//////////////////////////////////////////////////////////////////////////////////////////////    // 60
                                                                                                  // 61
}).call(this);                                                                                    // 62
                                                                                                  // 63
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ongoworks:spiderable'] = {}, {
  Spiderable: Spiderable
});

})();
