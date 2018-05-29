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
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, IronRouterHelper;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/ostrio_iron-router-helper-class/iron-router-helper-class //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                     // 1
                                                                     //
IronRouterHelper = (function() {                                     // 1
  function IronRouterHelper(router) {                                //
    var self;                                                        // 3
    this.router = router;                                            //
    if (this.currentRoute == null) {                                 //
      this.currentRoute = {};                                        //
    }                                                                //
    if (this.currentController == null) {                            //
      this.currentController = {};                                   //
    }                                                                //
    self = this;                                                     //
    this.router.onRun(function() {                                   //
      self.currentRoute = this;                                      //
      self.getController();                                          //
      return this.next();                                            //
    });                                                              //
    this.router.onBeforeAction(function() {                          //
      self.currentRoute = this;                                      //
      self.getController();                                          //
      return this.next();                                            //
    });                                                              //
  }                                                                  //
                                                                     //
  IronRouterHelper.prototype.getController = function() {            //
    return this.currentController = (function() {                    //
      var base, base1, ref, ref1, ref2, ref3;                        //
      switch (false) {                                               // 18
        case !((ref = this.currentRoute) != null ? (ref1 = ref.route) != null ? ref1.findControllerConstructor : void 0 : void 0):
          return typeof (base = this.currentRoute.route).findControllerConstructor === "function" ? base.findControllerConstructor() : void 0;
        case !((ref2 = this.currentRoute) != null ? (ref3 = ref2.route) != null ? ref3.findController : void 0 : void 0):
          return typeof (base1 = this.currentRoute.route).findController === "function" ? base1.findController() : void 0;
        default:                                                     // 18
          return null;                                               //
      }                                                              // 18
    }).call(this);                                                   //
  };                                                                 //
                                                                     //
  return IronRouterHelper;                                           //
                                                                     //
})();                                                                //
                                                                     //
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ostrio:iron-router-helper-class'] = {}, {
  IronRouterHelper: IronRouterHelper
});

})();
