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
  return HTML.Raw('<div class="container">\n \n    </div>\n<footer class="page-footer white">\n    <section class="text-center" style=";padding:1em">     \n        <div class="container center">\n    <div>\n        <a href="/"><img src="/img/badge.png" width="185"></a>\n        </div>\n    <p class="footer-company-motto mont grey-text text-darken-4"><b>#lightupyourbrand</b></p>\n\n	 \n\n			<p class="footer-company-name opensan" style="color:#313131;">illume Inc. Web Design and Development&copy; 2016<br>Based in Santa Barbara, CA</p>\n    <p class="footer-links"><a href="https://www.facebook.com/illumeweb/" style="color:#fff;"><i class="fa fa-facebook fa-2x"></i></a>  	· <a href="https://www.instagram.com/illumeinc/" style="color:#fff;"><i class="fa fa-yelp fa-2x"></i></a>· <a href="http://www.yelp.com/biz/illume-web-design-and-development-goleta" style="color:#fff;"><i class="fa fa-instagram fa-2x"></i></a></p>\n        </div>\n    </section> \n    </footer>');
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
    style: "background:#115F9A;"                                                                                       // 10
  }, "\n     \n    ", HTML.DIV({                                                                                       // 11
    "class": "nav-wrapper"                                                                                             // 12
  }, "\n        ", HTML.DIV({                                                                                          // 13
    "class": ""                                                                                                        // 14
  }, "\n        ", HTML.Raw('<div class="brand-logo hide-on-small-only">\n            <a href="/" class=" aspergit"><b>illume</b></a>\n            </div>'), "\n              ", HTML.Raw('<div class="brand-logos brand-logo show-on-small-only hide-on-med-and-up">\n            <a href="/" class=" aspergit"><b>illume</b></a>\n            </div>'), "\n            ", HTML.Raw('<a href="#" data-activates="slide-outs" class="white-text button-collapse left" style="margin-left:5px;"><i class="material-icons">reorder</i></a>'), "\n           \n         \n            \n      \n      ", HTML.UL({
    id: "nav-mobiles",                                                                                                 // 16
    "class": "hide-on-med-and-down"                                                                                    // 17
  }, "\n        ", HTML.LI({                                                                                           // 18
    "class": "muli"                                                                                                    // 19
  }, HTML.A({                                                                                                          // 20
    href: function() {                                                                                                 // 21
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 22
    }                                                                                                                  // 23
  }, "ABOUT")), "\n        ", HTML.LI({                                                                                // 24
    "class": "muli"                                                                                                    // 25
  }, HTML.A({                                                                                                          // 26
    href: function() {                                                                                                 // 27
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 28
    }                                                                                                                  // 29
  }, "HOW WE WORK")), "\n        ", HTML.LI({                                                                          // 30
    "class": "muli"                                                                                                    // 31
  }, HTML.A({                                                                                                          // 32
    href: function() {                                                                                                 // 33
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 34
    }                                                                                                                  // 35
  }, "OUR SERVICES")), "\n             ", HTML.LI({                                                                    // 36
    "class": "muli"                                                                                                    // 37
  }, HTML.A({                                                                                                          // 38
    href: function() {                                                                                                 // 39
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 40
    }                                                                                                                  // 41
  }, "PORTFOLIO")), "\n           ", HTML.LI({                                                                         // 42
    "class": "muli"                                                                                                    // 43
  }, HTML.A({                                                                                                          // 44
    href: function() {                                                                                                 // 45
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 46
    }                                                                                                                  // 47
  }, "REACH US")), "\n           \n      "), "\n        ", HTML.Raw('<ul class="right hide-on-med-and-down">\n            <li><a class="white-text center" href="https://www.facebook.com/illume-Inc-890931797668666/timeline/?ref=bookmarks"><i class="fa fa-facebook  fa-2x"></i></a></li>\n                         <li class="divider"></li>\n    <li><a class="center white-text" href="https://instagram.com/illumeinc/"><i class="fa fa-instagram  fa-2x"></i></a></li>\n            </ul>'), "\n       \n    "), "\n      "), "\n       \n          "), "\n      "), "\n"), "\n    ", HTML.UL({
    id: "slide-outs",                                                                                                  // 49
    "class": "side-nav"                                                                                                // 50
  }, "\n        ", HTML.DIV({                                                                                          // 51
    "class": "center"                                                                                                  // 52
  }, "\n            ", HTML.Raw("<br>"), "\n            ", HTML.Raw('<img src="/img/badge.png" width="150">'), HTML.Raw("<br>"), "\n            ", HTML.Raw('<span class="bold">#lightupyourbrand</span>'), "\n     ", HTML.LI({
    "class": "muli",                                                                                                   // 54
    style: "margin-top:1em;"                                                                                           // 55
  }, HTML.A({                                                                                                          // 56
    href: function() {                                                                                                 // 57
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 58
    }                                                                                                                  // 59
  }, "ABOUT US")), "\n        ", HTML.LI({                                                                             // 60
    "class": "muli"                                                                                                    // 61
  }, HTML.A({                                                                                                          // 62
    href: function() {                                                                                                 // 63
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 64
    }                                                                                                                  // 65
  }, "HOW WE WORK")), "\n        ", HTML.LI({                                                                          // 66
    "class": "muli"                                                                                                    // 67
  }, HTML.A({                                                                                                          // 68
    href: function() {                                                                                                 // 69
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 70
    }                                                                                                                  // 71
  }, "OUR SERVICES")), "\n             ", HTML.LI({                                                                    // 72
    "class": "muli"                                                                                                    // 73
  }, HTML.A({                                                                                                          // 74
    href: function() {                                                                                                 // 75
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 76
    }                                                                                                                  // 77
  }, "PORTFOLIO")), "\n           ", HTML.LI({                                                                         // 78
    "class": "muli"                                                                                                    // 79
  }, HTML.A({                                                                                                          // 80
    href: function() {                                                                                                 // 81
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 82
    }                                                                                                                  // 83
  }, "REACH US")), "\n        "), "\n  ") ];                                                                           // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
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
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), HTML.Raw('\n <div class="center">\n<h2><b>ABOUT US</b></h2>\n </div>\n <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n <div class="container" style="margin-top:3em">\n <div class="center">\n     <img src="/img/logo.png" width="110">\n     <br>\n     \n <p class="flow-text">\nA Santa Barbara, CA based group, we are a new breed of engineers and designers striving to evolve the current webspace. Our purpose is to help create or refine your product vision and aim your business towards success. From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites. One size does not fit all so we try our best to understand your current situation to build a comprehensive plan to bring additiional value to your idea.\n</p>\n </div>\n </div>\n       <div class="parallax-container" style="height:400px;margin-top:4em">\n      <div class="parallax" style="background:#0f0f0f"><img src="/img/webd.jpg"></div>\n \n     \n    </div>\n    '), HTML.SECTION({
    style: "margin-top:5em"                                                                                            // 6
  }, "\n                  ", HTML.DIV({                                                                                // 7
    "class": "container"                                                                                               // 8
  }, "\n        ", HTML.DIV({                                                                                          // 9
    "class": "row"                                                                                                     // 10
  }, "\n                    ", HTML.Raw('<div class="col s12 m6 l5 hide-on-small-only right">\n        \n        </div>'), "\n \n     ", HTML.DIV({
    "class": "col s12 m12 l6 center"                                                                                   // 12
  }, "\n          ", HTML.Raw('<h5 class="rale grey-text text-darken-3">Web &amp; Mobile Apps,    <b class="red-text text-lighten-1">into One</b></h5>'), "\n         ", HTML.Raw('<div class="divider red lighten-1" style="margin:0 auto;width:40px"></div>'), "\n         ", HTML.Raw('<p class="flow-text ">In December of 2010, Samsung SDS predicted that a native container platform that can merge the intricacies of the web and the dynamics of mobile apps will bring about a new future in software engineering. This so called "hybrid apps" will bring ideas across all platforms of all devices; breaking down  walls for ideas to permeate into the marketspace. The good news is: We offer it right here at illume Inc. Experience the best of both worlds   and spark your ideas to life.</p>'), "\n         ", HTML.Raw("<br>"), "\n             ", HTML.DIV({
    "class": "center"                                                                                                  // 14
  }, "\n                  ", HTML.A({                                                                                  // 15
    href: function() {                                                                                                 // 16
      return Spacebars.mustache(view.lookup("pathFor"), "hybrid");                                                     // 17
    },                                                                                                                 // 18
    "class": "button outline"                                                                                          // 19
  }, "LEARN MORE ON HYBRID APPS"), "\n\n                "), "\n            "), "\n                ", HTML.Raw('<div class="col s12 m12 l6  center">\n        \n     \n        <h5 class="rale grey-text text-darken-3">Secret weapon, <b class="red-text text-lighten-1">METEOR JS</b></h5>\n        <div class="divider red lighten-1" style="margin:0 auto;width:40px"></div>\n        <p class="flow-text ">We cut out the silos and cookie-cutter solutions because we know they will ultimately fail. We are eager to find out what makes your business tick so we can build you a custom high-end website that works for you. <br>Meteor is a Node.JS platform that offers robust flexibility in creating beautiful and powerful applications. We are proud to be part of a growing community of engineers willing to embrace the web-revolution that is about to come. Don\'t wait.</p>\n        <br>\n       <div class="center">\n                  <a href="https://www.meteor.com" class="button outline">DISCOVER METEOR</a>\n\n                </div>\n        </div>'), "\n        "), "\n    "), "\n              "), HTML.Raw('\n                        <div class="row" style="margin-top:2em;">\n                        <div class="container">\n                               <div class="col s12 m12 l6">\n        <div class="card-panel grey lighten-5 z-depth-1">\n          <div class="row valign-wrapper">\n     \n            <div class="col s12">\n             <p class="leadDev rale red-text">이동섭<br> <span class="black-text">CFO</span></p>\n                <p class="rale"><i> 미티어는 클라이언트와 서버  양쪽의 환경사이에서 코드(자바스크립트)를 공유할 수 있습니다. 그 결과 미티어는 웹 개발 과정의 많은 일상적인 귀찮고 어려운 일들을 간결하게 함으로써 웹개발의 새로운 장을 열었습니다. 이제 더이상 수학 공식에 대입하듯 만드는 웹사이트 제작을 지양하고, 나만의 개성있는 웹사이트 제작을 지향하겠습니다. 여러분의 든든한 사업 파트너가 되겠습니다.\n감사합니다.\n                </i></p>\n            </div>\n          </div>\n          </div>           \n \n      </div>\n                                                  <div class="col s12 m12 l6">\n        <div class="card-panel grey lighten-5 z-depth-1">\n          <div class="row valign-wrapper">\n     \n            <div class="col s12">\n             <p class="leadDev rale red-text">JOE LEE<br> <span class="black-text">LEAD DEVELOPER &amp;  FOUNDER</span></p>\n                <p class="rale"><i> We believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination. We strive to maintain constant communication between you and our team to ensure the optimal health of your product for your business. Thanks for choosing illume Inc. \n                </i></p>\n            </div>\n          </div>\n          </div>           \n \n      </div>\n                            </div>    \n                </div>  \n                          '), HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 21
  }, "\n                ", HTML.DIV({                                                                                  // 22
    "class": "row"                                                                                                     // 23
  }, "\n        ", HTML.DIV({                                                                                          // 24
    "class": "container"                                                                                               // 25
  }, "\n        ", HTML.DIV({                                                                                          // 26
    "class": "col s12 m12 l12"                                                                                         // 27
  }, "\n            ", HTML.Raw('<h1 class="mont center homeWhat">READY, SET, GO.</h1>'), "\n            ", HTML.Raw('<div class="divider blue lighten-1"></div>'), "\n      \n             ", HTML.Raw('<h3 class="center muli grey-text text-darken-3">What are you waiting for?</h3>'), "\n             ", HTML.DIV({
    "class": "center"                                                                                                  // 29
  }, "\n                  ", HTML.A({                                                                                  // 30
    href: function() {                                                                                                 // 31
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 32
    },                                                                                                                 // 33
    "class": "button outline"                                                                                          // 34
  }, "GET STARTED WITH ILLUME INC."), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 36
                                                                                                                       // 37
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
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), HTML.Raw('\n    <section style="margin-top:3.2em">\n    <div class="container">\n        <div class="row">\n    <div class="col s12 m6 l6">\n        \n         \n        <h4 class="rale grey-text text-darken-3"><b class="mont red-text text-lighten-1">Success Doesn\'t Come Easy.    </b> It is a Combination of A,B, and C.</h4>\n        <br>\n        <p class="flow-text  grey-text text-darken-3">\n             \nBuilding success is not for the feint of heart. It is for people who work tirelessly towards their goal. That is our philosophy here. We strive in providing you with the best of our abilities.\n            Our purpose is to be <b>aware</b> to your needs and to be <b>bold to the challenge</b>. We do this in order to <b>create success</b> along with you.\n<br>\nWhen you work with Illume Inc, you are working with a new breed of engineers and designers. We are the next step in the web space. We know what comes next, how to get there, and what must be done to proceed.\n            </p>\n          \n    \n             \n        </div>\n        <div class="col s12 m6 l5 offset-l1 hide-on-small-only">\n        <div class="center" style="margin-top:3em">\n            <img src="/img/approach.png" height="550" class="shake wow">\n            <p><i class="fa fa-quote-left fa-2x red-text text-lighten-1 center"></i></p>\n            <p class="muli">Our purpose is to be aware of your needs and to be bold to the challenge. We do this in order to create success along with you. </p>\n            <p><i class="fa fa-quote-right fa-2x red-text text-lighten-1 center"></i></p>\n            </div>\n        </div>\n        </div>\n    </div>\n    </section>\n           \n    \n        <div class="parallax-container" style="height:270px;margin-top:4em">\n      <div class="parallax" style="background:#0f0f0f"><img src="/img/header.jpg"></div>\n <div class="container" style="margin-top:3em;">\n                  <div class="center">\n            <i class="fa fa-cubes fa-4x white-text"></i>\n\n            <h3 class="grey-text text-lighten-3 muli">DEV<span class="hide-on-small-only">ELOPMENT</span> ROADMAP</h3>\n    </div>\n            </div>\n     \n    </div>\n        '), HTML.SECTION({
    style: "margin-top:4em"                                                                                            // 6
  }, "\n        ", HTML.DIV({                                                                                          // 7
    "class": "container"                                                                                               // 8
  }, "\n            ", HTML.DIV({                                                                                      // 9
    id: "timeline"                                                                                                     // 10
  }, "\n    ", HTML.Raw('<div class="timeline-item  ">\n      <div class="timeline-icon ">\n \n\n      </div>\n      <div class="timeline-content wow zoomIn">\n        <h3 class="mont amber ">The Initial Contact</h3>\n<div class="center" style="padding:1em">\n          <img src="/img/brain.svg" width="75">\n          </div>\n          <p style="margin-top:-.15em">\n        Once we get in touch, we will be discussing our services in detail to you. During this stage, we will be brainstorming together to build a viable, yet powerful solution to your website needs.\n        </p>\n         \n      </div>\n    </div>'), "\n  ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content right wow zoomIn">\n       <h3 class="mont green lighten-1">Commence Project!</h3>\n \n          <p style="margin-top:-.15em">\n        Once you have agreed to our service terms and went over our proposed roadmap, we will begin the development process right away.\n        </p>\n      \n      </div>\n    </div>'), "\n   \n\n    ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content wow zoomIn">\n      <h3 class="mont red lighten-1">Maybe Next Time!</h3>\n        <p>\n        Aww. It is a shame to see you go. But don\'t worry. If we offered advice over the phone; that is free of charge. Also if you change your mind you know where to find us.\n        </p>\n      \n      </div>\n    </div>'), "\n                  ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content wow zoomIn">\n       <h3 class="mont green lighten-1">Even more collaboration</h3>\n            \n          <p style="margin-top:-.15em">\n     Once our development phase reaches a formidable point, we will be coming back to you with results, updates, and opportunities to collaborate once more to prepare for the final stretch. \n        </p>\n         \n      </div>\n    </div>'), "\n                  ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content right">\n       <h3 class="mont amber">Stall in Project</h3>\n        <p>\n          There are many reasons a project can be stalled. We do our bests to circumnavigate around these issues, but sometimes the problem can be out of our hands. We will be contacting you thoroughly to get any issues resolved.\n        </p>\n         \n      </div>\n    </div>'), "\n                         ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n   \n      </div>\n      <div class="timeline-content wow zoomIn">\n       <h3 class="mont amber ">Change Course</h3>\n        <p>\n         If a project stalls, sometimes you the client might want to change course (maybe due to budget constraints, time variables, etc.) we will do our best to accommodate any changes to our project timeline. But many times a project stalls due to lack of contents being provided, and budgetary issues with our accounts.\n        </p>\n         \n      </div>\n    </div>'), "\n                         ", HTML.DIV({
    "class": "timeline-item"                                                                                           // 12
  }, "\n      ", HTML.Raw('<div class="timeline-icon">\n \n\n      </div>'), "\n      ", HTML.DIV({                    // 13
    "class": "timeline-content wow zoomIn"                                                                             // 14
  }, "\n       ", HTML.Raw('<h3 class="mont red lighten-1">Contract Ends</h3>'), "\n        ", HTML.P("\n          Sometimes businesses do not work out. We do our best to avoid these scenarios as much as possible since we would like to think we built our business relationship on trust. But the world sometimes does not work the way we want and we might have to part ways.", HTML.Raw("<br>"), "\n            If a project is cancelled, you can view our ", HTML.A({
    href: function() {                                                                                                 // 16
      return Spacebars.mustache(view.lookup("pathFor"), "policy");                                                     // 17
    }                                                                                                                  // 18
  }, "policies"), " to answer any questions you might have about cancellation.\n        "), "\n         \n      "), "\n    "), "\n                         ", HTML.Raw('<div class="timeline-item">\n      <div class="timeline-icon">\n \n\n      </div>\n      <div class="timeline-content right wow zoomIn">\n       <h3 class="mont green lighten-1">Success Imminent</h3>\n \n        <p>\n          Everything is smooth as butter. We are almost there. The finishing touch . We are almost finished with the development process and ready to deploy your product. This means that we have successfully collaborated together to create a true <b>MVP.</b>\n        </p>\n         \n      </div>\n    </div>'), "\n  "), "\n            "), "\n        "), "\n        ", HTML.SECTION({
    "class": "center"                                                                                                  // 20
  }, "\n            ", HTML.DIV({                                                                                      // 21
    "class": "container"                                                                                               // 22
  }, "\n                ", HTML.Raw('<div class="row">\n                    <div class="col s12 m12 l10 offset-l1">\n            <img src="/img/complete.png" class="responsive-img">\n            </div>\n                </div>'), "\n                ", HTML.DIV({
    "class": "row"                                                                                                     // 24
  }, "\n                ", HTML.DIV({                                                                                  // 25
    "class": "center"                                                                                                  // 26
  }, "\n                     ", HTML.DIV({                                                                             // 27
    "class": "col s12 m12 l10 offset-l1"                                                                               // 28
  }, "\n                    ", HTML.Raw('<h1 class="mont homeWhat">THERE YOU GO</h1>'), "\n                          ", HTML.Raw('<div class="divider green lighten-1"></div>'), "\n                         ", HTML.Raw('<h3 class="rale center">Sold? Let\'s begin a great success story together.</h3>'), "\n             ", HTML.DIV({
    "class": "center"                                                                                                  // 30
  }, "\n                  ", HTML.A({                                                                                  // 31
    href: function() {                                                                                                 // 32
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 33
    },                                                                                                                 // 34
    "class": "button outline"                                                                                          // 35
  }, "GET STARTED NOW"), "\n\n                "), "\n                    "), "\n                    "), "\n                "), "\n            "), "\n            \n        \n        ") ];
}));                                                                                                                   // 37
                                                                                                                       // 38
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
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "container wow fadeInDown"                                                                                // 8
  }, "\n ", HTML.DIV({                                                                                                 // 9
    "class": "center",                                                                                                 // 10
    style: "margin-top:3.4em;"                                                                                         // 11
  }, "\n     ", HTML.Raw('<h3 class="white-text opensan">CREATING POWERFUL<br><span class="mont">APP<span class="hide-on-small-only">LICATION</span>S FOR WEB &amp; MOBILE</span></h3>'), "\n     ", HTML.SPAN({
    "class": "opensan white-text flow-text"                                                                            // 13
  }, Blaze.View("lookup:_", function() {                                                                               // 14
    return Spacebars.mustache(view.lookup("_"), "made");                                                               // 15
  }), " ", HTML.Raw('<i class="fa fa-heart red-text"></i>')), "\n"), "\n    "), "\n  ", HTML.DIV({                     // 16
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
  }, "\n	.st0{fill:#EFEFEF;}\n	.st1{fill:#E3E4E5;}\n	.st2{fill:#3b5264;}\n	.st3{opacity:0.5;fill:#9E9E9E;}\n	.st4{fill:#5C5E60;}\n	.st5{fill:#404244;}\n	.st6{fill:#EBECED;}\n	.st7{fill:#FFFFFF;}\n	.st8{fill:#3C2415;}\n	.st9{fill:#432818;}\n	.st10{fill:#563726;}\n	.st11{fill:#FCFCFC;}\n	.st12{opacity:0.5;fill:#FCFCFC;}\n	.st13{fill:none;stroke:#EBECED;stroke-width:5;stroke-miterlimit:10;}\n	.st14{fill:#FEFEFE;}\n	.st15{fill:#EF7665;}\n	.st16{fill:#A4D9E4;}\n	.st17{fill:#B8C7CD;}\n	.st18{fill:#474A4E;}\n	.st19{fill:#65B6C1;}\n	.st20{fill:#F46C69;}\n	.st21{fill:#7C7F83;}\n	.st22{fill:#FFFFFE;}\n	.st23{fill:#F96759;}\n"), "\n \n", HTML.G({
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
  }), "\n		"), "\n	"), "\n"), "\n"), "\n  "), "\n"), HTML.Raw('\n\n<section style="padding:2em;margin-top:2em">\n<div class="container">\n\n</div>\n</section>\n    <section>\n    <div class="row">\n        <div class="container">\n        <div class="col s12 m12 l10 offset-l1">\n            <h4 class="  center  opensan">WHAT WE DO</h4>\n            <div class="divider red  lighten-1" style="margin:0 auto;width:120px"></div>\n            <p class="flow-text center"><b>illume Inc.</b> is a full business idea &amp; web product development workshop located in the heart of Santa Barbara, California. Weaving together branding, visual design, lean user interface experience, and information architecture, illume Inc. takes you through every phase of validating your idea and building an <b>MVP (Most Valued Product)</b>. You’ll finish with a data-driven product roadmap that outlines your path to successful launch all before a single line of code is written. Once that is done, we get to work.</p>\n             \n            </div>\n        </div>\n        </div>\n    </section>\n    <section class="iconset">\n    <div class="row">\n        <div class="col s12 m12 l4">\n        <div class="center">\n            <img src="/img/commandline.svg" height="120">\n            <h5 class="grey-text text-darken-2 rale"><b>Innovative Native Container</b></h5>\n            <p>We build with reactivity in mind <br> and utilize JavaScript <br> to its fullest</p>\n            </div>\n        </div>\n         <div class="col s12 m12 l4">\n        <div class="center">\n              <img src="/img/reactive.svg" height="120">\n             <h5 class="grey-text text-darken-2 rale"><b>Bridging Mobile &amp; Web</b></h5>\n             <p>Embracing the 21st century,<br>dynamic reactivity is now <br>in the palm of your hands.</p>\n             </div>\n        </div>\n         <div class="col s12 m12 l4">\n        <div class="center">\n              <img src="/img/dragndrop.svg" height="120">\n             <h5 class="grey-text text-darken-2 rale"><b>Tailored for You</b></h5>\n              <p>We create our products with <br> with YOU in mind <br> to create success</p>\n             </div>\n        </div>\n        </div>\n    </section>\n            '), HTML.SECTION({
    "class": "callToAction"                                                                                            // 694
  }, "\n                ", HTML.DIV({                                                                                  // 695
    "class": "center"                                                                                                  // 696
  }, "\n                     ", HTML.A({                                                                               // 697
    href: function() {                                                                                                 // 698
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 699
    },                                                                                                                 // 700
    "class": "button outline"                                                                                          // 701
  }, "LEARN MORE ABOUT ILLUME INC."), "\n\n                "), "\n            \n            "), "\n                       ", HTML.SECTION({
    "class": "butGof",                                                                                                 // 703
    style: "margin-top:5em"                                                                                            // 704
  }, "\n    ", HTML.Raw('<div class="row">\n        <div class="container">\n        <div class="col s12 m12 l10 offset-l1">\n            <h4 class="  center  opensan">SOME OF OUR WORK</h4>\n             <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n  <p class="flow-text center">All of our websites and hybrid applications are based on Meteor. <br>They are all fast, sleek, and ready to make a change in their respective industries.</p>\n            \n                \n             \n            </div>\n        </div>\n                              </div>'), "\n                              ", HTML.Raw('<div class="row">\n                              <div class="col s12 m4 l4">\n                                                    <div class="card">\n            <div class="card-image">\n              <img src="/img/cdp.png">\n              \n            </div>\n           \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.vitalmetrics-cdp.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                 \n                                  </div>\n                                                <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/jesuslove.png">\n              \n            </div>\n            \n            \n          </div>\n     \n                                            \n                                  </div>\n                        \n                                       <div class="col s12 m4 l4">\n                                  <div class="card">\n            <div class="card-image">\n              <img src="/img/sfmvdm.png">\n              \n            </div>\n            \n            \n          </div>\n           <div class="center" style="margin-top:-2.7em;">\n  <a href="http://www.sfmvdm.com" target="_blank" class="btn-floating btn-large waves-effect waves-light red darken-2"><i class="material-icons">link</i></a>\n\n          </div>\n                                            \n                                  </div>\n                              </div>'), "\n                   ", HTML.DIV({
    "class": "center"                                                                                                  // 706
  }, "\n                  ", HTML.A({                                                                                  // 707
    href: function() {                                                                                                 // 708
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 709
    },                                                                                                                 // 710
    "class": "button outline"                                                                                          // 711
  }, "VIEW MORE"), "\n\n                "), "\n            "), HTML.Raw('\n              <section class="butGof" style="margin-top:5em">\n    <div class="row">\n        <div class="container">\n        <div class="col s12 m12 l10 offset-l1">\n            <h4 class="  center  opensan">HOW WE WORK</h4>\n                <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n             \n            </div>\n        </div>\n        <div class="row "> \n        <div class="container">\n            <div class="col s12 m12 l6">\n            <h3 style="margin-top:1em;" class="grey-text text-darken-3 mont">Made with <i class="fa fa-heart red-text"></i></h3>\n                <p class="flow-text grey-text text-darken-2"> \n                  Instead of just handing over a set of deliverables, we work with you to achieve the results you want. We’ll test your idea in the marketplace, gather real data, and discover the key benefits of your concept, then we’ll create stunning visuals and a comprehensive backlog to serve as an investor-ready MVP. Setting this foundation means you’re not just walking away with a roadmap to a product – <span class="red-text text-lighten-1">  you’re walking away with the peace of mind that your product is what people want.</span>\n\n</p>\n <br>\n     \n            </div>\n            <div class="col s12 m12 l6 hide-on-small-only">\n                <div class="Wrapper">\n            <img style="margin-top:5em;" src="/img/implementation.gif" class="butGIf">\n                </div>\n            </div>\n            </div>\n        </div>\n        </div>\n    </section>\n                \n            \n            '), HTML.SECTION({
    style: "margin-top:8em;padding:1.6em;margin-bottom:-1.4em;"                                                        // 713
  }, "\n                ", HTML.DIV({                                                                                  // 714
    "class": "row"                                                                                                     // 715
  }, "\n        ", HTML.DIV({                                                                                          // 716
    "class": "container"                                                                                               // 717
  }, "\n        ", HTML.DIV({                                                                                          // 718
    "class": "col s12 m12 l12"                                                                                         // 719
  }, "\n            ", HTML.Raw('<h1 class="mont center homeWhat">ARE YOU GAME?</h1>'), "\n            ", HTML.Raw('<div class="divider red lighten-1"></div>'), "\n      \n             ", HTML.Raw('<h3 class="center muli grey-text text-darken-3">We would love to hear more.</h3>'), "\n                ", HTML.DIV({
    "class": "center"                                                                                                  // 721
  }, "\n                  ", HTML.A({                                                                                  // 722
    href: function() {                                                                                                 // 723
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 724
    },                                                                                                                 // 725
    "class": "button outline"                                                                                          // 726
  }, "GET STARTED WITH ILLUME INC."), "\n\n                "), "\n            "), "\n        "), "\n                              "), "\n            ") ];
}));                                                                                                                   // 728
                                                                                                                       // 729
