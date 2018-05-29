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
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var IronRouterHelper = Package['ostrio:iron-router-helper-class'].IronRouterHelper;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/ostrio_iron-router-title/iron-router-title.coffee.js                                             //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var IronRouterTitle,                                                                                         // 1
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                                                               //
                                                                                                             //
IronRouterTitle = (function(superClass) {                                                                    // 1
  extend(IronRouterTitle, superClass);                                                                       //
                                                                                                             //
  function IronRouterTitle(router) {                                                                         //
    var self;                                                                                                // 3
    this.router = router;                                                                                    //
    IronRouterTitle.__super__.constructor.call(this, this.router);                                           //
    self = this;                                                                                             //
    this["default"] = document.title || null;                                                                //
    if (this.title == null) {                                                                                //
      this.title = new ReactiveVar(this["default"]);                                                         //
    }                                                                                                        //
    this.title.set = function(newValue) {                                                                    //
      var oldValue;                                                                                          // 9
      oldValue = this.curValue;                                                                              //
      if (_.isEqual(oldValue, newValue)) {                                                                   //
                                                                                                             // 10
      } else {                                                                                               //
        document.title = newValue;                                                                           //
        return this.curValue = newValue;                                                                     //
      }                                                                                                      //
    };                                                                                                       //
    this.router.onAfterAction(function() {                                                                   //
      return self.getTitle();                                                                                //
    });                                                                                                      //
  }                                                                                                          //
                                                                                                             //
  IronRouterTitle.prototype.setTitle = function(title) {                                                     //
    if (_.isFunction(title)) {                                                                               //
      title = title.apply(this.currentRoute);                                                                //
    }                                                                                                        //
    if (_.isString(title)) {                                                                                 //
      return this.title.set(title);                                                                          //
    }                                                                                                        //
  };                                                                                                         //
                                                                                                             //
  IronRouterTitle.prototype.getTitle = function() {                                                          //
    return this.setTitle((function() {                                                                       //
      var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;                                               //
      switch (false) {                                                                                       // 23
        case !((ref = this.currentRoute) != null ? (ref1 = ref.route) != null ? (ref2 = ref1.options) != null ? ref2.title : void 0 : void 0 : void 0):
          return this.currentRoute.route.options.title;                                                      //
        case !(((ref3 = this.currentRoute) != null ? ref3.prototype : void 0) && _.has(this.currentRoute.prototype, 'title')):
          return this.currentRoute.prototype['title'];                                                       //
        case !((ref4 = this.currentRoute) != null ? ref4.title : void 0):                                    // 23
          return this.currentRoute.title;                                                                    //
        case !(((ref5 = this.currentController) != null ? ref5.prototype : void 0) && _.has(this.currentController.prototype, 'title')):
          return this.currentController.prototype['title'];                                                  //
        case !((ref6 = this.currentController) != null ? ref6.title : void 0):                               // 23
          return this.currentController.title;                                                               //
        case !((ref7 = this.router) != null ? (ref8 = ref7.options) != null ? ref8.title : void 0 : void 0):
          return this.router.options.title;                                                                  //
        default:                                                                                             // 23
          return this["default"];                                                                            //
      }                                                                                                      // 23
    }).call(this));                                                                                          //
  };                                                                                                         //
                                                                                                             //
  return IronRouterTitle;                                                                                    //
                                                                                                             //
})(IronRouterHelper);                                                                                        //
                                                                                                             //
Meteor.startup(function() {                                                                                  // 32
  return new IronRouterTitle(Router);                                                                        //
});                                                                                                          // 32
                                                                                                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ostrio:iron-router-title'] = {};

})();
