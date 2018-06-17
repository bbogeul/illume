var require = meteorInstall({"client":{"layout":{"appLayout":{"template.appLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/appLayout/template.appLayout.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("appLayout");                                                                                     // 2
Template["appLayout"] = new Template("Template.appLayout", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("header")), "\n\n", Spacebars.include(view.lookupTemplate("yield")), "\n\n", Spacebars.include(view.lookupTemplate("footer")) ];
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.dashboard.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/appLayout/template.dashboard.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("dashboard");                                                                                     // 2
Template["dashboard"] = new Template("Template.dashboard", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div class="center">\n<a href="/">\n<img src="/img/sideNav.png" width="150" style="margin-top:1em;">\n</a>\n</div>\n \n<p class="center flow-text grey-text text-darken-2"></p>\n'), Spacebars.include(view.lookupTemplate("yield")) ];
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loginLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/appLayout/template.loginLayout.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("loginLayout");                                                                                   // 2
Template["loginLayout"] = new Template("Template.loginLayout", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n\n  ", Blaze.If(function() {                      // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", Spacebars.include(view.lookupTemplate("application")), "\n\n    " ];                        // 8
  }, function() {                                                                                                      // 9
    return [ "\n        ", Spacebars.include(view.lookupTemplate("login")), "\n         \n    " ];                     // 10
  }) ];                                                                                                                // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("registerTemplate");                                                                              // 14
Template["registerTemplate"] = new Template("Template.registerTemplate", (function() {                                 // 15
  var view = this;                                                                                                     // 16
  return Spacebars.include(view.lookupTemplate("yield"));                                                              // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"appLayout.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/appLayout/appLayout.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.appLayout.rendered = function () {};                                                                          // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"footer":{"template.footer.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/footer/template.footer.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("footer");                                                                                        // 2
Template["footer"] = new Template("Template.footer", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="container">\n \n    </div>\n<footer class="page-footer" style="background: #2f363b;height:500px;">\n    <section class="text-center" style="padding:1em;margin-top:70px;">     \n        <div class="container center">\n    <div>\n        <a href="/"><img src="/img/wlogo.png" width="85"></a>\n        </div>\n        <br>\n        <div class="divider" style="margin:0 auto;width: 100px"></div>\n    <p class="footer-company-motto nanum white-text flow-text"><b>Living, Breathing, and Improving</b></p>\n\n	 \n\n			<p class="footer-company-name rale" style="color:#a0a0a0;margin-top: 120px;">Typecrafted by joseph s. lee &copy; twentyeighteen<br><span class="nanum">경기도 고양시 </span>| Santa Barbara, CA <br><br><span class="nanum">made with <a class="grey-text" href="www.meteor.com">Meteor.JS</a></span></p>\n    \n\n        </div>\n    </section> \n    </footer>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"header":{"template.header.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/header/template.header.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("header");                                                                                        // 2
Template["header"] = new Template("Template.header", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER({                                                                                               // 5
    "class": "main_h"                                                                                                  // 6
  }, "\n\n \n      ", HTML.DIV({                                                                                       // 7
    "class": "navbar-fixed"                                                                                            // 8
  }, "\n  ", HTML.NAV({                                                                                                // 9
    style: "background:#2f363b;"                                                                                       // 10
  }, "\n     \n    ", HTML.DIV({                                                                                       // 11
    "class": "nav-wrapper"                                                                                             // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    "class": ""                                                                                                        // 14
  }, "\n        ", HTML.Raw('<div class="brand-logo center hide-on-small-only">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n              ", HTML.Raw('<div class="brand-logos brand-logo show-on-small-only hide-on-med-and-up">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n            ", HTML.Raw('<a href="#" data-activates="slide-outs" class="white-text button-collapse left" style="margin-left:15px;"><i class="fas fa-bars"></i></a>'), "\n           \n         \n            \n      \n      ", HTML.UL({
    "class": "hide-on-med-and-down left"                                                                               // 16
  }, "\n        ", HTML.LI({                                                                                           // 17
    "class": "nanum"                                                                                                   // 18
  }, HTML.A({                                                                                                          // 19
    href: function() {                                                                                                 // 20
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 21
    }                                                                                                                  // 22
  }, Blaze.View("lookup:_", function() {                                                                               // 23
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 24
  }))), "\n      \n        ", HTML.LI({                                                                                // 25
    "class": "nanum"                                                                                                   // 26
  }, HTML.A({                                                                                                          // 27
    href: function() {                                                                                                 // 28
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 29
    }                                                                                                                  // 30
  }, Blaze.View("lookup:_", function() {                                                                               // 31
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 32
  }))), "\n             ", HTML.LI({                                                                                   // 33
    "class": "nanum"                                                                                                   // 34
  }, HTML.A({                                                                                                          // 35
    href: function() {                                                                                                 // 36
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 37
    }                                                                                                                  // 38
  }, Blaze.View("lookup:_", function() {                                                                               // 39
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 40
  }))), "\n           ", HTML.LI({                                                                                     // 41
    "class": "nanum"                                                                                                   // 42
  }, HTML.A({                                                                                                          // 43
    href: function() {                                                                                                 // 44
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 45
    }                                                                                                                  // 46
  }, Blaze.View("lookup:_", function() {                                                                               // 47
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 48
  }))), "\n \n\n      "), "\n        ", HTML.UL({                                                                      // 49
    "class": "right hide-on-med-and-down"                                                                              // 50
  }, "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher")), "\n            ", HTML.Raw('<li><a class="white-text center" href="https://urlgeni.us/facebook/n12_"><i class="fab fa-facebook-f  fa-2x"></i></a></li>'), "\n                         ", HTML.Raw('<li class="divider"></li>'), "\n    ", HTML.Raw('<li><a class="center white-text" href="https://urlgeni.us/instagram/3fIn"><i class="fab fa-instagram  fa-2x"></i></a></li>'), "\n           ", HTML.Raw('<li>  <a class="center white-text" href="https://urlgeni.us/Uxlo"><i class="fab fa-github fa-2x"></i></a></li>'), "\n            "), "\n       \n    "), "\n      "), "\n       \n          "), "\n\n      "), "\n"), "\n    ", HTML.UL({
    id: "slide-outs",                                                                                                  // 52
    "class": "side-nav"                                                                                                // 53
  }, "\n        ", HTML.DIV({                                                                                          // 54
    "class": "center"                                                                                                  // 55
  }, "\n            ", HTML.Raw("<br>"), "\n            ", HTML.Raw('<img src="/img/drawnPic.jpg" width="150">'), HTML.Raw("<br>"), "\n  \n     ", HTML.LI({
    "class": "nanum",                                                                                                  // 57
    style: "margin-top:1em;"                                                                                           // 58
  }, HTML.A({                                                                                                          // 59
    href: function() {                                                                                                 // 60
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 61
    }                                                                                                                  // 62
  }, Blaze.View("lookup:_", function() {                                                                               // 63
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 64
  }))), "\n    \n        ", HTML.LI({                                                                                  // 65
    "class": "nanum"                                                                                                   // 66
  }, HTML.A({                                                                                                          // 67
    href: function() {                                                                                                 // 68
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 69
    }                                                                                                                  // 70
  }, Blaze.View("lookup:_", function() {                                                                               // 71
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 72
  }))), "\n             ", HTML.LI({                                                                                   // 73
    "class": "nanum"                                                                                                   // 74
  }, HTML.A({                                                                                                          // 75
    href: function() {                                                                                                 // 76
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 77
    }                                                                                                                  // 78
  }, Blaze.View("lookup:_", function() {                                                                               // 79
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 80
  }))), "\n           ", HTML.LI({                                                                                     // 81
    "class": "nanum"                                                                                                   // 82
  }, HTML.A({                                                                                                          // 83
    href: function() {                                                                                                 // 84
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 85
    }                                                                                                                  // 86
  }, Blaze.View("lookup:_", function() {                                                                               // 87
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 88
  }))), "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher2")), "\n        "), "\n  ") ];        // 89
}));                                                                                                                   // 90
                                                                                                                       // 91
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/header/header.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.header.rendered = function () {                                                                               // 1
  $('.button-collapse').sideNav({                                                                                      // 2
    menuWidth: 200, // Default is 240                                                                                  // 3
    edge: 'right', // Choose the horizontal origin                                                                     // 4
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                     // 5
  });                                                                                                                  // 2
  $(window).scroll(function () {                                                                                       // 8
                                                                                                                       //
    if ($(window).scrollTop() > 100) {                                                                                 // 10
      $('.main_h').addClass('sticky');                                                                                 // 11
    } else {                                                                                                           // 12
      $('.main_h').removeClass('sticky');                                                                              // 13
    }                                                                                                                  // 14
  });                                                                                                                  // 15
                                                                                                                       //
  // Mobile Navigation                                                                                                 //
};                                                                                                                     // 21
Template.fixedHeader.rendered = function () {                                                                          // 22
                                                                                                                       //
  $('.button-collapse').sideNav({                                                                                      // 24
    menuWidth: 200, // Default is 240                                                                                  // 25
    edge: 'right', // Choose the horizontal origin                                                                     // 26
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                     // 27
  });                                                                                                                  // 24
};                                                                                                                     // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"templates":{"about":{"template.about.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/about/template.about.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("about");                                                                                         // 2
Template["about"] = new Template("Template.about", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n ", HTML.DIV({                                    // 5
    "class": "center"                                                                                                  // 6
  }, "\n", HTML.H2({                                                                                                   // 7
    "class": "nanum"                                                                                                   // 8
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 9
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 10
  }))), "\n "), HTML.Raw('\n <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n '), HTML.DIV({
    "class": "container",                                                                                              // 12
    style: "margin-top:3em"                                                                                            // 13
  }, "\n ", HTML.DIV({                                                                                                 // 14
    "class": "center"                                                                                                  // 15
  }, "\n     ", HTML.Raw('<img src="/img/joe.png" width="110">'), "\n     ", HTML.Raw("<br>"), "\n     \n ", HTML.P({  // 16
    "class": "flow-text"                                                                                               // 17
  }, "\n", Blaze.View("lookup:_", function() {                                                                         // 18
    return Spacebars.mustache(view.lookup("_"), "leadDeveloper");                                                      // 19
  }), "\n"), "\n "), "\n ", HTML.DIV({                                                                                 // 20
    "class": "row"                                                                                                     // 21
  }, "\n        ", HTML.DIV({                                                                                          // 22
    "class": ""                                                                                                        // 23
  }, "\n                ", HTML.DIV({                                                                                  // 24
    "class": "col s12 m12 l4"                                                                                          // 25
  }, "\n                ", HTML.DIV({                                                                                  // 26
    "class": "pricing animated swing"                                                                                  // 27
  }, "\n  ", HTML.Raw('<div class="thumbnail animated pulse infinite">\n    <div class="fa fa-pencil-alt"></div>\n  </div>'), "\n  ", HTML.Raw('<div class="title nanum">\n  Designer\n  </div>'), "\n  ", HTML.DIV({
    "class": "center container"                                                                                        // 29
  }, "\n      ", HTML.P({                                                                                              // 30
    "class": "nanum grey-text text-darken-2"                                                                           // 31
  }, Blaze.View("lookup:_", function() {                                                                               // 32
    return Spacebars.mustache(view.lookup("_"), "iValue");                                                             // 33
  })), "\n  "), "\n  \n  ", HTML.DIV({                                                                                 // 34
    "class": "center container"                                                                                        // 35
  }, "\n      ", HTML.P({                                                                                              // 36
    "class": " nanum bold mainC",                                                                                      // 37
    style: "font-size: 1.2em;"                                                                                         // 38
  }, "\n          ", Blaze.View("lookup:_", function() {                                                               // 39
    return Spacebars.mustache(view.lookup("_"), "thingsDesign");                                                       // 40
  }), "\n      "), "\n      ", HTML.Raw('<p class="nanum grey-text text-darken-2">UX, UI, Logos, Mobile Webs, Apps, Email</p>'), "\n  "), "\n ", HTML.DIV({
    "class": "center"                                                                                                  // 42
  }, "\n     ", HTML.P({                                                                                               // 43
    "class": "nanum bold mainC",                                                                                       // 44
    style: "font-size:1.2em;margin-top:2.2em;"                                                                         // 45
  }, "\n         ", Blaze.View("lookup:_", function() {                                                                // 46
    return Spacebars.mustache(view.lookup("_"), "myTools");                                                            // 47
  }), "\n     "), "\n     ", HTML.P({                                                                                  // 48
    "class": "nanum grey-text text-darken-2"                                                                           // 49
  }, "\n         Inkscape ", HTML.Raw("<br>"), "Adobe Photoshop ", HTML.Raw("<br>"), " Adobe Illustrator ", HTML.Raw("<br>"), " Adobe Lightroom ", HTML.Raw("<br>"), " GIMP ", HTML.Raw("<br>"), " (", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "occasionally");                                                       // 51
  }), ") Sketch\n     "), "\n "), "\n \n"), "\n  ", HTML.Raw("<br>"), "\n                "), "\n               \n                 ", HTML.DIV({
    "class": "col s12 m12 l4"                                                                                          // 53
  }, "\n                 ", HTML.DIV({                                                                                 // 54
    "class": "pricing animated swing"                                                                                  // 55
  }, "\n  ", HTML.Raw('<div class="thumbnail animated pulse infinite">\n    <div class="fa fa-code"></div>\n  </div>'), "\n  ", HTML.Raw('<div class="titl nanum" style="background:#21313b">\nDeveloper\n  </div>'), "\n  ", HTML.DIV({
    "class": "center container"                                                                                        // 57
  }, "\n      ", HTML.P({                                                                                              // 58
    "class": "nanum grey-text text-darken-2"                                                                           // 59
  }, Blaze.View("lookup:_", function() {                                                                               // 60
    return Spacebars.mustache(view.lookup("_"), "iCode");                                                              // 61
  })), "\n  "), "\n  ", HTML.DIV({                                                                                     // 62
    "class": "center container"                                                                                        // 63
  }, "\n      ", HTML.P({                                                                                              // 64
    "class": " nanum bold mainC",                                                                                      // 65
    style: "font-size: 1.2em;"                                                                                         // 66
  }, "\n          ", Blaze.View("lookup:_", function() {                                                               // 67
    return Spacebars.mustache(view.lookup("_"), "languageSpeak");                                                      // 68
  }), "\n      "), "\n      ", HTML.Raw('<p class="nanum grey-text text-darken-2">HTML5, CSS3, Sass, LESS, Javascript, Meteor.js, PHP, Java</p>'), "\n  "), "\n   ", HTML.DIV({
    "class": "center"                                                                                                  // 70
  }, "\n     ", HTML.P({                                                                                               // 71
    "class": "nanum bold mainC",                                                                                       // 72
    style: "font-size:1.2em;margin-top:0.6em;"                                                                         // 73
  }, "\n         ", Blaze.View("lookup:_", function() {                                                                // 74
    return Spacebars.mustache(view.lookup("_"), "myTools");                                                            // 75
  }), "\n     "), "\n     ", HTML.Raw('<p class="nanum grey-text text-darken-2">\n        Linux(Mac &amp; Ubuntu) <br> Brackets <br>Sublime3 <br> Github <br> Bootstrap <br> Material Design <br> Meteor.js <br> Angular <br> Codepen <br> Terminal\n     </p>'), "\n "), "\n"), "\n  ", HTML.Raw("<br>"), "\n                "), "\n               \n                 ", HTML.DIV({
    "class": "col s12 m12 l4"                                                                                          // 77
  }, "\n                ", HTML.DIV({                                                                                  // 78
    "class": "pricing animated swing"                                                                                  // 79
  }, "\n  ", HTML.Raw('<div class="thumbnail animated pulse infinite">\n    <div class="fa fa-smile"></div>\n  </div>'), "\n  ", HTML.Raw('<div class="titles nanum" style="background:#21313b;">\n  More about Joe\n  </div>'), "\n   ", HTML.DIV({
    "class": "center container"                                                                                        // 81
  }, "\n      ", HTML.P({                                                                                              // 82
    "class": "nanum grey-text text-darken-2"                                                                           // 83
  }, Blaze.View("lookup:_", function() {                                                                               // 84
    return Spacebars.mustache(view.lookup("_"), "moreMe");                                                             // 85
  })), "\n  "), "\n   ", HTML.DIV({                                                                                    // 86
    "class": "center container"                                                                                        // 87
  }, "\n      ", HTML.P({                                                                                              // 88
    "class": " nanum bold mainC",                                                                                      // 89
    style: "font-size: 1.2em;"                                                                                         // 90
  }, "\n          ", Blaze.View("lookup:_", function() {                                                               // 91
    return Spacebars.mustache(view.lookup("_"), "thingsLike");                                                         // 92
  }), "\n      "), "\n      ", HTML.P({                                                                                // 93
    "class": "nanum grey-text text-darken-2"                                                                           // 94
  }, "\n          ", Blaze.View("lookup:_", function() {                                                               // 95
    return Spacebars.mustache(view.lookup("_"), "coffeeAnd");                                                          // 96
  }), "\n      "), "\n  "), "\n"), "\n", HTML.Raw("<br>"), "\n                "), "\n\n                "), "\n "), "\n "), HTML.Raw('\n       <div class="divider"></div>\n    '), HTML.SECTION({
    style: "margin-top:5em"                                                                                            // 98
  }, "\n                  ", HTML.DIV({                                                                                // 99
    "class": "container"                                                                                               // 100
  }, "\n                  ", HTML.Raw('<div class="center">\n                      <img src="/img/meteor.svg" alt="">\n                  </div>'), "\n                   ", HTML.DIV({
    "class": "center"                                                                                                  // 102
  }, "\n", HTML.H3({                                                                                                   // 103
    "class": "nanum"                                                                                                   // 104
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 105
    return Spacebars.mustache(view.lookup("_"), "aLittleAboutMeteor");                                                 // 106
  }))), "\n "), "\n ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n        ", HTML.DIV({
    "class": "row",                                                                                                    // 108
    style: "margin-top:5em"                                                                                            // 109
  }, "\n              \n \n     ", HTML.DIV({                                                                          // 110
    "class": "col s12 m12 l6 center"                                                                                   // 111
  }, "\n          ", HTML.H5({                                                                                         // 112
    "class": "rale grey-text text-darken-3"                                                                            // 113
  }, Blaze.View("lookup:_", function() {                                                                               // 114
    return Spacebars.mustache(view.lookup("_"), "webAndMobile");                                                       // 115
  }), "   ", HTML.B({                                                                                                  // 116
    "class": "red-text text-lighten-1"                                                                                 // 117
  }, Blaze.View("lookup:_", function() {                                                                               // 118
    return Spacebars.mustache(view.lookup("_"), "intoOne");                                                            // 119
  }))), "\n         ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:40px"></div>'), "\n         ", HTML.P({
    "class": "flow-text "                                                                                              // 121
  }, Blaze.View("lookup:_", function() {                                                                               // 122
    return Spacebars.mustache(view.lookup("_"), "webDesc");                                                            // 123
  })), "\n         ", HTML.Raw("<br>"), "\n             ", HTML.DIV({                                                  // 124
    "class": "center"                                                                                                  // 125
  }, "\n                  ", HTML.A({                                                                                  // 126
    href: function() {                                                                                                 // 127
      return Spacebars.mustache(view.lookup("pathFor"), "hybrid");                                                     // 128
    },                                                                                                                 // 129
    "class": "button outline"                                                                                          // 130
  }, Blaze.View("lookup:_", function() {                                                                               // 131
    return Spacebars.mustache(view.lookup("_"), "learnMoreHybrid");                                                    // 132
  })), "\n\n                "), "\n            "), "\n                ", HTML.DIV({                                    // 133
    "class": "col s12 m12 l6  center"                                                                                  // 134
  }, "\n        \n     \n        ", HTML.H5({                                                                          // 135
    "class": "rale grey-text text-darken-3"                                                                            // 136
  }, Blaze.View("lookup:_", function() {                                                                               // 137
    return Spacebars.mustache(view.lookup("_"), "secretWeapon");                                                       // 138
  }), " ", HTML.B({                                                                                                    // 139
    "class": "red-text text-lighten-1"                                                                                 // 140
  }, Blaze.View("lookup:_", function() {                                                                               // 141
    return Spacebars.mustache(view.lookup("_"), "meteor");                                                             // 142
  }), " JS")), "\n        ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:40px"></div>'), "\n        ", HTML.P({
    "class": "flow-text "                                                                                              // 144
  }, Blaze.View("lookup:_", function() {                                                                               // 145
    return Spacebars.mustache(view.lookup("_"), "silos");                                                              // 146
  })), "\n        ", HTML.Raw("<br>"), "\n       ", HTML.DIV({                                                         // 147
    "class": "center"                                                                                                  // 148
  }, "\n                  ", HTML.A({                                                                                  // 149
    href: "https://www.meteor.com",                                                                                    // 150
    "class": "button outline"                                                                                          // 151
  }, Blaze.View("lookup:_", function() {                                                                               // 152
    return Spacebars.mustache(view.lookup("_"), "discoverMeteor");                                                     // 153
  })), "\n\n                "), "\n        "), "\n        "), "\n    "), "\n              "), "\n                       \n                          ", HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 155
  }, "\n                ", HTML.DIV({                                                                                  // 156
    "class": "row"                                                                                                     // 157
  }, "\n        ", HTML.DIV({                                                                                          // 158
    "class": "container"                                                                                               // 159
  }, "\n        ", HTML.DIV({                                                                                          // 160
    "class": "col s12 m12 l12"                                                                                         // 161
  }, "\n            ", HTML.H1({                                                                                       // 162
    "class": "nanum center homeWhat"                                                                                   // 163
  }, Blaze.View("lookup:_", function() {                                                                               // 164
    return Spacebars.mustache(view.lookup("_"), "readySetGo");                                                         // 165
  })), "\n            ", HTML.Raw('<div class="divider red lighten-1"></div>'), "\n      \n             ", HTML.P({    // 166
    "class": "center flow-text nanum grey-text text-darken-3"                                                          // 167
  }, Blaze.View("lookup:_", function() {                                                                               // 168
    return Spacebars.mustache(view.lookup("_"), "alwaysOpen");                                                         // 169
  })), "\n             ", HTML.DIV({                                                                                   // 170
    "class": "center"                                                                                                  // 171
  }, "\n                  ", HTML.A({                                                                                  // 172
    href: function() {                                                                                                 // 173
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 174
    },                                                                                                                 // 175
    "class": "button outline"                                                                                          // 176
  }, Blaze.View("lookup:_", function() {                                                                               // 177
    return Spacebars.mustache(view.lookup("_"), "getStarted");                                                         // 178
  })), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 180
                                                                                                                       // 181
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"about.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/about/about.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.about.rendered = function () {                                                                                // 1
    new WOW().init({ mobile: false });                                                                                 // 2
    $('.parallax').parallax();                                                                                         // 3
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"approach":{"template.approach.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/approach/template.approach.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("approach");                                                                                      // 2
Template["approach"] = new Template("Template.approach", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n    ", HTML.SECTION({                             // 5
    style: "margin-top:3.2em"                                                                                          // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "container"                                                                                               // 8
  }, "\n        ", HTML.DIV({                                                                                          // 9
    "class": "row"                                                                                                     // 10
  }, "\n    ", HTML.DIV({                                                                                              // 11
    "class": "col s12 m6 l6"                                                                                           // 12
  }, "\n        \n         \n        ", HTML.H4({                                                                      // 13
    "class": "nanum grey-text text-darken-3"                                                                           // 14
  }, HTML.B({                                                                                                          // 15
    "class": "  red-text text-lighten-1"                                                                               // 16
  }, Blaze.View("lookup:_", function() {                                                                               // 17
    return Spacebars.mustache(view.lookup("_"), "successDoesnt");                                                      // 18
  }), " "), " ", Blaze.View("lookup:_", function() {                                                                   // 19
    return Spacebars.mustache(view.lookup("_"), "combinationOf");                                                      // 20
  })), "\n        ", HTML.Raw("<br>"), "\n        ", HTML.Raw('<p class="flow-text  grey-text text-darken-3">\n             \nBuilding success is not for the feint of heart. It is for people who work tirelessly towards their goal. That is our philosophy here. We strive in providing you with the best of our abilities.\n            Our purpose is to be aware to your needs and to be bold to the challenge. We do this in order to create success along with you.\n<br>\nWhen you work with Illume Inc, you are working with a new breed of engineers and designers. We are the next step in the web space. We know what comes next, how to get there, and what must be done to proceed.\n            </p>'), "\n          \n    \n             \n        "), "\n        ", HTML.Raw('<div class="col s12 m6 l5 offset-l1 hide-on-small-only">\n        <div class="center" style="margin-top:3em">\n            <img src="/img/approach.png" height="550" class="shake wow">\n            <p><i class="fa fa-quote-left fa-2x red-text text-lighten-1 center"></i></p>\n            <p>Our purpose is to be aware of your needs and to be bold to the challenge. We do this in order to create success along with you. </p>\n            <p><i class="fa fa-quote-right fa-2x red-text text-lighten-1 center"></i></p>\n            </div>\n        </div>'), "\n        "), "\n    "), "\n    "), HTML.Raw('\n           \n    \n        <div class="parallax-container" style="height:270px;margin-top:4em">\n      <div class="parallax" style="background:#0f0f0f"><img src="/img/header.jpg"></div>\n <div class="container" style="margin-top:3em;">\n                  <div class="center">\n            <i class="fa fa-cubes fa-4x white-text"></i>\n\n            <h3 class="grey-text text-lighten-3 muli">DEV<span class="hide-on-small-only">ELOPMENT</span> ROADMAP</h3>\n    </div>\n            </div>\n     \n    </div>\n        '), HTML.SECTION({
    style: "margin-top:4em"                                                                                            // 22
  }, "\n        ", HTML.DIV({                                                                                          // 23
    "class": "container"                                                                                               // 24
  }, "\n            ", HTML.DIV({                                                                                      // 25
    id: "timeline"                                                                                                     // 26
  }, "\n    ", HTML.Raw('<div class="timeline-item  ">\n      <div class="timeline-icon ">\n \n\n      </div>\n      <div class="timeline-content wow zoomIn">\n        <h3 class="mont amber ">The Initial Contact</h3>\n<div class="center" style="padding:1em">\n          <img src="/img/brain.svg" width="75">\n          </div>\n          <p style="margin-top:-.15em">\n        Once we get in touch, we will be discussing our services in detail to you. During this stage, we will be brainstorming together to build a viable, yet powerful solution to your website needs.\n        </p>\n         \n      </div>\n    </div>'), "\n  ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content right wow zoomIn">\n       <h3 class="mont green lighten-1">Commence Project!</h3>\n \n          <p style="margin-top:-.15em">\n        Once you have agreed to our service terms and went over our proposed roadmap, we will begin the development process right away.\n        </p>\n      \n      </div>\n    </div>'), "\n   \n\n    ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content wow zoomIn">\n      <h3 class="mont red lighten-1">Maybe Next Time!</h3>\n        <p>\n        Aww. It is a shame to see you go. But don\'t worry. If we offered advice over the phone; that is free of charge. Also if you change your mind you know where to find us.\n        </p>\n      \n      </div>\n    </div>'), "\n                  ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content wow zoomIn">\n       <h3 class="mont green lighten-1">Even more collaboration</h3>\n            \n          <p style="margin-top:-.15em">\n     Once our development phase reaches a formidable point, we will be coming back to you with results, updates, and opportunities to collaborate once more to prepare for the final stretch. \n        </p>\n         \n      </div>\n    </div>'), "\n                  ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content right">\n       <h3 class="mont amber">Stall in Project</h3>\n        <p>\n          There are many reasons a project can be stalled. We do our bests to circumnavigate around these issues, but sometimes the problem can be out of our hands. We will be contacting you thoroughly to get any issues resolved.\n        </p>\n         \n      </div>\n    </div>'), "\n                         ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n   \n      </div>\n      <div class="timeline-content wow zoomIn">\n       <h3 class="mont amber ">Change Course</h3>\n        <p>\n         If a project stalls, sometimes you the client might want to change course (maybe due to budget constraints, time variables, etc.) we will do our best to accommodate any changes to our project timeline. But many times a project stalls due to lack of contents being provided, and budgetary issues with our accounts.\n        </p>\n         \n      </div>\n    </div>'), "\n                         ", HTML.DIV({
    "class": "timeline-item"                                                                                           // 28
  }, "\n      ", HTML.Raw('<div class="timeline-icon">\n \n\n      </div>'), "\n      ", HTML.DIV({                    // 29
    "class": "timeline-content wow zoomIn"                                                                             // 30
  }, "\n       ", HTML.Raw('<h3 class="mont red lighten-1">Contract Ends</h3>'), "\n        ", HTML.P("\n          Sometimes businesses do not work out. We do our best to avoid these scenarios as much as possible since we would like to think we built our business relationship on trust. But the world sometimes does not work the way we want and we might have to part ways.", HTML.Raw("<br>"), "\n            If a project is cancelled, you can view our ", HTML.A({
    href: function() {                                                                                                 // 32
      return Spacebars.mustache(view.lookup("pathFor"), "policy");                                                     // 33
    }                                                                                                                  // 34
  }, "policies"), " to answer any questions you might have about cancellation.\n        "), "\n         \n      "), "\n    "), "\n                         ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content right wow zoomIn">\n       <h3 class="mont green lighten-1">Success Imminent</h3>\n \n        <p>\n          Everything is smooth as butter. We are almost there. The finishing touch . We are almost finished with the development process and ready to deploy your product. This means that we have successfully collaborated together to create a true <b>MVP.</b>\n        </p>\n         \n      </div>\n    </div>'), "\n  "), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    "class": "center"                                                                                                  // 36
  }, "\n            ", HTML.DIV({                                                                                      // 37
    "class": "container"                                                                                               // 38
  }, "\n                ", HTML.Raw('<div class="row">\n                    <div class="col s12 m12 l10 offset-l1">\n            <img src="/img/complete.png" class="responsive-img">\n            </div>\n                </div>'), "\n                ", HTML.DIV({
    "class": "row"                                                                                                     // 40
  }, "\n                ", HTML.DIV({                                                                                  // 41
    "class": "center"                                                                                                  // 42
  }, "\n                     ", HTML.DIV({                                                                             // 43
    "class": "col s12 m12 l10 offset-l1"                                                                               // 44
  }, "\n                    ", HTML.Raw('<h1 class="mont homeWhat">THERE YOU GO</h1>'), "\n                          ", HTML.Raw('<div class="divider green lighten-1"></div>'), "\n                         ", HTML.Raw('<h3 class="rale center">Sold? Let\'s begin a great success story together.</h3>'), "\n             ", HTML.DIV({
    "class": "center"                                                                                                  // 46
  }, "\n                  ", HTML.A({                                                                                  // 47
    href: function() {                                                                                                 // 48
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 49
    },                                                                                                                 // 50
    "class": "button outline"                                                                                          // 51
  }, "GET STARTED NOW"), "\n\n                "), "\n                    "), "\n                    "), "\n                "), "\n            "), "\n            \n        \n        ") ];
}));                                                                                                                   // 53
                                                                                                                       // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"approach.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/approach/approach.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.approach.rendered = function () {                                                                             // 1
  new WOW().init({ mobile: false });                                                                                   // 2
  $('.parallax').parallax();                                                                                           // 3
  $('.scrollspy').scrollSpy();                                                                                         // 4
};                                                                                                                     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"home":{"template.home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/home/template.home.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("home");                                                                                          // 2
Template["home"] = new Template("Template.home", (function() {                                                         // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n\n", HTML.DIV({                                   // 5
    "class": "code "                                                                                                   // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "container "                                                                                              // 8
  }, "\n ", HTML.DIV({                                                                                                 // 9
    "class": "center",                                                                                                 // 10
    style: "margin-top:4.4em;"                                                                                         // 11
  }, "\n 	", HTML.Raw('<img class="wow bounceIn" src="img/drawnPic.jpg" alt="" width="120px">'), "\n    ", HTML.H3({   // 12
    "class": "opensan bold wow fadeInDown"                                                                             // 13
  }, Blaze.View("lookup:_", function() {                                                                               // 14
    return Spacebars.mustache(view.lookup("_"), "developDesigner");                                                    // 15
  })), "\n    ", HTML.Raw('<p class="nanum flow-text wow fadeInUp">I <b class="bold">create powerful applications</b> and I <i class="fa fa-heart red-text"></i> what I do.</p>'), "\n    \n"), "\n    "), "\n  ", HTML.DIV({
    "class": "svg"                                                                                                     // 17
  }, "\n \n    ", HTML.Raw("<!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->"), "\n    ", HTML.SVG({
    version: "1.1",                                                                                                    // 19
    xmlns: "http://www.w3.org/2000/svg",                                                                               // 20
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                     // 21
    x: "0px",                                                                                                          // 22
    y: "0px",                                                                                                          // 23
    viewBox: "0 0 600 293",                                                                                            // 24
    style: "enable-background:new 0 0 600 293;",                                                                       // 25
    "xml:space": "preserve"                                                                                            // 26
  }, "\n", HTML.STYLE({                                                                                                // 27
    type: "text/css"                                                                                                   // 28
  }, "\n	.st0{fill:#EFEFEF;}\n	.st1{fill:#E3E4E5;}\n	.st2{fill:#3b5264;}\n	.st3{opacity:0.5;fill:#9E9E9E;}\n	.st4{fill:#5C5E60;}\n	.st5{fill:#404244;}\n	.st6{fill:#b8babc;}\n	.st7{fill:#FFFFFF;}\n	.st8{fill:#3C2415;}\n	.st9{fill:#432818;}\n	.st10{fill:#563726;}\n	.st11{fill:#FCFCFC;}\n	.st12{opacity:0.5;fill:#FCFCFC;}\n	.st13{fill:none;stroke:#EBECED;stroke-width:5;stroke-miterlimit:10;}\n	.st14{fill:#b5b5b5;}\n	.st15{fill:#EF7665;}\n	.st16{fill:#A4D9E4;}\n	.st17{fill:#B8C7CD;}\n	.st18{fill:#474A4E;}\n	.st19{fill:#65B6C1;}\n	.st20{fill:#F46C69;}\n	.st21{fill:#7C7F83;}\n	.st22{fill:#FFFFFE;}\n	.st23{fill:#F96759;}\n"), "\n \n", HTML.G({
    id: "macbook"                                                                                                      // 30
  }, "\n	", HTML.G({                                                                                                   // 31
    id: "macbook_1_"                                                                                                   // 32
  }, "\n		", HTML.G("\n			", HTML.PATH({                                                                               // 33
    "class": "st0",                                                                                                    // 34
    d: "M411.4,301.7H212.1c-0.3,0-0.5-0.2-0.5-0.5V163.3c0-0.3,0.2-0.5,0.5-0.5h199.3c0.3,0,0.5,0.2,0.5,0.5v137.9\n				C411.9,301.5,411.7,301.7,411.4,301.7z"
  }), "\n			", HTML.PATH({                                                                                             // 36
    "class": "st1",                                                                                                    // 37
    d: "M394.8,257.4h-166c-0.2,0-0.4-0.2-0.4-0.4v-81.2c0-0.2,0.2-0.4,0.4-0.4h166c0.2,0,0.4,0.2,0.4,0.4V257\n				C395.2,257.2,395,257.4,394.8,257.4z"
  }), "\n			", HTML.G("\n				", HTML.G("\n					", HTML.G("\n						", HTML.PATH({                                       // 39
    "class": "st2",                                                                                                    // 40
    d: "M242.8,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4H233c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H242.8z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 42
    "class": "st2",                                                                                                    // 43
    d: "M256.2,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H256.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 45
    "class": "st2",                                                                                                    // 46
    d: "M269.6,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H269.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 48
    "class": "st2",                                                                                                    // 49
    d: "M283,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H283z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 51
    "class": "st2",                                                                                                    // 52
    d: "M296.5,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H296.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 54
    "class": "st2",                                                                                                    // 55
    d: "M309.9,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H309.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 57
    "class": "st2",                                                                                                    // 58
    d: "M323.3,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H323.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 60
    "class": "st2",                                                                                                    // 61
    d: "M336.7,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H336.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 63
    "class": "st2",                                                                                                    // 64
    d: "M350.2,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H350.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 66
    "class": "st2",                                                                                                    // 67
    d: "M363.6,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H363.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 69
    "class": "st2",                                                                                                    // 70
    d: "M377.1,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H377.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 72
    "class": "st2",                                                                                                    // 73
    d: "M390.5,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H390.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 75
    "class": "st2",                                                                                                    // 76
    d: "M242.7,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H242.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 78
    "class": "st2",                                                                                                    // 79
    d: "M256.1,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H256.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 81
    "class": "st2",                                                                                                    // 82
    d: "M269.6,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H269.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 84
    "class": "st2",                                                                                                    // 85
    d: "M283,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H283z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 87
    "class": "st2",                                                                                                    // 88
    d: "M296.5,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H296.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 90
    "class": "st2",                                                                                                    // 91
    d: "M309.9,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H300c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H309.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 93
    "class": "st2",                                                                                                    // 94
    d: "M323.3,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H323.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 96
    "class": "st2",                                                                                                    // 97
    d: "M336.7,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H336.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 99
    "class": "st2",                                                                                                    // 100
    d: "M350.2,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H350.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 102
    "class": "st2",                                                                                                    // 103
    d: "M363.6,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H363.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 105
    "class": "st2",                                                                                                    // 106
    d: "M380.6,195.3h1.8h8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8h-1.8h-13.4\n							c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4H380.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 108
    "class": "st2",                                                                                                    // 109
    d: "M249.6,206.8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-16.5c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H249.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 111
    "class": "st2",                                                                                                    // 112
    d: "M253.2,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H253.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 114
    "class": "st2",                                                                                                    // 115
    d: "M276.8,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C276.7,206.8,276.8,206.7,276.8,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 117
    "class": "st2",                                                                                                    // 118
    d: "M280,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H280z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 120
    "class": "st2",                                                                                                    // 121
    d: "M293.5,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H293.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 123
    "class": "st2",                                                                                                    // 124
    d: "M306.9,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H306.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 126
    "class": "st2",                                                                                                    // 127
    d: "M330.5,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C330.4,206.8,330.5,206.7,330.5,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 129
    "class": "st2",                                                                                                    // 130
    d: "M343.9,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C343.8,206.8,343.9,206.7,343.9,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 132
    "class": "st2",                                                                                                    // 133
    d: "M357.4,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C357.3,206.8,357.4,206.7,357.4,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 135
    "class": "st2",                                                                                                    // 136
    d: "M370.8,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C370.7,206.8,370.8,206.7,370.8,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 138
    "class": "st2",                                                                                                    // 139
    d: "M383.9,206.8h6.5c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-6.5h-3.3h-6.5\n							c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h6.5H383.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 141
    "class": "st2",                                                                                                    // 142
    d: "M232.7,217.7c0,0.2,0.2,0.4,0.4,0.4h8.6h1.2h13.4c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-13.4\n							h-1.2h-8.6c-0.2,0-0.4,0.2-0.4,0.4V217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 144
    "class": "st2",                                                                                                    // 145
    d: "M259.6,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C259.7,209.6,259.6,209.8,259.6,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 147
    "class": "st2",                                                                                                    // 148
    d: "M283.5,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C283.3,218.1,283.5,217.9,283.5,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 150
    "class": "st2",                                                                                                    // 151
    d: "M286.4,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C286.6,209.6,286.4,209.8,286.4,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 153
    "class": "st2",                                                                                                    // 154
    d: "M299.8,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C300,209.6,299.8,209.8,299.8,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 156
    "class": "st2",                                                                                                    // 157
    d: "M313.3,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C313.4,209.6,313.3,209.8,313.3,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 159
    "class": "st2",                                                                                                    // 160
    d: "M337.2,217.7V210c0-0.2-0.2-0.4-0.4-0.4H327c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C337.1,218.1,337.2,217.9,337.2,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 162
    "class": "st2",                                                                                                    // 163
    d: "M350.7,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C350.5,218.1,350.7,217.9,350.7,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 165
    "class": "st2",                                                                                                    // 166
    d: "M364.1,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C363.9,218.1,364.1,217.9,364.1,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 168
    "class": "st2",                                                                                                    // 169
    d: "M367.4,209.6c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210\n							c0-0.2-0.2-0.4-0.4-0.4H367.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 171
    "class": "st2",                                                                                                    // 172
    d: "M390.6,209.6h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210\n							C391,209.8,390.8,209.6,390.6,209.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 174
    "class": "st2",                                                                                                    // 175
    d: "M232.7,229c0,0.2,0.2,0.4,0.4,0.4h13.4h1.7h8.1c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8.1\n							h-1.7h-13.4c-0.2,0-0.4,0.2-0.4,0.4V229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 177
    "class": "st2",                                                                                                    // 178
    d: "M275.4,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C275.2,229.4,275.4,229.2,275.4,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 180
    "class": "st2",                                                                                                    // 181
    d: "M288.4,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H288.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 183
    "class": "st2",                                                                                                    // 184
    d: "M302.2,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C302.1,229.4,302.2,229.2,302.2,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 186
    "class": "st2",                                                                                                    // 187
    d: "M315.6,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C315.5,229.4,315.6,229.2,315.6,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 189
    "class": "st2",                                                                                                    // 190
    d: "M329.1,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C328.9,229.4,329.1,229.2,329.1,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 192
    "class": "st2",                                                                                                    // 193
    d: "M342.1,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H342.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 195
    "class": "st2",                                                                                                    // 196
    d: "M355.6,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H355.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 198
    "class": "st2",                                                                                                    // 199
    d: "M369,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H369z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 201
    "class": "st2",                                                                                                    // 202
    d: "M372.2,221.3v7.8c0,0.2,0.2,0.4,0.4,0.4h8h1.8h8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8\n							h-1.8h-8C372.4,220.9,372.2,221,372.2,221.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 204
    "class": "st2",                                                                                                    // 205
    d: "M232.7,240.6c0,0.2,0.2,0.4,0.4,0.4h8.7h1.1h26c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-26\n							h-1.1h-8.7c-0.2,0-0.4,0.2-0.4,0.4V240.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 207
    "class": "st2",                                                                                                    // 208
    d: "M273.3,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H273.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 210
    "class": "st2",                                                                                                    // 211
    d: "M296.6,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H296.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 213
    "class": "st2",                                                                                                    // 214
    d: "M310,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H310z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 216
    "class": "st2",                                                                                                    // 217
    d: "M323.4,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H323.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 219
    "class": "st2",                                                                                                    // 220
    d: "M327,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H327z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 222
    "class": "st2",                                                                                                    // 223
    d: "M340.5,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H340.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 225
    "class": "st2",                                                                                                    // 226
    d: "M382.4,232.5h-1.7h-26.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h26.8h1.7h8.1\n							c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H382.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 228
    "class": "st2",                                                                                                    // 229
    d: "M233.1,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H233.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 231
    "class": "st2",                                                                                                    // 232
    d: "M246.5,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H246.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 234
    "class": "st2",                                                                                                    // 235
    d: "M259.9,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H259.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 237
    "class": "st2",                                                                                                    // 238
    d: "M273.3,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H273.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 240
    "class": "st2",                                                                                                    // 241
    d: "M328.7,244H327h-40.2c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4H327h1.7h8.1\n							c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H328.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 243
    "class": "st2",                                                                                                    // 244
    d: "M340.5,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H340.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 246
    "class": "st2",                                                                                                    // 247
    d: "M353.9,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H353.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 249
    "class": "st2",                                                                                                    // 250
    d: "M367.3,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H367.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 252
    "class": "st2",                                                                                                    // 253
    d: "M380.7,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H380.7z"
  }), "\n					"), "\n				"), "\n			"), "\n			", HTML.RECT({                                                            // 255
    x: "280.7",                                                                                                        // 256
    y: "261.6",                                                                                                        // 257
    "class": "st1",                                                                                                    // 258
    width: "63.2",                                                                                                     // 259
    height: "35.1"                                                                                                     // 260
  }), "\n		"), "\n		", HTML.G("\n			", HTML.RECT({                                                                     // 261
    x: "240",                                                                                                          // 262
    y: "161.8",                                                                                                        // 263
    "class": "st2",                                                                                                    // 264
    width: "143.5",                                                                                                    // 265
    height: "8.7"                                                                                                      // 266
  }), "\n			", HTML.G("\n				", HTML.PATH({                                                                            // 267
    "class": "st2",                                                                                                    // 268
    d: "M411.9,162.6c0,2.6-2,4.7-4.4,4.7H216c-2.4,0-4.4-2.1-4.4-4.7V56.7c0-2.6,2-4.7,4.4-4.7h191.5\n					c2.4,0,4.4,2.1,4.4,4.7V162.6z"
  }), "\n				", HTML.RECT({                                                                                            // 270
    x: "216.9",                                                                                                        // 271
    y: "60.1",                                                                                                         // 272
    "class": "st4",                                                                                                    // 273
    width: "189.7",                                                                                                    // 274
    height: "99.9"                                                                                                     // 275
  }), "\n				", HTML.POLYGON({                                                                                         // 276
    "class": "st5",                                                                                                    // 277
    points: "258.1,159.3 240,59.7 258.1,59.7 				"                                                                     // 278
  }), "\n			"), "\n		"), "\n	"), "\n"), "\n", HTML.G({                                                                 // 279
    id: "coffee"                                                                                                       // 280
  }, "\n	", HTML.G({                                                                                                   // 281
    id: "coffee_1_"                                                                                                    // 282
  }, "\n		", HTML.G("\n			", HTML.PATH({                                                                               // 283
    "class": "st6",                                                                                                    // 284
    d: "M534.1,218.8l5.1-5.1c-2.6-3.5-5.7-6.5-9.3-8.9l-4.8,4.8L534.1,218.8z"                                           // 285
  }), "\n			", HTML.CIRCLE({                                                                                           // 286
    "class": "st7",                                                                                                    // 287
    cx: "508.5",                                                                                                       // 288
    cy: "236.5",                                                                                                       // 289
    r: "33.6"                                                                                                          // 290
  }), "\n			", HTML.CIRCLE({                                                                                           // 291
    "class": "st6",                                                                                                    // 292
    cx: "508.5",                                                                                                       // 293
    cy: "236.5",                                                                                                       // 294
    r: "31.2"                                                                                                          // 295
  }), "\n			", HTML.CIRCLE({                                                                                           // 296
    "class": "st8",                                                                                                    // 297
    cx: "508.5",                                                                                                       // 298
    cy: "236.5",                                                                                                       // 299
    r: "28.1"                                                                                                          // 300
  }), "\n			", HTML.CIRCLE({                                                                                           // 301
    "class": "st9",                                                                                                    // 302
    cx: "508.5",                                                                                                       // 303
    cy: "236.5",                                                                                                       // 304
    r: "24.9"                                                                                                          // 305
  }), "\n			", HTML.CIRCLE({                                                                                           // 306
    "class": "st10",                                                                                                   // 307
    cx: "508.5",                                                                                                       // 308
    cy: "236.5",                                                                                                       // 309
    r: "21"                                                                                                            // 310
  }), "\n			", HTML.CIRCLE({                                                                                           // 311
    "class": "st9",                                                                                                    // 312
    cx: "508.5",                                                                                                       // 313
    cy: "236.5",                                                                                                       // 314
    r: "19.9"                                                                                                          // 315
  }), "\n			", HTML.PATH({                                                                                             // 316
    "class": "st11",                                                                                                   // 317
    d: "M539.2,213.7l6.6-6.6l-9.1-9.1l-6.8,6.8C533.5,207.2,536.6,210.2,539.2,213.7z"                                   // 318
  }), "\n		"), "\n		", HTML.CIRCLE({                                                                                   // 319
    "class": "st10",                                                                                                   // 320
    cx: "508.5",                                                                                                       // 321
    cy: "236.5",                                                                                                       // 322
    r: "5"                                                                                                             // 323
  }), "\n		", HTML.CIRCLE({                                                                                            // 324
    "class": "st8",                                                                                                    // 325
    cx: "508.5",                                                                                                       // 326
    cy: "236.5",                                                                                                       // 327
    r: "4.5"                                                                                                           // 328
  }), "\n		", HTML.PATH({                                                                                              // 329
    "class": "st12",                                                                                                   // 330
    d: "M508.5,260.4L508.5,260.4c-13,0-23.6-10.5-23.9-23.4c0-0.3-0.2-0.5-0.5-0.5h-0.1c-0.1,0-0.2,0.1-0.3,0.1\n			s-0.1,0.2-0.1,0.3c0.3,13.5,11.3,24.4,24.9,24.4l0,0V260.4z"
  }), "\n	"), "\n"), "\n", HTML.G({                                                                                    // 332
    id: "smoke_1_"                                                                                                     // 333
  }, "\n	", HTML.G({                                                                                                   // 334
    id: "smoke"                                                                                                        // 335
  }, "\n		", HTML.PATH({                                                                                               // 336
    "class": "st13",                                                                                                   // 337
    d: "M496.3,167.7c0,0,5.6,5.1,0,12.1c-5.6,7-0.5,11.3,0,12.4"                                                        // 338
  }), "\n		", HTML.PATH({                                                                                              // 339
    "class": "st13",                                                                                                   // 340
    d: "M508.9,160.9c0,0,8,7.3,0,17.2s-0.7,16.2,0,17.6"                                                                // 341
  }), "\n		", HTML.PATH({                                                                                              // 342
    "class": "st13",                                                                                                   // 343
    d: "M520.9,167.7c0,0,5.6,5.1,0,12.1c-5.6,7-0.5,11.3,0,12.4"                                                        // 344
  }), "\n	"), "\n"), "\n", HTML.G({                                                                                    // 345
    id: "ipad"                                                                                                         // 346
  }, "\n	", HTML.G({                                                                                                   // 347
    id: "ipad_1_"                                                                                                      // 348
  }, "\n		", HTML.PATH({                                                                                               // 349
    "class": "st2",                                                                                                    // 350
    d: "M177.8,294.9c0.2,0.4,0,1-0.4,1.2l-92.2,44.7c-0.4,0.2-1,0-1.2-0.4L27.9,224.7c-1.3-2.8-0.2-6.1,2.6-7.4\n			l83.7-40.6c2.8-1.3,6.1-0.2,7.4,2.6L177.8,294.9z"
  }), "\n		\n			", HTML.RECT({                                                                                         // 352
    x: "54.4",                                                                                                         // 353
    y: "200.3",                                                                                                        // 354
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -102.2956 70.3137)",                                               // 355
    "class": "st14",                                                                                                   // 356
    width: "94.8",                                                                                                     // 357
    height: "114.7"                                                                                                    // 358
  }), "\n		\n			", HTML.RECT({                                                                                         // 359
    x: "41.8",                                                                                                         // 360
    y: "212.1",                                                                                                        // 361
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -85.5084 56.8004)",                                                // 362
    "class": "st15",                                                                                                   // 363
    width: "78.1",                                                                                                     // 364
    height: "4.7"                                                                                                      // 365
  }), "\n		\n			", HTML.RECT({                                                                                         // 366
    x: "53.4",                                                                                                         // 367
    y: "231.3",                                                                                                        // 368
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -99.0117 55.6345)",                                                // 369
    "class": "st16",                                                                                                   // 370
    width: "36.2",                                                                                                     // 371
    height: "23.8"                                                                                                     // 372
  }), "\n		\n			", HTML.RECT({                                                                                         // 373
    x: "91.1",                                                                                                         // 374
    y: "213",                                                                                                          // 375
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -87.2538 70.2411)",                                                // 376
    "class": "st16",                                                                                                   // 377
    width: "36.2",                                                                                                     // 378
    height: "23.8"                                                                                                     // 379
  }), "\n		\n			", HTML.RECT({                                                                                         // 380
    x: "59.3",                                                                                                         // 381
    y: "250.2",                                                                                                        // 382
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -99.5508 68.1041)",                                                // 383
    "class": "st17",                                                                                                   // 384
    width: "78.1",                                                                                                     // 385
    height: "0.9"                                                                                                      // 386
  }), "\n		\n			", HTML.RECT({                                                                                         // 387
    x: "61.3",                                                                                                         // 388
    y: "254.2",                                                                                                        // 389
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -101.1277 69.3735)",                                               // 390
    "class": "st17",                                                                                                   // 391
    width: "78.1",                                                                                                     // 392
    height: "0.9"                                                                                                      // 393
  }), "\n		\n			", HTML.RECT({                                                                                         // 394
    x: "63.3",                                                                                                         // 395
    y: "258.3",                                                                                                        // 396
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -102.7046 70.6429)",                                               // 397
    "class": "st17",                                                                                                   // 398
    width: "78.1",                                                                                                     // 399
    height: "0.9"                                                                                                      // 400
  }), "\n		\n			", HTML.RECT({                                                                                         // 401
    x: "65.3",                                                                                                         // 402
    y: "262.4",                                                                                                        // 403
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -104.2816 71.9123)",                                               // 404
    "class": "st17",                                                                                                   // 405
    width: "78.1",                                                                                                     // 406
    height: "0.9"                                                                                                      // 407
  }), "\n		\n			", HTML.RECT({                                                                                         // 408
    x: "67.2",                                                                                                         // 409
    y: "266.4",                                                                                                        // 410
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -105.8585 73.1817)",                                               // 411
    "class": "st17",                                                                                                   // 412
    width: "78.1",                                                                                                     // 413
    height: "0.9"                                                                                                      // 414
  }), "\n		\n			", HTML.RECT({                                                                                         // 415
    x: "69.2",                                                                                                         // 416
    y: "270.5",                                                                                                        // 417
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -107.4355 74.4511)",                                               // 418
    "class": "st17",                                                                                                   // 419
    width: "78.1",                                                                                                     // 420
    height: "0.9"                                                                                                      // 421
  }), "\n		\n			", HTML.RECT({                                                                                         // 422
    x: "71.2",                                                                                                         // 423
    y: "274.5",                                                                                                        // 424
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -109.0124 75.7205)",                                               // 425
    "class": "st17",                                                                                                   // 426
    width: "78.1",                                                                                                     // 427
    height: "0.9"                                                                                                      // 428
  }), "\n		\n			", HTML.RECT({                                                                                         // 429
    x: "73.2",                                                                                                         // 430
    y: "278.6",                                                                                                        // 431
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -110.5893 76.9898)",                                               // 432
    "class": "st17",                                                                                                   // 433
    width: "78.1",                                                                                                     // 434
    height: "0.9"                                                                                                      // 435
  }), "\n		\n			", HTML.RECT({                                                                                         // 436
    x: "80.1",                                                                                                         // 437
    y: "281.5",                                                                                                        // 438
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -116.1659 81.4789)",                                               // 439
    "class": "st16",                                                                                                   // 440
    width: "78.1",                                                                                                     // 441
    height: "23.8"                                                                                                     // 442
  }), "\n	"), "\n"), "\n", HTML.G({                                                                                    // 443
    id: "coder"                                                                                                        // 444
  }, "\n	", HTML.G({                                                                                                   // 445
    id: "coder_1_"                                                                                                     // 446
  }, "\n		", HTML.RECT({                                                                                               // 447
    x: "258.1",                                                                                                        // 448
    y: "31.3",                                                                                                         // 449
    "class": "st18",                                                                                                   // 450
    width: "106.5",                                                                                                    // 451
    height: "127.9"                                                                                                    // 452
  }), "\n		", HTML.RECT({                                                                                              // 453
    x: "258.1",                                                                                                        // 454
    y: "23.6",                                                                                                         // 455
    "class": "st2",                                                                                                    // 456
    width: "106.5",                                                                                                    // 457
    height: "7.7"                                                                                                      // 458
  }), "\n		", HTML.G("\n			", HTML.RECT({                                                                              // 459
    x: "267.5",                                                                                                        // 460
    y: "39.8",                                                                                                         // 461
    "class": "st19",                                                                                                   // 462
    width: "8.8",                                                                                                      // 463
    height: "2"                                                                                                        // 464
  }), "\n			", HTML.RECT({                                                                                             // 465
    x: "267.5",                                                                                                        // 466
    y: "43.9",                                                                                                         // 467
    "class": "st20",                                                                                                   // 468
    width: "13.8",                                                                                                     // 469
    height: "2"                                                                                                        // 470
  }), "\n			", HTML.RECT({                                                                                             // 471
    x: "272.5",                                                                                                        // 472
    y: "51.3",                                                                                                         // 473
    "class": "st21",                                                                                                   // 474
    width: "26.1",                                                                                                     // 475
    height: "2"                                                                                                        // 476
  }), "\n			", HTML.RECT({                                                                                             // 477
    x: "303.3",                                                                                                        // 478
    y: "51.3",                                                                                                         // 479
    "class": "st22",                                                                                                   // 480
    width: "26.6",                                                                                                     // 481
    height: "2"                                                                                                        // 482
  }), "\n			", HTML.RECT({                                                                                             // 483
    x: "276.3",                                                                                                        // 484
    y: "56",                                                                                                           // 485
    "class": "st20",                                                                                                   // 486
    width: "9.3",                                                                                                      // 487
    height: "2"                                                                                                        // 488
  }), "\n			", HTML.RECT({                                                                                             // 489
    x: "290",                                                                                                          // 490
    y: "56",                                                                                                           // 491
    "class": "st22",                                                                                                   // 492
    width: "17.5",                                                                                                     // 493
    height: "2"                                                                                                        // 494
  }), "\n			", HTML.RECT({                                                                                             // 495
    x: "281.3",                                                                                                        // 496
    y: "59.7",                                                                                                         // 497
    "class": "st21",                                                                                                   // 498
    width: "22",                                                                                                       // 499
    height: "2"                                                                                                        // 500
  }), "\n			", HTML.RECT({                                                                                             // 501
    x: "307.5",                                                                                                        // 502
    y: "59.7",                                                                                                         // 503
    "class": "st21",                                                                                                   // 504
    width: "9.1",                                                                                                      // 505
    height: "2"                                                                                                        // 506
  }), "\n			", HTML.RECT({                                                                                             // 507
    x: "321.1",                                                                                                        // 508
    y: "59.7",                                                                                                         // 509
    "class": "st19",                                                                                                   // 510
    width: "17.3",                                                                                                     // 511
    height: "2"                                                                                                        // 512
  }), "\n			", HTML.RECT({                                                                                             // 513
    x: "285.5",                                                                                                        // 514
    y: "63.8",                                                                                                         // 515
    "class": "st21",                                                                                                   // 516
    width: "26.5",                                                                                                     // 517
    height: "2"                                                                                                        // 518
  }), "\n			", HTML.RECT({                                                                                             // 519
    x: "316.6",                                                                                                        // 520
    y: "63.8",                                                                                                         // 521
    "class": "st22",                                                                                                   // 522
    width: "39.3",                                                                                                     // 523
    height: "2"                                                                                                        // 524
  }), "\n			", HTML.RECT({                                                                                             // 525
    x: "272.5",                                                                                                        // 526
    y: "75.8",                                                                                                         // 527
    "class": "st22",                                                                                                   // 528
    width: "17.5",                                                                                                     // 529
    height: "2"                                                                                                        // 530
  }), "\n			", HTML.RECT({                                                                                             // 531
    x: "267.6",                                                                                                        // 532
    y: "71.6",                                                                                                         // 533
    "class": "st21",                                                                                                   // 534
    width: "17.9",                                                                                                     // 535
    height: "2"                                                                                                        // 536
  }), "\n			", HTML.RECT({                                                                                             // 537
    x: "267.6",                                                                                                        // 538
    y: "83.6",                                                                                                         // 539
    "class": "st19",                                                                                                   // 540
    width: "13.3",                                                                                                     // 541
    height: "2"                                                                                                        // 542
  }), "\n			", HTML.RECT({                                                                                             // 543
    x: "285.4",                                                                                                        // 544
    y: "83.6",                                                                                                         // 545
    "class": "st21",                                                                                                   // 546
    width: "31.2",                                                                                                     // 547
    height: "2"                                                                                                        // 548
  }), "\n			", HTML.RECT({                                                                                             // 549
    x: "272.5",                                                                                                        // 550
    y: "87.3",                                                                                                         // 551
    "class": "st21",                                                                                                   // 552
    width: "31.2",                                                                                                     // 553
    height: "2"                                                                                                        // 554
  }), "\n			", HTML.RECT({                                                                                             // 555
    x: "276.7",                                                                                                        // 556
    y: "91.4",                                                                                                         // 557
    "class": "st22",                                                                                                   // 558
    width: "13.3",                                                                                                     // 559
    height: "2"                                                                                                        // 560
  }), "\n			", HTML.RECT({                                                                                             // 561
    x: "294.2",                                                                                                        // 562
    y: "91.4",                                                                                                         // 563
    "class": "st23",                                                                                                   // 564
    width: "18.1",                                                                                                     // 565
    height: "2"                                                                                                        // 566
  }), "\n			", HTML.RECT({                                                                                             // 567
    x: "316.6",                                                                                                        // 568
    y: "91.4",                                                                                                         // 569
    "class": "st21",                                                                                                   // 570
    width: "13.3",                                                                                                     // 571
    height: "2"                                                                                                        // 572
  }), "\n			", HTML.RECT({                                                                                             // 573
    x: "280.9",                                                                                                        // 574
    y: "95.5",                                                                                                         // 575
    "class": "st19",                                                                                                   // 576
    width: "4.5",                                                                                                      // 577
    height: "2"                                                                                                        // 578
  }), "\n			", HTML.RECT({                                                                                             // 579
    x: "290",                                                                                                          // 580
    y: "95.5",                                                                                                         // 581
    "class": "st21",                                                                                                   // 582
    width: "17.6",                                                                                                     // 583
    height: "2"                                                                                                        // 584
  }), "\n			", HTML.RECT({                                                                                             // 585
    x: "312.3",                                                                                                        // 586
    y: "95.5",                                                                                                         // 587
    "class": "st21",                                                                                                   // 588
    width: "26.4",                                                                                                     // 589
    height: "2"                                                                                                        // 590
  }), "\n			", HTML.RECT({                                                                                             // 591
    x: "285.1",                                                                                                        // 592
    y: "99.2",                                                                                                         // 593
    "class": "st22",                                                                                                   // 594
    width: "31.2",                                                                                                     // 595
    height: "2"                                                                                                        // 596
  }), "\n			", HTML.RECT({                                                                                             // 597
    x: "267.6",                                                                                                        // 598
    y: "107",                                                                                                          // 599
    "class": "st23",                                                                                                   // 600
    width: "9",                                                                                                        // 601
    height: "2"                                                                                                        // 602
  }), "\n			", HTML.RECT({                                                                                             // 603
    x: "272.5",                                                                                                        // 604
    y: "111.1",                                                                                                        // 605
    "class": "st19",                                                                                                   // 606
    width: "17.6",                                                                                                     // 607
    height: "2"                                                                                                        // 608
  }), "\n			", HTML.RECT({                                                                                             // 609
    x: "294.2",                                                                                                        // 610
    y: "111.1",                                                                                                        // 611
    "class": "st22",                                                                                                   // 612
    width: "53.2",                                                                                                     // 613
    height: "2"                                                                                                        // 614
  }), "\n			", HTML.RECT({                                                                                             // 615
    x: "276.9",                                                                                                        // 616
    y: "115.2",                                                                                                        // 617
    "class": "st21",                                                                                                   // 618
    width: "26.4",                                                                                                     // 619
    height: "2"                                                                                                        // 620
  }), "\n			", HTML.RECT({                                                                                             // 621
    x: "307.6",                                                                                                        // 622
    y: "115.2",                                                                                                        // 623
    "class": "st21",                                                                                                   // 624
    width: "22.3",                                                                                                     // 625
    height: "2"                                                                                                        // 626
  }), "\n			", HTML.RECT({                                                                                             // 627
    x: "281",                                                                                                          // 628
    y: "119.3",                                                                                                        // 629
    "class": "st21",                                                                                                   // 630
    width: "35.6",                                                                                                     // 631
    height: "2"                                                                                                        // 632
  }), "\n			", HTML.RECT({                                                                                             // 633
    x: "276.9",                                                                                                        // 634
    y: "127.2",                                                                                                        // 635
    "class": "st21",                                                                                                   // 636
    width: "44.6",                                                                                                     // 637
    height: "2"                                                                                                        // 638
  }), "\n			", HTML.RECT({                                                                                             // 639
    x: "281.3",                                                                                                        // 640
    y: "130.8",                                                                                                        // 641
    "class": "st19",                                                                                                   // 642
    width: "22.4",                                                                                                     // 643
    height: "2"                                                                                                        // 644
  }), "\n			", HTML.RECT({                                                                                             // 645
    x: "307.5",                                                                                                        // 646
    y: "130.8",                                                                                                        // 647
    "class": "st22",                                                                                                   // 648
    width: "9.6",                                                                                                      // 649
    height: "2"                                                                                                        // 650
  }), "\n			", HTML.RECT({                                                                                             // 651
    x: "321.5",                                                                                                        // 652
    y: "130.8",                                                                                                        // 653
    "class": "st23",                                                                                                   // 654
    width: "35",                                                                                                       // 655
    height: "2"                                                                                                        // 656
  }), "\n			", HTML.RECT({                                                                                             // 657
    x: "285.3",                                                                                                        // 658
    y: "135.4",                                                                                                        // 659
    "class": "st21",                                                                                                   // 660
    width: "22.9",                                                                                                     // 661
    height: "2"                                                                                                        // 662
  }), "\n			", HTML.RECT({                                                                                             // 663
    x: "312.3",                                                                                                        // 664
    y: "135.4",                                                                                                        // 665
    "class": "st21",                                                                                                   // 666
    width: "13.7",                                                                                                     // 667
    height: "2"                                                                                                        // 668
  }), "\n			", HTML.RECT({                                                                                             // 669
    x: "330.4",                                                                                                        // 670
    y: "135.4",                                                                                                        // 671
    "class": "st21",                                                                                                   // 672
    width: "8.6",                                                                                                      // 673
    height: "2"                                                                                                        // 674
  }), "\n			", HTML.RECT({                                                                                             // 675
    x: "268.2",                                                                                                        // 676
    y: "143.1",                                                                                                        // 677
    "class": "st19",                                                                                                   // 678
    width: "26.9",                                                                                                     // 679
    height: "2"                                                                                                        // 680
  }), "\n			", HTML.RECT({                                                                                             // 681
    x: "273.1",                                                                                                        // 682
    y: "147.2",                                                                                                        // 683
    "class": "st21",                                                                                                   // 684
    width: "17.7",                                                                                                     // 685
    height: "2"                                                                                                        // 686
  }), "\n			", HTML.RECT({                                                                                             // 687
    x: "295",                                                                                                          // 688
    y: "147.2",                                                                                                        // 689
    "class": "st22",                                                                                                   // 690
    width: "17.7",                                                                                                     // 691
    height: "2"                                                                                                        // 692
  }), "\n		"), "\n	"), "\n"), "\n"), "\n  "), "\n"), HTML.Raw('\n\n<section style="padding:2em;margin-top:2em">\n\n</section>\n    '), HTML.SECTION("\n    ", HTML.DIV({
    "class": "row"                                                                                                     // 694
  }, "\n        ", HTML.DIV({                                                                                          // 695
    "class": "container"                                                                                               // 696
  }, "\n      \n        ", HTML.DIV({                                                                                  // 697
    "class": "col s12 m12 l10 offset-l1"                                                                               // 698
  }, "\n            ", HTML.H4({                                                                                       // 699
    "class": "  center  nanum"                                                                                         // 700
  }, Blaze.View("lookup:_", function() {                                                                               // 701
    return Spacebars.mustache(view.lookup("_"), "whatWeDo");                                                           // 702
  })), "\n            ", HTML.Raw('<div class="divider red  lighten-1" style="margin:0 auto;width:120px"></div>'), "\n            ", HTML.P({
    "class": "flow-text center"                                                                                        // 704
  }, Blaze.View("lookup:_", function() {                                                                               // 705
    return Spacebars.mustache(view.lookup("_"), "mission1");                                                           // 706
  }), " "), "            \n            "), "\n        "), "\n        "), "\n    "), "\n    ", HTML.DIV({               // 707
    "class": "center container"                                                                                        // 708
  }, "\n       ", HTML.P({                                                                                             // 709
    "class": "nanum flow-text"                                                                                         // 710
  }, "  ", Blaze.View("lookup:_", function() {                                                                         // 711
    return Spacebars.mustache(view.lookup("_"), "roadTo");                                                             // 712
  }), " ", HTML.B("MVP (Most Valued Product)", Blaze.View("lookup:_", function() {                                     // 713
    return Spacebars.mustache(view.lookup("_"), "koreaAdd");                                                           // 714
  })), " How?"), "\n    "), "\n    ", HTML.SECTION({                                                                   // 715
    "class": "iconset"                                                                                                 // 716
  }, "\n    ", HTML.DIV({                                                                                              // 717
    "class": "row"                                                                                                     // 718
  }, "\n        ", HTML.DIV({                                                                                          // 719
    "class": "col s12 m12 l4"                                                                                          // 720
  }, "\n        ", HTML.DIV({                                                                                          // 721
    "class": "center"                                                                                                  // 722
  }, "\n            ", HTML.Raw('<img src="/img/commandline.svg" height="120">'), "\n            ", HTML.H5({          // 723
    "class": "grey-text text-darken-2 rale"                                                                            // 724
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 725
    return Spacebars.mustache(view.lookup("_"), "innovative");                                                         // 726
  }), " Native Container")), "\n            ", HTML.P(Blaze.View("lookup:_", function() {                              // 727
    return Spacebars.mustache(view.lookup("_"), "weBuild");                                                            // 728
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 729
    return Spacebars.mustache(view.lookup("_"), "reactiveJavascript");                                                 // 730
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 731
    return Spacebars.mustache(view.lookup("_"), "fullest");                                                            // 732
  })), "\n            "), "\n        "), "\n         ", HTML.DIV({                                                     // 733
    "class": "col s12 m12 l4"                                                                                          // 734
  }, "\n        ", HTML.DIV({                                                                                          // 735
    "class": "center"                                                                                                  // 736
  }, "\n              ", HTML.Raw('<img src="/img/reactive.svg" height="120">'), "\n             ", HTML.H5({          // 737
    "class": "grey-text text-darken-2 rale"                                                                            // 738
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 739
    return Spacebars.mustache(view.lookup("_"), "bridging");                                                           // 740
  }))), "\n             ", HTML.P(Blaze.View("lookup:_", function() {                                                  // 741
    return Spacebars.mustache(view.lookup("_"), "embrace");                                                            // 742
  }), HTML.Raw("<br>"), Blaze.View("lookup:_", function() {                                                            // 743
    return Spacebars.mustache(view.lookup("_"), "dynamicReactive");                                                    // 744
  }), " ", HTML.Raw("<br>"), Blaze.View("lookup:_", function() {                                                       // 745
    return Spacebars.mustache(view.lookup("_"), "21stC");                                                              // 746
  })), "\n             "), "\n        "), "\n         ", HTML.DIV({                                                    // 747
    "class": "col s12 m12 l4"                                                                                          // 748
  }, "\n        ", HTML.DIV({                                                                                          // 749
    "class": "center"                                                                                                  // 750
  }, "\n              ", HTML.Raw('<img src="/img/dragndrop.svg" height="120">'), "\n             ", HTML.H5({         // 751
    "class": "grey-text text-darken-2 rale"                                                                            // 752
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 753
    return Spacebars.mustache(view.lookup("_"), "tailored");                                                           // 754
  }))), "\n              ", HTML.P(Blaze.View("lookup:_", function() {                                                 // 755
    return Spacebars.mustache(view.lookup("_"), "createProducts");                                                     // 756
  }), HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                       // 757
    return Spacebars.mustache(view.lookup("_"), "youInMind");                                                          // 758
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 759
    return Spacebars.mustache(view.lookup("_"), "createSuccess");                                                      // 760
  })), "\n             "), "\n        "), "\n        "), "\n    "), "\n            ", HTML.SECTION({                   // 761
    "class": "callToAction"                                                                                            // 762
  }, "\n                ", HTML.DIV({                                                                                  // 763
    "class": "center"                                                                                                  // 764
  }, "\n                     ", HTML.A({                                                                               // 765
    href: function() {                                                                                                 // 766
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 767
    },                                                                                                                 // 768
    "class": "button outline"                                                                                          // 769
  }, Blaze.View("lookup:_", function() {                                                                               // 770
    return Spacebars.mustache(view.lookup("_"), "learnMore");                                                          // 771
  })), "\n\n                "), "\n            \n            "), "\n                       ", HTML.SECTION({           // 772
    "class": "butGof",                                                                                                 // 773
    style: "margin-top:5em"                                                                                            // 774
  }, "\n    ", HTML.DIV({                                                                                              // 775
    "class": "row"                                                                                                     // 776
  }, "\n        ", HTML.DIV({                                                                                          // 777
    "class": "container"                                                                                               // 778
  }, "\n        ", HTML.DIV({                                                                                          // 779
    "class": "col s12 m12 l10 offset-l1"                                                                               // 780
  }, "\n            ", HTML.H4({                                                                                       // 781
    "class": "  center  nanum"                                                                                         // 782
  }, Blaze.View("lookup:_", function() {                                                                               // 783
    return Spacebars.mustache(view.lookup("_"), "someOfOurWork");                                                      // 784
  })), "\n             ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n  ", HTML.P({
    "class": "flow-text center"                                                                                        // 786
  }, Blaze.View("lookup:_", function() {                                                                               // 787
    return Spacebars.mustache(view.lookup("_"), "allOfOurWebsites");                                                   // 788
  }), HTML.Raw("<br>"), Blaze.View("lookup:_", function() {                                                            // 789
    return Spacebars.mustache(view.lookup("_"), "fastSleek");                                                          // 790
  })), "\n            \n                \n             \n            "), "\n        "), "\n                              "), "\n                              ", HTML.Raw('<div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/cdp.png">\n              \n            </div>\n           \n            \n          </div>\n          \n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/jesuslove.png">\n              \n            </div>\n            \n            \n          </div>\n     \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/sfmvdm.png">\n              \n            </div>\n            \n            \n          </div>\n      \n                                            \n                                  </div>\n                              </div>'), "\n                   ", HTML.DIV({
    "class": "center"                                                                                                  // 792
  }, "\n                  ", HTML.A({                                                                                  // 793
    href: function() {                                                                                                 // 794
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 795
    },                                                                                                                 // 796
    "class": "button outline"                                                                                          // 797
  }, Blaze.View("lookup:_", function() {                                                                               // 798
    return Spacebars.mustache(view.lookup("_"), "viewMore");                                                           // 799
  })), "\n\n                "), "\n            "), "\n              ", HTML.SECTION({                                  // 800
    "class": "butGof",                                                                                                 // 801
    style: "margin-top:5em"                                                                                            // 802
  }, "\n    ", HTML.DIV({                                                                                              // 803
    "class": "row"                                                                                                     // 804
  }, "\n        ", HTML.DIV({                                                                                          // 805
    "class": "container"                                                                                               // 806
  }, "\n        ", HTML.DIV({                                                                                          // 807
    "class": "col s12 m12 l10 offset-l1"                                                                               // 808
  }, "\n            ", HTML.H4({                                                                                       // 809
    "class": "  center  nanum"                                                                                         // 810
  }, Blaze.View("lookup:_", function() {                                                                               // 811
    return Spacebars.mustache(view.lookup("_"), "howWeWork");                                                          // 812
  })), "\n                ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n             \n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row "                                                                                                    // 814
  }, " \n        ", HTML.DIV({                                                                                         // 815
    "class": "container"                                                                                               // 816
  }, "\n            ", HTML.DIV({                                                                                      // 817
    "class": "col s12 m12 l6"                                                                                          // 818
  }, "\n            ", HTML.H3({                                                                                       // 819
    style: "margin-top:1em;",                                                                                          // 820
    "class": "grey-text text-darken-3 mont"                                                                            // 821
  }, Blaze.View("lookup:_", function() {                                                                               // 822
    return Spacebars.mustache(view.lookup("_"), "madeWith");                                                           // 823
  }), " ", HTML.Raw('<i class="fa fa-heart red-text"></i>'), " ", Blaze.View("lookup:_", function() {                  // 824
    return Spacebars.mustache(view.lookup("_"), "madeWithK");                                                          // 825
  })), "\n                ", HTML.P({                                                                                  // 826
    "class": "flow-text grey-text text-darken-2"                                                                       // 827
  }, " \n                  ", Blaze.View("lookup:_", function() {                                                      // 828
    return Spacebars.mustache(view.lookup("_"), "insteadOf");                                                          // 829
  }), " – ", HTML.SPAN({                                                                                               // 830
    "class": "red-text text-lighten-1"                                                                                 // 831
  }, "  ", Blaze.View("lookup:_", function() {                                                                         // 832
    return Spacebars.mustache(view.lookup("_"), "walkAway");                                                           // 833
  })), "\n\n"), "\n ", HTML.Raw("<br>"), "\n     \n            "), "\n            ", HTML.Raw('<div class="col s12 m12 l6 hide-on-small-only">\n                <div class="Wrapper">\n            <img style="margin-top:5em;" src="/img/implementation.gif" class="butGIf">\n                </div>\n            </div>'), "\n            "), "\n        "), "\n        "), "\n    "), "\n                \n            \n            ", HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 835
  }, "\n                ", HTML.DIV({                                                                                  // 836
    "class": "row"                                                                                                     // 837
  }, "\n        ", HTML.DIV({                                                                                          // 838
    "class": "container"                                                                                               // 839
  }, "\n        ", HTML.DIV({                                                                                          // 840
    "class": "col s12 m12 l12"                                                                                         // 841
  }, "\n            ", HTML.H1({                                                                                       // 842
    "class": "nanum center homeWhat"                                                                                   // 843
  }, Blaze.View("lookup:_", function() {                                                                               // 844
    return Spacebars.mustache(view.lookup("_"), "areYouGame");                                                         // 845
  })), "\n            ", HTML.Raw('<div class="divider red lighten-1"></div>'), "\n      \n             ", HTML.H3({   // 846
    "class": "center nanum grey-text text-darken-3"                                                                    // 847
  }, Blaze.View("lookup:_", function() {                                                                               // 848
    return Spacebars.mustache(view.lookup("_"), "loveToHear");                                                         // 849
  })), "\n                ", HTML.DIV({                                                                                // 850
    "class": "center"                                                                                                  // 851
  }, "\n                 ", HTML.P({                                                                                   // 852
    "class": "flow-text nanum"                                                                                         // 853
  }, Blaze.View("lookup:_", function() {                                                                               // 854
    return Spacebars.mustache(view.lookup("_"), "alwaysOpen");                                                         // 855
  }), "\n                 ", HTML.Raw("<br>"), "\n                 ", Blaze.View("lookup:_", function() {              // 856
    return Spacebars.mustache(view.lookup("_"), "coffee");                                                             // 857
  }), "\n                 "), "\n                  ", HTML.A({                                                         // 858
    href: function() {                                                                                                 // 859
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 860
    },                                                                                                                 // 861
    "class": "button outline"                                                                                          // 862
  }, Blaze.View("lookup:_", function() {                                                                               // 863
    return Spacebars.mustache(view.lookup("_"), "getStarted");                                                         // 864
  })), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 866
                                                                                                                       // 867
Template.__checkName("fixedHeader");                                                                                   // 868
Template["fixedHeader"] = new Template("Template.fixedHeader", (function() {                                           // 869
  var view = this;                                                                                                     // 870
  return HTML.DIV({                                                                                                    // 871
    "class": " "                                                                                                       // 872
  }, "\n  ", HTML.NAV({                                                                                                // 873
    "class": "white"                                                                                                   // 874
  }, "\n     \n  ", HTML.DIV({                                                                                         // 875
    "class": "nav-wrapper"                                                                                             // 876
  }, "\n        ", HTML.DIV({                                                                                          // 877
    "class": ""                                                                                                        // 878
  }, "\n        ", HTML.Raw('<div class="brand-logo center hide-on-small-only">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n              ", HTML.Raw('<div class="brand-logos brand-logo show-on-small-only hide-on-med-and-up">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n            ", HTML.Raw('<a href="#" data-activates="slide-out2" class="red-text button-collapse left" style="margin-left:15px;"><i class="fas fa-bars"></i></a>'), "\n           \n         \n            \n      \n      ", HTML.UL({
    "class": "hide-on-med-and-down left"                                                                               // 880
  }, "\n        ", HTML.LI({                                                                                           // 881
    "class": "nanum"                                                                                                   // 882
  }, HTML.A({                                                                                                          // 883
    href: function() {                                                                                                 // 884
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 885
    },                                                                                                                 // 886
    "class": "grey-text  text-darken-2 "                                                                               // 887
  }, Blaze.View("lookup:_", function() {                                                                               // 888
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 889
  }))), "\n  \n  \n        ", HTML.LI({                                                                                // 890
    "class": "nanum"                                                                                                   // 891
  }, HTML.A({                                                                                                          // 892
    href: function() {                                                                                                 // 893
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 894
    },                                                                                                                 // 895
    "class": "grey-text text-darken-2"                                                                                 // 896
  }, " ", Blaze.View("lookup:_", function() {                                                                          // 897
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 898
  }))), "\n             ", HTML.LI({                                                                                   // 899
    "class": "nanum"                                                                                                   // 900
  }, HTML.A({                                                                                                          // 901
    href: function() {                                                                                                 // 902
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 903
    },                                                                                                                 // 904
    "class": "grey-text text-darken-2"                                                                                 // 905
  }, Blaze.View("lookup:_", function() {                                                                               // 906
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 907
  }))), "\n           ", HTML.LI({                                                                                     // 908
    "class": "nanum"                                                                                                   // 909
  }, HTML.A({                                                                                                          // 910
    href: function() {                                                                                                 // 911
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 912
    },                                                                                                                 // 913
    "class": "grey-text text-darken-2"                                                                                 // 914
  }, Blaze.View("lookup:_", function() {                                                                               // 915
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 916
  }))), "\n \n\n      "), "\n        ", HTML.UL({                                                                      // 917
    "class": "right hide-on-med-and-down"                                                                              // 918
  }, "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher2")), "\n            ", HTML.Raw('<li><a class=" grey-text center" href="https://urlgeni.us/facebook/4U1B"><i class="fab fa-facebook-f  fa-2x"></i></a></li>'), "\n                         ", HTML.Raw('<li class="divider"></li>'), "\n    ", HTML.Raw('<li><a class="center grey-text" href="https://urlgeni.us/instagram/3fIn"><i class="fab fa-instagram  fa-2x"></i></a></li>'), "\n               ", HTML.Raw('<li>  <a class="center grey-text" href="https://urlgeni.us/Uxlo"><i class="fab fa-github fa-2x"></i></a></li>'), "\n            "), "\n       \n    "), "\n      "), "\n \n \n  ", HTML.UL({
    id: "slide-out2",                                                                                                  // 920
    "class": "side-nav"                                                                                                // 921
  }, "\n        ", HTML.DIV({                                                                                          // 922
    "class": "center"                                                                                                  // 923
  }, "\n            ", HTML.Raw("<br>"), "\n            ", HTML.Raw('<img src="/img/drawnPic.jpg" width="150">'), HTML.Raw("<br>"), "\n  \n     ", HTML.LI({
    "class": "nanum",                                                                                                  // 925
    style: "margin-top:1em;"                                                                                           // 926
  }, HTML.A({                                                                                                          // 927
    href: function() {                                                                                                 // 928
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 929
    }                                                                                                                  // 930
  }, Blaze.View("lookup:_", function() {                                                                               // 931
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 932
  }))), "\n    \n        ", HTML.LI({                                                                                  // 933
    "class": "nanum"                                                                                                   // 934
  }, HTML.A({                                                                                                          // 935
    href: function() {                                                                                                 // 936
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 937
    }                                                                                                                  // 938
  }, Blaze.View("lookup:_", function() {                                                                               // 939
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 940
  }))), "\n             ", HTML.LI({                                                                                   // 941
    "class": "nanum"                                                                                                   // 942
  }, HTML.A({                                                                                                          // 943
    href: function() {                                                                                                 // 944
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 945
    }                                                                                                                  // 946
  }, Blaze.View("lookup:_", function() {                                                                               // 947
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 948
  }))), "\n           ", HTML.LI({                                                                                     // 949
    "class": "nanum"                                                                                                   // 950
  }, HTML.A({                                                                                                          // 951
    href: function() {                                                                                                 // 952
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 953
    }                                                                                                                  // 954
  }, Blaze.View("lookup:_", function() {                                                                               // 955
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 956
  }))), "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher2")), "\n        "), "\n  "), "\n \n          "), "\n            ");
}));                                                                                                                   // 958
                                                                                                                       // 959
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/home/home.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.home.rendered = function () {                                                                                 // 1
  new WOW().init({ mobile: false });                                                                                   // 2
};                                                                                                                     // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hybrid":{"template.hybrid.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/hybrid/template.hybrid.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("hybrid");                                                                                        // 2
Template["hybrid"] = new Template("Template.hybrid", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), HTML.Raw('\n <div class="center">\n<h2 class="nanum"><b>WHAT IS A HYBRID APP?</b></h2>\n </div>\n <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n    <div class="container">\n        <br>\n        <div class="wow fadeIn">\n    <img src="/img/logo2.png" width="100%">\n        </div>\n     <br>\n        <p class="flow-text"> \n        Screens are small, apps are big, and life as we know it is on its head again. In a world that\'s increasingly social and open, mobile apps play a vital role, and have changed the focus from what\'s on the Web, to the apps on our mobile device. Mobile apps are no longer an option, they\'re an imperative. You need a mobile app, but where do you start? There are many factors that play a part in your mobile strategy, such as your team’s development skills, required device functionality, the importance of security, offline capability, interoperability, etc., that must be taken into account. In the end, it’s not just a question of what your app will do, but how you’ll get it there.\n        <br>\n        <br>\n        <b class="red-text text-lighten-1">Hybrid development</b> combines the best (or worst) of both the native and HTML5 worlds. We define hybrid as a web app, primarily built using HTML5 and JavaScript, that is then wrapped inside a thin native container that provides access to native platform features. PhoneGap is an example of the most popular container for creating hybrid mobile apps.\nFor the most part, hybrid apps provide the best of both worlds. Existing web developers that have become gurus at optimizing JavaScript, pushing CSS to create beautiful layouts, and writing compliant HTML code that works on any platform can now create sophisticated mobile applications that don’t sacrifice the cool native capabilities. \n\n<br>\n<br>\nAt the end of the day, it doesn\'t matter how an app or site got up there but what matters is under the hood. Our web and mobile apps are powered by Meteor, an innovative platform built on the backs of Node.js and furthering our imagination with Javascript. Since we pipeline the client and the server side with one single language - the potential for your ideas becomes limitless. \n  </p>\n    </div>\n                '), HTML.DIV({
    "class": "row callToAction"                                                                                        // 6
  }, "\n            ", HTML.DIV({                                                                                      // 7
    "class": "container"                                                                                               // 8
  }, "\n                ", HTML.DIV({                                                                                  // 9
    "class": "col s12 m10 l10 offset-l1 offset-m1"                                                                     // 10
  }, "\n                ", HTML.Raw('<h4 class=" center nanum grey-text text-darken-3">\n                    Got questions about our services? Not a problem. <br>Give us a call or shoot us an email. We will get back to you in a jiffy.\n                    \n                    </h4>'), "\n                  ", HTML.DIV({
    "class": "center"                                                                                                  // 12
  }, "\n                  ", HTML.A({                                                                                  // 13
    href: function() {                                                                                                 // 14
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 15
    },                                                                                                                 // 16
    "class": "button outline"                                                                                          // 17
  }, "START NOW"), "\n\n                "), "\n                "), "\n                "), "\n            ") ];         // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hybrid.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/hybrid/hybrid.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.hybrid.rendered = function () {                                                                               // 1
    new WOW().init({ mobile: false });                                                                                 // 2
    $('.parallax').parallax();                                                                                         // 3
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"policy":{"template.policies.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/policy/template.policies.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("policy");                                                                                        // 2
Template["policy"] = new Template("Template.policy", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="section">\n    <div class="container">\n        <h3 class="mont center" style="margin-top:1.8em;"><b>POLICIES</b></h3>\n        <div class="row">\n        \n \n\n<h3>Non-personal identification information</h3>\n<p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.</p>\n\n \n\n \n\n<h3>Maintenance policies</h3>\n<p>We require every client to have a maintenance package with the organization. The organization may from time to time provide services without the need for a package but all discretion and final decision rights are with the developer and the developer\'s organization</p>\n\n<h3>Sharing your personal information</h3>\n<p>We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above. </p>\n\n \n \n\n \n\n<h3>Changes to this privacy policy</h3>\n<p>ILLUME INC has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>\n<h3>Cancellation of service contract</h3>\n<p>Cancelling the service contract may be done with a potential for refund if the request is made within 1 week. After the provided time, the client cannot request for a refund for any amount paid to the organization.</p>\n<h3>Your acceptance of these terms</h3>\n<p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>\n\n<h3>Contacting us</h3>\n<p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.</p>\n\n        </div>\n        </div>\n    </div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"portfolio":{"template.portfolio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/portfolio/template.portfolio.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("portfolio");                                                                                     // 2
Template["portfolio"] = new Template("Template.portfolio", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n ", HTML.SECTION("\n  ", HTML.Raw('<div class="center">\n    <h2 class="nanum "><b>My Work</b></h2>\n<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n  </div>'), "\n    ", HTML.Raw('<div class="container service-graphic sg2" style="margin-top:2em;">\n  <div class="screen monitor">\n    <div class="content">\n      <div class="browser">\n        <ul class="btns">\n          <li></li><li></li><li></li>\n        </ul>\n        <div class="browser-content">\n        <ul class="txt">\n          <li></li>        \n          <li class="big"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li></li>        \n          <li></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li></li>        \n          <li class="big"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n          <li class="third"></li>\n        </ul> \n        </div>\n      </div>\n    </div>\n    <div class="base">\n      <div class="grey-shadow"></div>\n      <div class="foot top"></div>\n      <div class="foot bottom"></div>\n    </div>\n  </div>\n  \n  <div class="laptop">\n    <div class="screen">\n      <ul class="txt">\n        <li></li>        \n        <li class="big"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li></li>        \n        <li></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li></li>        \n        <li class="big"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n        <li class="third"></li>\n      </ul>           \n    </div>\n    <div class="btm"></div>\n  </div>\n  \n  <div class="phone">\n    <div class="screen">\n      <ul class="txt">\n        <li></li>\n        <li></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li></li>\n        <li></li>\n      </ul>\n    </div>\n  <div class="shadow"></div>        \n  </div>\n  \n  <div class="ipad">\n    <div class="screen">\n      <ul class="txt">\n        <li></li>\n        <li class="big"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li></li>        \n        <li></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li class="txt-half"></li>\n        <li></li>\n      </ul>\n    </div>\n  </div>  \n</div>'), "\n          ", HTML.DIV({
    "class": "container",                                                                                              // 6
    style: "margin-top:7em;"                                                                                           // 7
  }, "\n              ", HTML.H2({                                                                                     // 8
    "class": "flow-text nanum grey-text text-darken-3 center"                                                          // 9
  }, Blaze.View("lookup:_", function() {                                                                               // 10
    return Spacebars.mustache(view.lookup("_"), "myServices");                                                         // 11
  })), "\n          "), "\n "), HTML.Raw('\n <br>\n\n<div class="divider"></div>\n\n  <!-- HTML Chart -->\n \n \n \n \n'), HTML.DIV({
    id: "portfolioWrapper",                                                                                            // 13
    "class": ""                                                                                                        // 14
  }, "\n\n   ", HTML.DIV({                                                                                             // 15
    "class": "row"                                                                                                     // 16
  }, "\n        ", HTML.DIV({                                                                                          // 17
    "class": "container"                                                                                               // 18
  }, "\n        ", HTML.DIV({                                                                                          // 19
    "class": "col s12 m12 "                                                                                            // 20
  }, "\n            ", HTML.Raw('<h3 class="  center  opensan">WEBSITES</h3>'), "\n  \n            ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n             ", HTML.P({
    "class": "center flow-text"                                                                                        // 22
  }, Blaze.View("lookup:_", function() {                                                                               // 23
    return Spacebars.mustache(view.lookup("_"), "myWebsitesAre");                                                      // 24
  }), HTML.A({                                                                                                         // 25
    href: "http://www.meteor.com",                                                                                     // 26
    "class": "red-text",                                                                                               // 27
    target: "_blank"                                                                                                   // 28
  }, Blaze.View("lookup:_", function() {                                                                               // 29
    return Spacebars.mustache(view.lookup("_"), "meteorJs");                                                           // 30
  })), " ", Blaze.View("lookup:_", function() {                                                                        // 31
    return Spacebars.mustache(view.lookup("_"), "secondMyWeb");                                                        // 32
  }), " - ", Blaze.View("lookup:_", function() {                                                                       // 33
    return Spacebars.mustache(view.lookup("_"), "stateOfArt");                                                         // 34
  })), "\n             \n            "), "\n        "), "\n                              "), "\n           ", HTML.Raw('<div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/cdp.png">\n              \n            </div>\n           \n            \n          </div>\n          \n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/jesuslove.png">\n              \n            </div>\n            \n            \n          </div>\n     \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/sfmvdm.png">\n              \n            </div>\n            \n            \n          </div>\n         \n                                            \n                                  </div>\n                              </div>'), "\n                        ", HTML.Raw('<div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/bpr.png">\n              \n            </div>\n           \n            \n          </div>\n          \n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/ivhair.png">\n              \n            </div>\n            \n            \n          </div>\n          \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/epic.png">\n              \n            </div>\n            \n            \n          </div>\n           \n                                            \n                                  </div>\n                              </div>'), "\n    ", HTML.DIV({
    "class": "row",                                                                                                    // 36
    style: "margin-top:4em;"                                                                                           // 37
  }, "\n        ", HTML.DIV({                                                                                          // 38
    "class": "container"                                                                                               // 39
  }, "\n        ", HTML.DIV({                                                                                          // 40
    "class": "col s12 m12 l10 offset-l1"                                                                               // 41
  }, "\n            ", HTML.Raw('<h3 class="  center  opensan">GRAPHICS</h3>'), "\n  \n            ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n                \n             ", HTML.P({
    "class": "center flow-text"                                                                                        // 43
  }, Blaze.View("lookup:_", function() {                                                                               // 44
    return Spacebars.mustache(view.lookup("_"), "weMakeGraphics");                                                     // 45
  }), " ", HTML.Raw('<i class="fa fa-heart red-text"></i>'), " ", Blaze.View("lookup:_", function() {                  // 46
    return Spacebars.mustache(view.lookup("_"), "aBitOf");                                                             // 47
  })), "\n            "), "\n        "), "\n                              "), "\n                                ", HTML.Raw('<div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/cole.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/work/sfmvdm.png" class="materialboxed">\n              \n            </div>\n            \n            \n          </div>\n \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/work/business.png" class="materialboxed">\n              \n            </div>\n            \n            \n          </div>\n         \n                                            \n                                  </div>\n                              </div>'), "\n                     ", HTML.Raw('<div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/work/speakwise.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n                             <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/work/bpbanner.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n                                          <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/work/jl.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n    </div>'), "\n\n"), "   \n  ", HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 49
  }, "\n                ", HTML.DIV({                                                                                  // 50
    "class": "row"                                                                                                     // 51
  }, "\n        ", HTML.DIV({                                                                                          // 52
    "class": "container"                                                                                               // 53
  }, "\n        ", HTML.DIV({                                                                                          // 54
    "class": "col s12 m12 l12"                                                                                         // 55
  }, "\n            ", HTML.H1({                                                                                       // 56
    "class": "nanum center homeWhat"                                                                                   // 57
  }, Blaze.View("lookup:_", function() {                                                                               // 58
    return Spacebars.mustache(view.lookup("_"), "areYouGame");                                                         // 59
  })), "\n            ", HTML.Raw('<div class="divider red lighten-1"></div>'), "\n      \n             ", HTML.H3({   // 60
    "class": "center nanum grey-text text-darken-3"                                                                    // 61
  }, Blaze.View("lookup:_", function() {                                                                               // 62
    return Spacebars.mustache(view.lookup("_"), "loveToHear");                                                         // 63
  })), "\n                ", HTML.DIV({                                                                                // 64
    "class": "center"                                                                                                  // 65
  }, "\n                 ", HTML.P({                                                                                   // 66
    "class": "flow-text nanum"                                                                                         // 67
  }, Blaze.View("lookup:_", function() {                                                                               // 68
    return Spacebars.mustache(view.lookup("_"), "alwaysOpen");                                                         // 69
  }), "\n                 ", HTML.Raw("<br>"), "\n                 ", Blaze.View("lookup:_", function() {              // 70
    return Spacebars.mustache(view.lookup("_"), "coffee");                                                             // 71
  }), "\n                 "), "\n                  ", HTML.A({                                                         // 72
    href: function() {                                                                                                 // 73
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 74
    },                                                                                                                 // 75
    "class": "button outline"                                                                                          // 76
  }, Blaze.View("lookup:_", function() {                                                                               // 77
    return Spacebars.mustache(view.lookup("_"), "getStarted");                                                         // 78
  })), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 80
                                                                                                                       // 81
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"portfolio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/portfolio/portfolio.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.portfolio.rendered = function () {                                                                            // 1
  $('.materialboxed').materialbox();                                                                                   // 2
  $('.scrollspy').scrollSpy();                                                                                         // 3
  new WOW().init({ mobile: false });                                                                                   // 4
  //checks if element it is called on is visible (only checks horizontally                                             //
  (function ($) {                                                                                                      // 6
    var $window = $(window);                                                                                           // 7
                                                                                                                       //
    $.fn.isVisible = function () {                                                                                     // 9
      var $this = $(this),                                                                                             // 10
          Left = $this.offset().left,                                                                                  // 10
          visibleWidth = $window.width();                                                                              // 10
                                                                                                                       //
      return Left < visibleWidth;                                                                                      // 14
    };                                                                                                                 // 15
  })(jQuery);                                                                                                          // 16
                                                                                                                       //
  (function ($) {                                                                                                      // 18
    var list = $('.portfolio-items'),                                                                                  // 19
        showVisibleItems = function showVisibleItems() {                                                               // 19
      list.children('.item:not(.falldown)').each(function (el, i) {                                                    // 21
        var $this = $(this);                                                                                           // 22
        if ($this.isVisible()) {                                                                                       // 23
          $this.addClass('falldown');                                                                                  // 24
        }                                                                                                              // 25
      });                                                                                                              // 26
    };                                                                                                                 // 27
                                                                                                                       //
    //initially show all visible items before any scroll starts                                                        //
    showVisibleItems();                                                                                                // 30
                                                                                                                       //
    //then on scroll check for visible items and show them                                                             //
    list.scroll(function () {                                                                                          // 33
      showVisibleItems();                                                                                              // 34
    });                                                                                                                // 35
                                                                                                                       //
    //image hover pan effect                                                                                           //
    list.on('mousemove', 'img', function (ev) {                                                                        // 38
      var $this = $(this),                                                                                             // 39
          posX = ev.pageX,                                                                                             // 39
          posY = ev.pageY,                                                                                             // 39
          data = $this.data('cache');                                                                                  // 39
      //cache necessary variables                                                                                      //
      if (!data) {                                                                                                     // 44
        data = {};                                                                                                     // 45
        data.marginTop = -parseInt($this.css('top')), data.marginLeft = -parseInt($this.css('left')), data.parent = $this.parent('.view'), $this.data('cache', data);
      }                                                                                                                // 50
                                                                                                                       //
      var originX = data.parent.offset().left,                                                                         // 52
          originY = data.parent.offset().top;                                                                          // 52
                                                                                                                       //
      //move image                                                                                                     //
      $this.css({                                                                                                      // 56
        'left': -(posX - originX) / data.marginLeft,                                                                   // 57
        'top': -(posY - originY) / data.marginTop                                                                      // 58
      });                                                                                                              // 56
    });                                                                                                                // 60
                                                                                                                       //
    list.on('mouseleave', '.item', function (e) {                                                                      // 62
      $(this).find('img').css({                                                                                        // 63
        'left': '0',                                                                                                   // 64
        'top': '0'                                                                                                     // 65
      });                                                                                                              // 63
    });                                                                                                                // 67
                                                                                                                       //
    list.mousewheel(function (event, delta) {                                                                          // 69
                                                                                                                       //
      this.scrollLeft -= delta * 60;                                                                                   // 71
                                                                                                                       //
      event.preventDefault();                                                                                          // 73
    });                                                                                                                // 75
  })(jQuery);                                                                                                          // 76
};                                                                                                                     // 79
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"services":{"template.service.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/services/template.service.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("service");                                                                                       // 2
Template["service"] = new Template("Template.service", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), HTML.Raw('\n        <div class="center">\n              <h2 class="nanum "><b>Collaborate</b></h2>\n<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n        </div>\n    '), HTML.SECTION({
    style: "margin-top:2.2em"                                                                                          // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "container"                                                                                               // 8
  }, "\n        ", HTML.DIV({                                                                                          // 9
    "class": "row"                                                                                                     // 10
  }, "\n    ", HTML.DIV({                                                                                              // 11
    "class": "col s12 m10 l8 offset-m1 offset-l2 center"                                                               // 12
  }, "\n        \n         \n        ", HTML.H4({                                                                      // 13
    "class": "nanum grey-text text-darken-3 "                                                                          // 14
  }, Blaze.View("lookup:_", function() {                                                                               // 15
    return Spacebars.mustache(view.lookup("_"), "collaborate");                                                        // 16
  }), " ", HTML.B({                                                                                                    // 17
    "class": "red-text text-lighten-1 nanum"                                                                           // 18
  }, Blaze.View("lookup:_", function() {                                                                               // 19
    return Spacebars.mustache(view.lookup("_"), "reactivity");                                                         // 20
  })), " ", Blaze.View("lookup:_", function() {                                                                        // 21
    return Spacebars.mustache(view.lookup("_"), "unparalleled");                                                       // 22
  })), "\n        ", HTML.Raw("<br>"), "\n        ", HTML.P({                                                          // 23
    "class": "flow-text grey-text text-darken-3 "                                                                      // 24
  }, "\n           ", Blaze.View("lookup:_", function() {                                                              // 25
    return Spacebars.mustache(view.lookup("_"), "meteorFirst");                                                        // 26
  }), "\n            ", HTML.Raw("<br>"), "\n       ", Blaze.View("lookup:_", function() {                             // 27
    return Spacebars.mustache(view.lookup("_"), "meteorSecond");                                                       // 28
  }), "\n            "), "\n\n        "), "\n   \n        "), "\n    "), "\n    ", HTML.Raw('<img src="/img/developer-ready.png" width="100%" alt="">'), "\n    "), "\n      \n        ", HTML.SECTION({
    "class": "callToAction",                                                                                           // 30
    style: "margin-bottom:2em"                                                                                         // 31
  }, "\n        ", HTML.DIV({                                                                                          // 32
    "class": "row"                                                                                                     // 33
  }, "\n            ", HTML.DIV({                                                                                      // 34
    "class": "container"                                                                                               // 35
  }, "\n         \n                     ", HTML.DIV({                                                                  // 36
    "class": "col s12 m6 l6 offset-l3 center"                                                                          // 37
  }, "\n                         ", HTML.H4({                                                                          // 38
    "class": "nanum  red-text text-lighten-1"                                                                          // 39
  }, Blaze.View("lookup:_", function() {                                                                               // 40
    return Spacebars.mustache(view.lookup("_"), "simpleSleek");                                                        // 41
  })), "\n                         ", HTML.P({                                                                         // 42
    "class": "flow-text grey-text text-darken-3"                                                                       // 43
  }, Blaze.View("lookup:_", function() {                                                                               // 44
    return Spacebars.mustache(view.lookup("_"), "iDevelopWith");                                                       // 45
  })), "\n                         \n                "), "\n            "), "\n            "), "\n        "), HTML.Raw('\n           \n           \n        <div class="divider" style="margin-top:3em;"></div>\n        '), HTML.SECTION({
    "class": "callToAction"                                                                                            // 47
  }, "\n        ", HTML.Raw('<div class="container">\n     \n            </div>'), "\n       \n           \n            ", HTML.DIV({
    "class": "row callToAction"                                                                                        // 49
  }, "\n            ", HTML.DIV({                                                                                      // 50
    "class": "container"                                                                                               // 51
  }, "\n                ", HTML.DIV({                                                                                  // 52
    "class": "col s12 m10 l10 offset-l1 offset-m1"                                                                     // 53
  }, "\n                ", HTML.H3({                                                                                   // 54
    "class": " center nanum grey-text text-darken-3"                                                                   // 55
  }, "\n                    ", Blaze.View("lookup:_", function() {                                                     // 56
    return Spacebars.mustache(view.lookup("_"), "gotQuestion");                                                        // 57
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 58
    return Spacebars.mustache(view.lookup("_"), "giveUsaCall");                                                        // 59
  }), "\n                   \n                    \n                    "), "\n                  ", HTML.DIV({         // 60
    "class": "center"                                                                                                  // 61
  }, "\n                  ", HTML.A({                                                                                  // 62
    href: function() {                                                                                                 // 63
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 64
    },                                                                                                                 // 65
    "class": "button outline"                                                                                          // 66
  }, Blaze.View("lookup:_", function() {                                                                               // 67
    return Spacebars.mustache(view.lookup("_"), "getStarted");                                                         // 68
  })), "\n\n                "), "\n                ", HTML.Raw("<br>"), "\n                "), "\n                "), "\n            "), "\n        ") ];
}));                                                                                                                   // 70
                                                                                                                       // 71
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"service.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/services/service.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.service.rendered = function () {                                                                              // 1
    new WOW().init({ mobile: false });                                                                                 // 2
                                                                                                                       //
    $(".titl").click(function () {                                                                                     // 4
        $(".contents").slideToggle();                                                                                  // 5
    });                                                                                                                // 6
    $(".title").click(function () {                                                                                    // 7
        $(".content").slideToggle();                                                                                   // 8
    });                                                                                                                // 9
    $(".titles").click(function () {                                                                                   // 10
        $(".contentsss").slideToggle();                                                                                // 11
    });                                                                                                                // 12
};                                                                                                                     // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"work":{"template.application.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/work/template.application.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("applications");                                                                                  // 2
Template["applications"] = new Template("Template.applications", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION("\n ", Spacebars.include(view.lookupTemplate("Rsvp")), "\n\n");                                  // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("Rsvp");                                                                                          // 8
Template["Rsvp"] = new Template("Template.Rsvp", (function() {                                                         // 9
  var view = this;                                                                                                     // 10
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n  ", HTML.SECTION("\n ", HTML.DIV({               // 11
    "class": "section"                                                                                                 // 12
  }, "\n    ", HTML.DIV({                                                                                              // 13
    "class": "container"                                                                                               // 14
  }, "\n        ", HTML.DIV({                                                                                          // 15
    "class": "center"                                                                                                  // 16
  }, "\n        ", HTML.H2({                                                                                           // 17
    "class": "center nanum bold"                                                                                       // 18
  }, Blaze.View("lookup:_", function() {                                                                               // 19
    return Spacebars.mustache(view.lookup("_"), "contactMe");                                                          // 20
  })), "\n        ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n        "), "\n        "), "\n    "), "\n   \n    ", HTML.DIV({
    "class": "section"                                                                                                 // 22
  }, "\n    ", HTML.DIV({                                                                                              // 23
    "class": "container"                                                                                               // 24
  }, "\n        ", HTML.DIV({                                                                                          // 25
    "class": "row"                                                                                                     // 26
  }, "\n     ", HTML.DIV({                                                                                             // 27
    "class": "col s12 m12 l6 offset-l3"                                                                                // 28
  }, "\n            ", HTML.P({                                                                                        // 29
    "class": "center flow-text grey-text text-darken-2"                                                                // 30
  }, "\n ", Blaze.View("lookup:_", function() {                                                                        // 31
    return Spacebars.mustache(view.lookup("_"), "startProject");                                                       // 32
  }), "\n         "), "\n            "), "\n        "), "\n        "), "\n    "), "\n \n    ", HTML.Raw('<div class="section">\n    <div class="container">\n        <div class="row">\n          <div class="center">\n            <img src="/img/joe.png" width="120px" alt="Joseph S. Lee">\n          </div>\n          <br>\n          <div class="row">\n            <div class="col s12 m6 l6 offset-m3 offset-l3">\n              \n                <div class="col s4">\n                  <div class="center">\n                    <a class="mainC" href="https://urlgeni.us/instagram/3fIn"><i class="fab fa-instagram fa-3x"></i></a>\n                  </div>\n                </div>\n                 <div class="col s4">\n                  <div class="center">\n                     <a class="mainC" href="https://urlgeni.us/facebook/n12_"><i class="fab fa-facebook-f fa-3x"></i></a>\n                  </div>\n                </div>\n                 <div class="col s4">\n                  <div class="center">\n                     <a class="mainC" href="https://urlgeni.us/Uxlo"><i class="fab fa-github fa-3x"></i></a>\n                  </div>\n                </div>\n         \n            </div>\n          </div>\n        <div class="col s12 m8 l6 offset-m2 offset-l3">\n        <ul class="collapsible popout" data-collapsible="accordion">\n    <li class=" ">\n      <div class="collapsible-header active white-text mainB"><i class="material-icons">phone</i>Phone Number</div>\n      <div class="collapsible-body center nanum"><span>+82 10-2390-1782</span></div>\n    </li>\n    <li>\n      <div class="collapsible-header white-text mainB"><i class="material-icons">email</i>Email Address</div>\n      <div class="collapsible-body center nanum"><span>illumeweb@gmail.com</span></div>\n    </li>\n  \n  </ul>\n        </div>\n        </div>\n        </div>\n    </div>'), "\n"), HTML.Raw('\n    <div class="divider" style="margin:0 auto;width:50%"></div>\n     <div class="section" style="display: none;">\n    <div class="container">\n        <div class="row">\n     <div class="col s12 m12 l6 offset-l3">\n            <p class="center   flow-text grey-text text-darken-2">\n  You can also start a project by filling out our application form. You should be getting something from us within 24 hours.\n         </p>\n            </div>\n        </div>\n        </div>\n    </div>\n'), HTML.DIV({
    "class": "container",                                                                                              // 34
    style: "display: none;"                                                                                            // 35
  }, " \n", HTML.DIV({                                                                                                 // 36
    "class": "row center"                                                                                              // 37
  }, "\n", HTML.DIV({                                                                                                  // 38
    style: "padding:1em;",                                                                                             // 39
    "class": "z-depth-1 col s12"                                                                                       // 40
  }, " \n      \n        ", Blaze._TemplateWith(function() {                                                           // 41
    return {                                                                                                           // 42
      collection: Spacebars.call("Rsvps"),                                                                             // 43
      id: Spacebars.call("insertRsvpForm"),                                                                            // 44
      type: Spacebars.call("method"),                                                                                  // 45
      meteormethod: Spacebars.call("submitRsvp"),                                                                      // 46
      omitFields: Spacebars.call("createdAt")                                                                          // 47
    };                                                                                                                 // 48
  }, function() {                                                                                                      // 49
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 50
      return [ "\n   \n      ", HTML.DIV({                                                                             // 51
        "class": "row"                                                                                                 // 52
      }, " \n      ", HTML.DIV({                                                                                       // 53
        "class": "col s12 m3"                                                                                          // 54
      }, "\n      ", Blaze._TemplateWith(function() {                                                                  // 55
        return {                                                                                                       // 56
          name: Spacebars.call("name")                                                                                 // 57
        };                                                                                                             // 58
      }, function() {                                                                                                  // 59
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 60
      }), "\n      "), " \n          ", HTML.DIV({                                                                     // 61
        "class": "col s12 m3"                                                                                          // 62
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 63
        return {                                                                                                       // 64
          name: Spacebars.call("last")                                                                                 // 65
        };                                                                                                             // 66
      }, function() {                                                                                                  // 67
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 68
      }), "\n      "), " \n       ", HTML.DIV({                                                                        // 69
        "class": "col s12 m3"                                                                                          // 70
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 71
        return {                                                                                                       // 72
          name: Spacebars.call("email")                                                                                // 73
        };                                                                                                             // 74
      }, function() {                                                                                                  // 75
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 76
      }), "\n      \n      "), " \n      ", HTML.DIV({                                                                 // 77
        "class": "col s12 m3"                                                                                          // 78
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 79
        return {                                                                                                       // 80
          name: Spacebars.call("phone")                                                                                // 81
        };                                                                                                             // 82
      }, function() {                                                                                                  // 83
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 84
      }), "\n      \n      "), "\n      "), "\n       ", HTML.DIV({                                                    // 85
        "class": "row"                                                                                                 // 86
      }, "\n", HTML.DIV({                                                                                              // 87
        "class": "col s12 m6"                                                                                          // 88
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 89
        return {                                                                                                       // 90
          name: Spacebars.call("website")                                                                              // 91
        };                                                                                                             // 92
      }, function() {                                                                                                  // 93
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 94
      }), "\n"), "\n", HTML.DIV({                                                                                      // 95
        "class": "col s12 m6"                                                                                          // 96
      }, "\n   ", Blaze._TemplateWith(function() {                                                                     // 97
        return {                                                                                                       // 98
          name: Spacebars.call("organization")                                                                         // 99
        };                                                                                                             // 100
      }, function() {                                                                                                  // 101
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 102
      }), "\n"), "\n  \n       "), "\n       \n       ", HTML.DIV({                                                    // 103
        "class": "row"                                                                                                 // 104
      }, "\n       \n       ", HTML.DIV({                                                                              // 105
        "class": "col s12 m12 l5"                                                                                      // 106
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 107
        return {                                                                                                       // 108
          name: Spacebars.call("industry")                                                                             // 109
        };                                                                                                             // 110
      }, function() {                                                                                                  // 111
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 112
      }), "\n       "), "\n        ", HTML.DIV({                                                                       // 113
        "class": "col s12 m12 l7"                                                                                      // 114
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 115
        return {                                                                                                       // 116
          name: Spacebars.call("Competitors")                                                                          // 117
        };                                                                                                             // 118
      }, function() {                                                                                                  // 119
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 120
      }), "\n       "), "\n       "), "\n       ", HTML.DIV({                                                          // 121
        "class": "row"                                                                                                 // 122
      }, "\n     ", HTML.DIV({                                                                                         // 123
        "class": "col s12 m6"                                                                                          // 124
      }, "\n", Blaze._TemplateWith(function() {                                                                        // 125
        return {                                                                                                       // 126
          name: Spacebars.call("iadSense")                                                                             // 127
        };                                                                                                             // 128
      }, function() {                                                                                                  // 129
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 130
      }), "\n "), "\n   ", HTML.DIV({                                                                                  // 131
        "class": "col s12 m6"                                                                                          // 132
      }, "\n    ", Blaze._TemplateWith(function() {                                                                    // 133
        return {                                                                                                       // 134
          name: Spacebars.call("budget")                                                                               // 135
        };                                                                                                             // 136
      }, function() {                                                                                                  // 137
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 138
      }), "\n   "), "\n "), "\n \n \n ", HTML.DIV({                                                                    // 139
        "class": "row"                                                                                                 // 140
      }, "\n ", HTML.DIV({                                                                                             // 141
        "class": "col s12 m8 offset-m2 offset-l3 l6"                                                                   // 142
      }, "\n  \n      ", HTML.DIV({                                                                                    // 143
        "class": " "                                                                                                   // 144
      }, "\n", HTML.LABEL({                                                                                            // 145
        style: "font-size:17px"                                                                                        // 146
      }, "Are you engaged with another agency at the moment? *"), "\n ", Blaze._TemplateWith(function() {              // 147
        return {                                                                                                       // 148
          name: Spacebars.call("another"),                                                                             // 149
          type: Spacebars.call("switch"),                                                                              // 150
          trueLabel: Spacebars.call("YES"),                                                                            // 151
          falseLabel: Spacebars.call("NOPE")                                                                           // 152
        };                                                                                                             // 153
      }, function() {                                                                                                  // 154
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 155
      }), "\n"), "\n "), "\n "), "\n \n ", HTML.DIV({                                                                  // 156
        "class": "row"                                                                                                 // 157
      }, "\n \n", HTML.DIV({                                                                                           // 158
        "class": "col s12 m6 offset-m3"                                                                                // 159
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 160
        return {                                                                                                       // 161
          name: Spacebars.call("whatElse")                                                                             // 162
        };                                                                                                             // 163
      }, function() {                                                                                                  // 164
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 165
      }), "\n"), "\n\n\n "), "\n    ", HTML.BUTTON({                                                                   // 166
        type: "submit",                                                                                                // 167
        "class": "button outline"                                                                                      // 168
      }, "SUBMIT APPLICATION"), "\n    ", HTML.BR(), "\n    ", HTML.BR(), "\n    ", HTML.DIV({                         // 169
        "class": "center wow bounce",                                                                                  // 170
        "data-wow-iteration": "4"                                                                                      // 171
      }, "\n    ", HTML.SPAN({                                                                                         // 172
        "class": "grey-text text-darken-2"                                                                             // 173
      }, "* REQUIRED FIELDS"), "\n    "), "\n  " ];                                                                    // 174
    });                                                                                                                // 175
  }), "\n       \n\n      "), "\n      "), "\n      "), "\n     ", Blaze.If(function() {                               // 176
    return Spacebars.call(view.lookup("isSuccessfulRsvp"));                                                            // 177
  }, function() {                                                                                                      // 178
    return [ "\n    ", HTML.DIV({                                                                                      // 179
      "class": "container"                                                                                             // 180
    }, "\n    ", HTML.DIV({                                                                                            // 181
      "class": "row wow zoomIn"                                                                                        // 182
    }, "\n    ", HTML.DIV({                                                                                            // 183
      "class": "col s12 m10 offset-m1 l8 offset-l2"                                                                    // 184
    }, "\n    ", HTML.H5({                                                                                             // 185
      "class": "center robotoIt grey-text text-darken-3 wow zoomInUp"                                                  // 186
    }, "  ", Blaze.View("lookup:name", function() {                                                                    // 187
      return Spacebars.mustache(view.lookup("name"));                                                                  // 188
    }), " ", Blaze.View("lookup:last", function() {                                                                    // 189
      return Spacebars.mustache(view.lookup("last"));                                                                  // 190
    }), " Thanks for choosing illume Inc. We will get back to you shortly ", Blaze.View("lookup:name", function() {    // 191
      return Spacebars.mustache(view.lookup("name"));                                                                  // 192
    }), ".  "), "\n    ", HTML.BR(), "\n    ", HTML.DIV({                                                              // 193
      "class": "center"                                                                                                // 194
    }, "\n                  ", HTML.A({                                                                                // 195
      href: "/",                                                                                                       // 196
      "class": "button outline"                                                                                        // 197
    }, "BACK HOME"), "\n\n                "), "\n    "), "\n    "), "\n"), "\n    \n    " ];                           // 198
  }, function() {                                                                                                      // 199
    return "   \n  ";                                                                                                  // 200
  }) ];                                                                                                                // 201
}));                                                                                                                   // 202
                                                                                                                       // 203
