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
  return HTML.Raw('<div class="container">\n \n    </div>\n<footer class="page-footer" style="background: #2f363b;height:500px;">\n    <section class="text-center" style="padding:1em;margin-top:70px;">     \n        <div class="container center">\n    <div>\n        <a href="/"><img src="/img/wlogo.png" width="85"></a>\n        </div>\n        <br>\n        <div class="divider" style="margin:0 auto;width: 100px"></div>\n    <p class="footer-company-motto nanum white-text flow-text"><b>Living, Breathing, and Improving</b></p>\n\n	 \n\n			<p class="footer-company-name nanum" style="color:#a0a0a0;margin-top: 120px;">Typecrafted by joseph s. lee &copy; twentyeighteen<br><span class="nanum">경기도 고양시 </span>| Santa Barbara, CA</p>\n    <p class="footer-links"><a style="color:#5c6972" href="https://www.facebook.com/illumeweb/"><i class="fa fa-facebook fa-2x"></i></a>  	· <a style="color:#5c6972" href="https://www.instagram.com/illumeinc/"><i class="fa fa-instagram fa-2x"></i></a>· <a style="color:#5c6972" href="http://www.yelp.com/biz/illume-web-design-and-development-goleta"><i class="fa fa-yelp fa-2x"></i></a></p>\n        </div>\n    </section> \n    </footer>');
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
  }, "\n        ", HTML.Raw('<div class="brand-logo center hide-on-small-only">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n              ", HTML.Raw('<div class="brand-logos brand-logo show-on-small-only hide-on-med-and-up">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n            ", HTML.Raw('<a href="#" data-activates="slide-outs" class="white-text button-collapse left" style="margin-left:5px;"><i class="material-icons">reorder</i></a>'), "\n           \n         \n            \n      \n      ", HTML.UL({
    "class": "hide-on-med-and-down left"                                                                               // 16
  }, "\n        ", HTML.LI({                                                                                           // 17
    "class": "nanum"                                                                                                   // 18
  }, HTML.A({                                                                                                          // 19
    href: function() {                                                                                                 // 20
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 21
    }                                                                                                                  // 22
  }, Blaze.View("lookup:_", function() {                                                                               // 23
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 24
  }))), "\n        ", HTML.LI({                                                                                        // 25
    "class": "nanum"                                                                                                   // 26
  }, HTML.A({                                                                                                          // 27
    href: function() {                                                                                                 // 28
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 29
    }                                                                                                                  // 30
  }, Blaze.View("lookup:_", function() {                                                                               // 31
    return Spacebars.mustache(view.lookup("_"), "howWeWork");                                                          // 32
  }))), "\n        ", HTML.LI({                                                                                        // 33
    "class": "nanum"                                                                                                   // 34
  }, HTML.A({                                                                                                          // 35
    href: function() {                                                                                                 // 36
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 37
    }                                                                                                                  // 38
  }, Blaze.View("lookup:_", function() {                                                                               // 39
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 40
  }))), "\n             ", HTML.LI({                                                                                   // 41
    "class": "nanum"                                                                                                   // 42
  }, HTML.A({                                                                                                          // 43
    href: function() {                                                                                                 // 44
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 45
    }                                                                                                                  // 46
  }, Blaze.View("lookup:_", function() {                                                                               // 47
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 48
  }))), "\n           ", HTML.LI({                                                                                     // 49
    "class": "nanum"                                                                                                   // 50
  }, HTML.A({                                                                                                          // 51
    href: function() {                                                                                                 // 52
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 53
    }                                                                                                                  // 54
  }, Blaze.View("lookup:_", function() {                                                                               // 55
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 56
  }))), "\n \n\n      "), "\n        ", HTML.UL({                                                                      // 57
    "class": "right hide-on-med-and-down"                                                                              // 58
  }, "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher")), "\n            ", HTML.Raw('<li><a class="white-text center" href="https://urlgeni.us/facebook/4U1B"><i class="fab fa-facebook-f  fa-2x"></i></a></li>'), "\n                         ", HTML.Raw('<li class="divider"></li>'), "\n    ", HTML.Raw('<li><a class="center white-text" href="https://instagram.com/illumeinc/"><i class="fab fa-instagram  fa-2x"></i></a></li>'), "\n            "), "\n       \n    "), "\n      "), "\n       \n          "), "\n\n      "), "\n"), "\n    ", HTML.UL({
    id: "slide-outs",                                                                                                  // 60
    "class": "side-nav"                                                                                                // 61
  }, "\n        ", HTML.DIV({                                                                                          // 62
    "class": "center"                                                                                                  // 63
  }, "\n            ", HTML.Raw("<br>"), "\n            ", HTML.Raw('<img src="/img/badge.png" width="150">'), HTML.Raw("<br>"), "\n            ", HTML.Raw('<span class="bold">#lightupyourbrand</span>'), "\n     ", HTML.LI({
    "class": "nanum",                                                                                                  // 65
    style: "margin-top:1em;"                                                                                           // 66
  }, HTML.A({                                                                                                          // 67
    href: function() {                                                                                                 // 68
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 69
    }                                                                                                                  // 70
  }, Blaze.View("lookup:_", function() {                                                                               // 71
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 72
  }))), "\n     ", HTML.LI({                                                                                           // 73
    "class": "nanum"                                                                                                   // 74
  }, HTML.A({                                                                                                          // 75
    href: function() {                                                                                                 // 76
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 77
    }                                                                                                                  // 78
  }, Blaze.View("lookup:_", function() {                                                                               // 79
    return Spacebars.mustache(view.lookup("_"), "howWeWork");                                                          // 80
  }))), "\n        ", HTML.LI({                                                                                        // 81
    "class": "nanum"                                                                                                   // 82
  }, HTML.A({                                                                                                          // 83
    href: function() {                                                                                                 // 84
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 85
    }                                                                                                                  // 86
  }, Blaze.View("lookup:_", function() {                                                                               // 87
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 88
  }))), "\n             ", HTML.LI({                                                                                   // 89
    "class": "nanum"                                                                                                   // 90
  }, HTML.A({                                                                                                          // 91
    href: function() {                                                                                                 // 92
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 93
    }                                                                                                                  // 94
  }, Blaze.View("lookup:_", function() {                                                                               // 95
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 96
  }))), "\n           ", HTML.LI({                                                                                     // 97
    "class": "nanum"                                                                                                   // 98
  }, HTML.A({                                                                                                          // 99
    href: function() {                                                                                                 // 100
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 101
    }                                                                                                                  // 102
  }, Blaze.View("lookup:_", function() {                                                                               // 103
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 104
  }))), "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher2")), "\n        "), "\n  ") ];        // 105
}));                                                                                                                   // 106
                                                                                                                       // 107
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/layout/header/header.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.header.rendered = function () {                                                                               // 1
    $('.button-collapse').sideNav({                                                                                    // 2
        menuWidth: 200, // Default is 240                                                                              // 3
        edge: 'right', // Choose the horizontal origin                                                                 // 4
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                 // 5
    });                                                                                                                // 2
    $(window).scroll(function () {                                                                                     // 8
                                                                                                                       //
        if ($(window).scrollTop() > 100) {                                                                             // 10
            $('.main_h').addClass('sticky');                                                                           // 11
        } else {                                                                                                       // 12
            $('.main_h').removeClass('sticky');                                                                        // 13
        }                                                                                                              // 14
    });                                                                                                                // 15
                                                                                                                       //
    // Mobile Navigation                                                                                               //
                                                                                                                       //
    // Navigation Scroll - ljepo radi materem                                                                          //
    $('nav a').click(function (event) {                                                                                // 20
        var id = $(this).attr("href");                                                                                 // 21
        var offset = 70;                                                                                               // 22
        var target = $(id).offset().top - offset;                                                                      // 23
        $('html, body').animate({                                                                                      // 24
            scrollTop: target                                                                                          // 25
        }, 500);                                                                                                       // 24
        event.preventDefault();                                                                                        // 27
    });                                                                                                                // 28
};                                                                                                                     // 30
Template.fixedHeader.rendered = function () {                                                                          // 31
                                                                                                                       //
    $('.button-collapse').sideNav({                                                                                    // 33
        menuWidth: 200, // Default is 240                                                                              // 34
        edge: 'right', // Choose the horizontal origin                                                                 // 35
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor                                 // 36
    });                                                                                                                // 33
};                                                                                                                     // 39
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
  }), ") Sketch\n     "), "\n "), "\n \n"), "\n                "), "\n                 ", HTML.DIV({                   // 52
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
  }), "\n     "), "\n     ", HTML.Raw('<p class="nanum grey-text text-darken-2">\n         Brackets <br>Sublime3 <br> Github <br> Bootstrap <br> Material Design <br> Meteor.js <br> Angular <br> Codepen <br> Terminal\n     </p>'), "\n "), "\n"), "\n                "), "\n                 ", HTML.DIV({
    "class": "col s12 m12 l4"                                                                                          // 77
  }, "\n                ", HTML.DIV({                                                                                  // 78
    "class": "pricing animated swing"                                                                                  // 79
  }, "\n  ", HTML.Raw('<div class="thumbnail animated pulse infinite">\n    <div class="fa fa-smile"></div>\n  </div>'), "\n  ", HTML.Raw('<div class="titles nanum" style="background:#21313b;">\n  More about Joe\n  </div>'), "\n   ", HTML.DIV({
    "class": "center container"                                                                                        // 81
  }, "\n      ", HTML.P({                                                                                              // 82
    "class": "nanum grey-text text-darken-2"                                                                           // 83
  }, Blaze.View("lookup:_", function() {                                                                               // 84
    return Spacebars.mustache(view.lookup("_"), "moreMe");                                                             // 85
  })), "\n  "), "\n \n"), "\n                "), "\n                "), "\n "), "\n "), HTML.Raw('\n       <div class="parallax-container" style="height:400px;margin-top:4em">\n      <div class="parallax" style="background:#0f0f0f"><img src="/img/webd.jpg"></div>\n \n     \n    </div>\n    '), HTML.SECTION({
    style: "margin-top:5em"                                                                                            // 87
  }, "\n                  ", HTML.DIV({                                                                                // 88
    "class": "container"                                                                                               // 89
  }, "\n                   ", HTML.DIV({                                                                               // 90
    "class": "center"                                                                                                  // 91
  }, "\n", HTML.H2({                                                                                                   // 92
    "class": "nanum"                                                                                                   // 93
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 94
    return Spacebars.mustache(view.lookup("_"), "aLittleAboutMeteor");                                                 // 95
  }))), "\n "), "\n ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n        ", HTML.DIV({
    "class": "row",                                                                                                    // 97
    style: "margin-top:5em"                                                                                            // 98
  }, "\n              \n \n     ", HTML.DIV({                                                                          // 99
    "class": "col s12 m12 l6 center"                                                                                   // 100
  }, "\n          ", HTML.H5({                                                                                         // 101
    "class": "rale grey-text text-darken-3"                                                                            // 102
  }, Blaze.View("lookup:_", function() {                                                                               // 103
    return Spacebars.mustache(view.lookup("_"), "webAndMobile");                                                       // 104
  }), "   ", HTML.B({                                                                                                  // 105
    "class": "red-text text-lighten-1"                                                                                 // 106
  }, Blaze.View("lookup:_", function() {                                                                               // 107
    return Spacebars.mustache(view.lookup("_"), "intoOne");                                                            // 108
  }))), "\n         ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:40px"></div>'), "\n         ", HTML.P({
    "class": "flow-text "                                                                                              // 110
  }, Blaze.View("lookup:_", function() {                                                                               // 111
    return Spacebars.mustache(view.lookup("_"), "webDesc");                                                            // 112
  })), "\n         ", HTML.Raw("<br>"), "\n             ", HTML.DIV({                                                  // 113
    "class": "center"                                                                                                  // 114
  }, "\n                  ", HTML.A({                                                                                  // 115
    href: function() {                                                                                                 // 116
      return Spacebars.mustache(view.lookup("pathFor"), "hybrid");                                                     // 117
    },                                                                                                                 // 118
    "class": "button outline"                                                                                          // 119
  }, Blaze.View("lookup:_", function() {                                                                               // 120
    return Spacebars.mustache(view.lookup("_"), "learnMoreHybrid");                                                    // 121
  })), "\n\n                "), "\n            "), "\n                ", HTML.DIV({                                    // 122
    "class": "col s12 m12 l6  center"                                                                                  // 123
  }, "\n        \n     \n        ", HTML.H5({                                                                          // 124
    "class": "rale grey-text text-darken-3"                                                                            // 125
  }, Blaze.View("lookup:_", function() {                                                                               // 126
    return Spacebars.mustache(view.lookup("_"), "secretWeapon");                                                       // 127
  }), " ", HTML.B({                                                                                                    // 128
    "class": "red-text text-lighten-1"                                                                                 // 129
  }, Blaze.View("lookup:_", function() {                                                                               // 130
    return Spacebars.mustache(view.lookup("_"), "meteor");                                                             // 131
  }), " JS")), "\n        ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:40px"></div>'), "\n        ", HTML.P({
    "class": "flow-text "                                                                                              // 133
  }, Blaze.View("lookup:_", function() {                                                                               // 134
    return Spacebars.mustache(view.lookup("_"), "silos");                                                              // 135
  })), "\n        ", HTML.Raw("<br>"), "\n       ", HTML.DIV({                                                         // 136
    "class": "center"                                                                                                  // 137
  }, "\n                  ", HTML.A({                                                                                  // 138
    href: "https://www.meteor.com",                                                                                    // 139
    "class": "button outline"                                                                                          // 140
  }, Blaze.View("lookup:_", function() {                                                                               // 141
    return Spacebars.mustache(view.lookup("_"), "discoverMeteor");                                                     // 142
  })), "\n\n                "), "\n        "), "\n        "), "\n    "), "\n              "), "\n                       \n                          ", HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 144
  }, "\n                ", HTML.DIV({                                                                                  // 145
    "class": "row"                                                                                                     // 146
  }, "\n        ", HTML.DIV({                                                                                          // 147
    "class": "container"                                                                                               // 148
  }, "\n        ", HTML.DIV({                                                                                          // 149
    "class": "col s12 m12 l12"                                                                                         // 150
  }, "\n            ", HTML.H1({                                                                                       // 151
    "class": "nanum center homeWhat"                                                                                   // 152
  }, Blaze.View("lookup:_", function() {                                                                               // 153
    return Spacebars.mustache(view.lookup("_"), "readySetGo");                                                         // 154
  })), "\n            ", HTML.Raw('<div class="divider red lighten-1"></div>'), "\n      \n             ", HTML.P({    // 155
    "class": "center flow-text nanum grey-text text-darken-3"                                                          // 156
  }, Blaze.View("lookup:_", function() {                                                                               // 157
    return Spacebars.mustache(view.lookup("_"), "alwaysOpen");                                                         // 158
  })), "\n             ", HTML.DIV({                                                                                   // 159
    "class": "center"                                                                                                  // 160
  }, "\n                  ", HTML.A({                                                                                  // 161
    href: function() {                                                                                                 // 162
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 163
    },                                                                                                                 // 164
    "class": "button outline"                                                                                          // 165
  }, Blaze.View("lookup:_", function() {                                                                               // 166
    return Spacebars.mustache(view.lookup("_"), "getStarted");                                                         // 167
  })), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 169
                                                                                                                       // 170
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
  return [ HTML.DIV({                                                                                                  // 5
    "class": "code "                                                                                                   // 6
  }, "\n    ", HTML.Raw('<div class="container ">\n <div class="center" style="margin-top:4.4em;">\n 	<img class="wow bounceIn" src="img/drawnPic.jpg" alt="" width="120px">\n    <h3 class="opensan bold wow fadeInDown">Developer, Designer, and Coffee Addict</h3>\n    <p class="nanum flow-text wow fadeInUp">I <b class="bold">create powerful applications</b> and I <i class="fa fa-heart red-text"></i> what I do.</p>\n    \n</div>\n    </div>'), "\n  ", HTML.DIV({
    "class": "svg"                                                                                                     // 8
  }, "\n \n    ", HTML.Raw("<!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->"), "\n    ", HTML.SVG({
    version: "1.1",                                                                                                    // 10
    xmlns: "http://www.w3.org/2000/svg",                                                                               // 11
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                     // 12
    x: "0px",                                                                                                          // 13
    y: "0px",                                                                                                          // 14
    viewBox: "0 0 600 293",                                                                                            // 15
    style: "enable-background:new 0 0 600 293;",                                                                       // 16
    "xml:space": "preserve"                                                                                            // 17
  }, "\n", HTML.STYLE({                                                                                                // 18
    type: "text/css"                                                                                                   // 19
  }, "\n	.st0{fill:#EFEFEF;}\n	.st1{fill:#E3E4E5;}\n	.st2{fill:#3b5264;}\n	.st3{opacity:0.5;fill:#9E9E9E;}\n	.st4{fill:#5C5E60;}\n	.st5{fill:#404244;}\n	.st6{fill:#b8babc;}\n	.st7{fill:#FFFFFF;}\n	.st8{fill:#3C2415;}\n	.st9{fill:#432818;}\n	.st10{fill:#563726;}\n	.st11{fill:#FCFCFC;}\n	.st12{opacity:0.5;fill:#FCFCFC;}\n	.st13{fill:none;stroke:#EBECED;stroke-width:5;stroke-miterlimit:10;}\n	.st14{fill:#b5b5b5;}\n	.st15{fill:#EF7665;}\n	.st16{fill:#A4D9E4;}\n	.st17{fill:#B8C7CD;}\n	.st18{fill:#474A4E;}\n	.st19{fill:#65B6C1;}\n	.st20{fill:#F46C69;}\n	.st21{fill:#7C7F83;}\n	.st22{fill:#FFFFFE;}\n	.st23{fill:#F96759;}\n"), "\n \n", HTML.G({
    id: "macbook"                                                                                                      // 21
  }, "\n	", HTML.G({                                                                                                   // 22
    id: "macbook_1_"                                                                                                   // 23
  }, "\n		", HTML.G("\n			", HTML.PATH({                                                                               // 24
    "class": "st0",                                                                                                    // 25
    d: "M411.4,301.7H212.1c-0.3,0-0.5-0.2-0.5-0.5V163.3c0-0.3,0.2-0.5,0.5-0.5h199.3c0.3,0,0.5,0.2,0.5,0.5v137.9\n				C411.9,301.5,411.7,301.7,411.4,301.7z"
  }), "\n			", HTML.PATH({                                                                                             // 27
    "class": "st1",                                                                                                    // 28
    d: "M394.8,257.4h-166c-0.2,0-0.4-0.2-0.4-0.4v-81.2c0-0.2,0.2-0.4,0.4-0.4h166c0.2,0,0.4,0.2,0.4,0.4V257\n				C395.2,257.2,395,257.4,394.8,257.4z"
  }), "\n			", HTML.G("\n				", HTML.G("\n					", HTML.G("\n						", HTML.PATH({                                       // 30
    "class": "st2",                                                                                                    // 31
    d: "M242.8,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4H233c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H242.8z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 33
    "class": "st2",                                                                                                    // 34
    d: "M256.2,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H256.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 36
    "class": "st2",                                                                                                    // 37
    d: "M269.6,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H269.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 39
    "class": "st2",                                                                                                    // 40
    d: "M283,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H283z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 42
    "class": "st2",                                                                                                    // 43
    d: "M296.5,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H296.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 45
    "class": "st2",                                                                                                    // 46
    d: "M309.9,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H309.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 48
    "class": "st2",                                                                                                    // 49
    d: "M323.3,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H323.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 51
    "class": "st2",                                                                                                    // 52
    d: "M336.7,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H336.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 54
    "class": "st2",                                                                                                    // 55
    d: "M350.2,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H350.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 57
    "class": "st2",                                                                                                    // 58
    d: "M363.6,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H363.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 60
    "class": "st2",                                                                                                    // 61
    d: "M377.1,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H377.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 63
    "class": "st2",                                                                                                    // 64
    d: "M390.5,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9\n							c0,0.2,0.2,0.4,0.4,0.4H390.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 66
    "class": "st2",                                                                                                    // 67
    d: "M242.7,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H242.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 69
    "class": "st2",                                                                                                    // 70
    d: "M256.1,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H256.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 72
    "class": "st2",                                                                                                    // 73
    d: "M269.6,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H269.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 75
    "class": "st2",                                                                                                    // 76
    d: "M283,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H283z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 78
    "class": "st2",                                                                                                    // 79
    d: "M296.5,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H296.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 81
    "class": "st2",                                                                                                    // 82
    d: "M309.9,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H300c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H309.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 84
    "class": "st2",                                                                                                    // 85
    d: "M323.3,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H323.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 87
    "class": "st2",                                                                                                    // 88
    d: "M336.7,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H336.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 90
    "class": "st2",                                                                                                    // 91
    d: "M350.2,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H350.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 93
    "class": "st2",                                                                                                    // 94
    d: "M363.6,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H363.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 96
    "class": "st2",                                                                                                    // 97
    d: "M380.6,195.3h1.8h8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8h-1.8h-13.4\n							c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4H380.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 99
    "class": "st2",                                                                                                    // 100
    d: "M249.6,206.8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-16.5c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H249.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 102
    "class": "st2",                                                                                                    // 103
    d: "M253.2,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H253.2z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 105
    "class": "st2",                                                                                                    // 106
    d: "M276.8,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C276.7,206.8,276.8,206.7,276.8,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 108
    "class": "st2",                                                                                                    // 109
    d: "M280,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H280z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 111
    "class": "st2",                                                                                                    // 112
    d: "M293.5,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H293.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 114
    "class": "st2",                                                                                                    // 115
    d: "M306.9,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H306.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 117
    "class": "st2",                                                                                                    // 118
    d: "M330.5,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C330.4,206.8,330.5,206.7,330.5,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 120
    "class": "st2",                                                                                                    // 121
    d: "M343.9,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C343.8,206.8,343.9,206.7,343.9,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 123
    "class": "st2",                                                                                                    // 124
    d: "M357.4,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C357.3,206.8,357.4,206.7,357.4,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 126
    "class": "st2",                                                                                                    // 127
    d: "M370.8,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C370.7,206.8,370.8,206.7,370.8,206.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 129
    "class": "st2",                                                                                                    // 130
    d: "M383.9,206.8h6.5c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-6.5h-3.3h-6.5\n							c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h6.5H383.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 132
    "class": "st2",                                                                                                    // 133
    d: "M232.7,217.7c0,0.2,0.2,0.4,0.4,0.4h8.6h1.2h13.4c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-13.4\n							h-1.2h-8.6c-0.2,0-0.4,0.2-0.4,0.4V217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 135
    "class": "st2",                                                                                                    // 136
    d: "M259.6,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C259.7,209.6,259.6,209.8,259.6,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 138
    "class": "st2",                                                                                                    // 139
    d: "M283.5,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C283.3,218.1,283.5,217.9,283.5,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 141
    "class": "st2",                                                                                                    // 142
    d: "M286.4,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C286.6,209.6,286.4,209.8,286.4,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 144
    "class": "st2",                                                                                                    // 145
    d: "M299.8,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C300,209.6,299.8,209.8,299.8,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 147
    "class": "st2",                                                                                                    // 148
    d: "M313.3,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8\n							C313.4,209.6,313.3,209.8,313.3,210z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 150
    "class": "st2",                                                                                                    // 151
    d: "M337.2,217.7V210c0-0.2-0.2-0.4-0.4-0.4H327c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C337.1,218.1,337.2,217.9,337.2,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 153
    "class": "st2",                                                                                                    // 154
    d: "M350.7,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C350.5,218.1,350.7,217.9,350.7,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 156
    "class": "st2",                                                                                                    // 157
    d: "M364.1,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C363.9,218.1,364.1,217.9,364.1,217.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 159
    "class": "st2",                                                                                                    // 160
    d: "M367.4,209.6c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210\n							c0-0.2-0.2-0.4-0.4-0.4H367.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 162
    "class": "st2",                                                                                                    // 163
    d: "M390.6,209.6h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210\n							C391,209.8,390.8,209.6,390.6,209.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 165
    "class": "st2",                                                                                                    // 166
    d: "M232.7,229c0,0.2,0.2,0.4,0.4,0.4h13.4h1.7h8.1c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8.1\n							h-1.7h-13.4c-0.2,0-0.4,0.2-0.4,0.4V229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 168
    "class": "st2",                                                                                                    // 169
    d: "M275.4,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C275.2,229.4,275.4,229.2,275.4,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 171
    "class": "st2",                                                                                                    // 172
    d: "M288.4,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H288.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 174
    "class": "st2",                                                                                                    // 175
    d: "M302.2,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C302.1,229.4,302.2,229.2,302.2,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 177
    "class": "st2",                                                                                                    // 178
    d: "M315.6,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C315.5,229.4,315.6,229.2,315.6,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 180
    "class": "st2",                                                                                                    // 181
    d: "M329.1,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8\n							C328.9,229.4,329.1,229.2,329.1,229z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 183
    "class": "st2",                                                                                                    // 184
    d: "M342.1,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H342.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 186
    "class": "st2",                                                                                                    // 187
    d: "M355.6,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H355.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 189
    "class": "st2",                                                                                                    // 190
    d: "M369,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H369z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 192
    "class": "st2",                                                                                                    // 193
    d: "M372.2,221.3v7.8c0,0.2,0.2,0.4,0.4,0.4h8h1.8h8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8\n							h-1.8h-8C372.4,220.9,372.2,221,372.2,221.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 195
    "class": "st2",                                                                                                    // 196
    d: "M232.7,240.6c0,0.2,0.2,0.4,0.4,0.4h8.7h1.1h26c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-26\n							h-1.1h-8.7c-0.2,0-0.4,0.2-0.4,0.4V240.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 198
    "class": "st2",                                                                                                    // 199
    d: "M273.3,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H273.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 201
    "class": "st2",                                                                                                    // 202
    d: "M296.6,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H296.6z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 204
    "class": "st2",                                                                                                    // 205
    d: "M310,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H310z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 207
    "class": "st2",                                                                                                    // 208
    d: "M323.4,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8\n							c0,0.2,0.2,0.4,0.4,0.4H323.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 210
    "class": "st2",                                                                                                    // 211
    d: "M327,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H327z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 213
    "class": "st2",                                                                                                    // 214
    d: "M340.5,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H340.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 216
    "class": "st2",                                                                                                    // 217
    d: "M382.4,232.5h-1.7h-26.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h26.8h1.7h8.1\n							c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H382.4z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 219
    "class": "st2",                                                                                                    // 220
    d: "M233.1,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H233.1z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 222
    "class": "st2",                                                                                                    // 223
    d: "M246.5,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H246.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 225
    "class": "st2",                                                                                                    // 226
    d: "M259.9,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H259.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 228
    "class": "st2",                                                                                                    // 229
    d: "M273.3,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H273.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 231
    "class": "st2",                                                                                                    // 232
    d: "M328.7,244H327h-40.2c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4H327h1.7h8.1\n							c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H328.7z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 234
    "class": "st2",                                                                                                    // 235
    d: "M340.5,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H340.5z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 237
    "class": "st2",                                                                                                    // 238
    d: "M353.9,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H353.9z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 240
    "class": "st2",                                                                                                    // 241
    d: "M367.3,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H367.3z"
  }), "\n					"), "\n					", HTML.G("\n						", HTML.PATH({                                                            // 243
    "class": "st2",                                                                                                    // 244
    d: "M380.7,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8\n							c0-0.2-0.2-0.4-0.4-0.4H380.7z"
  }), "\n					"), "\n				"), "\n			"), "\n			", HTML.RECT({                                                            // 246
    x: "280.7",                                                                                                        // 247
    y: "261.6",                                                                                                        // 248
    "class": "st1",                                                                                                    // 249
    width: "63.2",                                                                                                     // 250
    height: "35.1"                                                                                                     // 251
  }), "\n		"), "\n		", HTML.G("\n			", HTML.RECT({                                                                     // 252
    x: "240",                                                                                                          // 253
    y: "161.8",                                                                                                        // 254
    "class": "st2",                                                                                                    // 255
    width: "143.5",                                                                                                    // 256
    height: "8.7"                                                                                                      // 257
  }), "\n			", HTML.G("\n				", HTML.PATH({                                                                            // 258
    "class": "st2",                                                                                                    // 259
    d: "M411.9,162.6c0,2.6-2,4.7-4.4,4.7H216c-2.4,0-4.4-2.1-4.4-4.7V56.7c0-2.6,2-4.7,4.4-4.7h191.5\n					c2.4,0,4.4,2.1,4.4,4.7V162.6z"
  }), "\n				", HTML.RECT({                                                                                            // 261
    x: "216.9",                                                                                                        // 262
    y: "60.1",                                                                                                         // 263
    "class": "st4",                                                                                                    // 264
    width: "189.7",                                                                                                    // 265
    height: "99.9"                                                                                                     // 266
  }), "\n				", HTML.POLYGON({                                                                                         // 267
    "class": "st5",                                                                                                    // 268
    points: "258.1,159.3 240,59.7 258.1,59.7 				"                                                                     // 269
  }), "\n			"), "\n		"), "\n	"), "\n"), "\n", HTML.G({                                                                 // 270
    id: "coffee"                                                                                                       // 271
  }, "\n	", HTML.G({                                                                                                   // 272
    id: "coffee_1_"                                                                                                    // 273
  }, "\n		", HTML.G("\n			", HTML.PATH({                                                                               // 274
    "class": "st6",                                                                                                    // 275
    d: "M534.1,218.8l5.1-5.1c-2.6-3.5-5.7-6.5-9.3-8.9l-4.8,4.8L534.1,218.8z"                                           // 276
  }), "\n			", HTML.CIRCLE({                                                                                           // 277
    "class": "st7",                                                                                                    // 278
    cx: "508.5",                                                                                                       // 279
    cy: "236.5",                                                                                                       // 280
    r: "33.6"                                                                                                          // 281
  }), "\n			", HTML.CIRCLE({                                                                                           // 282
    "class": "st6",                                                                                                    // 283
    cx: "508.5",                                                                                                       // 284
    cy: "236.5",                                                                                                       // 285
    r: "31.2"                                                                                                          // 286
  }), "\n			", HTML.CIRCLE({                                                                                           // 287
    "class": "st8",                                                                                                    // 288
    cx: "508.5",                                                                                                       // 289
    cy: "236.5",                                                                                                       // 290
    r: "28.1"                                                                                                          // 291
  }), "\n			", HTML.CIRCLE({                                                                                           // 292
    "class": "st9",                                                                                                    // 293
    cx: "508.5",                                                                                                       // 294
    cy: "236.5",                                                                                                       // 295
    r: "24.9"                                                                                                          // 296
  }), "\n			", HTML.CIRCLE({                                                                                           // 297
    "class": "st10",                                                                                                   // 298
    cx: "508.5",                                                                                                       // 299
    cy: "236.5",                                                                                                       // 300
    r: "21"                                                                                                            // 301
  }), "\n			", HTML.CIRCLE({                                                                                           // 302
    "class": "st9",                                                                                                    // 303
    cx: "508.5",                                                                                                       // 304
    cy: "236.5",                                                                                                       // 305
    r: "19.9"                                                                                                          // 306
  }), "\n			", HTML.PATH({                                                                                             // 307
    "class": "st11",                                                                                                   // 308
    d: "M539.2,213.7l6.6-6.6l-9.1-9.1l-6.8,6.8C533.5,207.2,536.6,210.2,539.2,213.7z"                                   // 309
  }), "\n		"), "\n		", HTML.CIRCLE({                                                                                   // 310
    "class": "st10",                                                                                                   // 311
    cx: "508.5",                                                                                                       // 312
    cy: "236.5",                                                                                                       // 313
    r: "5"                                                                                                             // 314
  }), "\n		", HTML.CIRCLE({                                                                                            // 315
    "class": "st8",                                                                                                    // 316
    cx: "508.5",                                                                                                       // 317
    cy: "236.5",                                                                                                       // 318
    r: "4.5"                                                                                                           // 319
  }), "\n		", HTML.PATH({                                                                                              // 320
    "class": "st12",                                                                                                   // 321
    d: "M508.5,260.4L508.5,260.4c-13,0-23.6-10.5-23.9-23.4c0-0.3-0.2-0.5-0.5-0.5h-0.1c-0.1,0-0.2,0.1-0.3,0.1\n			s-0.1,0.2-0.1,0.3c0.3,13.5,11.3,24.4,24.9,24.4l0,0V260.4z"
  }), "\n	"), "\n"), "\n", HTML.G({                                                                                    // 323
    id: "smoke_1_"                                                                                                     // 324
  }, "\n	", HTML.G({                                                                                                   // 325
    id: "smoke"                                                                                                        // 326
  }, "\n		", HTML.PATH({                                                                                               // 327
    "class": "st13",                                                                                                   // 328
    d: "M496.3,167.7c0,0,5.6,5.1,0,12.1c-5.6,7-0.5,11.3,0,12.4"                                                        // 329
  }), "\n		", HTML.PATH({                                                                                              // 330
    "class": "st13",                                                                                                   // 331
    d: "M508.9,160.9c0,0,8,7.3,0,17.2s-0.7,16.2,0,17.6"                                                                // 332
  }), "\n		", HTML.PATH({                                                                                              // 333
    "class": "st13",                                                                                                   // 334
    d: "M520.9,167.7c0,0,5.6,5.1,0,12.1c-5.6,7-0.5,11.3,0,12.4"                                                        // 335
  }), "\n	"), "\n"), "\n", HTML.G({                                                                                    // 336
    id: "ipad"                                                                                                         // 337
  }, "\n	", HTML.G({                                                                                                   // 338
    id: "ipad_1_"                                                                                                      // 339
  }, "\n		", HTML.PATH({                                                                                               // 340
    "class": "st2",                                                                                                    // 341
    d: "M177.8,294.9c0.2,0.4,0,1-0.4,1.2l-92.2,44.7c-0.4,0.2-1,0-1.2-0.4L27.9,224.7c-1.3-2.8-0.2-6.1,2.6-7.4\n			l83.7-40.6c2.8-1.3,6.1-0.2,7.4,2.6L177.8,294.9z"
  }), "\n		\n			", HTML.RECT({                                                                                         // 343
    x: "54.4",                                                                                                         // 344
    y: "200.3",                                                                                                        // 345
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -102.2956 70.3137)",                                               // 346
    "class": "st14",                                                                                                   // 347
    width: "94.8",                                                                                                     // 348
    height: "114.7"                                                                                                    // 349
  }), "\n		\n			", HTML.RECT({                                                                                         // 350
    x: "41.8",                                                                                                         // 351
    y: "212.1",                                                                                                        // 352
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -85.5084 56.8004)",                                                // 353
    "class": "st15",                                                                                                   // 354
    width: "78.1",                                                                                                     // 355
    height: "4.7"                                                                                                      // 356
  }), "\n		\n			", HTML.RECT({                                                                                         // 357
    x: "53.4",                                                                                                         // 358
    y: "231.3",                                                                                                        // 359
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -99.0117 55.6345)",                                                // 360
    "class": "st16",                                                                                                   // 361
    width: "36.2",                                                                                                     // 362
    height: "23.8"                                                                                                     // 363
  }), "\n		\n			", HTML.RECT({                                                                                         // 364
    x: "91.1",                                                                                                         // 365
    y: "213",                                                                                                          // 366
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -87.2538 70.2411)",                                                // 367
    "class": "st16",                                                                                                   // 368
    width: "36.2",                                                                                                     // 369
    height: "23.8"                                                                                                     // 370
  }), "\n		\n			", HTML.RECT({                                                                                         // 371
    x: "59.3",                                                                                                         // 372
    y: "250.2",                                                                                                        // 373
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -99.5508 68.1041)",                                                // 374
    "class": "st17",                                                                                                   // 375
    width: "78.1",                                                                                                     // 376
    height: "0.9"                                                                                                      // 377
  }), "\n		\n			", HTML.RECT({                                                                                         // 378
    x: "61.3",                                                                                                         // 379
    y: "254.2",                                                                                                        // 380
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -101.1277 69.3735)",                                               // 381
    "class": "st17",                                                                                                   // 382
    width: "78.1",                                                                                                     // 383
    height: "0.9"                                                                                                      // 384
  }), "\n		\n			", HTML.RECT({                                                                                         // 385
    x: "63.3",                                                                                                         // 386
    y: "258.3",                                                                                                        // 387
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -102.7046 70.6429)",                                               // 388
    "class": "st17",                                                                                                   // 389
    width: "78.1",                                                                                                     // 390
    height: "0.9"                                                                                                      // 391
  }), "\n		\n			", HTML.RECT({                                                                                         // 392
    x: "65.3",                                                                                                         // 393
    y: "262.4",                                                                                                        // 394
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -104.2816 71.9123)",                                               // 395
    "class": "st17",                                                                                                   // 396
    width: "78.1",                                                                                                     // 397
    height: "0.9"                                                                                                      // 398
  }), "\n		\n			", HTML.RECT({                                                                                         // 399
    x: "67.2",                                                                                                         // 400
    y: "266.4",                                                                                                        // 401
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -105.8585 73.1817)",                                               // 402
    "class": "st17",                                                                                                   // 403
    width: "78.1",                                                                                                     // 404
    height: "0.9"                                                                                                      // 405
  }), "\n		\n			", HTML.RECT({                                                                                         // 406
    x: "69.2",                                                                                                         // 407
    y: "270.5",                                                                                                        // 408
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -107.4355 74.4511)",                                               // 409
    "class": "st17",                                                                                                   // 410
    width: "78.1",                                                                                                     // 411
    height: "0.9"                                                                                                      // 412
  }), "\n		\n			", HTML.RECT({                                                                                         // 413
    x: "71.2",                                                                                                         // 414
    y: "274.5",                                                                                                        // 415
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -109.0124 75.7205)",                                               // 416
    "class": "st17",                                                                                                   // 417
    width: "78.1",                                                                                                     // 418
    height: "0.9"                                                                                                      // 419
  }), "\n		\n			", HTML.RECT({                                                                                         // 420
    x: "73.2",                                                                                                         // 421
    y: "278.6",                                                                                                        // 422
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -110.5893 76.9898)",                                               // 423
    "class": "st17",                                                                                                   // 424
    width: "78.1",                                                                                                     // 425
    height: "0.9"                                                                                                      // 426
  }), "\n		\n			", HTML.RECT({                                                                                         // 427
    x: "80.1",                                                                                                         // 428
    y: "281.5",                                                                                                        // 429
    transform: "matrix(0.8996 -0.4366 0.4366 0.8996 -116.1659 81.4789)",                                               // 430
    "class": "st16",                                                                                                   // 431
    width: "78.1",                                                                                                     // 432
    height: "23.8"                                                                                                     // 433
  }), "\n	"), "\n"), "\n", HTML.G({                                                                                    // 434
    id: "coder"                                                                                                        // 435
  }, "\n	", HTML.G({                                                                                                   // 436
    id: "coder_1_"                                                                                                     // 437
  }, "\n		", HTML.RECT({                                                                                               // 438
    x: "258.1",                                                                                                        // 439
    y: "31.3",                                                                                                         // 440
    "class": "st18",                                                                                                   // 441
    width: "106.5",                                                                                                    // 442
    height: "127.9"                                                                                                    // 443
  }), "\n		", HTML.RECT({                                                                                              // 444
    x: "258.1",                                                                                                        // 445
    y: "23.6",                                                                                                         // 446
    "class": "st2",                                                                                                    // 447
    width: "106.5",                                                                                                    // 448
    height: "7.7"                                                                                                      // 449
  }), "\n		", HTML.G("\n			", HTML.RECT({                                                                              // 450
    x: "267.5",                                                                                                        // 451
    y: "39.8",                                                                                                         // 452
    "class": "st19",                                                                                                   // 453
    width: "8.8",                                                                                                      // 454
    height: "2"                                                                                                        // 455
  }), "\n			", HTML.RECT({                                                                                             // 456
    x: "267.5",                                                                                                        // 457
    y: "43.9",                                                                                                         // 458
    "class": "st20",                                                                                                   // 459
    width: "13.8",                                                                                                     // 460
    height: "2"                                                                                                        // 461
  }), "\n			", HTML.RECT({                                                                                             // 462
    x: "272.5",                                                                                                        // 463
    y: "51.3",                                                                                                         // 464
    "class": "st21",                                                                                                   // 465
    width: "26.1",                                                                                                     // 466
    height: "2"                                                                                                        // 467
  }), "\n			", HTML.RECT({                                                                                             // 468
    x: "303.3",                                                                                                        // 469
    y: "51.3",                                                                                                         // 470
    "class": "st22",                                                                                                   // 471
    width: "26.6",                                                                                                     // 472
    height: "2"                                                                                                        // 473
  }), "\n			", HTML.RECT({                                                                                             // 474
    x: "276.3",                                                                                                        // 475
    y: "56",                                                                                                           // 476
    "class": "st20",                                                                                                   // 477
    width: "9.3",                                                                                                      // 478
    height: "2"                                                                                                        // 479
  }), "\n			", HTML.RECT({                                                                                             // 480
    x: "290",                                                                                                          // 481
    y: "56",                                                                                                           // 482
    "class": "st22",                                                                                                   // 483
    width: "17.5",                                                                                                     // 484
    height: "2"                                                                                                        // 485
  }), "\n			", HTML.RECT({                                                                                             // 486
    x: "281.3",                                                                                                        // 487
    y: "59.7",                                                                                                         // 488
    "class": "st21",                                                                                                   // 489
    width: "22",                                                                                                       // 490
    height: "2"                                                                                                        // 491
  }), "\n			", HTML.RECT({                                                                                             // 492
    x: "307.5",                                                                                                        // 493
    y: "59.7",                                                                                                         // 494
    "class": "st21",                                                                                                   // 495
    width: "9.1",                                                                                                      // 496
    height: "2"                                                                                                        // 497
  }), "\n			", HTML.RECT({                                                                                             // 498
    x: "321.1",                                                                                                        // 499
    y: "59.7",                                                                                                         // 500
    "class": "st19",                                                                                                   // 501
    width: "17.3",                                                                                                     // 502
    height: "2"                                                                                                        // 503
  }), "\n			", HTML.RECT({                                                                                             // 504
    x: "285.5",                                                                                                        // 505
    y: "63.8",                                                                                                         // 506
    "class": "st21",                                                                                                   // 507
    width: "26.5",                                                                                                     // 508
    height: "2"                                                                                                        // 509
  }), "\n			", HTML.RECT({                                                                                             // 510
    x: "316.6",                                                                                                        // 511
    y: "63.8",                                                                                                         // 512
    "class": "st22",                                                                                                   // 513
    width: "39.3",                                                                                                     // 514
    height: "2"                                                                                                        // 515
  }), "\n			", HTML.RECT({                                                                                             // 516
    x: "272.5",                                                                                                        // 517
    y: "75.8",                                                                                                         // 518
    "class": "st22",                                                                                                   // 519
    width: "17.5",                                                                                                     // 520
    height: "2"                                                                                                        // 521
  }), "\n			", HTML.RECT({                                                                                             // 522
    x: "267.6",                                                                                                        // 523
    y: "71.6",                                                                                                         // 524
    "class": "st21",                                                                                                   // 525
    width: "17.9",                                                                                                     // 526
    height: "2"                                                                                                        // 527
  }), "\n			", HTML.RECT({                                                                                             // 528
    x: "267.6",                                                                                                        // 529
    y: "83.6",                                                                                                         // 530
    "class": "st19",                                                                                                   // 531
    width: "13.3",                                                                                                     // 532
    height: "2"                                                                                                        // 533
  }), "\n			", HTML.RECT({                                                                                             // 534
    x: "285.4",                                                                                                        // 535
    y: "83.6",                                                                                                         // 536
    "class": "st21",                                                                                                   // 537
    width: "31.2",                                                                                                     // 538
    height: "2"                                                                                                        // 539
  }), "\n			", HTML.RECT({                                                                                             // 540
    x: "272.5",                                                                                                        // 541
    y: "87.3",                                                                                                         // 542
    "class": "st21",                                                                                                   // 543
    width: "31.2",                                                                                                     // 544
    height: "2"                                                                                                        // 545
  }), "\n			", HTML.RECT({                                                                                             // 546
    x: "276.7",                                                                                                        // 547
    y: "91.4",                                                                                                         // 548
    "class": "st22",                                                                                                   // 549
    width: "13.3",                                                                                                     // 550
    height: "2"                                                                                                        // 551
  }), "\n			", HTML.RECT({                                                                                             // 552
    x: "294.2",                                                                                                        // 553
    y: "91.4",                                                                                                         // 554
    "class": "st23",                                                                                                   // 555
    width: "18.1",                                                                                                     // 556
    height: "2"                                                                                                        // 557
  }), "\n			", HTML.RECT({                                                                                             // 558
    x: "316.6",                                                                                                        // 559
    y: "91.4",                                                                                                         // 560
    "class": "st21",                                                                                                   // 561
    width: "13.3",                                                                                                     // 562
    height: "2"                                                                                                        // 563
  }), "\n			", HTML.RECT({                                                                                             // 564
    x: "280.9",                                                                                                        // 565
    y: "95.5",                                                                                                         // 566
    "class": "st19",                                                                                                   // 567
    width: "4.5",                                                                                                      // 568
    height: "2"                                                                                                        // 569
  }), "\n			", HTML.RECT({                                                                                             // 570
    x: "290",                                                                                                          // 571
    y: "95.5",                                                                                                         // 572
    "class": "st21",                                                                                                   // 573
    width: "17.6",                                                                                                     // 574
    height: "2"                                                                                                        // 575
  }), "\n			", HTML.RECT({                                                                                             // 576
    x: "312.3",                                                                                                        // 577
    y: "95.5",                                                                                                         // 578
    "class": "st21",                                                                                                   // 579
    width: "26.4",                                                                                                     // 580
    height: "2"                                                                                                        // 581
  }), "\n			", HTML.RECT({                                                                                             // 582
    x: "285.1",                                                                                                        // 583
    y: "99.2",                                                                                                         // 584
    "class": "st22",                                                                                                   // 585
    width: "31.2",                                                                                                     // 586
    height: "2"                                                                                                        // 587
  }), "\n			", HTML.RECT({                                                                                             // 588
    x: "267.6",                                                                                                        // 589
    y: "107",                                                                                                          // 590
    "class": "st23",                                                                                                   // 591
    width: "9",                                                                                                        // 592
    height: "2"                                                                                                        // 593
  }), "\n			", HTML.RECT({                                                                                             // 594
    x: "272.5",                                                                                                        // 595
    y: "111.1",                                                                                                        // 596
    "class": "st19",                                                                                                   // 597
    width: "17.6",                                                                                                     // 598
    height: "2"                                                                                                        // 599
  }), "\n			", HTML.RECT({                                                                                             // 600
    x: "294.2",                                                                                                        // 601
    y: "111.1",                                                                                                        // 602
    "class": "st22",                                                                                                   // 603
    width: "53.2",                                                                                                     // 604
    height: "2"                                                                                                        // 605
  }), "\n			", HTML.RECT({                                                                                             // 606
    x: "276.9",                                                                                                        // 607
    y: "115.2",                                                                                                        // 608
    "class": "st21",                                                                                                   // 609
    width: "26.4",                                                                                                     // 610
    height: "2"                                                                                                        // 611
  }), "\n			", HTML.RECT({                                                                                             // 612
    x: "307.6",                                                                                                        // 613
    y: "115.2",                                                                                                        // 614
    "class": "st21",                                                                                                   // 615
    width: "22.3",                                                                                                     // 616
    height: "2"                                                                                                        // 617
  }), "\n			", HTML.RECT({                                                                                             // 618
    x: "281",                                                                                                          // 619
    y: "119.3",                                                                                                        // 620
    "class": "st21",                                                                                                   // 621
    width: "35.6",                                                                                                     // 622
    height: "2"                                                                                                        // 623
  }), "\n			", HTML.RECT({                                                                                             // 624
    x: "276.9",                                                                                                        // 625
    y: "127.2",                                                                                                        // 626
    "class": "st21",                                                                                                   // 627
    width: "44.6",                                                                                                     // 628
    height: "2"                                                                                                        // 629
  }), "\n			", HTML.RECT({                                                                                             // 630
    x: "281.3",                                                                                                        // 631
    y: "130.8",                                                                                                        // 632
    "class": "st19",                                                                                                   // 633
    width: "22.4",                                                                                                     // 634
    height: "2"                                                                                                        // 635
  }), "\n			", HTML.RECT({                                                                                             // 636
    x: "307.5",                                                                                                        // 637
    y: "130.8",                                                                                                        // 638
    "class": "st22",                                                                                                   // 639
    width: "9.6",                                                                                                      // 640
    height: "2"                                                                                                        // 641
  }), "\n			", HTML.RECT({                                                                                             // 642
    x: "321.5",                                                                                                        // 643
    y: "130.8",                                                                                                        // 644
    "class": "st23",                                                                                                   // 645
    width: "35",                                                                                                       // 646
    height: "2"                                                                                                        // 647
  }), "\n			", HTML.RECT({                                                                                             // 648
    x: "285.3",                                                                                                        // 649
    y: "135.4",                                                                                                        // 650
    "class": "st21",                                                                                                   // 651
    width: "22.9",                                                                                                     // 652
    height: "2"                                                                                                        // 653
  }), "\n			", HTML.RECT({                                                                                             // 654
    x: "312.3",                                                                                                        // 655
    y: "135.4",                                                                                                        // 656
    "class": "st21",                                                                                                   // 657
    width: "13.7",                                                                                                     // 658
    height: "2"                                                                                                        // 659
  }), "\n			", HTML.RECT({                                                                                             // 660
    x: "330.4",                                                                                                        // 661
    y: "135.4",                                                                                                        // 662
    "class": "st21",                                                                                                   // 663
    width: "8.6",                                                                                                      // 664
    height: "2"                                                                                                        // 665
  }), "\n			", HTML.RECT({                                                                                             // 666
    x: "268.2",                                                                                                        // 667
    y: "143.1",                                                                                                        // 668
    "class": "st19",                                                                                                   // 669
    width: "26.9",                                                                                                     // 670
    height: "2"                                                                                                        // 671
  }), "\n			", HTML.RECT({                                                                                             // 672
    x: "273.1",                                                                                                        // 673
    y: "147.2",                                                                                                        // 674
    "class": "st21",                                                                                                   // 675
    width: "17.7",                                                                                                     // 676
    height: "2"                                                                                                        // 677
  }), "\n			", HTML.RECT({                                                                                             // 678
    x: "295",                                                                                                          // 679
    y: "147.2",                                                                                                        // 680
    "class": "st22",                                                                                                   // 681
    width: "17.7",                                                                                                     // 682
    height: "2"                                                                                                        // 683
  }), "\n		"), "\n	"), "\n"), "\n"), "\n  "), "\n"), HTML.Raw('\n\n<section style="padding:2em;margin-top:2em">\n\n</section>\n    '), HTML.SECTION("\n    ", HTML.DIV({
    "class": "row"                                                                                                     // 685
  }, "\n        ", HTML.DIV({                                                                                          // 686
    "class": "container"                                                                                               // 687
  }, "\n      \n        ", HTML.DIV({                                                                                  // 688
    "class": "col s12 m12 l10 offset-l1"                                                                               // 689
  }, "\n            ", HTML.H4({                                                                                       // 690
    "class": "  center  nanum"                                                                                         // 691
  }, Blaze.View("lookup:_", function() {                                                                               // 692
    return Spacebars.mustache(view.lookup("_"), "whatWeDo");                                                           // 693
  })), "\n            ", HTML.Raw('<div class="divider red  lighten-1" style="margin:0 auto;width:120px"></div>'), "\n            ", HTML.P({
    "class": "flow-text center"                                                                                        // 695
  }, Blaze.View("lookup:_", function() {                                                                               // 696
    return Spacebars.mustache(view.lookup("_"), "mission1");                                                           // 697
  }), " "), "            \n            "), "\n        "), "\n        "), "\n    "), "\n    ", HTML.DIV({               // 698
    "class": "center"                                                                                                  // 699
  }, "\n       ", HTML.H4({                                                                                            // 700
    "class": "nanum"                                                                                                   // 701
  }, "  ", Blaze.View("lookup:_", function() {                                                                         // 702
    return Spacebars.mustache(view.lookup("_"), "roadTo");                                                             // 703
  }), " ", HTML.B("MVP (Most Valued Product)", Blaze.View("lookup:_", function() {                                     // 704
    return Spacebars.mustache(view.lookup("_"), "koreaAdd");                                                           // 705
  })), " How?"), "\n    "), "\n    ", HTML.SECTION({                                                                   // 706
    "class": "iconset"                                                                                                 // 707
  }, "\n    ", HTML.DIV({                                                                                              // 708
    "class": "row"                                                                                                     // 709
  }, "\n        ", HTML.DIV({                                                                                          // 710
    "class": "col s12 m12 l4"                                                                                          // 711
  }, "\n        ", HTML.DIV({                                                                                          // 712
    "class": "center"                                                                                                  // 713
  }, "\n            ", HTML.Raw('<img src="/img/commandline.svg" height="120">'), "\n            ", HTML.H5({          // 714
    "class": "grey-text text-darken-2 rale"                                                                            // 715
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 716
    return Spacebars.mustache(view.lookup("_"), "innovative");                                                         // 717
  }), " Native Container")), "\n            ", HTML.P(Blaze.View("lookup:_", function() {                              // 718
    return Spacebars.mustache(view.lookup("_"), "weBuild");                                                            // 719
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 720
    return Spacebars.mustache(view.lookup("_"), "reactiveJavascript");                                                 // 721
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 722
    return Spacebars.mustache(view.lookup("_"), "fullest");                                                            // 723
  })), "\n            "), "\n        "), "\n         ", HTML.DIV({                                                     // 724
    "class": "col s12 m12 l4"                                                                                          // 725
  }, "\n        ", HTML.DIV({                                                                                          // 726
    "class": "center"                                                                                                  // 727
  }, "\n              ", HTML.Raw('<img src="/img/reactive.svg" height="120">'), "\n             ", HTML.H5({          // 728
    "class": "grey-text text-darken-2 rale"                                                                            // 729
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 730
    return Spacebars.mustache(view.lookup("_"), "bridging");                                                           // 731
  }))), "\n             ", HTML.P(Blaze.View("lookup:_", function() {                                                  // 732
    return Spacebars.mustache(view.lookup("_"), "embrace");                                                            // 733
  }), HTML.Raw("<br>"), Blaze.View("lookup:_", function() {                                                            // 734
    return Spacebars.mustache(view.lookup("_"), "dynamicReactive");                                                    // 735
  }), " ", HTML.Raw("<br>"), Blaze.View("lookup:_", function() {                                                       // 736
    return Spacebars.mustache(view.lookup("_"), "21stC");                                                              // 737
  })), "\n             "), "\n        "), "\n         ", HTML.DIV({                                                    // 738
    "class": "col s12 m12 l4"                                                                                          // 739
  }, "\n        ", HTML.DIV({                                                                                          // 740
    "class": "center"                                                                                                  // 741
  }, "\n              ", HTML.Raw('<img src="/img/dragndrop.svg" height="120">'), "\n             ", HTML.H5({         // 742
    "class": "grey-text text-darken-2 rale"                                                                            // 743
  }, HTML.B(Blaze.View("lookup:_", function() {                                                                        // 744
    return Spacebars.mustache(view.lookup("_"), "tailored");                                                           // 745
  }))), "\n              ", HTML.P(Blaze.View("lookup:_", function() {                                                 // 746
    return Spacebars.mustache(view.lookup("_"), "createProducts");                                                     // 747
  }), HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                       // 748
    return Spacebars.mustache(view.lookup("_"), "youInMind");                                                          // 749
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 750
    return Spacebars.mustache(view.lookup("_"), "createSuccess");                                                      // 751
  })), "\n             "), "\n        "), "\n        "), "\n    "), "\n            ", HTML.SECTION({                   // 752
    "class": "callToAction"                                                                                            // 753
  }, "\n                ", HTML.DIV({                                                                                  // 754
    "class": "center"                                                                                                  // 755
  }, "\n                     ", HTML.A({                                                                               // 756
    href: function() {                                                                                                 // 757
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 758
    },                                                                                                                 // 759
    "class": "button outline"                                                                                          // 760
  }, Blaze.View("lookup:_", function() {                                                                               // 761
    return Spacebars.mustache(view.lookup("_"), "learnMore");                                                          // 762
  })), "\n\n                "), "\n            \n            "), "\n                       ", HTML.SECTION({           // 763
    "class": "butGof",                                                                                                 // 764
    style: "margin-top:5em"                                                                                            // 765
  }, "\n    ", HTML.DIV({                                                                                              // 766
    "class": "row"                                                                                                     // 767
  }, "\n        ", HTML.DIV({                                                                                          // 768
    "class": "container"                                                                                               // 769
  }, "\n        ", HTML.DIV({                                                                                          // 770
    "class": "col s12 m12 l10 offset-l1"                                                                               // 771
  }, "\n            ", HTML.H4({                                                                                       // 772
    "class": "  center  nanum"                                                                                         // 773
  }, Blaze.View("lookup:_", function() {                                                                               // 774
    return Spacebars.mustache(view.lookup("_"), "someOfOurWork");                                                      // 775
  })), "\n             ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n  ", HTML.P({
    "class": "flow-text center"                                                                                        // 777
  }, Blaze.View("lookup:_", function() {                                                                               // 778
    return Spacebars.mustache(view.lookup("_"), "allOfOurWebsites");                                                   // 779
  }), HTML.Raw("<br>"), Blaze.View("lookup:_", function() {                                                            // 780
    return Spacebars.mustache(view.lookup("_"), "fastSleek");                                                          // 781
  })), "\n            \n                \n             \n            "), "\n        "), "\n                              "), "\n                              ", HTML.Raw('<div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/cdp.png">\n              \n            </div>\n           \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.vitalmetrics-cdp.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/jesuslove.png">\n              \n            </div>\n            \n            \n          </div>\n     \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/sfmvdm.png">\n              \n            </div>\n            \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.sfmvdm.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                            \n                                  </div>\n                              </div>'), "\n                   ", HTML.DIV({
    "class": "center"                                                                                                  // 783
  }, "\n                  ", HTML.A({                                                                                  // 784
    href: function() {                                                                                                 // 785
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 786
    },                                                                                                                 // 787
    "class": "button outline"                                                                                          // 788
  }, Blaze.View("lookup:_", function() {                                                                               // 789
    return Spacebars.mustache(view.lookup("_"), "viewMore");                                                           // 790
  })), "\n\n                "), "\n            "), "\n              ", HTML.SECTION({                                  // 791
    "class": "butGof",                                                                                                 // 792
    style: "margin-top:5em"                                                                                            // 793
  }, "\n    ", HTML.DIV({                                                                                              // 794
    "class": "row"                                                                                                     // 795
  }, "\n        ", HTML.DIV({                                                                                          // 796
    "class": "container"                                                                                               // 797
  }, "\n        ", HTML.DIV({                                                                                          // 798
    "class": "col s12 m12 l10 offset-l1"                                                                               // 799
  }, "\n            ", HTML.H4({                                                                                       // 800
    "class": "  center  nanum"                                                                                         // 801
  }, Blaze.View("lookup:_", function() {                                                                               // 802
    return Spacebars.mustache(view.lookup("_"), "howWeWork");                                                          // 803
  })), "\n                ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n             \n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row "                                                                                                    // 805
  }, " \n        ", HTML.DIV({                                                                                         // 806
    "class": "container"                                                                                               // 807
  }, "\n            ", HTML.DIV({                                                                                      // 808
    "class": "col s12 m12 l6"                                                                                          // 809
  }, "\n            ", HTML.H3({                                                                                       // 810
    style: "margin-top:1em;",                                                                                          // 811
    "class": "grey-text text-darken-3 mont"                                                                            // 812
  }, Blaze.View("lookup:_", function() {                                                                               // 813
    return Spacebars.mustache(view.lookup("_"), "madeWith");                                                           // 814
  }), " ", HTML.Raw('<i class="fa fa-heart red-text"></i>'), " ", Blaze.View("lookup:_", function() {                  // 815
    return Spacebars.mustache(view.lookup("_"), "madeWithK");                                                          // 816
  })), "\n                ", HTML.P({                                                                                  // 817
    "class": "flow-text grey-text text-darken-2"                                                                       // 818
  }, " \n                  ", Blaze.View("lookup:_", function() {                                                      // 819
    return Spacebars.mustache(view.lookup("_"), "insteadOf");                                                          // 820
  }), " – ", HTML.SPAN({                                                                                               // 821
    "class": "red-text text-lighten-1"                                                                                 // 822
  }, "  ", Blaze.View("lookup:_", function() {                                                                         // 823
    return Spacebars.mustache(view.lookup("_"), "walkAway");                                                           // 824
  })), "\n\n"), "\n ", HTML.Raw("<br>"), "\n     \n            "), "\n            ", HTML.Raw('<div class="col s12 m12 l6 hide-on-small-only">\n                <div class="Wrapper">\n            <img style="margin-top:5em;" src="/img/implementation.gif" class="butGIf">\n                </div>\n            </div>'), "\n            "), "\n        "), "\n        "), "\n    "), "\n                \n            \n            ", HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 826
  }, "\n                ", HTML.DIV({                                                                                  // 827
    "class": "row"                                                                                                     // 828
  }, "\n        ", HTML.DIV({                                                                                          // 829
    "class": "container"                                                                                               // 830
  }, "\n        ", HTML.DIV({                                                                                          // 831
    "class": "col s12 m12 l12"                                                                                         // 832
  }, "\n            ", HTML.H1({                                                                                       // 833
    "class": "nanum center homeWhat"                                                                                   // 834
  }, Blaze.View("lookup:_", function() {                                                                               // 835
    return Spacebars.mustache(view.lookup("_"), "areYouGame");                                                         // 836
  })), "\n            ", HTML.Raw('<div class="divider red lighten-1"></div>'), "\n      \n             ", HTML.H3({   // 837
    "class": "center nanum grey-text text-darken-3"                                                                    // 838
  }, Blaze.View("lookup:_", function() {                                                                               // 839
    return Spacebars.mustache(view.lookup("_"), "loveToHear");                                                         // 840
  })), "\n                ", HTML.DIV({                                                                                // 841
    "class": "center"                                                                                                  // 842
  }, "\n                 ", HTML.P({                                                                                   // 843
    "class": "flow-text nanum"                                                                                         // 844
  }, Blaze.View("lookup:_", function() {                                                                               // 845
    return Spacebars.mustache(view.lookup("_"), "alwaysOpen");                                                         // 846
  }), "\n                 ", HTML.Raw("<br>"), "\n                 ", Blaze.View("lookup:_", function() {              // 847
    return Spacebars.mustache(view.lookup("_"), "coffee");                                                             // 848
  }), "\n                 "), "\n                  ", HTML.A({                                                         // 849
    href: function() {                                                                                                 // 850
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 851
    },                                                                                                                 // 852
    "class": "button outline"                                                                                          // 853
  }, Blaze.View("lookup:_", function() {                                                                               // 854
    return Spacebars.mustache(view.lookup("_"), "getStarted");                                                         // 855
  })), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 857
                                                                                                                       // 858
Template.__checkName("fixedHeader");                                                                                   // 859
Template["fixedHeader"] = new Template("Template.fixedHeader", (function() {                                           // 860
  var view = this;                                                                                                     // 861
  return HTML.NAV({                                                                                                    // 862
    "class": "white"                                                                                                   // 863
  }, "\n     \n  ", HTML.DIV({                                                                                         // 864
    "class": "nav-wrapper"                                                                                             // 865
  }, "\n        ", HTML.DIV({                                                                                          // 866
    "class": ""                                                                                                        // 867
  }, "\n        ", HTML.Raw('<div class="brand-logo center hide-on-small-only">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n              ", HTML.Raw('<div class="brand-logos brand-logo show-on-small-only hide-on-med-and-up">\n            <a href="/" class=" aspergit"><img src="/img/wlogo.png" width="35" alt=""></a>\n            </div>'), "\n            ", HTML.Raw('<a href="#" data-activates="slide-outs" class="red-text button-collapse left" style="margin-left:5px;"><i class="material-icons">reorder</i></a>'), "\n           \n         \n            \n      \n      ", HTML.UL({
    "class": "hide-on-med-and-down left"                                                                               // 869
  }, "\n        ", HTML.LI({                                                                                           // 870
    "class": "nanum"                                                                                                   // 871
  }, HTML.A({                                                                                                          // 872
    href: function() {                                                                                                 // 873
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 874
    },                                                                                                                 // 875
    "class": "grey-text  text-darken-2 "                                                                               // 876
  }, Blaze.View("lookup:_", function() {                                                                               // 877
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 878
  }))), "\n        ", HTML.LI({                                                                                        // 879
    "class": "nanum"                                                                                                   // 880
  }, HTML.A({                                                                                                          // 881
    href: function() {                                                                                                 // 882
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 883
    },                                                                                                                 // 884
    "class": "grey-text  text-darken-2"                                                                                // 885
  }, Blaze.View("lookup:_", function() {                                                                               // 886
    return Spacebars.mustache(view.lookup("_"), "howWeWork");                                                          // 887
  }))), "\n        ", HTML.LI({                                                                                        // 888
    "class": "nanum"                                                                                                   // 889
  }, HTML.A({                                                                                                          // 890
    href: function() {                                                                                                 // 891
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 892
    },                                                                                                                 // 893
    "class": "grey-text text-darken-2"                                                                                 // 894
  }, " ", Blaze.View("lookup:_", function() {                                                                          // 895
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 896
  }))), "\n             ", HTML.LI({                                                                                   // 897
    "class": "nanum"                                                                                                   // 898
  }, HTML.A({                                                                                                          // 899
    href: function() {                                                                                                 // 900
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 901
    },                                                                                                                 // 902
    "class": "grey-text text-darken-2"                                                                                 // 903
  }, Blaze.View("lookup:_", function() {                                                                               // 904
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 905
  }))), "\n           ", HTML.LI({                                                                                     // 906
    "class": "nanum"                                                                                                   // 907
  }, HTML.A({                                                                                                          // 908
    href: function() {                                                                                                 // 909
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 910
    },                                                                                                                 // 911
    "class": "grey-text text-darken-2"                                                                                 // 912
  }, Blaze.View("lookup:_", function() {                                                                               // 913
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 914
  }))), "\n \n\n      "), "\n        ", HTML.UL({                                                                      // 915
    "class": "right hide-on-med-and-down"                                                                              // 916
  }, "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher2")), "\n            ", HTML.Raw('<li><a class=" grey-text center" href="https://urlgeni.us/facebook/4U1B"><i class="fab fa-facebook-f  fa-2x"></i></a></li>'), "\n                         ", HTML.Raw('<li class="divider"></li>'), "\n    ", HTML.Raw('<li><a class="center grey-text" href="https://instagram.com/illumeinc/"><i class="fab fa-instagram  fa-2x"></i></a></li>'), "\n            "), "\n       \n    "), "\n      "), "\n \n \n  ", HTML.UL({
    id: "slide-out2",                                                                                                  // 918
    "class": "side-nav center"                                                                                         // 919
  }, "\n         ", HTML.DIV({                                                                                         // 920
    "class": "center"                                                                                                  // 921
  }, "\n            \n             \n      ", HTML.LI({                                                                // 922
    "class": "nanum"                                                                                                   // 923
  }, HTML.A({                                                                                                          // 924
    href: function() {                                                                                                 // 925
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 926
    },                                                                                                                 // 927
    "class": "grey-text text-darken-3 "                                                                                // 928
  }, Blaze.View("lookup:_", function() {                                                                               // 929
    return Spacebars.mustache(view.lookup("_"), "about");                                                              // 930
  }))), "\n        ", HTML.LI({                                                                                        // 931
    "class": "nanum"                                                                                                   // 932
  }, HTML.A({                                                                                                          // 933
    href: function() {                                                                                                 // 934
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 935
    },                                                                                                                 // 936
    "class": "grey-text text-darken-3 "                                                                                // 937
  }, Blaze.View("lookup:_", function() {                                                                               // 938
    return Spacebars.mustache(view.lookup("_"), "howWeWork");                                                          // 939
  }))), "\n        ", HTML.LI({                                                                                        // 940
    "class": "nanum"                                                                                                   // 941
  }, HTML.A({                                                                                                          // 942
    href: function() {                                                                                                 // 943
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 944
    },                                                                                                                 // 945
    "class": "grey-text text-darken-3"                                                                                 // 946
  }, Blaze.View("lookup:_", function() {                                                                               // 947
    return Spacebars.mustache(view.lookup("_"), "ourServices");                                                        // 948
  }))), "\n                ", HTML.LI({                                                                                // 949
    "class": "nanum"                                                                                                   // 950
  }, HTML.A({                                                                                                          // 951
    href: function() {                                                                                                 // 952
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 953
    },                                                                                                                 // 954
    "class": "grey-text text-darken-3"                                                                                 // 955
  }, Blaze.View("lookup:_", function() {                                                                               // 956
    return Spacebars.mustache(view.lookup("_"), "portfolio");                                                          // 957
  }))), "\n           ", HTML.LI({                                                                                     // 958
    "class": "nanum"                                                                                                   // 959
  }, HTML.A({                                                                                                          // 960
    href: function() {                                                                                                 // 961
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 962
    },                                                                                                                 // 963
    "class": "grey-text text-darken-3"                                                                                 // 964
  }, Blaze.View("lookup:_", function() {                                                                               // 965
    return Spacebars.mustache(view.lookup("_"), "reachUs");                                                            // 966
  }))), "\n           ", Spacebars.include(view.lookupTemplate("languageSwitcher2")), "\n        "), "\n "), "\n \n          ");
}));                                                                                                                   // 968
                                                                                                                       // 969
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
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n    ", HTML.DIV({                                 // 5
    "class": "code hide-on-med-and-down",                                                                              // 6
    style: "background:#fff;"                                                                                          // 7
  }, "\n   \n        ", HTML.DIV({                                                                                     // 8
    "class": "container",                                                                                              // 9
    style: "margin-top:2em;"                                                                                           // 10
  }, "\n  ", HTML.Raw('<p class="flow-text grey-text text-darken-2 center">MERGING THE BEST OF BOTH WORLDS OF WEB &amp; MOBILE.<br>CREATING APPLICATIONS AND WEBSITES<br> SPECIFICALLY FOR YOU AND YOUR BUSINESS  </p>'), "\n             ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>'), "\n  ", HTML.DIV({
    "class": "row hide-on-med-and-down ",                                                                              // 12
    style: "margin-top:5em;"                                                                                           // 13
  }, "\n    ", HTML.DIV({                                                                                              // 14
    "class": "col s12 m3"                                                                                              // 15
  }, "\n        ", HTML.FIGURE({                                                                                       // 16
    "class": "chart",                                                                                                  // 17
    "data-percent": "75"                                                                                               // 18
  }, "\n    ", HTML.Raw("<figcaption>HTML</figcaption>"), "\n    ", HTML.Raw('<img class="html" src="https://dl.dropboxusercontent.com/s/68gv23q4y5qyq52/html5.svg">'), "\n    ", HTML.SVG({
    width: "200",                                                                                                      // 20
    height: "200"                                                                                                      // 21
  }, "\n      ", HTML.CIRCLE({                                                                                         // 22
    "class": "outer",                                                                                                  // 23
    cx: "95",                                                                                                          // 24
    cy: "95",                                                                                                          // 25
    r: "85",                                                                                                           // 26
    transform: "rotate(-90, 95, 95)"                                                                                   // 27
  }), "\n    "), "\n  "), "\n    \n      "), "\n          ", HTML.DIV({                                                // 28
    "class": "col s12 m3"                                                                                              // 29
  }, "\n        ", HTML.FIGURE({                                                                                       // 30
    "class": "chart",                                                                                                  // 31
    "data-percent": "75"                                                                                               // 32
  }, "\n    ", HTML.Raw("<figcaption>CSS</figcaption>"), "\n    ", HTML.Raw('<img class="css" src="/img/css.svg">'), "\n    ", HTML.SVG({
    width: "200",                                                                                                      // 34
    height: "200"                                                                                                      // 35
  }, "\n      ", HTML.CIRCLE({                                                                                         // 36
    "class": "outer",                                                                                                  // 37
    cx: "95",                                                                                                          // 38
    cy: "95",                                                                                                          // 39
    r: "85",                                                                                                           // 40
    transform: "rotate(-90, 95, 95)"                                                                                   // 41
  }), "\n    "), "\n  "), "\n      "), "\n          ", HTML.DIV({                                                      // 42
    "class": "col s12 m3"                                                                                              // 43
  }, "\n        ", HTML.FIGURE({                                                                                       // 44
    "class": "chart",                                                                                                  // 45
    "data-percent": "100"                                                                                              // 46
  }, "\n    ", HTML.Raw("<figcaption>Javascript</figcaption>"), "\n    ", HTML.Raw('<img class="javascript" src="/img/js.png">'), "\n    ", HTML.SVG({
    width: "200",                                                                                                      // 48
    height: "200"                                                                                                      // 49
  }, "\n      ", HTML.CIRCLE({                                                                                         // 50
    "class": "outer",                                                                                                  // 51
    cx: "95",                                                                                                          // 52
    cy: "95",                                                                                                          // 53
    r: "85",                                                                                                           // 54
    transform: "rotate(-90, 95, 95)"                                                                                   // 55
  }), "\n    "), "\n  "), "\n      "), "\n          ", HTML.DIV({                                                      // 56
    "class": "col s12 m3"                                                                                              // 57
  }, "\n        ", HTML.FIGURE({                                                                                       // 58
    "class": "chart",                                                                                                  // 59
    "data-percent": "75"                                                                                               // 60
  }, "\n    ", HTML.Raw("<figcaption>Node</figcaption>"), "\n    ", HTML.Raw('<img class="node" src="https://dl.dropboxusercontent.com/s/v28zws1p38tjph2/node.png">'), "\n    ", HTML.SVG({
    width: "200",                                                                                                      // 62
    height: "200"                                                                                                      // 63
  }, "\n      ", HTML.CIRCLE({                                                                                         // 64
    "class": "outer",                                                                                                  // 65
    cx: "95",                                                                                                          // 66
    cy: "95",                                                                                                          // 67
    r: "85",                                                                                                           // 68
    transform: "rotate(-90, 95, 95)"                                                                                   // 69
  }), "\n    "), "\n  "), "\n      "), "\n    "), "\n    "), "\n            ", HTML.Raw('<div class="center wow fadeInDown" data-wow-iteration="3" style="margin-top:21.5em;">\n                <a href="#portfolioWrapper" class="button outline"><b>CLICK TO VIEW MORE</b></a>\n            </div>'), "\n    "), HTML.Raw('\n \n\n  <!-- HTML Chart -->\n \n \n \n \n<div id="portfolioWrapper" class="">\n\n   <div class="row">\n        <div class="container">\n        <div class="col s12 m12 ">\n            <h3 class="  center  opensan">WEBSITES</h3>\n  \n            <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n             <p class="center flow-text">Our websites are built with <a href="http://www.meteor.com" target="_blank">Meteor.JS</a> - a state of the art native container - which increases reactivity and performance to a whole new level. Don\'t take our word for it. Take a look for yourself.</p>\n             \n            </div>\n        </div>\n                              </div>\n           <div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/cdp.png">\n              \n            </div>\n           \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.vitalmetrics-cdp.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/jesuslove.png">\n              \n            </div>\n            \n            \n          </div>\n     \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/sfmvdm.png">\n              \n            </div>\n            \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.sfmvdm.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                            \n                                  </div>\n                              </div>\n                        <div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/bpr.png">\n              \n            </div>\n           \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.berguerpr.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/ivhair.png">\n              \n            </div>\n            \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.ivhairco.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/epic.png">\n              \n            </div>\n            \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.epicsupsb.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                            \n                                  </div>\n                              </div>\n    <div class="row" style="margin-top:4em;">\n        <div class="container">\n        <div class="col s12 m12 l10 offset-l1">\n            <h3 class="  center  opensan">GRAPHICS</h3>\n  \n            <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n                \n             <p class="center flow-text">We make all of our graphics inhouse. Every single graphic work has been made with <i class="fa fa-heart red-text"></i> and a little bit of imagination.</p>\n            </div>\n        </div>\n                              </div>\n                                <div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/cole.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/work/sfmvdm.png" class="materialboxed">\n              \n            </div>\n            \n            \n          </div>\n \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/work/business.png" class="materialboxed">\n              \n            </div>\n            \n            \n          </div>\n         \n                                            \n                                  </div>\n                              </div>\n                     <div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/work/speakwise.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n                             <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/work/bpbanner.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n                                          <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/work/jl.png" class="materialboxed">\n              \n            </div>\n           \n            \n          </div>\n           \n                                 \n                                  </div>\n    </div>\n\n</div>   \n \n      '), HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 71
  }, "\n                ", HTML.DIV({                                                                                  // 72
    "class": "row"                                                                                                     // 73
  }, "\n        ", HTML.DIV({                                                                                          // 74
    "class": "container"                                                                                               // 75
  }, "\n        ", HTML.DIV({                                                                                          // 76
    "class": "col s12 m12 l12"                                                                                         // 77
  }, "\n            ", HTML.Raw('<h1 class="mont center homeWhat">ARE YOU GAME?</h1>'), "\n            ", HTML.Raw('<div class="divider red lighten-1"></div>'), "\n      \n             ", HTML.Raw('<h3 class="center muli grey-text text-darken-3">We would love to hear more.</h3>'), "\n                ", HTML.DIV({
    "class": "center"                                                                                                  // 79
  }, "\n                  ", HTML.A({                                                                                  // 80
    href: function() {                                                                                                 // 81
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 82
    },                                                                                                                 // 83
    "class": "button outline"                                                                                          // 84
  }, "GET STARTED WITH ILLUME INC."), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 86
                                                                                                                       // 87
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
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), "\n    ", HTML.SECTION({                             // 5
    style: "margin-top:3.2em"                                                                                          // 6
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
  }, "\n            ", HTML.Raw('<div class="col s12 m6 l6">\n                <div class="center">\n                <img src="/img/meteors.png" class="responsive-img wow fadeInLeft">\n                </div>\n                </div>'), "\n                     ", HTML.DIV({
    "class": "col s12 m6 l6"                                                                                           // 37
  }, "\n                         ", HTML.H4({                                                                          // 38
    "class": "nanum  red-text text-lighten-1"                                                                          // 39
  }, Blaze.View("lookup:_", function() {                                                                               // 40
    return Spacebars.mustache(view.lookup("_"), "simpleSleek");                                                        // 41
  })), "\n                         ", HTML.P({                                                                         // 42
    "class": "flow-text grey-text text-darken-3"                                                                       // 43
  }, Blaze.View("lookup:_", function() {                                                                               // 44
    return Spacebars.mustache(view.lookup("_"), "iDevelopWith");                                                       // 45
  })), "\n                         \n                "), "\n            "), "\n            "), "\n        "), HTML.Raw('\n           \n           \n        <div class="divider" style="margin-top:6em;"></div>\n        '), HTML.SECTION({
    "class": "callToAction"                                                                                            // 47
  }, "\n        ", HTML.DIV({                                                                                          // 48
    "class": "container"                                                                                               // 49
  }, "\n      ", HTML.DIV({                                                                                            // 50
    "class": "center"                                                                                                  // 51
  }, "\n          ", HTML.H4({                                                                                         // 52
    "class": "nanum grey-text text-darken-3"                                                                           // 53
  }, Blaze.View("lookup:_", function() {                                                                               // 54
    return Spacebars.mustache(view.lookup("_"), "my");                                                                 // 55
  }), " ", HTML.SPAN({                                                                                                 // 56
    "class": "red-text text-lighten-1"                                                                                 // 57
  }, " ", Blaze.View("lookup:_", function() {                                                                          // 58
    return Spacebars.mustache(view.lookup("_"), "service");                                                            // 59
  }))), "\n            "), "\n            "), "\n            ", HTML.DIV({                                             // 60
    "class": "row callToAction"                                                                                        // 61
  }, "\n            ", HTML.DIV({                                                                                      // 62
    "class": "container"                                                                                               // 63
  }, "\n                ", HTML.DIV({                                                                                  // 64
    "class": "col s12 m12 l4"                                                                                          // 65
  }, "\n                ", HTML.DIV({                                                                                  // 66
    "class": "pricing animated swing"                                                                                  // 67
  }, "\n  ", HTML.Raw('<div class="thumbnail animated pulse infinite">\n    <div class="fa fa-globe"></div>\n  </div>'), "\n  ", HTML.DIV({
    "class": "title nanum"                                                                                             // 69
  }, "\n   ", Blaze.View("lookup:_", function() {                                                                      // 70
    return Spacebars.mustache(view.lookup("_"), "websitePackage");                                                     // 71
  }), "\n  "), "\n \n \n"), "\n                "), "\n                 ", HTML.DIV({                                   // 72
    "class": "col s12 m12 l4"                                                                                          // 73
  }, "\n                 ", HTML.DIV({                                                                                 // 74
    "class": "pricing animated swing",                                                                                 // 75
    style: "background:#d33e3e;"                                                                                       // 76
  }, "\n  ", HTML.Raw('<div class="thumbnail animated pulse infinite">\n    <div class="fa fa-cart-plus"></div>\n  </div>'), "\n  ", HTML.DIV({
    "class": "titl nanum",                                                                                             // 78
    style: "background:#21313b"                                                                                        // 79
  }, "\n  ", Blaze.View("lookup:_", function() {                                                                       // 80
    return Spacebars.mustache(view.lookup("_"), "ecommerce");                                                          // 81
  }), "\n  "), "\n  \n \n"), "\n                "), "\n                 ", HTML.DIV({                                  // 82
    "class": "col s12 m12 l4"                                                                                          // 83
  }, "\n                ", HTML.DIV({                                                                                  // 84
    "class": "pricing animated swing",                                                                                 // 85
    style: "background:#d33e3e;"                                                                                       // 86
  }, "\n  ", HTML.Raw('<div class="thumbnail animated pulse infinite">\n    <div class="fa fa-edit"></div>\n  </div>'), "\n  ", HTML.DIV({
    "class": "titles nanum",                                                                                           // 88
    style: "background:#21313b;"                                                                                       // 89
  }, "\n    ", Blaze.View("lookup:_", function() {                                                                     // 90
    return Spacebars.mustache(view.lookup("_"), "logo");                                                               // 91
  }), "\n  "), "\n \n \n"), "\n                "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "row callToAction"                                                                                        // 93
  }, "\n            ", HTML.DIV({                                                                                      // 94
    "class": "container"                                                                                               // 95
  }, "\n                ", HTML.DIV({                                                                                  // 96
    "class": "col s12 m10 l10 offset-l1 offset-m1"                                                                     // 97
  }, "\n                ", HTML.H4({                                                                                   // 98
    "class": " center nanum grey-text text-darken-3"                                                                   // 99
  }, "\n                    ", Blaze.View("lookup:_", function() {                                                     // 100
    return Spacebars.mustache(view.lookup("_"), "gotQuestion");                                                        // 101
  }), " ", HTML.Raw("<br>"), " ", Blaze.View("lookup:_", function() {                                                  // 102
    return Spacebars.mustache(view.lookup("_"), "giveUsaCall");                                                        // 103
  }), "\n                   \n                    \n                    "), "\n                  ", HTML.DIV({         // 104
    "class": "center"                                                                                                  // 105
  }, "\n                  ", HTML.A({                                                                                  // 106
    href: function() {                                                                                                 // 107
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 108
    },                                                                                                                 // 109
    "class": "button outline"                                                                                          // 110
  }, Blaze.View("lookup:_", function() {                                                                               // 111
    return Spacebars.mustache(view.lookup("_"), "getStarted");                                                         // 112
  })), "\n\n                "), "\n                "), "\n                "), "\n            "), "\n        ") ];      // 113
}));                                                                                                                   // 114
                                                                                                                       // 115
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"service.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/services/service.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.service.rendered = function () {                                                                              // 1
     new WOW().init({ mobile: false });                                                                                // 2
                                                                                                                       //
     $(".titl").click(function () {                                                                                    // 4
          $(".contents").slideToggle();                                                                                // 5
     });                                                                                                               // 6
     $(".title").click(function () {                                                                                   // 7
          $(".content").slideToggle();                                                                                 // 8
     });                                                                                                               // 9
     $(".titles").click(function () {                                                                                  // 10
          $(".contentsss").slideToggle();                                                                              // 11
     });                                                                                                               // 12
};                                                                                                                     // 13
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
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), HTML.Raw('\n  <section>\n <div class="section">\n    <div class="container">\n        <div class="center">\n        <h4 class="center muli grey-text text-darken-3">Create With Us Today</h4>\n        </div>\n        </div>\n    </div>\n   \n    <div class="section">\n    <div class="container">\n        <div class="row">\n     <div class="col s12 m12 l6 offset-l3">\n            <p class="center   flow-text grey-text text-darken-2">\n     Starting a project with illume is easy. Just email, call, or text us 24/7. We will get back to you within minutes.\n         </p>\n            </div>\n        </div>\n        </div>\n    </div>\n \n    <div class="section">\n    <div class="container">\n        <div class="row">\n        <div class="col s12 m6">\n            <h5 class="rale"> <i class="fa fa-phone  red-text"></i></h5>\n \n            <div class="center">\n            <ul class="collection">\n                <li class="collection-item  blue-grey darken-1">\n                \n                    <span class="  white-text">+1 805 530 5434 | ENG</span>\n                </li>\n                       <li class="collection-item  blue-grey darken-1">\n                \n                    <span class="  white-text">+82 10 5571 1781 | KOR</span>\n                </li>       \n                </ul>\n            </div>\n         <h5 class="rale"><i class="fa fa-envelope red-text"></i> </h5>\n          \n                  <div class="center">\n                       <ul class="collection">\n              \n                         <li class="collection-item  blue-grey darken-1">\n                \n                  <span class="  white-text">illumeweb@gmail.com</span>\n                </li>\n                </ul>\n                  </div>\n            </div>\n      \n           <div class="col s12 m6 l6">\n                  <h5 class="rale"><i class="fa fa-calendar-check-o red-text "></i> </h5>\n                        <ul class="collection">\n                <li class="collection-item  blue-grey darken-1">\n                \n                    <span class="  white-text">Mon - Fri: <span class="right">12:00PM - 7PM\n</span></span>\n                </li>\n                                <li class="collection-item  blue-grey darken-1">\n                \n                    <span class="  white-text">Sat: <span class="right">11:00AM  - 4PM</span></span>\n                </li> \n                                   <li class="collection-item  blue-grey darken-1">\n                \n                    <span class="  white-text">Sun: <span class="right bold">Closed  </span></span>\n                </li> \n                                         <li class="collection-item  blue-grey darken-1">\n                \n                    <span class="  white-text">Holidays: <span class="right bold">Closed</span></span>\n                </li>\n                </ul>\n            </div>\n        </div>\n        </div>\n    </div>\n</section>\n    <div class="divider" style="margin:0 auto;width:50%"></div>\n     <div class="section">\n    <div class="container">\n        <div class="row">\n     <div class="col s12 m12 l6 offset-l3">\n            <p class="center   flow-text grey-text text-darken-2">\n  You can also start a project by filling out our application form. You should be getting something from us within 24 hours.\n         </p>\n            </div>\n        </div>\n        </div>\n    </div>\n'), HTML.DIV({
    "class": "container"                                                                                               // 12
  }, " \n", HTML.DIV({                                                                                                 // 13
    "class": "row center"                                                                                              // 14
  }, "\n", HTML.DIV({                                                                                                  // 15
    style: "padding:1em;",                                                                                             // 16
    "class": "z-depth-1 col s12"                                                                                       // 17
  }, " \n      \n        ", Blaze._TemplateWith(function() {                                                           // 18
    return {                                                                                                           // 19
      collection: Spacebars.call("Rsvps"),                                                                             // 20
      id: Spacebars.call("insertRsvpForm"),                                                                            // 21
      type: Spacebars.call("method"),                                                                                  // 22
      meteormethod: Spacebars.call("submitRsvp"),                                                                      // 23
      omitFields: Spacebars.call("createdAt")                                                                          // 24
    };                                                                                                                 // 25
  }, function() {                                                                                                      // 26
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 27
      return [ "\n   \n      ", HTML.DIV({                                                                             // 28
        "class": "row"                                                                                                 // 29
      }, " \n      ", HTML.DIV({                                                                                       // 30
        "class": "col s12 m3"                                                                                          // 31
      }, "\n      ", Blaze._TemplateWith(function() {                                                                  // 32
        return {                                                                                                       // 33
          name: Spacebars.call("name")                                                                                 // 34
        };                                                                                                             // 35
      }, function() {                                                                                                  // 36
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 37
      }), "\n      "), " \n          ", HTML.DIV({                                                                     // 38
        "class": "col s12 m3"                                                                                          // 39
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 40
        return {                                                                                                       // 41
          name: Spacebars.call("last")                                                                                 // 42
        };                                                                                                             // 43
      }, function() {                                                                                                  // 44
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 45
      }), "\n      "), " \n       ", HTML.DIV({                                                                        // 46
        "class": "col s12 m3"                                                                                          // 47
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 48
        return {                                                                                                       // 49
          name: Spacebars.call("email")                                                                                // 50
        };                                                                                                             // 51
      }, function() {                                                                                                  // 52
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 53
      }), "\n      \n      "), " \n      ", HTML.DIV({                                                                 // 54
        "class": "col s12 m3"                                                                                          // 55
      }, "\n        ", Blaze._TemplateWith(function() {                                                                // 56
        return {                                                                                                       // 57
          name: Spacebars.call("phone")                                                                                // 58
        };                                                                                                             // 59
      }, function() {                                                                                                  // 60
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 61
      }), "\n      \n      "), "\n      "), "\n       ", HTML.DIV({                                                    // 62
        "class": "row"                                                                                                 // 63
      }, "\n", HTML.DIV({                                                                                              // 64
        "class": "col s12 m6"                                                                                          // 65
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 66
        return {                                                                                                       // 67
          name: Spacebars.call("website")                                                                              // 68
        };                                                                                                             // 69
      }, function() {                                                                                                  // 70
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 71
      }), "\n"), "\n", HTML.DIV({                                                                                      // 72
        "class": "col s12 m6"                                                                                          // 73
      }, "\n   ", Blaze._TemplateWith(function() {                                                                     // 74
        return {                                                                                                       // 75
          name: Spacebars.call("organization")                                                                         // 76
        };                                                                                                             // 77
      }, function() {                                                                                                  // 78
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 79
      }), "\n"), "\n  \n       "), "\n       \n       ", HTML.DIV({                                                    // 80
        "class": "row"                                                                                                 // 81
      }, "\n       \n       ", HTML.DIV({                                                                              // 82
        "class": "col s12 m12 l5"                                                                                      // 83
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 84
        return {                                                                                                       // 85
          name: Spacebars.call("industry")                                                                             // 86
        };                                                                                                             // 87
      }, function() {                                                                                                  // 88
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 89
      }), "\n       "), "\n        ", HTML.DIV({                                                                       // 90
        "class": "col s12 m12 l7"                                                                                      // 91
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 92
        return {                                                                                                       // 93
          name: Spacebars.call("Competitors")                                                                          // 94
        };                                                                                                             // 95
      }, function() {                                                                                                  // 96
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 97
      }), "\n       "), "\n       "), "\n       ", HTML.DIV({                                                          // 98
        "class": "row"                                                                                                 // 99
      }, "\n     ", HTML.DIV({                                                                                         // 100
        "class": "col s12 m6"                                                                                          // 101
      }, "\n", Blaze._TemplateWith(function() {                                                                        // 102
        return {                                                                                                       // 103
          name: Spacebars.call("iadSense")                                                                             // 104
        };                                                                                                             // 105
      }, function() {                                                                                                  // 106
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 107
      }), "\n "), "\n   ", HTML.DIV({                                                                                  // 108
        "class": "col s12 m6"                                                                                          // 109
      }, "\n    ", Blaze._TemplateWith(function() {                                                                    // 110
        return {                                                                                                       // 111
          name: Spacebars.call("budget")                                                                               // 112
        };                                                                                                             // 113
      }, function() {                                                                                                  // 114
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 115
      }), "\n   "), "\n "), "\n \n \n ", HTML.DIV({                                                                    // 116
        "class": "row"                                                                                                 // 117
      }, "\n ", HTML.DIV({                                                                                             // 118
        "class": "col s12 m8 offset-m2 offset-l3 l6"                                                                   // 119
      }, "\n  \n      ", HTML.DIV({                                                                                    // 120
        "class": " "                                                                                                   // 121
      }, "\n", HTML.LABEL({                                                                                            // 122
        style: "font-size:17px"                                                                                        // 123
      }, "Are you engaged with another agency at the moment? *"), "\n ", Blaze._TemplateWith(function() {              // 124
        return {                                                                                                       // 125
          name: Spacebars.call("another"),                                                                             // 126
          type: Spacebars.call("switch"),                                                                              // 127
          trueLabel: Spacebars.call("YES"),                                                                            // 128
          falseLabel: Spacebars.call("NOPE")                                                                           // 129
        };                                                                                                             // 130
      }, function() {                                                                                                  // 131
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 132
      }), "\n"), "\n "), "\n "), "\n \n ", HTML.DIV({                                                                  // 133
        "class": "row"                                                                                                 // 134
      }, "\n \n", HTML.DIV({                                                                                           // 135
        "class": "col s12 m6 offset-m3"                                                                                // 136
      }, "\n ", Blaze._TemplateWith(function() {                                                                       // 137
        return {                                                                                                       // 138
          name: Spacebars.call("whatElse")                                                                             // 139
        };                                                                                                             // 140
      }, function() {                                                                                                  // 141
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 142
      }), "\n"), "\n\n\n "), "\n    ", HTML.BUTTON({                                                                   // 143
        type: "submit",                                                                                                // 144
        "class": "button outline"                                                                                      // 145
      }, "SUBMIT APPLICATION"), "\n    ", HTML.BR(), "\n    ", HTML.BR(), "\n    ", HTML.DIV({                         // 146
        "class": "center wow bounce",                                                                                  // 147
        "data-wow-iteration": "4"                                                                                      // 148
      }, "\n    ", HTML.SPAN({                                                                                         // 149
        "class": "grey-text text-darken-2"                                                                             // 150
      }, "* REQUIRED FIELDS"), "\n    "), "\n  " ];                                                                    // 151
    });                                                                                                                // 152
  }), "\n       \n\n      "), "\n      "), "\n      "), "\n     ", Blaze.If(function() {                               // 153
    return Spacebars.call(view.lookup("isSuccessfulRsvp"));                                                            // 154
  }, function() {                                                                                                      // 155
    return [ "\n    ", HTML.DIV({                                                                                      // 156
      "class": "container"                                                                                             // 157
    }, "\n    ", HTML.DIV({                                                                                            // 158
      "class": "row wow zoomIn"                                                                                        // 159
    }, "\n    ", HTML.DIV({                                                                                            // 160
      "class": "col s12 m10 offset-m1 l8 offset-l2"                                                                    // 161
    }, "\n    ", HTML.H5({                                                                                             // 162
      "class": "center robotoIt grey-text text-darken-3 wow zoomInUp"                                                  // 163
    }, "  ", Blaze.View("lookup:name", function() {                                                                    // 164
      return Spacebars.mustache(view.lookup("name"));                                                                  // 165
    }), " ", Blaze.View("lookup:last", function() {                                                                    // 166
      return Spacebars.mustache(view.lookup("last"));                                                                  // 167
    }), " Thanks for choosing illume Inc. We will get back to you shortly ", Blaze.View("lookup:name", function() {    // 168
      return Spacebars.mustache(view.lookup("name"));                                                                  // 169
    }), ".  "), "\n    ", HTML.BR(), "\n    ", HTML.DIV({                                                              // 170
      "class": "center"                                                                                                // 171
    }, "\n                  ", HTML.A({                                                                                // 172
      href: "/",                                                                                                       // 173
      "class": "button outline"                                                                                        // 174
    }, "BACK HOME"), "\n\n                "), "\n    "), "\n    "), "\n"), "\n    \n    " ];                           // 175
  }, function() {                                                                                                      // 176
    return "   \n  ";                                                                                                  // 177
  }) ];                                                                                                                // 178
}));                                                                                                                   // 179
                                                                                                                       // 180