Template.__checkName("fixedHeader");                                                                                   // 730
Template["fixedHeader"] = new Template("Template.fixedHeader", (function() {                                           // 731
  var view = this;                                                                                                     // 732
  return HTML.NAV({                                                                                                    // 733
    "class": "white"                                                                                                   // 734
  }, "\n     \n    ", HTML.DIV({                                                                                       // 735
    "class": "nav-wrapper"                                                                                             // 736
  }, "\n        ", HTML.DIV({                                                                                          // 737
    "class": ""                                                                                                        // 738
  }, "\n        ", HTML.Raw('<div class="brand-logo brand-logos">\n            <a href="/" class=" aspergit red-text text-lighten-1"><b>illume </b></a>\n            </div>'), "\n            \n         \n           \n         \n             ", HTML.Raw('<a href="#" data-activates="slide-out2" class="button-collapse grey-text"><i class="material-icons">reorder</i></a>'), "\n      \n      ", HTML.UL({
    id: "nav-mobiles",                                                                                                 // 740
    "class": "hide-on-med-and-down"                                                                                    // 741
  }, "\n        ", HTML.LI({                                                                                           // 742
    "class": "muli"                                                                                                    // 743
  }, HTML.A({                                                                                                          // 744
    href: function() {                                                                                                 // 745
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 746
    },                                                                                                                 // 747
    "class": "grey-text text-darken-3 "                                                                                // 748
  }, "ABOUT")), "\n        ", HTML.LI({                                                                                // 749
    "class": "muli"                                                                                                    // 750
  }, HTML.A({                                                                                                          // 751
    href: function() {                                                                                                 // 752
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 753
    },                                                                                                                 // 754
    "class": "grey-text text-darken-3 "                                                                                // 755
  }, "HOW WE WORK")), "\n        ", HTML.LI({                                                                          // 756
    "class": "muli"                                                                                                    // 757
  }, HTML.A({                                                                                                          // 758
    href: function() {                                                                                                 // 759
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 760
    },                                                                                                                 // 761
    "class": "grey-text text-darken-3"                                                                                 // 762
  }, "OUR SERVICES")), "\n                ", HTML.LI({                                                                 // 763
    "class": "muli"                                                                                                    // 764
  }, HTML.A({                                                                                                          // 765
    href: function() {                                                                                                 // 766
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 767
    },                                                                                                                 // 768
    "class": "grey-text text-darken-3"                                                                                 // 769
  }, "PORTFOLIO")), "\n           ", HTML.LI({                                                                         // 770
    "class": "muli"                                                                                                    // 771
  }, HTML.A({                                                                                                          // 772
    href: function() {                                                                                                 // 773
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 774
    },                                                                                                                 // 775
    "class": "grey-text text-darken-3"                                                                                 // 776
  }, "REACH US")), "\n        \n      "), "\n        ", HTML.Raw('<ul class="right hide-on-med-and-down">\n             <li><a class="grey-text center" href="https://www.facebook.com/illume-Inc-890931797668666/timeline/?ref=bookmarks"><i class="fa fa-facebook fa-2x"></i></a></li>\n                         <li class="divider"></li>\n    <li><a class="center grey-text" href="https://instagram.com/illumeinc/"><i class="fa fa-instagram fa-2x"></i></a></li>\n            </ul>'), "\n       \n    "), "\n      "), "\n        \n \n \n  ", HTML.UL({
    id: "slide-out2",                                                                                                  // 778
    "class": "side-nav center"                                                                                         // 779
  }, "\n         ", HTML.DIV({                                                                                         // 780
    "class": "center"                                                                                                  // 781
  }, "\n            \n             \n     ", HTML.LI({                                                                 // 782
    "class": "muli",                                                                                                   // 783
    style: "margin-top:1em;"                                                                                           // 784
  }, HTML.A({                                                                                                          // 785
    href: function() {                                                                                                 // 786
      return Spacebars.mustache(view.lookup("pathFor"), "about");                                                      // 787
    }                                                                                                                  // 788
  }, "ABOUT US")), "\n        ", HTML.LI({                                                                             // 789
    "class": "muli"                                                                                                    // 790
  }, HTML.A({                                                                                                          // 791
    href: function() {                                                                                                 // 792
      return Spacebars.mustache(view.lookup("pathFor"), "approach");                                                   // 793
    }                                                                                                                  // 794
  }, "HOW WE WORK")), "\n        ", HTML.LI({                                                                          // 795
    "class": "muli"                                                                                                    // 796
  }, HTML.A({                                                                                                          // 797
    href: function() {                                                                                                 // 798
      return Spacebars.mustache(view.lookup("pathFor"), "service");                                                    // 799
    }                                                                                                                  // 800
  }, "OUR SERVICES")), "\n             ", HTML.LI({                                                                    // 801
    "class": "muli"                                                                                                    // 802
  }, HTML.A({                                                                                                          // 803
    href: function() {                                                                                                 // 804
      return Spacebars.mustache(view.lookup("pathFor"), "portfolio");                                                  // 805
    }                                                                                                                  // 806
  }, "PORTFOLIO")), "\n           ", HTML.LI({                                                                         // 807
    "class": "muli"                                                                                                    // 808
  }, HTML.A({                                                                                                          // 809
    href: function() {                                                                                                 // 810
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 811
    }                                                                                                                  // 812
  }, "REACH US")), "\n        "), "\n "), "\n \n          ");                                                          // 813
}));                                                                                                                   // 814
                                                                                                                       // 815
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
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), HTML.Raw('\n <div class="center">\n<h2><b>WHAT IS A HYBRID APP?</b></h2>\n </div>\n <div class="divider red lighten-1" style="margin:0 auto;width:120px"></div>\n    <div class="container">\n        <br>\n        <div class="wow fadeIn">\n    <img src="/img/logo2.png" width="100%">\n        </div>\n     <br>\n        <p class="flow-text"> \n        Screens are small, apps are big, and life as we know it is on its head again. In a world that\'s increasingly social and open, mobile apps play a vital role, and have changed the focus from what\'s on the Web, to the apps on our mobile device. Mobile apps are no longer an option, they\'re an imperative. You need a mobile app, but where do you start? There are many factors that play a part in your mobile strategy, such as your team’s development skills, required device functionality, the importance of security, offline capability, interoperability, etc., that must be taken into account. In the end, it’s not just a question of what your app will do, but how you’ll get it there.\n        <br>\n        <br>\n        <b class="red-text text-lighten-1">Hybrid development</b> combines the best (or worst) of both the native and HTML5 worlds. We define hybrid as a web app, primarily built using HTML5 and JavaScript, that is then wrapped inside a thin native container that provides access to native platform features. PhoneGap is an example of the most popular container for creating hybrid mobile apps.\nFor the most part, hybrid apps provide the best of both worlds. Existing web developers that have become gurus at optimizing JavaScript, pushing CSS to create beautiful layouts, and writing compliant HTML code that works on any platform can now create sophisticated mobile applications that don’t sacrifice the cool native capabilities. \n\n<br>\n<br>\nAt the end of the day, it doesn\'t matter how an app or site got up there but what matters is under the hood. Our web and mobile apps are powered by Meteor, an innovative platform built on the backs of Node.js and furthering our imagination with Javascript. Since we pipeline the client and the server side with one single language - the potential for your ideas becomes limitless. \n  </p>\n    </div>\n                '), HTML.DIV({
    "class": "row callToAction"                                                                                        // 6
  }, "\n            ", HTML.DIV({                                                                                      // 7
    "class": "container"                                                                                               // 8
  }, "\n                ", HTML.DIV({                                                                                  // 9
    "class": "col s12 m10 l10 offset-l1 offset-m1"                                                                     // 10
  }, "\n                ", HTML.Raw('<h4 class=" center rale grey-text text-darken-3">\n                    Got questions about our services? Not a problem. <br>Give us a call or shoot us an email. We will get back to you in a jiffy.\n                    \n                    </h4>'), "\n                  ", HTML.DIV({
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
  return [ Spacebars.include(view.lookupTemplate("fixedHeader")), HTML.Raw('\n    <section style="margin-top:3.2em">\n    <div class="container">\n        <div class="row">\n    <div class="col s12 m10 l8 offset-m1 offset-l2 center">\n        \n         \n        <h4 class="mont grey-text text-darken-3 ">Empowering your website with <b class="red-text text-lighten-1 mont">reactivity</b> and unparalleled performance.</h4>\n        <br>\n        <p class="flow-text grey-text text-darken-3 ">\n            Meteor gives us developers a radically simpler way to build realtime web apps, entirely in JavaScript from one code base. We are able to leverage Javascript like never before and provide you with blazing reactivity in your web application\'s core.\n            <br>\n         Because the same code runs from the client to the cloud, from packages to database APIs, we are not restricted to our weakest link but can be judged based on our strongest one.\n            </p>\n\n        </div>\n   \n        </div>\n    </div>\n    </section>\n        <div class="divider"></div>\n        <section class="callToAction" style="margin-bottom:2em">\n        <div class="row">\n            <div class="container">\n            <div class="col s12 m6 l6">\n                <div class="center">\n                <img src="/img/meteors.png" class="responsive-img wow fadeInLeft">\n                </div>\n                </div>\n                     <div class="col s12 m6 l6">\n                         <h4 class="  red-text text-lighten-1">Simple, Sleek, yet Powerful</h4>\n                         <p class="flow-text grey-text text-darken-3">We develop with Meteor to create robust, realtime websites and web applications that are as beautiful as they are powerful. As sleek as they are practical.</p>\n                         \n                </div>\n            </div>\n            </div>\n        </section>\n           \n           \n        <div class="divider" style="margin-top:6em;"></div>\n        '), HTML.SECTION({
    "class": "callToAction"                                                                                            // 6
  }, "\n        ", HTML.Raw('<div class="container">\n      <div class="center">\n          <h4 class="rale grey-text text-darken-3">Our More <span class="red-text text-lighten-1">Popular Services</span></h4>\n            </div>\n            </div>'), "\n            ", HTML.Raw('<div class="row callToAction">\n            <div class="container">\n                <div class="col s12 m12 l4">\n                <div class="pricing animated swing">\n  <div class="thumbnail animated pulse infinite">\n    <div class="fa fa-globe"></div>\n  </div>\n  <div class="title rale">\n   WEBSITE PACKAGE\n  </div>\n  <div class="content mont">\n    \n    <ul>\n      <li>\n        <div class="fa fa-check"></div>\n       Unlimited number of pages\n      </li>\n  \n      <li>\n        <div class="fa fa-check"></div>\n        Google search indexing provided\n      </li>\n             <li>\n        <div class="fa fa-check"></div>\n        Mobile responsive on demand\n      </li>\n          <li>\n        <div class="fa fa-check"></div>\n        Unparalleled speed and reactivity \n      </li>\n      <li>\n        <div class="fa fa-check"></div>\n        CMS is optional\n      </li>\n      <li>\n        <div class="fa fa-check"></div>\n        Logo service \n      </li>\n  \n    </ul>\n \n  </div>\n \n</div>\n                </div>\n                 <div class="col s12 m12 l4">\n                 <div class="pricing animated swing" style="background:#d33e3e;">\n  <div class="thumbnail animated pulse infinite">\n    <div class="fa fa-cart-plus"></div>\n  </div>\n  <div class="titl rale" style="background:#21313b">\n  ECOMMERCE SOLUTION\n  </div>\n  <div class="contents mont">\n     \n    <ul>\n          <li>\n        <div class="fa fa-check"></div>\n       Unlimited number of pages\n      </li>\n      <li>\n        <div class="fa fa-check"></div>\n        Mobile responsive by default\n      </li>\n      <li>\n        <div class="fa fa-check"></div>\n        Google search indexing provided\n      </li>\n          <li>\n        <div class="fa fa-check"></div>\n        Advanced SEO\n      </li>\n      <li>\n        <div class="fa fa-check"></div>\n        Store management system \n      </li>\n        <li>\n        <div class="fa fa-check"></div>\n        Order management system  \n      </li>\n          <li>\n        <div class="fa fa-check"></div>\n        Stripe and Paypal Gateway available \n      </li>\n              <li>\n        <div class="fa fa-close"></div>\n        No logo service \n      </li>\n    </ul>\n \n  </div>\n \n</div>\n                </div>\n                 <div class="col s12 m12 l4">\n                <div class="pricing animated swing" style="background:#d33e3e;">\n  <div class="thumbnail animated pulse infinite">\n    <div class="fa fa-edit"></div>\n  </div>\n  <div class="titles rale" style="background:#21313b;">\n    LOGO PACKAGE\n  </div>\n  <div class="mont contentsss">\n \n    <ul>\n      <li>\n        <div class="fa fa-check"></div>\n      Provides all necessary formats\n      </li>\n      <li>\n        <div class="fa fa-check"></div>\n      Professionally designed and crafted\n      </li>\n      <li>\n        <div class="fa fa-check"></div>\n        Maximum 2 week span\n      </li>\n      <li>\n        <div class="fa fa-close"></div>\n        No estimate available on request\n      </li>\n \n      <li>\n        <div class="fa fa-close"></div>\n        No Yearly Fees\n      </li>\n    </ul>\n     \n  </div>\n \n</div>\n                </div>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "row callToAction"                                                                                        // 8
  }, "\n            ", HTML.DIV({                                                                                      // 9
    "class": "container"                                                                                               // 10
  }, "\n                ", HTML.DIV({                                                                                  // 11
    "class": "col s12 m10 l10 offset-l1 offset-m1"                                                                     // 12
  }, "\n                ", HTML.Raw('<h4 class=" center muli grey-text text-darken-3">\n                    Got questions about our services? Not a problem. <br>Give us a call or shoot us an email. We will get back to you in a jiffy.\n                    \n                    </h4>'), "\n                  ", HTML.DIV({
    "class": "center"                                                                                                  // 14
  }, "\n                  ", HTML.A({                                                                                  // 15
    href: function() {                                                                                                 // 16
      return Spacebars.mustache(view.lookup("pathFor"), "applications");                                               // 17
    },                                                                                                                 // 18
    "class": "button outline"                                                                                          // 19
  }, "GET STARTED NOW"), "\n\n                "), "\n                "), "\n                "), "\n            "), "\n        ") ];
}));                                                                                                                   // 21
                                                                                                                       // 22
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

}}}},"backend":{"template.backend.js":function(){

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
      content: 'illume Inc. is a full business idea & web/app product development workshop located in the heart of Santa Barbara, California. From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites and apps.'
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
  title: 'Illume Inc. Web Design and Development',                                                                     //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.illumeweb.com/'                                                                             //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Router.route('about', {                                                                                                // 55
  template: 'about',                                                                                                   //
  path: '/about-illumeinc',                                                                                            //
  title: 'About Us',                                                                                                   //
  meta: {                                                                                                              //
    url: {                                                                                                             //
      property: 'og:url',                                                                                              //
      itemprop: 'url',                                                                                                 //
      content: 'http://www.illumeweb.com/about-illumeinc'                                                              //
    },                                                                                                                 //
    description: {                                                                                                     //
      name: 'description',                                                                                             //
      property: 'og:description',                                                                                      //
      content: 'From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites. '
    },                                                                                                                 //
    image: {                                                                                                           //
      itemprop: 'image',                                                                                               //
      property: 'og:image',                                                                                            //
      content: '/img/badge.png'                                                                                        //
    },                                                                                                                 //
    keywords: {                                                                                                        //
      name: 'keywords',                                                                                                //
      itemprop: 'keywords',                                                                                            //
      content: 'Santa Barbara, product vision, meteorjs, success, Node.JS, robust flexibility, creating success, high-end website',
      'og:type': 'website'                                                                                             //
    },                                                                                                                 //
    'og:title': function() {                                                                                           //
      return document.title;                                                                                           //
    },                                                                                                                 //
    'og:site_name': 'About Us'                                                                                         //
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

}},"i18n":{"en.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// i18n/en.i18n.json                                                                                                   //
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
translations[namespace] = {"hello":"hello","made":"Made with Javascript and"};                                         // 12
TAPi18n._loadLangFileObject("en", translations);                                                                       // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ko.i18n.json":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// i18n/ko.i18n.json                                                                                                   //
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
require("./backend/template.backend.js");
require("./backend/template.login.js");
require("./lib/config.js");
require("./lib/route.coffee.js");
require("./client/layout/appLayout/appLayout.js");
require("./client/layout/header/header.js");
require("./client/templates/about/about.js");
require("./client/templates/approach/approach.js");
require("./client/templates/home/home.js");
require("./client/templates/hybrid/hybrid.js");
require("./client/templates/portfolio/portfolio.js");
require("./client/templates/services/service.js");
require("./client/templates/work/application.js");
require("./backend/backend.js");
require("./backend/login.js");
require("./collections/schemas.js");
require("./controller/applicationcontroller.js");
require("./controller/ga.js");
require("./controller/mainController.js");
require("./i18n/en.i18n.json");
require("./i18n/ko.i18n.json");