Template.__checkName("lastRsvp");                                                                                      // 204
Template["lastRsvp"] = new Template("Template.lastRsvp", (function() {                                                 // 205
  var view = this;                                                                                                     // 206
  return Blaze.Each(function() {                                                                                       // 207
    return Spacebars.call(view.lookup("rsvps"));                                                                       // 208
  }, function() {                                                                                                      // 209
    return [ "\n    ", Blaze.View("lookup:name", function() {                                                          // 210
      return Spacebars.mustache(view.lookup("name"));                                                                  // 211
    }), " ", Blaze.View("lookup:last", function() {                                                                    // 212
      return Spacebars.mustache(view.lookup("last"));                                                                  // 213
    }), "\n  " ];                                                                                                      // 214
  });                                                                                                                  // 215
}));                                                                                                                   // 216
                                                                                                                       // 217
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"application.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/work/application.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.Rsvp.rendered = function () {                                                                                 // 1
                                                                                                                       //
  new WOW().init();                                                                                                    // 3
  $('.collapsible').collapsible({});                                                                                   // 4
};                                                                                                                     // 8
Template.applications.rendered = function () {                                                                         // 9
                                                                                                                       //
  new WOW().init();                                                                                                    // 11
  $('.collapsible').collapsible({});                                                                                   // 12
};                                                                                                                     // 16
AutoForm.setDefaultTemplate('materialize');                                                                            // 17
AutoForm.addHooks('insertRsvpForm', {                                                                                  // 18
  onSuccess: function () {                                                                                             // 19
    function onSuccess() {                                                                                             // 19
      console.log("Got application");                                                                                  // 20
      return Session.set('successfulRsvp', true);                                                                      // 21
    }                                                                                                                  // 23
                                                                                                                       //
    return onSuccess;                                                                                                  // 19
  }()                                                                                                                  // 19
});                                                                                                                    // 18
                                                                                                                       //