Template.__checkName("lastRsvp");                                                                                      // 181
Template["lastRsvp"] = new Template("Template.lastRsvp", (function() {                                                 // 182
  var view = this;                                                                                                     // 183
  return Blaze.Each(function() {                                                                                       // 184
    return Spacebars.call(view.lookup("rsvps"));                                                                       // 185
  }, function() {                                                                                                      // 186
    return [ "\n    ", Blaze.View("lookup:name", function() {                                                          // 187
      return Spacebars.mustache(view.lookup("name"));                                                                  // 188
    }), " ", Blaze.View("lookup:last", function() {                                                                    // 189
      return Spacebars.mustache(view.lookup("last"));                                                                  // 190
    }), "\n  " ];                                                                                                      // 191
  });                                                                                                                  // 192
}));                                                                                                                   // 193
                                                                                                                       // 194
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"application.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/templates/work/application.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.lastRsvp.rendered = function () {                                                                             // 1
                                                                                                                       //
	new WOW().init();                                                                                                     // 3
};                                                                                                                     // 5
                                                                                                                       //
AutoForm.setDefaultTemplate('materialize');                                                                            // 7
AutoForm.addHooks('insertRsvpForm', {                                                                                  // 8
	onSuccess: function () {                                                                                              // 9
		function onSuccess() {                                                                                               // 9
			console.log("Got application");                                                                                     // 10
			return Session.set('successfulRsvp', true);                                                                         // 11
		}                                                                                                                    // 13
                                                                                                                       //
		return onSuccess;                                                                                                    // 9
	}()                                                                                                                   // 9
});                                                                                                                    // 8
                                                                                                                       //
