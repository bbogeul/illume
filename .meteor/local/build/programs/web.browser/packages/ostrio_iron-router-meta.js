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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var IronRouterHelper = Package['ostrio:iron-router-helper-class'].IronRouterHelper;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/ostrio_iron-router-meta/iron-router-meta.coffee.js                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var IronRouterMeta,                                                                                              // 1
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;                                                                                   //
                                                                                                                 //
IronRouterMeta = (function(superClass) {                                                                         // 1
  extend(IronRouterMeta, superClass);                                                                            //
                                                                                                                 //
  function IronRouterMeta(router) {                                                                              //
    this.router = router;                                                                                        //
    IronRouterMeta.__super__.constructor.call(this, this.router);                                                //
    this.router.onAfterAction((function(_this) {                                                                 //
      return function() {                                                                                        //
        var links, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, scripts, tags;
        $('[data-link-name], [data-meta-name], [data-script-name]').remove();                                    //
        tags = [];                                                                                               //
        if ((ref = _this.router) != null ? (ref1 = ref.options) != null ? ref1.meta : void 0 : void 0) {         //
          tags.push(_this.router.options.meta);                                                                  //
        }                                                                                                        //
        if (((ref2 = _this.currentController) != null ? ref2.prototype : void 0) && _.has(_this.currentController.prototype, 'meta')) {
          tags.push(_this.currentController.prototype['meta']);                                                  //
        }                                                                                                        //
        if ((ref3 = _this.currentRoute) != null ? (ref4 = ref3.route) != null ? (ref5 = ref4.options) != null ? ref5.meta : void 0 : void 0 : void 0) {
          tags.push(_this.currentRoute.route.options.meta);                                                      //
        }                                                                                                        //
        if (tags.length) {                                                                                       //
          _this.addTag(tags);                                                                                    //
        }                                                                                                        //
        links = [];                                                                                              //
        if ((ref6 = _this.router) != null ? (ref7 = ref6.options) != null ? ref7.link : void 0 : void 0) {       //
          links.push(_this.router.options.link);                                                                 //
        }                                                                                                        //
        if (((ref8 = _this.currentController) != null ? ref8.prototype : void 0) && _.has(_this.currentController.prototype, 'link')) {
          links.push(_this.currentController.prototype['link']);                                                 //
        }                                                                                                        //
        if ((ref9 = _this.currentRoute) != null ? (ref10 = ref9.route) != null ? (ref11 = ref10.options) != null ? ref11.link : void 0 : void 0 : void 0) {
          links.push(_this.currentRoute.route.options.link);                                                     //
        }                                                                                                        //
        if (links.length) {                                                                                      //
          _this.addLink(links);                                                                                  //
        }                                                                                                        //
        scripts = [];                                                                                            //
        if ((ref12 = _this.router) != null ? (ref13 = ref12.options) != null ? ref13.script : void 0 : void 0) {
          scripts.push(_this.router.options.script);                                                             //
        }                                                                                                        //
        if (((ref14 = _this.currentController) != null ? ref14.prototype : void 0) && _.has(_this.currentController.prototype, 'script')) {
          scripts.push(_this.currentController.prototype['script']);                                             //
        }                                                                                                        //
        if ((ref15 = _this.currentRoute) != null ? (ref16 = ref15.route) != null ? (ref17 = ref16.options) != null ? ref17.script : void 0 : void 0 : void 0) {
          scripts.push(_this.currentRoute.route.options.script);                                                 //
        }                                                                                                        //
        if (scripts.length) {                                                                                    //
          return _this.addScript(scripts);                                                                       //
        }                                                                                                        //
      };                                                                                                         //
    })(this));                                                                                                   //
  }                                                                                                              //
                                                                                                                 //
  IronRouterMeta.prototype.updateNode = function(type, name, values, isClosing) {                                //
    var attrName, content, element;                                                                              // 26
    if (isClosing == null) {                                                                                     //
      isClosing = false;                                                                                         //
    }                                                                                                            //
    if ($('head').has(type + '[data-' + type + '-name="' + name + '"]')[0]) {                                    //
      $(type + '[data-' + type + '-name="' + name + '"]').remove();                                              //
    }                                                                                                            //
    if (isClosing) {                                                                                             //
      element = $('<' + type + ' data-' + type + '-name="' + name + '"></' + type + '>');                        //
    } else {                                                                                                     //
      element = $('<' + type + ' data-' + type + '-name="' + name + '" />');                                     //
    }                                                                                                            //
    for (attrName in values) {                                                                                   // 33
      content = values[attrName];                                                                                //
      if (_.isFunction(content)) {                                                                               //
        content = content.call(this.currentRoute);                                                               //
      }                                                                                                          //
      if (content) {                                                                                             //
        element.attr(attrName, content);                                                                         //
      }                                                                                                          //
    }                                                                                                            // 33
    return $('head').prepend(element);                                                                           //
  };                                                                                                             //
                                                                                                                 //
  IronRouterMeta.prototype._prepare = function(settings) {                                                       //
    var _settings, i, len, set;                                                                                  // 39
    _settings = {};                                                                                              //
    for (i = 0, len = settings.length; i < len; i++) {                                                           // 40
      set = settings[i];                                                                                         //
      if (_.isFunction(set)) {                                                                                   //
        _settings = _.extend(_settings, set.call(this.currentRoute));                                            //
      } else if (_.isObject(set)) {                                                                              //
        _settings = _.extend(_settings, set);                                                                    //
      }                                                                                                          //
    }                                                                                                            // 40
    return _settings;                                                                                            // 45
  };                                                                                                             //
                                                                                                                 //
  IronRouterMeta.prototype.addTag = function(settings) {                                                         //
    var _settings, name, results, values;                                                                        // 48
    _settings = this._prepare(settings);                                                                         //
    results = [];                                                                                                // 50
    for (name in _settings) {                                                                                    //
      values = _settings[name];                                                                                  //
      if (_.isFunction(values)) {                                                                                //
        values = values.call(this.currentRoute);                                                                 //
      }                                                                                                          //
      if (_.isString(values)) {                                                                                  //
        values = {                                                                                               //
          content: values,                                                                                       //
          name: name                                                                                             //
        };                                                                                                       //
      }                                                                                                          //
      results.push(this.updateNode('meta', name, values));                                                       //
    }                                                                                                            // 50
    return results;                                                                                              //
  };                                                                                                             //
                                                                                                                 //
  IronRouterMeta.prototype.addLink = function(settings) {                                                        //
    var _settings, name, results, values;                                                                        // 56
    _settings = this._prepare(settings);                                                                         //
    results = [];                                                                                                // 58
    for (name in _settings) {                                                                                    //
      values = _settings[name];                                                                                  //
      if (_.isFunction(values)) {                                                                                //
        values = values.call(this.currentRoute);                                                                 //
      }                                                                                                          //
      if (_.isString(values)) {                                                                                  //
        values = {                                                                                               //
          href: values,                                                                                          //
          rel: name                                                                                              //
        };                                                                                                       //
      }                                                                                                          //
      results.push(this.updateNode('link', name, values));                                                       //
    }                                                                                                            // 58
    return results;                                                                                              //
  };                                                                                                             //
                                                                                                                 //
  IronRouterMeta.prototype.addScript = function(settings) {                                                      //
    var _settings, name, results, values;                                                                        // 64
    _settings = this._prepare(settings);                                                                         //
    results = [];                                                                                                // 66
    for (name in _settings) {                                                                                    //
      values = _settings[name];                                                                                  //
      if (_.isFunction(values)) {                                                                                //
        values = values.call(this.currentRoute);                                                                 //
      }                                                                                                          //
      if (_.isString(values)) {                                                                                  //
        values = {                                                                                               //
          src: values,                                                                                           //
          type: 'text/javascript'                                                                                //
        };                                                                                                       //
      }                                                                                                          //
      results.push(this.updateNode('script', name, values, true));                                               //
    }                                                                                                            // 66
    return results;                                                                                              //
  };                                                                                                             //
                                                                                                                 //
  return IronRouterMeta;                                                                                         //
                                                                                                                 //
})(IronRouterHelper);                                                                                            //
                                                                                                                 //
Meteor.startup(function() {                                                                                      // 71
  return new IronRouterMeta(Router);                                                                             //
});                                                                                                              // 71
                                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ostrio:iron-router-meta'] = {};

})();