/*****************************************************************************/                                        //
/* Rsvp: Event Handlers */                                                                                             //
/*****************************************************************************/                                        //
Template.Rsvp.events({});                                                                                              // 29
                                                                                                                       //
/*****************************************************************************/                                        //
/* Rsvp: Helpers */                                                                                                    //
/*****************************************************************************/                                        //
Template.Rsvp.helpers({                                                                                                // 35
  isSuccessfulRsvp: function () {                                                                                      // 36
    function isSuccessfulRsvp() {                                                                                      // 36
      return Session.get('successfulRsvp');                                                                            // 37
    }                                                                                                                  // 39
                                                                                                                       //
    return isSuccessfulRsvp;                                                                                           // 36
  }()                                                                                                                  // 36
});                                                                                                                    // 35
                                                                                                                       //
/*****************************************************************************/                                        //
/* Rsvp: Lifecycle Hooks */                                                                                            //
/*****************************************************************************/                                        //
Template.Rsvp.created = function () {                                                                                  // 45
  return Session.set('successfulRsvp', false);                                                                         // 46
};                                                                                                                     // 47
                                                                                                                       //
Template.Rsvp.destroyed = function () {                                                                                // 51
  return Session.set('successfulRsvp', false);                                                                         // 52
};                                                                                                                     // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"components":{"template.language_switcher.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/template.language_switcher.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("languageSwitcher");                                                                              // 2
Template["languageSwitcher"] = new Template("Template.languageSwitcher", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("languages"));                                                                   // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", HTML.LI(HTML.A({                                                                            // 8
      href: "#",                                                                                                       // 9
      "class": "nanum",                                                                                                // 10
      "data-action": "change-language",                                                                                // 11
      "data-language": function() {                                                                                    // 12
        return Spacebars.mustache(view.lookup("code"));                                                                // 13
      }                                                                                                                // 14
    }, Blaze.View("lookup:labels.name", function() {                                                                   // 15
      return Spacebars.mustache(Spacebars.dot(view.lookup("labels"), "name"));                                         // 16
    }), "  ")), "\n      " ];                                                                                          // 17
  });                                                                                                                  // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