/*****************************************************************************/                                        //
/* Rsvp: Event Handlers */                                                                                             //
/*****************************************************************************/                                        //
Template.Rsvp.events({});                                                                                              // 19
                                                                                                                       //
/*****************************************************************************/                                        //
/* Rsvp: Helpers */                                                                                                    //
/*****************************************************************************/                                        //
Template.Rsvp.helpers({                                                                                                // 25
	isSuccessfulRsvp: function () {                                                                                       // 26
		function isSuccessfulRsvp() {                                                                                        // 26
			return Session.get('successfulRsvp');                                                                               // 27
		}                                                                                                                    // 29
                                                                                                                       //
		return isSuccessfulRsvp;                                                                                             // 26
	}()                                                                                                                   // 26
});                                                                                                                    // 25
                                                                                                                       //
/*****************************************************************************/                                        //
/* Rsvp: Lifecycle Hooks */                                                                                            //
/*****************************************************************************/                                        //
Template.Rsvp.created = function () {                                                                                  // 35
	return Session.set('successfulRsvp', false);                                                                          // 36
};                                                                                                                     // 37
                                                                                                                       //
Template.Rsvp.rendered = function () {};                                                                               // 39
                                                                                                                       //
Template.Rsvp.destroyed = function () {                                                                                // 42
	return Session.set('successfulRsvp', false);                                                                          // 43
};                                                                                                                     // 44
Template.applications.rendered = function () {                                                                         // 45
	new WOW().init();                                                                                                     // 46
};                                                                                                                     // 49
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
      content: 'applications, mobile, web, javascript, illume inc., santa barbara, meteor, meteor.js, hybrid applications, web design, web development, mobile app development, web design santa barbara, web development santa barbara'
    },                                                                                                                 //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      content: 'My name is Joe and I am a developer, a designer, and a coffee addict. Working with you to make a powerful web application for you and your business.'
    },                                                                                                                 //
    image: {                                                                                                           //
      property: 'og:image',                                                                                            //
      content: '/img/badge.png'                                                                                        //
    },                                                                                                                 //
    author: {                                                                                                          //
      name: 'author',                                                                                                  //
      content: 'illume inc.'                                                                                           //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      content: 'http://www.illumeweb.com'                                                                              //
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
      content: 'http://www.j-lee.com/'                                                                                 //
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
      content: 'http://www.illumeweb.com/about-me'                                                                     //
    },                                                                                                                 //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      property: 'og:description',                                                                                      //
      content: 'I believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination.'
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/badge.png'                                                                                        //
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
  path: '/what-we-do',                                                                                                 //
  title: 'Our Services',                                                                                               //
  meta: {                                                                                                              //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      itemprop: 'description',                                                                                         //
      property: 'og:description',                                                                                      //
      content: 'We ensure that the design benefits the function. We produce features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: 'Santa Barbara, ecommerce site, Wordpress, Drupal, Mobile responsive,  speed, logo service, google search, seo, stripe, paypal, cms, web application, reactivity, javascript, meteor, meteor.js, web design santa barbara'
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/badge.png'                                                                                        //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.illumeweb.com/what-we-do'                                                                   //
    },                                                                                                                 //
    'og:type': 'website',                                                                                              //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'Our Services'                                                                                     //
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
      content: '/img/badge.png'                                                                                        //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.illumeweb.com/about-hybrid-app'                                                             //
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
  path: '/our-work',                                                                                                   //
  title: 'Our Portfolio',                                                                                              //
  meta: {                                                                                                              //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      itemprop: 'description',                                                                                         //
      property: 'og:description',                                                                                      //
      content: 'We ensure that the design benefits the function. We produce features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: ' web, mobile, website, mobile app, meteor, meteor.js'                                                  //
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/badge.png'                                                                                        //
    },                                                                                                                 //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.illumeweb.com/our-work'                                                                     //
    },                                                                                                                 //
    'og:type': 'website',                                                                                              //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'Our Services'                                                                                     //
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
      content: 'http://www.illumeweb.com/how-we-work'                                                                  //
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
      content: 'http://www.illumeweb.com/services/web-lessons'                                                         //
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
  path: '/work-with-us',                                                                                               //
  title: 'Work with Illume Inc.',                                                                                      //
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
translations[namespace] = {"aboutIllume":"A Santa Barbara, CA based group, or purpose is to help create or refine your product vision and aim your business towards success. From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites. One size does not fit all so we try our best to understand your current situation to build a comprehensive plan to bring additiional value to your idea.","webAndMobile":"Web & Mobile Apps, ","intoOne":"into One","secretWeapon":"Secret Weapon,","iValue":"I value simple content structure, clean design patterns, and thoughtful interactions.","iCode":"I love to code things from scratch, and enjoy bringing ideas to life in the browser.","moreMe":" I play videogames, read, but I mostly enjoy spending time with friends and family.","myTools":"My Tools:","thingsDesign":"Things I enjoy designing:","languageSpeak":"Languages I speak","thingsLike":"Things I enjoy:","occasionally":"Occasionally","meteor":"METEOR","learnMoreHybrid":"LEARN MORE ON HYBRID APPS","webDesc":"In December of 2010, Samsung SDS predicted that a native container platform that can merge the intricacies of the web and the dynamics of mobile apps will bring about a new future in software engineering. This so called 'hybrid apps' will bring ideas across all platforms of all devices; breaking down  walls for ideas to permeate into the marketspace. The good news is: We offer it right here at illume Inc. Experience the best of both worlds   and spark your ideas to life.","silos":"We cut out the silos and cookie-cutter solutions because we know they will ultimately fail. We are eager to find out what makes your business tick so we can build you a custom high-end website that works for you. Meteor is a Node.JS platform that offers robust flexibility in creating beautiful and powerful applications. We are proud to be part of a growing community of engineers willing to embrace the web-revolution that is about to come. Don't wait.","discoverMeteor":"DISCOVER METEOR","leeSang":"JOE LEE","leadDeveloper":"I believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination. I strive to maintain constant communication between you and our team to ensure the optimal health of your product for your business. Thanks for choosing to work with me.","aLittleAboutMeteor":"A little about Meteor.JS","readySetGo":"READY, SET, GO."};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 13
                                                                                                                       // 14
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
translations[namespace] = {"whatWeDo":"Hey, I'm Joe. Pleasure to meet you.","mission1":"Since beginning my journey as a freelance designer nearly 5 years ago, I've done remote work for businesses, consulted for startups, non-profit orgs, and collaborated with talented people to create digital products for both business and personal use. I'm quietly confident, naturally curious, and perpetually improving my chops.","koreaAdd":"","mission2":"You’ll finish with a data-driven product roadmap that outlines your path to successful launch all before a single line of code is written. Once that is done, we get to work.","innovative":"Innovative","bridging":"Bridging Mobile & Web","tailored":"Tailored For You","learnMore":"More about me","viewMore":"Want to see more?","roadTo":"Let's make you a","someOfOurWork":"SOME OF MY RECENT WORK","allOfOurWebsites":"All of the websites and hybrid applications are based on Meteor.","fastSleek":"They are all fast, sleek, and ready to make a change in their respective industries.","madeWith":"Made with ","madeWithK":"","weBuild":"Building with reactivity in mind","reactiveJavascript":"and utilizing JavaScript","fullest":"to its fullest","embrace":"Embracing the 21st century,","dynamicReactive":"dynamic reactivity is now ","21stC":"in the palm of your hands.","createProducts":"Creating the products with ","youInMind":"with YOU in mind ","createSuccess":"to create success.","insteadOf":"Instead of just handing over a set of deliverables, I work with you to achieve the results you want. We’ll test your ideas together in the marketplace, gather real data, and discover the key benefits of your concept, then create stunning visuals and a comprehensive backlog to serve as an investor-ready MVP. Setting this foundation means you’re not just walking away with a roadmap to a product","walkAway":"you’re walking away with the peace of mind that your product is what people want.","areYouGame":"ARE YOU GAME?","coffee":"First coffee is on me.","loveToHear":"Would love to hear more?","alwaysOpen":"I’m always open to discussing product design work or partnership opportunities.","getStarted":"Start a conversation"};
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
translations[namespace] = {"reactivity":"reactivity","collaborate":"Let's collaborate to give you","unparalleled":"and unparalleled performance.","meteorFirst":"Meteor gives us developers a radically simpler way to build realtime web apps, entirely in JavaScript from one code base. We are able to leverage Javascript like never before and provide you with blazing reactivity in your web application's core. ","meteorSecond":"  Because the same code runs from the client to the cloud, from packages to database APIs, we are not restricted to our weakest link but can be judged based on our strongest one.","simpleSleek":"Simple, Sleek, yet Powerful","iDevelopWith":"I develop with Meteor to create robust, realtime websites and web applications that are as beautiful as they are powerful. As sleek as they are practical.","my":"My","service":"Services","gotQuestion":"Got questions about our services? Not a problem.","giveUsaCall":"Give us a call or shoot us an email. We will get back to you in a jiffy.","websitePackage":"Website Package","ecommerce":"Ecommerce Package","logo":"Logo Package"};
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
  return "en";                                                                                                         // 2
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

}}},{"extensions":[".js",".json",".html",".coffee",".css"]});
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
require("./both/i18n/en/header.en.i18n.json");
require("./both/i18n/en/home.en.i18n.json");
require("./both/i18n/en/service.en.i18n.json");
require("./both/i18n/en/success.en.i18n.json");
require("./both/i18n/ko/about.ko.i18n.json");
require("./both/i18n/ko/header.ko.i18n.json");
require("./both/i18n/ko/home.ko.i18n.json");
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