Template.__checkName("languageSwitcher2");                                                                             // 21
Template["languageSwitcher2"] = new Template("Template.languageSwitcher2", (function() {                               // 22
  var view = this;                                                                                                     // 23
  return Blaze.Each(function() {                                                                                       // 24
    return Spacebars.call(view.lookup("languages"));                                                                   // 25
  }, function() {                                                                                                      // 26
    return [ "\n        ", HTML.LI(HTML.A({                                                                            // 27
      href: "#",                                                                                                       // 28
      "class": "grey-text nanum text-darken-2",                                                                        // 29
      "data-action": "change-language",                                                                                // 30
      "data-language": function() {                                                                                    // 31
        return Spacebars.mustache(view.lookup("code"));                                                                // 32
      }                                                                                                                // 33
    }, Blaze.View("lookup:labels.name", function() {                                                                   // 34
      return Spacebars.mustache(Spacebars.dot(view.lookup("labels"), "name"));                                         // 35
    }), "  ")), "\n      " ];                                                                                          // 36
  });                                                                                                                  // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"language_switcher.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/language_switcher.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.languageSwitcher.helpers({                                                                                    // 1
  languages: function () {                                                                                             // 3
    function languages() {                                                                                             // 1
      var obj = TAPi18n.getLanguages();                                                                                // 4
      var languages = [];                                                                                              // 5
      for (var key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                   // 6
        if (key) languages.push({ code: key, labels: obj[key] });                                                      // 7
      }                                                                                                                // 8
      if (languages) return languages;                                                                                 // 9
    }                                                                                                                  // 10
                                                                                                                       //
    return languages;                                                                                                  // 1
  }(),                                                                                                                 // 1
  currentLanguage: function () {                                                                                       // 12
    function currentLanguage() {                                                                                       // 1
      var currentLanguageCode = TAPi18n.getLanguage();                                                                 // 13
      var appLanguages = TAPi18n.getLanguages();                                                                       // 14
      for (var code in meteorBabelHelpers.sanitizeForInObject(appLanguages)) {                                         // 15
        if (code === currentLanguageCode) return appLanguages[code].name;                                              // 16
      }                                                                                                                // 17
    }                                                                                                                  // 18
                                                                                                                       //
    return currentLanguage;                                                                                            // 1
  }()                                                                                                                  // 1
});                                                                                                                    // 1
                                                                                                                       //
Template.languageSwitcher.events({                                                                                     // 22
  'click [data-action="change-language"]': function () {                                                               // 24
    function clickDataActionChangeLanguage(e) {                                                                        // 22
      var lang = $(e.target).data('language');                                                                         // 25
      TAPi18n.setLanguage(lang);                                                                                       // 26
      mo.setLocale(lang);                                                                                              // 27
      moment.locale(lang);                                                                                             // 28
    }                                                                                                                  // 29
                                                                                                                       //
    return clickDataActionChangeLanguage;                                                                              // 22
  }()                                                                                                                  // 22
});                                                                                                                    // 22
                                                                                                                       //
Template.languageSwitcher2.helpers({                                                                                   // 33
  languages: function () {                                                                                             // 35
    function languages() {                                                                                             // 33
      var obj = TAPi18n.getLanguages();                                                                                // 36
      var languages = [];                                                                                              // 37
      for (var key in meteorBabelHelpers.sanitizeForInObject(obj)) {                                                   // 38
        if (key) languages.push({ code: key, labels: obj[key] });                                                      // 39
      }                                                                                                                // 40
      if (languages) return languages;                                                                                 // 41
    }                                                                                                                  // 42
                                                                                                                       //
    return languages;                                                                                                  // 33
  }(),                                                                                                                 // 33
  currentLanguage: function () {                                                                                       // 44
    function currentLanguage() {                                                                                       // 33
      var currentLanguageCode = TAPi18n.getLanguage();                                                                 // 45
      var appLanguages = TAPi18n.getLanguages();                                                                       // 46
      for (var code in meteorBabelHelpers.sanitizeForInObject(appLanguages)) {                                         // 47
        if (code === currentLanguageCode) return appLanguages[code].name;                                              // 48
      }                                                                                                                // 49
    }                                                                                                                  // 50
                                                                                                                       //
    return currentLanguage;                                                                                            // 33
  }()                                                                                                                  // 33
});                                                                                                                    // 33
                                                                                                                       //
Template.languageSwitcher2.events({                                                                                    // 54
  'click [data-action="change-language"]': function () {                                                               // 56
    function clickDataActionChangeLanguage(e) {                                                                        // 54
      var lang = $(e.target).data('language');                                                                         // 57
      TAPi18n.setLanguage(lang);                                                                                       // 58
      mo.setLocale(lang);                                                                                              // 59
      moment.locale(lang);                                                                                             // 60
    }                                                                                                                  // 61
                                                                                                                       //
    return clickDataActionChangeLanguage;                                                                              // 54
  }()                                                                                                                  // 54
});                                                                                                                    // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"backend":{"template.backend.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// backend/template.backend.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("application");                                                                                   // 2
Template["application"] = new Template("Template.application", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.dataMustache(view.lookup("isInRole"), "admin");                                                   // 6
  }, function() {                                                                                                      // 7
    return [ "\n ", HTML.SECTION("\n", HTML.DIV({                                                                      // 8
      "class": "container"                                                                                             // 9
    }, "\n", HTML.DIV({                                                                                                // 10
      "class": "row"                                                                                                   // 11
    }, "\n ", Spacebars.include(view.lookupTemplate("dashboards")), "\n    ", HTML.DIV({                               // 12
      "class": ""                                                                                                      // 13
    }, "\n        ", HTML.DIV({                                                                                        // 14
      "class": "row"                                                                                                   // 15
    }, "\n     \n            ", HTML.DIV({                                                                             // 16
      "class": "list_of_app col s12 m12 l3"                                                                            // 17
    }, "\n            ", HTML.H4({                                                                                     // 18
      "class": "center",                                                                                               // 19
      style: "margin-top:1em;"                                                                                         // 20
    }, "환영합니다"), "\n            ", HTML.BR(), "\n              ", HTML.P({                                             // 21
      "class": "grey-text text-darken-2 center"                                                                        // 22
    }, "Applicants"), "\n              ", HTML.UL({                                                                    // 23
      "class": "collection"                                                                                            // 24
    }, "\n                       ", Blaze.Each(function() {                                                            // 25
      return Spacebars.call(view.lookup("rsvps"));                                                                     // 26
    }, function() {                                                                                                    // 27
      return [ "\n                       ", HTML.LI({                                                                  // 28
        "class": "collection-item"                                                                                     // 29
      }, HTML.A({                                                                                                      // 30
        href: function() {                                                                                             // 31
          return [ "#", Spacebars.mustache(view.lookup("_id")) ];                                                      // 32
        }                                                                                                              // 33
      }, Blaze.View("lookup:name", function() {                                                                        // 34
        return Spacebars.mustache(view.lookup("name"));                                                                // 35
      }), " ", Blaze.View("lookup:last", function() {                                                                  // 36
        return Spacebars.mustache(view.lookup("last"));                                                                // 37
      }), " from ", Blaze.View("lookup:organization", function() {                                                     // 38
        return Spacebars.mustache(view.lookup("organization"));                                                        // 39
      }), ":")), "\n                       " ];                                                                        // 40
    }), "\n\n              "), "\n            "), "\n         \n", HTML.DIV({                                          // 41
      "class": "col s12 m12 l9"                                                                                        // 42
    }, "\n  ", HTML.H5({                                                                                               // 43
      "class": "grey-text text-darken-3"                                                                               // 44
    }, "Application Card"), "\n  ", HTML.DIV({                                                                         // 45
      "class": "divider light-green",                                                                                  // 46
      style: "margin-bottom:.5em;"                                                                                     // 47
    }), "\n            ", Blaze.Each(function() {                                                                      // 48
      return Spacebars.call(view.lookup("rsvps"));                                                                     // 49
    }, function() {                                                                                                    // 50
      return [ "\n  ", HTML.DIV({                                                                                      // 51
        id: function() {                                                                                               // 52
          return Spacebars.mustache(view.lookup("_id"));                                                               // 53
        },                                                                                                             // 54
        "class": " card scrollspy light-green lighten-5",                                                              // 55
        style: "margin-bottom:2.5em;"                                                                                  // 56
      }, "\n\n    ", HTML.DIV({                                                                                        // 57
        "class": "card-content"                                                                                        // 58
      }, "\n    \n    \n      ", HTML.SPAN({                                                                           // 59
        "class": "card-title activator grey-text text-darken-4  "                                                      // 60
      }, Blaze.View("lookup:name", function() {                                                                        // 61
        return Spacebars.mustache(view.lookup("name"));                                                                // 62
      }), " ", Blaze.View("lookup:last", function() {                                                                  // 63
        return Spacebars.mustache(view.lookup("last"));                                                                // 64
      }), " - ", HTML.B(HTML.U(Blaze.View("lookup:organization", function() {                                          // 65
        return Spacebars.mustache(view.lookup("organization"));                                                        // 66
      }))), HTML.I({                                                                                                   // 67
        "class": "material-icons right red-text delete"                                                                // 68
      }, "close"), HTML.I({                                                                                            // 69
        "class": "material-icons right"                                                                                // 70
      }, "add")), "\n        ", HTML.UL({                                                                              // 71
        "class": "collection"                                                                                          // 72
      }, "\n      \n       \n      ", HTML.LI({                                                                        // 73
        "class": "collection-item"                                                                                     // 74
      }, "Email Address: ", HTML.B({                                                                                   // 75
        "class": "right"                                                                                               // 76
      }, Blaze.View("lookup:email", function() {                                                                       // 77
        return Spacebars.mustache(view.lookup("email"));                                                               // 78
      }))), "\n      ", HTML.LI({                                                                                      // 79
        "class": "collection-item"                                                                                     // 80
      }, "Phone Number: ", HTML.B({                                                                                    // 81
        "class": "right"                                                                                               // 82
      }, Blaze.View("lookup:phone", function() {                                                                       // 83
        return Spacebars.mustache(view.lookup("phone"));                                                               // 84
      }))), "\n          ", HTML.LI({                                                                                  // 85
        "class": "collection-item"                                                                                     // 86
      }, "Applicant's website: ", HTML.B({                                                                             // 87
        "class": "right"                                                                                               // 88
      }, Blaze.View("lookup:website", function() {                                                                     // 89
        return Spacebars.mustache(view.lookup("website"));                                                             // 90
      }))), "\n      ", HTML.LI({                                                                                      // 91
        "class": "collection-item"                                                                                     // 92
      }, "Approximate Budget: ", HTML.B({                                                                              // 93
        "class": "right"                                                                                               // 94
      }, Blaze.View("lookup:budget", function() {                                                                      // 95
        return Spacebars.mustache(view.lookup("budget"));                                                              // 96
      }))), "\n      ", HTML.LI({                                                                                      // 97
        "class": "collection-item"                                                                                     // 98
      }, "Industry the Company is in: ", HTML.B({                                                                      // 99
        "class": "right"                                                                                               // 100
      }, Blaze.View("lookup:industry", function() {                                                                    // 101
        return Spacebars.mustache(view.lookup("industry"));                                                            // 102
      }))), "\n      ", HTML.LI({                                                                                      // 103
        "class": "collection-item"                                                                                     // 104
      }, "Competitors for Applicant: ", HTML.B({                                                                       // 105
        "class": "right"                                                                                               // 106
      }, Blaze.View("lookup:Competitors", function() {                                                                 // 107
        return Spacebars.mustache(view.lookup("Competitors"));                                                         // 108
      }))), "\n      ", HTML.LI({                                                                                      // 109
        "class": "collection-item"                                                                                     // 110
      }, "They heard about you through: ", HTML.B({                                                                    // 111
        "class": "right"                                                                                               // 112
      }, Blaze.View("lookup:iadSense", function() {                                                                    // 113
        return Spacebars.mustache(view.lookup("iadSense"));                                                            // 114
      }))), "\n      ", HTML.LI({                                                                                      // 115
        "class": "collection-item"                                                                                     // 116
      }, "Engaged with another agent?: ", HTML.B({                                                                     // 117
        "class": "right"                                                                                               // 118
      }, Blaze.View("lookup:another", function() {                                                                     // 119
        return Spacebars.mustache(view.lookup("another"));                                                             // 120
      }))), "\n       ", HTML.LI({                                                                                     // 121
        "class": "collection-item"                                                                                     // 122
      }, "They want to work with you for: ", HTML.B({                                                                  // 123
        "class": "right"                                                                                               // 124
      }, Blaze.View("lookup:length", function() {                                                                      // 125
        return Spacebars.mustache(view.lookup("length"));                                                              // 126
      }))), "\n              ", HTML.LI({                                                                              // 127
        "class": "collection-item"                                                                                     // 128
      }, "Application sent at: ", HTML.B({                                                                             // 129
        "class": "right"                                                                                               // 130
      }, Blaze.View("lookup:createdAt", function() {                                                                   // 131
        return Spacebars.mustache(view.lookup("createdAt"));                                                           // 132
      }))), "\n    "), "\n    ", HTML.P({                                                                              // 133
        "class": "center"                                                                                              // 134
      }, "Click the plus sign for more information"), "\n    "), "\n    ", HTML.DIV({                                  // 135
        "class": "card-reveal light-green lighten-5"                                                                   // 136
      }, "\n      ", HTML.DIV({                                                                                        // 137
        "class": "center"                                                                                              // 138
      }, "\n", HTML.SPAN({                                                                                             // 139
        "class": "grey-text text-darken-3"                                                                             // 140
      }, "Additional Information for ", Blaze.View("lookup:name", function() {                                         // 141
        return Spacebars.mustache(view.lookup("name"));                                                                // 142
      }), HTML.SPAN({                                                                                                  // 143
        "class": "card-title grey-text text-darken-4"                                                                  // 144
      }, HTML.I({                                                                                                      // 145
        "class": "fa fa-angle-down right"                                                                              // 146
      }))), "\n      "), "\n    \n    ", HTML.UL({                                                                     // 147
        "class": "collection"                                                                                          // 148
      }, "\n     ", HTML.LI({                                                                                          // 149
        "class": "collection-item"                                                                                     // 150
      }, "What else should you know? ", HTML.B({                                                                       // 151
        "class": "right"                                                                                               // 152
      }, Blaze.View("lookup:whatElse", function() {                                                                    // 153
        return Spacebars.mustache(view.lookup("whatElse"));                                                            // 154
      })), "\n     "), "\n     ", HTML.LI(), "\n      \n         \n    "), "\n      ", HTML.DIV({                      // 155
        "class": "row"                                                                                                 // 156
      }, "\n", HTML.DIV({                                                                                              // 157
        "class": "col s6"                                                                                              // 158
      }, "\n", HTML.P({                                                                                                // 159
        "class": "center"                                                                                              // 160
      }, "Public Relations"), "\n", HTML.UL({                                                                          // 161
        "class": "collection"                                                                                          // 162
      }, "\n", HTML.LI({                                                                                               // 163
        "class": "collection-item"                                                                                     // 164
      }, "Full Service  ", HTML.B({                                                                                    // 165
        "class": "right",                                                                                              // 166
        style: "font-size:12px;"                                                                                       // 167
      }, Blaze.View("lookup:pr", function() {                                                                          // 168
        return Spacebars.mustache(view.lookup("pr"));                                                                  // 169
      }))), "\n", HTML.LI({                                                                                            // 170
        "class": "collection-item"                                                                                     // 171
      }, "Proj. Launch Support  ", HTML.B({                                                                            // 172
        "class": "right",                                                                                              // 173
        style: "font-size:12px;"                                                                                       // 174
      }, Blaze.View("lookup:prls", function() {                                                                        // 175
        return Spacebars.mustache(view.lookup("prls"));                                                                // 176
      }))), "\n", HTML.LI({                                                                                            // 177
        "class": "collection-item"                                                                                     // 178
      }, "Media Relations ", HTML.B({                                                                                  // 179
        "class": "right",                                                                                              // 180
        style: "font-size:12px;"                                                                                       // 181
      }, Blaze.View("lookup:mr", function() {                                                                          // 182
        return Spacebars.mustache(view.lookup("mr"));                                                                  // 183
      }))), "\n", HTML.LI({                                                                                            // 184
        "class": "collection-item"                                                                                     // 185
      }, "Analyst Relations ", HTML.B({                                                                                // 186
        "class": "right",                                                                                              // 187
        style: "font-size:12px;"                                                                                       // 188
      }, Blaze.View("lookup:ar", function() {                                                                          // 189
        return Spacebars.mustache(view.lookup("ar"));                                                                  // 190
      }))), "\n", HTML.LI({                                                                                            // 191
        "class": "collection-item"                                                                                     // 192
      }, "Speaking Engagements ", HTML.B({                                                                             // 193
        "class": "right",                                                                                              // 194
        style: "font-size:12px;"                                                                                       // 195
      }, Blaze.View("lookup:se", function() {                                                                          // 196
        return Spacebars.mustache(view.lookup("se"));                                                                  // 197
      }))), "\n", HTML.LI({                                                                                            // 198
        "class": "collection-item"                                                                                     // 199
      }, "Awards Opportunities  ", HTML.B({                                                                            // 200
        "class": "right",                                                                                              // 201
        style: "font-size:12px;"                                                                                       // 202
      }, Blaze.View("lookup:ao", function() {                                                                          // 203
        return Spacebars.mustache(view.lookup("ao"));                                                                  // 204
      }))), "\n", HTML.LI({                                                                                            // 205
        "class": "collection-item"                                                                                     // 206
      }, "Events & Sponsorship\n  ", HTML.B({                                                                          // 207
        "class": "right",                                                                                              // 208
        style: "font-size:12px;"                                                                                       // 209
      }, Blaze.View("lookup:es", function() {                                                                          // 210
        return Spacebars.mustache(view.lookup("es"));                                                                  // 211
      }))), "\n"), "\n"), "\n", HTML.DIV({                                                                             // 212
        "class": "col s6"                                                                                              // 213
      }, "\n", HTML.P({                                                                                                // 214
        "class": "center"                                                                                              // 215
      }, "Digital & Social Servies"), "\n", HTML.UL({                                                                  // 216
        "class": "collection"                                                                                          // 217
      }, "\n", HTML.LI({                                                                                               // 218
        "class": "collection-item"                                                                                     // 219
      }, "Full Service  ", HTML.B({                                                                                    // 220
        "class": "right",                                                                                              // 221
        style: "font-size:12px;"                                                                                       // 222
      }, Blaze.View("lookup:dss", function() {                                                                         // 223
        return Spacebars.mustache(view.lookup("dss"));                                                                 // 224
      }))), "\n", HTML.LI({                                                                                            // 225
        "class": "collection-item"                                                                                     // 226
      }, "Campaign/product launch  ", HTML.B({                                                                         // 227
        "class": "right",                                                                                              // 228
        style: "font-size:12px;"                                                                                       // 229
      }, Blaze.View("lookup:cp", function() {                                                                          // 230
        return Spacebars.mustache(view.lookup("cp"));                                                                  // 231
      }))), "\n", HTML.LI({                                                                                            // 232
        "class": "collection-item"                                                                                     // 233
      }, "Social channel management  ", HTML.B({                                                                       // 234
        "class": "right",                                                                                              // 235
        style: "font-size:12px;"                                                                                       // 236
      }, Blaze.View("lookup:scm", function() {                                                                         // 237
        return Spacebars.mustache(view.lookup("scm"));                                                                 // 238
      }))), "\n", HTML.LI({                                                                                            // 239
        "class": "collection-item"                                                                                     // 240
      }, "Advertising and/or paid media campaigns ", HTML.B({                                                          // 241
        "class": "right",                                                                                              // 242
        style: "font-size:12px;"                                                                                       // 243
      }, Blaze.View("lookup:adv", function() {                                                                         // 244
        return Spacebars.mustache(view.lookup("adv"));                                                                 // 245
      }))), "\n"), "\n", HTML.P({                                                                                      // 246
        "class": "center"                                                                                              // 247
      }, "Strategy & Consulting Services"), "\n", HTML.UL({                                                            // 248
        "class": "collection"                                                                                          // 249
      }, "\n", HTML.LI({                                                                                               // 250
        "class": "collection-item"                                                                                     // 251
      }, "Full Service  ", HTML.B({                                                                                    // 252
        "class": "right",                                                                                              // 253
        style: "font-size:12px;"                                                                                       // 254
      }, Blaze.View("lookup:scs", function() {                                                                         // 255
        return Spacebars.mustache(view.lookup("scs"));                                                                 // 256
      }))), "\n", HTML.LI({                                                                                            // 257
        "class": "collection-item"                                                                                     // 258
      }, "Social Analytics  ", HTML.B({                                                                                // 259
        "class": "right",                                                                                              // 260
        style: "font-size:12px;"                                                                                       // 261
      }, Blaze.View("lookup:san", function() {                                                                         // 262
        return Spacebars.mustache(view.lookup("san"));                                                                 // 263
      }))), "\n", HTML.LI({                                                                                            // 264
        "class": "collection-item"                                                                                     // 265
      }, "Media Analytics  ", HTML.B({                                                                                 // 266
        "class": "right",                                                                                              // 267
        style: "font-size:12px;"                                                                                       // 268
      }, Blaze.View("lookup:sam", function() {                                                                         // 269
        return Spacebars.mustache(view.lookup("sam"));                                                                 // 270
      }))), "\n", HTML.LI({                                                                                            // 271
        "class": "collection-item"                                                                                     // 272
      }, "Brand Analysis", HTML.B({                                                                                    // 273
        "class": "right",                                                                                              // 274
        style: "font-size:12px;"                                                                                       // 275
      }, Blaze.View("lookup:ba", function() {                                                                          // 276
        return Spacebars.mustache(view.lookup("ba"));                                                                  // 277
      }))), "\n", HTML.LI({                                                                                            // 278
        "class": "collection-item"                                                                                     // 279
      }, "Messaging Development", HTML.B({                                                                             // 280
        "class": "right",                                                                                              // 281
        style: "font-size:12px;"                                                                                       // 282
      }, Blaze.View("lookup:mdev", function() {                                                                        // 283
        return Spacebars.mustache(view.lookup("mdev"));                                                                // 284
      }))), "\n"), "\n      "), "\n      "), "\n    \n    "), "\n \n  "), "\n\n     " ];                               // 285
    }, function() {                                                                                                    // 286
      return [ "\n            ", HTML.P("Nothing"), "\n            " ];                                                // 287
    }), "\n            "), "\n         \n        "), "\n    "), "\n"), "\n"), "\n"), "\n " ];                          // 288
  }, function() {                                                                                                      // 289
    return [ "\n ", HTML.DIV({                                                                                         // 290
      "class": "center"                                                                                                // 291
    }, "\n   No access\n "), "\n " ];                                                                                  // 292
  });                                                                                                                  // 293
}));                                                                                                                   // 294
                                                                                                                       // 295
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// backend/template.login.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("dashboards");                                                                                    // 2
Template["dashboards"] = new Template("Template.dashboards", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<p class="">You\'re logged in. <br><a href="#" class="logout  btn white-text red">Logout</a></p>');
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("register");                                                                                      // 8
Template["register"] = new Template("Template.register", (function() {                                                 // 9
  var view = this;                                                                                                     // 10
  return HTML.Raw('<div class="center">\n \n</div>\n    <form>\n        <input type="email" name="registerEmail">\n        <input type="password" name="registerPassword">\n        <input type="submit" value="Register">\n    </form>');
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("login");                                                                                         // 14
Template["login"] = new Template("Template.login", (function() {                                                       // 15
  var view = this;                                                                                                     // 16
  return HTML.Raw('<section> \n<div class="container" style="padding:2em;">\n<div class="center">\n    <a href="/"><img src="/img/badge.png" width="220"></a>\n    <br>\n    <h4 class="grey-text text-darken-1 mont">Welcome, you are about to login into privileged sectors of our website. Please provide your credentials.</h4>\n    <h4 class="grey-text text-darken-1">환영합니다. 로그인하기 위해 아이디와 비밀번호를 제공해주십시오.</h4>\n</div>\n</div>\n<div class="container">\n<form>\n<div class="row">\n     <div class="col s12 l8 offset-l2">\n     <div class="input-field">\n         <i class="material-icons prefix">account_circle</i>\n          <input id="icon_prefix" type="email" name="loginEmail" class="validate">\n          <label for="icon_prefix">Email Address</label>\n          </div>\n          <br>\n           <div class="input-field">\n         <i class="material-icons prefix">https</i>\n          <input id="icon_prefix" type="password" name="loginPassword" class="validate">\n          <label for="icon_prefix">Password</label>\n          </div>\n          <br>\n             <div class="center">\n<input class="btn-large white-text red lighten-1" type="submit" value="LOGIN | 로그인하기">\n        </div>\n        </div>\n      \n    \n    </div>\n     </form>\n    </div>\n    </section>');
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"backend.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// backend/backend.js                                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 2
  // This code only runs on the client                                                                                 //
                                                                                                                       //
  Template.application.events({                                                                                        // 5
                                                                                                                       //
    "click .delete": function () {                                                                                     // 7
      function clickDelete() {                                                                                         // 7
        Rsvps.remove(this._id);                                                                                        // 8
      }                                                                                                                // 9
                                                                                                                       //
      return clickDelete;                                                                                              // 7
    }()                                                                                                                // 7
  });                                                                                                                  // 5
}                                                                                                                      // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// backend/login.js                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 1
    Template.dashboards.events({                                                                                       // 2
        'click .logout': function () {                                                                                 // 3
            function clickLogout(event) {                                                                              // 3
                event.preventDefault();                                                                                // 4
                Meteor.logout();                                                                                       // 5
            }                                                                                                          // 6
                                                                                                                       //
            return clickLogout;                                                                                        // 3
        }()                                                                                                            // 3
    });                                                                                                                // 2
    Template.register.events({                                                                                         // 8
        'submit form': function () {                                                                                   // 9
            function submitForm(event) {                                                                               // 9
                event.preventDefault();                                                                                // 10
                var emailVar = event.target.registerEmail.value;                                                       // 11
                var passwordVar = event.target.registerPassword.value;                                                 // 12
                Accounts.createUser({                                                                                  // 13
                    email: emailVar,                                                                                   // 14
                    password: passwordVar                                                                              // 15
                });                                                                                                    // 13
            }                                                                                                          // 17
                                                                                                                       //
            return submitForm;                                                                                         // 9
        }()                                                                                                            // 9
    });                                                                                                                // 8
    Template.login.events({                                                                                            // 19
        'submit form': function () {                                                                                   // 20
            function submitForm(event) {                                                                               // 20
                event.preventDefault();                                                                                // 21
                var emailVar = event.target.loginEmail.value;                                                          // 22
                var passwordVar = event.target.loginPassword.value;                                                    // 23
                Meteor.loginWithPassword(emailVar, passwordVar);                                                       // 24
            }                                                                                                          // 25
                                                                                                                       //
            return submitForm;                                                                                         // 20
        }()                                                                                                            // 20
    });                                                                                                                // 19
}                                                                                                                      // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"config.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/config.js                                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Router.configure({                                                                                                     // 1
	layoutTemplate: 'appLayout'                                                                                           // 2
});                                                                                                                    // 1
                                                                                                                       //
Router.plugin('dataNotFound', { dataNotFoundTemplate: 'notFound' });                                                   // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/route.coffee.js                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Router.configure({                                                                                                     // 1
  meta: {                                                                                                              //
    charset: {                                                                                                         //
      charset: 'UTF-8'                                                                                                 //
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      content: 'applications, mobile, web, javascript, santa barbara, meteor, meteor.js, hybrid applications, web design, web development, mobile app development, web design, web development'
    },                                                                                                                 //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      content: 'My name is Joe and I am a developer, a designer, and a coffee addict. Working with you to make a powerful web application for you and your business.'
    },                                                                                                                 //
    image: {                                                                                                           //
      property: 'og:image',                                                                                            //
      content: '/img/drawnPic.jpg'                                                                                     //
    },                                                                                                                 //
    author: {                                                                                                          //
      name: 'author',                                                                                                  //
      content: 'Joseph S. Lee'                                                                                         //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      content: 'http://www.jaulzlee.com'                                                                               //
    },                                                                                                                 //
    'http-equiv': {                                                                                                    //
      'http-equiv': 'X-UA-Compatible',                                                                                 //
      content: 'IE=edge,chrome=1'                                                                                      //
    },                                                                                                                 //
    robots: 'index, follow',                                                                                           //
    google: 'notranslate'                                                                                              //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('home', {                                                                                                 // 44
  template: 'home',                                                                                                    //
  path: '/',                                                                                                           //
  title: 'Joseph Lee | Designer & Developer using Meteor.JS',                                                          //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.jaulzlee.com/'                                                                              //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('about', {                                                                                                // 55
  template: 'about',                                                                                                   //
  path: '/about-me',                                                                                                   //
  title: 'About Me',                                                                                                   //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.jaulzlee.com/about-me'                                                                      //
    },                                                                                                                 //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      property: 'og:description',                                                                                      //
      content: 'I believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination.'
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/drawnPic.jpg'                                                                                     //
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: 'web design, web development, freelance webdeveloper, coding, designer, developer',                     //
      'og:type': 'website'                                                                                             //
    },                                                                                                                 //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'About Me'                                                                                         //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('service', {                                                                                              // 82
  template: 'service',                                                                                                 //
  path: '/my-services',                                                                                                //
  title: 'My Services',                                                                                                //
  meta: {                                                                                                              //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      itemprop: 'description',                                                                                         //
      property: 'og:description',                                                                                      //
      content: 'I ensure that the design benefits the function. Producing features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: 'Santa Barbara, ecommerce site, Wordpress, Drupal, Mobile responsive,  speed, logo service, google search, seo, stripe, paypal, cms, web application, reactivity, javascript, meteor, meteor.js, web design santa barbara'
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/drawnPic.jpg'                                                                                     //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.jaulzlee.com/my-services'                                                                   //
    },                                                                                                                 //
    'og:type': 'website',                                                                                              //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'My Services'                                                                                      //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('hybrid', {                                                                                               // 110
  template: 'hybrid',                                                                                                  //
  path: '/about-hybrid-apps',                                                                                          //
  title: 'About Hybrid Applications',                                                                                  //
  meta: {                                                                                                              //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      itemprop: 'description',                                                                                         //
      property: 'og:description',                                                                                      //
      content: ' Hybrid development combines the best (or worst) of both the native and HTML5 worlds. We define hybrid as a web app, primarily built using HTML5 and JavaScript, that is then wrapped inside a thin native container that provides access to native platform features '
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: 'screen, web, app, mobile, html5, hybrid app, javascript, native container, websites, mobile app, santa barbara websites'
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/drawnPic.jpg'                                                                                     //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.jaulzlee.com/about-hybrid-app'                                                              //
    },                                                                                                                 //
    'og:type': 'website',                                                                                              //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'About Hybrid Apps'                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('portfolio', {                                                                                            // 138
  template: 'portfolio',                                                                                               //
  path: '/my-work',                                                                                                    //
  title: 'My Portfolio',                                                                                               //
  meta: {                                                                                                              //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      itemprop: 'description',                                                                                         //
      property: 'og:description',                                                                                      //
      content: 'Some of my past and recent works. Made with Meteor. '                                                  //
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: ' web, mobile, website, mobile app, meteor, meteor.js'                                                  //
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/drawnPic.jpg'                                                                                     //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.jaulzlee.com/my-work'                                                                       //
    },                                                                                                                 //
    'og:type': 'website',                                                                                              //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'My Work'                                                                                          //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('approach', {                                                                                             // 166
  template: 'approach',                                                                                                //
  path: '/how-we-work',                                                                                                //
  title: 'How We Work',                                                                                                //
  meta: {                                                                                                              //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      itemprop: 'description',                                                                                         //
      property: 'og:description',                                                                                      //
      content: 'Building success is not for the feint of heart. It is for people who work tirelessly towards their goal. That is our philosophy here. We strive in providing you with the best of our abilities.'
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: 'aware, bold, create, success, illume inc., web space, designer, development roadmap'                   //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.jaulzlee.com/how-we-work'                                                                   //
    },                                                                                                                 //
    'og:type': 'website',                                                                                              //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'How We Work'                                                                                      //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('lessons', {                                                                                              // 190
  template: 'lessons',                                                                                                 //
  path: '/services/web-lessons',                                                                                       //
  title: 'Web Lessons',                                                                                                //
  meta: {                                                                                                              //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      itemprop: 'description',                                                                                         //
      property: 'og:description',                                                                                      //
      content: ' .'                                                                                                    //
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: ' '                                                                                                     //
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/reas.png'                                                                                         //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.jaulzlee.com/services/web-lessons'                                                          //
    },                                                                                                                 //
    'og:type': 'website',                                                                                              //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'Web Lessons'                                                                                      //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('applications', {                                                                                         // 218
  template: 'applications',                                                                                            //
  layoutTemplate: 'appLayout',                                                                                         //
  path: '/contact-me',                                                                                                 //
  title: 'Contact',                                                                                                    //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: ' '                                                                                                     //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('application', {                                                                                          // 229
  template: 'application',                                                                                             //
  path: '/backend',                                                                                                    //
  layoutTemplate: 'loginLayout',                                                                                       //
  controller: 'main2Controller',                                                                                       //
  title: '',                                                                                                           //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: ' '                                                                                                     //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('rsvp', {                                                                                                 // 241
  template: 'rsvp',                                                                                                    //
  controller: 'RsvpController',                                                                                        //
  action: 'action',                                                                                                    //
  where: 'client'                                                                                                      //
});                                                                                                                    //
                                                                                                                       //
Router.route('login', {                                                                                                // 246
  template: 'login',                                                                                                   //
  layoutTemplate: 'loginLayout',                                                                                       //
  path: '/login',                                                                                                      //
  title: 'Login',                                                                                                      //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: ' '                                                                                                     //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('dashboards', {                                                                                           // 256
  template: 'dashboards',                                                                                              //
  layoutTemplate: 'loginLayout',                                                                                       //
  controller: 'main2Controller',                                                                                       //
  path: '/dashboard',                                                                                                  //
  title: 'Dashboard',                                                                                                  //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: ' '                                                                                                     //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('register', {                                                                                             // 267
  template: 'register',                                                                                                //
  layoutTemplate: 'registerTemplate',                                                                                  //
  path: '/register',                                                                                                   //
  title: 'Register',                                                                                                   //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: ' '                                                                                                     //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('policy', {                                                                                               // 277
  template: 'policy',                                                                                                  //
  path: '/policies'                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"both":{"i18n":{"en":{"about.en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/en/about.en.i18n.json                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                                 // 9
// integrate the fallback language translations                                                                        // 10
translations = {};                                                                                                     // 11
translations[namespace] = {"aboutIllume":"A Santa Barbara, CA based group, or purpose is to help create or refine your product vision and aim your business towards success. From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites. One size does not fit all so we try our best to understand your current situation to build a comprehensive plan to bring additiional value to your idea.","webAndMobile":"Web & Mobile Apps, ","intoOne":"into One","secretWeapon":"Secret Weapon,","iValue":"I value simple content structure, clean design patterns, and thoughtful interactions.","iCode":"I love to code things from scratch, and enjoy bringing ideas to life in the browser.","moreMe":" I play videogames, read, but I mostly enjoy spending time with friends and family.","myTools":"My Tools:","thingsDesign":"Things I enjoy designing:","languageSpeak":"Languages I speak","thingsLike":"Things I enjoy:","coffeeAnd":"Coffee, videogames, coding, hanging out with loved ones, oh and also coffee.","occasionally":"Occasionally","meteor":"METEOR","learnMoreHybrid":"LEARN MORE ON HYBRID APPS","webDesc":"In December of 2010, Samsung SDS predicted that a native container platform that can merge the intricacies of the web and the dynamics of mobile apps will bring about a new future in software engineering. This so called 'hybrid apps' will bring ideas across all platforms of all devices; breaking down  walls for ideas to permeate into the marketspace. The good news is: We offer it right here at illume Inc. Experience the best of both worlds   and spark your ideas to life.","silos":"We cut out the silos and cookie-cutter solutions because we know they will ultimately fail. We are eager to find out what makes your business tick so we can build you a custom high-end website that works for you. Meteor is a Node.JS platform that offers robust flexibility in creating beautiful and powerful applications. We are proud to be part of a growing community of engineers willing to embrace the web-revolution that is about to come. Don't wait.","discoverMeteor":"DISCOVER METEOR","leeSang":"JOE LEE","leadDeveloper":"I believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination. I strive to maintain constant communication between you and our team to ensure the optimal health of your product for your business. Thanks for choosing to work with me.","aLittleAboutMeteor":"A little about Meteor.JS","readySetGo":"READY, SET, GO.","meteorJs":"Meteor.JS"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"contact.en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/en/contact.en.i18n.json                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"contactMe":"Contact me today!","startProject":"     Starting a project with me is easy. Just email, call, or text me 24/7. I will get back to you within minutes."};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/en/header.en.i18n.json                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"about":"About me","howWeWork":"How I work","ourServices":"Services","portfolio":"My work","reachUs":"Reach me"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/en/home.en.i18n.json                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"whatWeDo":"Hey, I'm Joe. Pleasure to meet you.","mission1":"Since beginning my journey as a freelance designer nearly 5 years ago, I've done remote work for businesses, consulted for startups, non-profit orgs, and collaborated with talented people to create digital products for both business and personal use. I'm quietly confident, naturally curious, and perpetually improving my chops.","koreaAdd":"","mission2":"You’ll finish with a data-driven product roadmap that outlines your path to successful launch all before a single line of code is written. Once that is done, we get to work.","innovative":"Innovative","bridging":"Bridging Mobile & Web","tailored":"Tailored For You","learnMore":"More about me","viewMore":"Want to see more?","roadTo":"Let's make you a","developDesigner":"Developer, Designer, and Coffee Addict","someOfOurWork":"SOME OF MY RECENT WORK","allOfOurWebsites":"All of the websites and hybrid applications are based on Meteor.","fastSleek":"They are all fast, sleek, and ready to make a change in their respective industries.","madeWith":"Made with ","madeWithK":"","weBuild":"Building with reactivity in mind","reactiveJavascript":"and utilizing JavaScript","fullest":"to its fullest","embrace":"Embracing the 21st century,","dynamicReactive":"dynamic reactivity is now ","21stC":"in the palm of your hands.","createProducts":"Creating the products with ","youInMind":"with YOU in mind ","createSuccess":"to create success.","insteadOf":"Instead of just handing over a set of deliverables, I work with you to achieve the results you want. We’ll test your ideas together in the marketplace, gather real data, and discover the key benefits of your concept, then create stunning visuals and a comprehensive backlog to serve as an investor-ready MVP. Setting this foundation means you’re not just walking away with a roadmap to a product","walkAway":"you’re walking away with the peace of mind that your product is what people want.","areYouGame":"ARE YOU GAME?","coffee":"First coffee is on me.","loveToHear":"Would love to hear more?","alwaysOpen":"I’m always open to discussing product design work or partnership opportunities.","getStarted":"Start a conversation"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"portfolio.en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/en/portfolio.en.i18n.json                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"myWebsitesAre":"My websites are built with ","secondMyWeb":"","stateOfArt":"a state of the art native container - which increases reactivity and performance to a whole new level.","weMakeGraphics":"We make all of our graphics inhouse. Every single graphic work has been made with","aBitOf":"and a little bit of imagination."};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"service.en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/en/service.en.i18n.json                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"reactivity":"reactivity","collaborate":"Let's collaborate to give you a website with","unparalleled":"and unparalleled performance.","meteorFirst":"Meteor gives us developers a radically simpler way to build realtime web apps, entirely in JavaScript from one code base. We are able to leverage Javascript like never before and provide you with blazing reactivity in your web application's core. ","meteorSecond":"  Because the same code runs from the client to the cloud, from packages to database APIs, we are not restricted to our weakest link but can be judged based on our strongest one.","simpleSleek":"Simple, Sleek, yet Powerful","iDevelopWith":"I develop with Meteor to create robust, realtime websites and web applications that are as beautiful as they are powerful. As sleek as they are practical.","my":"My","service":"Services","gotQuestion":"Got questions about my services? Not a problem.","giveUsaCall":"Give me a call or shoot an email. I will get back to you in a jiffy.","websitePackage":"Website Package","ecommerce":"Ecommerce Package","logo":"Logo Package","myServices":"I create, design, and develop websites and web applications for you and your business. Let me know what you need specifically and I am sure I can be of help to you and your team."};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"success.en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/en/success.en.i18n.json                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"successDoesnt":"Success Doesn't Come Easy.  ","combinationOf":"It is a Combination of A,B, and C."};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ko":{"about.ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/ko/about.ko.i18n.json                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"contact.ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/ko/contact.ko.i18n.json                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/ko/header.ko.i18n.json                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/ko/home.ko.i18n.json                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"portfolio.ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/ko/portfolio.ko.i18n.json                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"service.ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/ko/service.ko.i18n.json                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"success.ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n/ko/success.ko.i18n.json                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"i18n.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// both/i18n.js                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
getUserLanguage = function getUserLanguage() {                                                                         // 1
  return "ko";                                                                                                         // 2
};                                                                                                                     // 3
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 5
  Meteor.startup(function () {                                                                                         // 6
    Session.set("showLoadingIndicator", true);                                                                         // 7
                                                                                                                       //
    TAPi18n.setLanguage(getUserLanguage()).done(function () {                                                          // 9
      Session.set("showLoadingIndicator", false);                                                                      // 11
    }).fail(function (error_message) {                                                                                 // 12
      // Handle the situation                                                                                          //
      console.log(error_message);                                                                                      // 15
    });                                                                                                                // 16
  });                                                                                                                  // 17
}                                                                                                                      // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"schemas.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// collections/schemas.js                                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Rsvps = new Mongo.Collection("rsvps");                                                                                 // 1
                                                                                                                       //
Rsvps.attachSchema(new SimpleSchema({                                                                                  // 3
  name: {                                                                                                              // 4
    type: String,                                                                                                      // 5
    label: "Name *",                                                                                                   // 6
    optional: false,                                                                                                   // 7
    min: 2,                                                                                                            // 8
    max: 80                                                                                                            // 9
  },                                                                                                                   // 4
  last: {                                                                                                              // 11
    type: String,                                                                                                      // 12
    label: "Last Name *",                                                                                              // 13
    optional: false,                                                                                                   // 14
    min: 2,                                                                                                            // 15
    max: 80                                                                                                            // 16
  },                                                                                                                   // 11
  organization: {                                                                                                      // 18
    type: String,                                                                                                      // 19
    label: "Name of your business *",                                                                                  // 20
    optional: false,                                                                                                   // 21
    min: 2,                                                                                                            // 22
    max: 80                                                                                                            // 23
  },                                                                                                                   // 18
  website: {                                                                                                           // 25
    type: String,                                                                                                      // 26
    label: "Web Address (If you have one)",                                                                            // 27
    optional: false,                                                                                                   // 28
    min: 4,                                                                                                            // 29
    max: 80                                                                                                            // 30
  },                                                                                                                   // 25
  email: {                                                                                                             // 32
    type: String,                                                                                                      // 33
    label: "Email Address *",                                                                                          // 34
    optional: false,                                                                                                   // 35
    min: 5,                                                                                                            // 36
    max: 80                                                                                                            // 37
  },                                                                                                                   // 32
  budget: {                                                                                                            // 39
    type: String,                                                                                                      // 40
    label: "Estimated Budget for your project",                                                                        // 41
    optional: false,                                                                                                   // 42
    min: 1,                                                                                                            // 43
    max: 80                                                                                                            // 44
  },                                                                                                                   // 39
  phone: {                                                                                                             // 46
    type: Number,                                                                                                      // 47
    label: "Cellphone # *",                                                                                            // 48
    optional: false                                                                                                    // 49
  },                                                                                                                   // 46
  industry: {                                                                                                          // 51
    type: String,                                                                                                      // 52
    label: "What industry is your business in? *",                                                                     // 53
    optional: false                                                                                                    // 54
  },                                                                                                                   // 51
  Competitors: {                                                                                                       // 56
    type: String,                                                                                                      // 57
    label: "Competitors? *",                                                                                           // 58
    optional: false                                                                                                    // 59
  },                                                                                                                   // 56
  iadSense: {                                                                                                          // 61
    type: String,                                                                                                      // 62
    optional: false,                                                                                                   // 63
    label: "How did you hear about us?",                                                                               // 64
    autoform: {                                                                                                        // 65
                                                                                                                       //
      options: [{                                                                                                      // 67
        label: "Prior Client",                                                                                         // 69
        value: "Prior Client"                                                                                          // 70
      }, {                                                                                                             // 68
        label: "Referral",                                                                                             // 73
        value: "Referral"                                                                                              // 74
      }, {                                                                                                             // 72
        label: "Our Website",                                                                                          // 77
        value: "Our Website"                                                                                           // 78
      }, {                                                                                                             // 76
        label: "Search Engine",                                                                                        // 81
        value: "Search Engine"                                                                                         // 82
      }, {                                                                                                             // 80
        label: "Other",                                                                                                // 85
        value: "Other"                                                                                                 // 86
      }]                                                                                                               // 84
    }                                                                                                                  // 65
  },                                                                                                                   // 61
                                                                                                                       //
  whatElse: {                                                                                                          // 92
    type: String,                                                                                                      // 93
    optional: true,                                                                                                    // 94
    label: "Anything else we might need to know?",                                                                     // 95
    min: 20,                                                                                                           // 96
    max: 1000,                                                                                                         // 97
    autoform: {                                                                                                        // 98
      rows: 5                                                                                                          // 99
    }                                                                                                                  // 98
  },                                                                                                                   // 92
  another: {                                                                                                           // 102
    type: Boolean,                                                                                                     // 103
    optional: false,                                                                                                   // 104
    autoform: {                                                                                                        // 105
      type: "switch",                                                                                                  // 106
      trueLabel: "Online",                                                                                             // 107
      falseLabel: "Offline"                                                                                            // 108
    }                                                                                                                  // 105
  },                                                                                                                   // 102
                                                                                                                       //
  createdAt: {                                                                                                         // 112
    type: Date,                                                                                                        // 113
    autoValue: function () {                                                                                           // 114
      function autoValue() {                                                                                           // 114
        return new Date();                                                                                             // 115
      }                                                                                                                // 116
                                                                                                                       //
      return autoValue;                                                                                                // 114
    }()                                                                                                                // 114
  }                                                                                                                    // 112
}));                                                                                                                   // 3
                                                                                                                       //
Rsvps.allow({                                                                                                          // 120
  insert: function () {                                                                                                // 121
    function insert(userId, doc) {                                                                                     // 121
      return true;                                                                                                     // 122
    }                                                                                                                  // 123
                                                                                                                       //
    return insert;                                                                                                     // 121
  }(),                                                                                                                 // 121
  update: function () {                                                                                                // 124
    function update(userId, doc, fields, modifier) {                                                                   // 124
      return true;                                                                                                     // 125
    }                                                                                                                  // 126
                                                                                                                       //
    return update;                                                                                                     // 124
  }(),                                                                                                                 // 124
  remove: function () {                                                                                                // 127
    function remove(userId, doc) {                                                                                     // 127
      return true;                                                                                                     // 128
    }                                                                                                                  // 129
                                                                                                                       //
    return remove;                                                                                                     // 127
  }()                                                                                                                  // 127
});                                                                                                                    // 120
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"controller":{"applicationcontroller.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// controller/applicationcontroller.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
main2Controller = RouteController.extend({                                                                             // 1
  subscriptions: function () {                                                                                         // 2
    function subscriptions() {                                                                                         // 2
      // set up the subscriptions for the route and optionally                                                         //
      // wait on them like this:                                                                                       //
      //                                                                                                               //
      this.subscribe('rsvps').wait();                                                                                  // 6
      //                                                                                                               //
      // "Waiting" on a subscription does not block. Instead,                                                          //
      // the subscription handle is added to a reactive list                                                           //
      // and when all items in this list are ready, this.ready()                                                       //
      // returns true in any of your route functions.                                                                  //
    }                                                                                                                  // 12
                                                                                                                       //
    return subscriptions;                                                                                              // 2
  }(),                                                                                                                 // 2
                                                                                                                       //
  data: function () {                                                                                                  // 14
    function data() {                                                                                                  // 14
      return {                                                                                                         // 15
        rsvps: Rsvps.find({}, { sort: { createdAt: -1 }, limit: 100 })                                                 // 16
      };                                                                                                               // 15
      // return a global data context like this:                                                                       //
      // Items.findOne({_id: this.params._id});                                                                        //
    }                                                                                                                  // 20
                                                                                                                       //
    return data;                                                                                                       // 14
  }(),                                                                                                                 // 14
                                                                                                                       //
  action: function () {                                                                                                // 22
    function action() {                                                                                                // 22
                                                                                                                       //
      // You can create as many action functions as you'd like.                                                        //
      // This is the primary function for running your route.                                                          //
      // Usually it just renders a template to a page. But it                                                          //
      // might also perform some conditional logic. Override                                                           //
      // the data context by providing it as an option in the                                                          //
      // last parameter.                                                                                               //
      this.render('application', {/* data: {} */});                                                                    // 30
    }                                                                                                                  // 31
                                                                                                                       //
    return action;                                                                                                     // 22
  }()                                                                                                                  // 22
});                                                                                                                    // 1
DashboardController = RouteController.extend({                                                                         // 33
                                                                                                                       //
  subscriptions: function () {                                                                                         // 35
    function subscriptions() {                                                                                         // 35
      // set up the subscriptions for the route and optionally                                                         //
      // wait on them like this:                                                                                       //
      //                                                                                                               //
      this.subscribe('rsvps').wait();                                                                                  // 39
      //                                                                                                               //
      // "Waiting" on a subscription does not block. Instead,                                                          //
      // the subscription handle is added to a reactive list                                                           //
      // and when all items in this list are ready, this.ready()                                                       //
      // returns true in any of your route functions.                                                                  //
    }                                                                                                                  // 45
                                                                                                                       //
    return subscriptions;                                                                                              // 35
  }(),                                                                                                                 // 35
                                                                                                                       //
  data: function () {                                                                                                  // 47
    function data() {                                                                                                  // 47
      return {                                                                                                         // 48
        rsvps: Rsvps.find({}, { sort: { createdAt: -1 }, limit: 50 })                                                  // 49
      };                                                                                                               // 48
      // return a global data context like this:                                                                       //
      // Items.findOne({_id: this.params._id});                                                                        //
    }                                                                                                                  // 53
                                                                                                                       //
    return data;                                                                                                       // 47
  }()                                                                                                                  // 47
});                                                                                                                    // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ga.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// controller/ga.js                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
gaController = RouteController.extend({                                                                                // 1
                                                                                                                       //
  action: function () {                                                                                                // 4
    function action() {                                                                                                // 4
                                                                                                                       //
      // You can create as many action functions as you'd like.                                                        //
      // This is the primary function for running your route.                                                          //
      // Usually it just renders a template to a page. But it                                                          //
      // might also perform some conditional logic. Override                                                           //
      // the data context by providing it as an option in the                                                          //
      // last parameter.                                                                                               //
      this.render('home', {/* data: {} */});                                                                           // 12
      GAnalytics.pageview();                                                                                           // 13
    }                                                                                                                  // 14
                                                                                                                       //
    return action;                                                                                                     // 4
  }()                                                                                                                  // 4
});                                                                                                                    // 1
gaController2 = RouteController.extend({                                                                               // 16
                                                                                                                       //
  action: function () {                                                                                                // 19
    function action() {                                                                                                // 19
                                                                                                                       //
      // You can create as many action functions as you'd like.                                                        //
      // This is the primary function for running your route.                                                          //
      // Usually it just renders a template to a page. But it                                                          //
      // might also perform some conditional logic. Override                                                           //
      // the data context by providing it as an option in the                                                          //
      // last parameter.                                                                                               //
      this.render('applications', {/* data: {} */});                                                                   // 27
      GAnalytics.pageview();                                                                                           // 28
    }                                                                                                                  // 29
                                                                                                                       //
    return action;                                                                                                     // 19
  }()                                                                                                                  // 19
});                                                                                                                    // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mainController.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// controller/mainController.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
mainController = RouteController.extend({                                                                              // 1
  subscriptions: function () {                                                                                         // 2
    function subscriptions() {                                                                                         // 2
      // set up the subscriptions for the route and optionally                                                         //
      // wait on them like this:                                                                                       //
      //                                                                                                               //
      this.subscribe('rsvps').wait();                                                                                  // 6
      //                                                                                                               //
      // "Waiting" on a subscription does not block. Instead,                                                          //
      // the subscription handle is added to a reactive list                                                           //
      // and when all items in this list are ready, this.ready()                                                       //
      // returns true in any of your route functions.                                                                  //
    }                                                                                                                  // 12
                                                                                                                       //
    return subscriptions;                                                                                              // 2
  }(),                                                                                                                 // 2
                                                                                                                       //
  data: function () {                                                                                                  // 14
    function data() {                                                                                                  // 14
      return {                                                                                                         // 15
        rsvps: Rsvps.find({}, { sort: { createdAt: -1 }, limit: 1 })                                                   // 16
      };                                                                                                               // 15
      // return a global data context like this:                                                                       //
      // Items.findOne({_id: this.params._id});                                                                        //
    }                                                                                                                  // 20
                                                                                                                       //
    return data;                                                                                                       // 14
  }(),                                                                                                                 // 14
                                                                                                                       //
  action: function () {                                                                                                // 22
    function action() {                                                                                                // 22
                                                                                                                       //
      // You can create as many action functions as you'd like.                                                        //
      // This is the primary function for running your route.                                                          //
      // Usually it just renders a template to a page. But it                                                          //
      // might also perform some conditional logic. Override                                                           //
      // the data context by providing it as an option in the                                                          //
      // last parameter.                                                                                               //
      this.render('applications', {/* data: {} */});                                                                   // 30
    }                                                                                                                  // 31
                                                                                                                       //
    return action;                                                                                                     // 22
  }()                                                                                                                  // 22
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".coffee",".css",".less"]});
require("./client/layout/appLayout/template.appLayout.js");
require("./client/layout/appLayout/template.dashboard.js");
require("./client/layout/appLayout/template.loginLayout.js");
require("./client/layout/footer/template.footer.js");
require("./client/layout/header/template.header.js");
require("./client/templates/about/template.about.js");
require("./client/templates/approach/template.approach.js");
require("./client/templates/home/template.home.js");
require("./client/templates/hybrid/template.hybrid.js");
require("./client/templates/policy/template.policies.js");
require("./client/templates/portfolio/template.portfolio.js");
require("./client/templates/services/template.service.js");
require("./client/templates/work/template.application.js");
require("./client/components/template.language_switcher.js");
require("./backend/template.backend.js");
require("./backend/template.login.js");
require("./lib/config.js");
require("./lib/route.coffee.js");
require("./both/i18n/en/about.en.i18n.json");
require("./both/i18n/en/contact.en.i18n.json");
require("./both/i18n/en/header.en.i18n.json");
require("./both/i18n/en/home.en.i18n.json");
require("./both/i18n/en/portfolio.en.i18n.json");
require("./both/i18n/en/service.en.i18n.json");
require("./both/i18n/en/success.en.i18n.json");
require("./both/i18n/ko/about.ko.i18n.json");
require("./both/i18n/ko/contact.ko.i18n.json");
require("./both/i18n/ko/header.ko.i18n.json");
require("./both/i18n/ko/home.ko.i18n.json");
require("./both/i18n/ko/portfolio.ko.i18n.json");
require("./both/i18n/ko/service.ko.i18n.json");
require("./both/i18n/ko/success.ko.i18n.json");
require("./client/layout/appLayout/appLayout.js");
require("./client/layout/header/header.js");
require("./client/templates/about/about.js");
require("./client/templates/approach/approach.js");
require("./client/templates/home/home.js");
require("./client/templates/hybrid/hybrid.js");
require("./client/templates/portfolio/portfolio.js");
require("./client/templates/services/service.js");
require("./client/templates/work/application.js");
require("./client/components/language_switcher.js");
require("./backend/backend.js");
require("./backend/login.js");
require("./both/i18n.js");
require("./collections/schemas.js");
require("./controller/applicationcontroller.js");
require("./controller/ga.js");
require("./controller/mainController.js");