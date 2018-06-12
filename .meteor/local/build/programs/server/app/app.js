var require = meteorInstall({"lib":{"config.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// lib/config.js                                                                                     //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Router.configure({                                                                                   // 1
	layoutTemplate: 'appLayout'                                                                         // 2
});                                                                                                  // 1
                                                                                                     //
Router.plugin('dataNotFound', { dataNotFoundTemplate: 'notFound' });                                 // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.coffee.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// lib/route.coffee.js                                                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Router.configure({                                                                                   // 1
  meta: {                                                                                            //
    charset: {                                                                                       //
      charset: 'UTF-8'                                                                               //
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      content: 'applications, mobile, web, javascript, illume inc., santa barbara, meteor, meteor.js, hybrid applications, web design, web development, mobile app development, web design santa barbara, web development santa barbara'
    },                                                                                               //
    description: {                                                                                   //
      name: 'description',                                                                           //
      content: 'My name is Joe and I am a developer, a designer, and a coffee addict. Working with you to make a powerful web application for you and your business.'
    },                                                                                               //
    image: {                                                                                         //
      property: 'og:image',                                                                          //
      content: '/img/badge.png'                                                                      //
    },                                                                                               //
    author: {                                                                                        //
      name: 'author',                                                                                //
      content: 'Joseph S. Lee'                                                                       //
    },                                                                                               //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      content: 'http://www.illumeweb.com'                                                            //
    },                                                                                               //
    'http-equiv': {                                                                                  //
      'http-equiv': 'X-UA-Compatible',                                                               //
      content: 'IE=edge,chrome=1'                                                                    //
    },                                                                                               //
    robots: 'index, follow',                                                                         //
    google: 'notranslate'                                                                            //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('home', {                                                                               // 44
  template: 'home',                                                                                  //
  path: '/',                                                                                         //
  title: 'Joseph Lee | Designer & Developer using Meteor.JS',                                        //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.j-lee.com/'                                                               //
    }                                                                                                //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('about', {                                                                              // 55
  template: 'about',                                                                                 //
  path: '/about-me',                                                                                 //
  title: 'About Me',                                                                                 //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/about-me'                                                   //
    },                                                                                               //
    description: {                                                                                   //
      name: 'description',                                                                           //
      property: 'og:description',                                                                    //
      content: 'I believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination.'
    },                                                                                               //
    image: {                                                                                         //
      itemprop: 'image',                                                                             //
      property: 'og:image',                                                                          //
      content: '/img/badge.png'                                                                      //
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      itemprop: 'keywords',                                                                          //
      content: 'web design, web development, freelance webdeveloper, coding, designer, developer',   //
      'og:type': 'website'                                                                           //
    },                                                                                               //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'About Me'                                                                       //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('service', {                                                                            // 82
  template: 'service',                                                                               //
  path: '/my-services',                                                                              //
  title: 'My Services',                                                                              //
  meta: {                                                                                            //
    description: {                                                                                   //
      name: 'description',                                                                           //
      itemprop: 'description',                                                                       //
      property: 'og:description',                                                                    //
      content: 'We ensure that the design benefits the function. We produce features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      itemprop: 'keywords',                                                                          //
      content: 'Santa Barbara, ecommerce site, Wordpress, Drupal, Mobile responsive,  speed, logo service, google search, seo, stripe, paypal, cms, web application, reactivity, javascript, meteor, meteor.js, web design santa barbara'
    },                                                                                               //
    image: {                                                                                         //
      itemprop: 'image',                                                                             //
      property: 'og:image',                                                                          //
      content: '/img/badge.png'                                                                      //
    },                                                                                               //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/what-we-do'                                                 //
    },                                                                                               //
    'og:type': 'website',                                                                            //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'Our Services'                                                                   //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('hybrid', {                                                                             // 110
  template: 'hybrid',                                                                                //
  path: '/about-hybrid-apps',                                                                        //
  title: 'About Hybrid Applications',                                                                //
  meta: {                                                                                            //
    description: {                                                                                   //
      name: 'description',                                                                           //
      itemprop: 'description',                                                                       //
      property: 'og:description',                                                                    //
      content: ' Hybrid development combines the best (or worst) of both the native and HTML5 worlds. We define hybrid as a web app, primarily built using HTML5 and JavaScript, that is then wrapped inside a thin native container that provides access to native platform features '
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      itemprop: 'keywords',                                                                          //
      content: 'screen, web, app, mobile, html5, hybrid app, javascript, native container, websites, mobile app, santa barbara websites'
    },                                                                                               //
    image: {                                                                                         //
      itemprop: 'image',                                                                             //
      property: 'og:image',                                                                          //
      content: '/img/badge.png'                                                                      //
    },                                                                                               //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/about-hybrid-app'                                           //
    },                                                                                               //
    'og:type': 'website',                                                                            //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'About Hybrid Apps'                                                              //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('portfolio', {                                                                          // 138
  template: 'portfolio',                                                                             //
  path: '/my-work',                                                                                  //
  title: 'My Portfolio',                                                                             //
  meta: {                                                                                            //
    description: {                                                                                   //
      name: 'description',                                                                           //
      itemprop: 'description',                                                                       //
      property: 'og:description',                                                                    //
      content: 'I ensure that the design benefits the function. We produce features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      itemprop: 'keywords',                                                                          //
      content: ' web, mobile, website, mobile app, meteor, meteor.js'                                //
    },                                                                                               //
    image: {                                                                                         //
      itemprop: 'image',                                                                             //
      property: 'og:image',                                                                          //
      content: '/img/badge.png'                                                                      //
    },                                                                                               //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/my-work'                                                    //
    },                                                                                               //
    'og:type': 'website',                                                                            //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'My Work'                                                                        //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('approach', {                                                                           // 166
  template: 'approach',                                                                              //
  path: '/how-we-work',                                                                              //
  title: 'How We Work',                                                                              //
  meta: {                                                                                            //
    description: {                                                                                   //
      name: 'description',                                                                           //
      itemprop: 'description',                                                                       //
      property: 'og:description',                                                                    //
      content: 'Building success is not for the feint of heart. It is for people who work tirelessly towards their goal. That is our philosophy here. We strive in providing you with the best of our abilities.'
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      itemprop: 'keywords',                                                                          //
      content: 'aware, bold, create, success, illume inc., web space, designer, development roadmap'
    },                                                                                               //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/how-we-work'                                                //
    },                                                                                               //
    'og:type': 'website',                                                                            //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'How We Work'                                                                    //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('lessons', {                                                                            // 190
  template: 'lessons',                                                                               //
  path: '/services/web-lessons',                                                                     //
  title: 'Web Lessons',                                                                              //
  meta: {                                                                                            //
    description: {                                                                                   //
      name: 'description',                                                                           //
      itemprop: 'description',                                                                       //
      property: 'og:description',                                                                    //
      content: ' .'                                                                                  //
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      itemprop: 'keywords',                                                                          //
      content: ' '                                                                                   //
    },                                                                                               //
    image: {                                                                                         //
      itemprop: 'image',                                                                             //
      property: 'og:image',                                                                          //
      content: '/img/reas.png'                                                                       //
    },                                                                                               //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/services/web-lessons'                                       //
    },                                                                                               //
    'og:type': 'website',                                                                            //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'Web Lessons'                                                                    //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('applications', {                                                                       // 218
  template: 'applications',                                                                          //
  layoutTemplate: 'appLayout',                                                                       //
  path: '/contact-me',                                                                               //
  title: 'Contact',                                                                                  //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: ' '                                                                                   //
    }                                                                                                //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('application', {                                                                        // 229
  template: 'application',                                                                           //
  path: '/backend',                                                                                  //
  layoutTemplate: 'loginLayout',                                                                     //
  controller: 'main2Controller',                                                                     //
  title: '',                                                                                         //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: ' '                                                                                   //
    }                                                                                                //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('rsvp', {                                                                               // 241
  template: 'rsvp',                                                                                  //
  controller: 'RsvpController',                                                                      //
  action: 'action',                                                                                  //
  where: 'client'                                                                                    //
});                                                                                                  //
                                                                                                     //
Router.route('login', {                                                                              // 246
  template: 'login',                                                                                 //
  layoutTemplate: 'loginLayout',                                                                     //
  path: '/login',                                                                                    //
  title: 'Login',                                                                                    //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: ' '                                                                                   //
    }                                                                                                //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('dashboards', {                                                                         // 256
  template: 'dashboards',                                                                            //
  layoutTemplate: 'loginLayout',                                                                     //
  controller: 'main2Controller',                                                                     //
  path: '/dashboard',                                                                                //
  title: 'Dashboard',                                                                                //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: ' '                                                                                   //
    }                                                                                                //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('register', {                                                                           // 267
  template: 'register',                                                                              //
  layoutTemplate: 'registerTemplate',                                                                //
  path: '/register',                                                                                 //
  title: 'Register',                                                                                 //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: ' '                                                                                   //
    }                                                                                                //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('policy', {                                                                             // 277
  template: 'policy',                                                                                //
  path: '/policies'                                                                                  //
});                                                                                                  //
                                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"both":{"i18n":{"en":{"about.en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/en/about.en.i18n.json                                                                   //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"aboutIllume":"A Santa Barbara, CA based group, or purpose is to help create or refine your product vision and aim your business towards success. From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites. One size does not fit all so we try our best to understand your current situation to build a comprehensive plan to bring additiional value to your idea.","webAndMobile":"Web & Mobile Apps, ","intoOne":"into One","secretWeapon":"Secret Weapon,","iValue":"I value simple content structure, clean design patterns, and thoughtful interactions.","iCode":"I love to code things from scratch, and enjoy bringing ideas to life in the browser.","moreMe":" I play videogames, read, but I mostly enjoy spending time with friends and family.","myTools":"My Tools:","thingsDesign":"Things I enjoy designing:","languageSpeak":"Languages I speak","thingsLike":"Things I enjoy:","coffeeAnd":"Coffee, videogames, coding, hanging out with loved ones, oh and also coffee.","occasionally":"Occasionally","meteor":"METEOR","learnMoreHybrid":"LEARN MORE ON HYBRID APPS","webDesc":"In December of 2010, Samsung SDS predicted that a native container platform that can merge the intricacies of the web and the dynamics of mobile apps will bring about a new future in software engineering. This so called 'hybrid apps' will bring ideas across all platforms of all devices; breaking down  walls for ideas to permeate into the marketspace. The good news is: We offer it right here at illume Inc. Experience the best of both worlds   and spark your ideas to life.","silos":"We cut out the silos and cookie-cutter solutions because we know they will ultimately fail. We are eager to find out what makes your business tick so we can build you a custom high-end website that works for you. Meteor is a Node.JS platform that offers robust flexibility in creating beautiful and powerful applications. We are proud to be part of a growing community of engineers willing to embrace the web-revolution that is about to come. Don't wait.","discoverMeteor":"DISCOVER METEOR","leeSang":"JOE LEE","leadDeveloper":"I believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination. I strive to maintain constant communication between you and our team to ensure the optimal health of your product for your business. Thanks for choosing to work with me.","aLittleAboutMeteor":"A little about Meteor.JS","readySetGo":"READY, SET, GO.","meteorJs":"Meteor.JS"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"contact.en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/en/contact.en.i18n.json                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"contactMe":"Contact me today!","startProject":"     Starting a project with me is easy. Just email, call, or text me 24/7. I will get back to you within minutes."};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/en/header.en.i18n.json                                                                  //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"about":"About me","howWeWork":"How I work","ourServices":"Services","portfolio":"My work","reachUs":"Reach me"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/en/home.en.i18n.json                                                                    //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"whatWeDo":"Hey, I'm Joe. Pleasure to meet you.","mission1":"Since beginning my journey as a freelance designer nearly 5 years ago, I've done remote work for businesses, consulted for startups, non-profit orgs, and collaborated with talented people to create digital products for both business and personal use. I'm quietly confident, naturally curious, and perpetually improving my chops.","koreaAdd":"","mission2":"You’ll finish with a data-driven product roadmap that outlines your path to successful launch all before a single line of code is written. Once that is done, we get to work.","innovative":"Innovative","bridging":"Bridging Mobile & Web","tailored":"Tailored For You","learnMore":"More about me","viewMore":"Want to see more?","roadTo":"Let's make you a","someOfOurWork":"SOME OF MY RECENT WORK","allOfOurWebsites":"All of the websites and hybrid applications are based on Meteor.","fastSleek":"They are all fast, sleek, and ready to make a change in their respective industries.","madeWith":"Made with ","madeWithK":"","weBuild":"Building with reactivity in mind","reactiveJavascript":"and utilizing JavaScript","fullest":"to its fullest","embrace":"Embracing the 21st century,","dynamicReactive":"dynamic reactivity is now ","21stC":"in the palm of your hands.","createProducts":"Creating the products with ","youInMind":"with YOU in mind ","createSuccess":"to create success.","insteadOf":"Instead of just handing over a set of deliverables, I work with you to achieve the results you want. We’ll test your ideas together in the marketplace, gather real data, and discover the key benefits of your concept, then create stunning visuals and a comprehensive backlog to serve as an investor-ready MVP. Setting this foundation means you’re not just walking away with a roadmap to a product","walkAway":"you’re walking away with the peace of mind that your product is what people want.","areYouGame":"ARE YOU GAME?","coffee":"First coffee is on me.","loveToHear":"Would love to hear more?","alwaysOpen":"I’m always open to discussing product design work or partnership opportunities.","getStarted":"Start a conversation"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"portfolio.en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/en/portfolio.en.i18n.json                                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"myWebsitesAre":"My websites are built with ","secondMyWeb":"","stateOfArt":"a state of the art native container - which increases reactivity and performance to a whole new level.","weMakeGraphics":"We make all of our graphics inhouse. Every single graphic work has been made with","aBitOf":"and a little bit of imagination."};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"service.en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/en/service.en.i18n.json                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"reactivity":"reactivity","collaborate":"Let's collaborate to give you a website with","unparalleled":"and unparalleled performance.","meteorFirst":"Meteor gives us developers a radically simpler way to build realtime web apps, entirely in JavaScript from one code base. We are able to leverage Javascript like never before and provide you with blazing reactivity in your web application's core. ","meteorSecond":"  Because the same code runs from the client to the cloud, from packages to database APIs, we are not restricted to our weakest link but can be judged based on our strongest one.","simpleSleek":"Simple, Sleek, yet Powerful","iDevelopWith":"I develop with Meteor to create robust, realtime websites and web applications that are as beautiful as they are powerful. As sleek as they are practical.","my":"My","service":"Services","gotQuestion":"Got questions about my services? Not a problem.","giveUsaCall":"Give me a call or shoot an email. I will get back to you in a jiffy.","websitePackage":"Website Package","ecommerce":"Ecommerce Package","logo":"Logo Package","myServices":"I create, design, and develop websites and web applications for you and your business. Let me know what you need specifically and I am sure I can be of help to you and your team."};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"success.en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/en/success.en.i18n.json                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
// integrate the fallback language translations 
translations = {};
translations[namespace] = {"successDoesnt":"Success Doesn't Come Easy.  ","combinationOf":"It is a Combination of A,B, and C."};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ko":{"about.ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/ko/about.ko.i18n.json                                                                   //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"aboutIllume":"저희 목표는 간단합니다. 당신의 비즈니스 아이디어를 성공의 길을 걷게끔 도와드리는겁니다. 연구에서 해결방안까지, 성공하기 힘든 경쟁에서 저희 웹사이트로 성공할 수 있도록 끝까지 노력하는 것이 일룸의 미션입니다. 당신의 상황에 맞는 해결방안을 제시하면서 경쟁자들과 승부할 수 있는 비밀병기를 만들 수 있도록 저희 일룸이 도와드리겠습니다.","webAndMobile":"웹과 모바일을, ","intoOne":"하나로","secretWeapon":"비밀병기,","iValue":"단순한 콘텐츠 구조, 깨끗한 디자인 패턴 및 사려 깊은 상호 작용을 중시합니다.","iCode":"처음부터 끝까지 코딩하고 브라우저에다 다양한 아이디어를 현실로 만드는 것을 즐깁니다.","moreMe":"게임도 하고, 책도 읽지만, 사랑하는 사람들이랑 시간 보내는 것이 제일 좋습니다.","thingsDesign":"디자인하는 것들은:","languageSpeak":"사용할 줄 아는 프로그램잉 언어:","thingsLike":"제가 좋아하는 것들:","myTools":"제가 쓰는 도구들:","meteor":"미티어","coffeeAnd":"커피, 컴퓨터 게임, 코딩, 친구들이랑 놀기, 아 그리고 커피 ","occasionally":"가끔 사용","learnMoreHybrid":"하이브리드 어플의 대해서 더 알아보기","webDesc":"삼성 SDS는 2010년 12월, 웹의 다양성과 모바일 앱의 역학을 융합 할 수있는 네이티브 컨테이너 플랫폼이 소프트웨어 엔지니어링의 새로운 미래를 가져올 것이라고 예측했습니다. 이른바 '하이브리드 앱'은 모든 기기의 모든 플랫폼에서 아이디어를 가져옵니다. 시장을 침투하기위한 벽을 무너 뜨리며 새로운 혁신을 가져올 수 있는 기회라고 기대했습니다. 희소식은 illume Inc.에서 바로 그 하이브리드 앱을 제공하는 것입니다.이 두 가지 장점을 모두 경험하고 아이디어를 통해 활력이 있는 어플을 만들어 봅시다.","silos":"우리는 궁극적으로 실패 할 것이라는 것을 알고 있기 때문에 필요하지 않은 모든 부분들을 잘라 냈습니다. 우리는 귀하의 비즈니스를 진실하게 만드는 요소를 찾으려고 노력하므로 귀하에게 적합한 맞춤형 하이엔드 웹 사이트를 구축 할 수 있도록 최선을 다할 것입니다. Meteor는 아름답고 강력한 응용 프로그램을 만드는 데있어 강력한 유연성을 제공하는 Node.JS 플랫폼입니다. 우리는 앞으로 웹-혁명을 기꺼이 받아들이는 엔지니어 공동체의 일원임을 자랑스럽게 기여하고 있습니다. 기다리지 말고 미티어를 만나보세요.","discoverMeteor":"미티어 만나보세요","leeSang":"이상준","leadDeveloper":"성공적인 상거래에 대한 강한 배경은 귀하의 비즈니스에 적합한 강력한 애플리케이션을 개발하는 데 필수적이며 모든 것이 상상의 한계에 있다고 생각합니다. 귀하의 비즈니스에 최적의 제품 상태를 보장하기 위해 귀하와 당사 팀 간의 지속적인 커뮤니케이션을 유지하기 위해 노력합니다. 최선을 다하겠습니다.","aLittleAboutMeteor":"미티어의 대해서 잠깐!","readySetGo":"준비~, 시작!","meteorJs":"미티어.JS"});
TAPi18n._registerServerTranslator("ko", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"contact.ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/ko/contact.ko.i18n.json                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"contactMe":"오늘 연락주세요!","startProject":"저랑 멋진 프로젝트를 시작하는 것은 매우 간단합니다. 언제든지, 전화, 문자, 혹은 이메일로 연략주세요!"});
TAPi18n._registerServerTranslator("ko", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/ko/header.ko.i18n.json                                                                  //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"about":"환영합니다","howWeWork":"성공비결","ourServices":"서비스","portfolio":"Portfolio","reachUs":"연락처"});
TAPi18n._registerServerTranslator("ko", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/ko/home.ko.i18n.json                                                                    //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"whatWeDo":"안녕하세요! My name is Joe!","mission1":"거의 5 년 전에 프리랜서 디자이너로서의 여정을 시작한 이래 저는 사업을위한 원격 업무를 수행하고 신생 기업, 비영리 조직과 협의했으며 재능있는 사람들과 협력하여 비즈니스 및 개인용 디지털 제품을 만들었습니다. 나는 조용히 자신감이 있으며 자연스럽게 호기심이 많으며 끊임없이 내 실력을 개선하고 있습니다. ","koreaAdd":"를 개발해봅시다.","mission2":"비즈니스 성공을 위한 Roadmap 형성하고 모든 준비를 마친 다음 코드로 당신의 비즈니스 아이더를 활용적인 어플로 만들겠습니다.","innovative":"혁신적인","bridging":"모바일과 웹의 결합","tailored":"당신만을 위한","learnMore":"저의 대해서 더 알고 싶으시죠?","viewMore":"더 보기","roadTo":"","someOfOurWork":"일하고 있는 작품들","allOfOurWebsites":"모든 사이트들은 미티어로 개발 되어 가고 있습니다.","fastSleek":"빠르면서 가늘고, 속해 있는 분야에 큰 변화를 일으킬 준비가 되어 있습니다.","madeWith":"","madeWithK":"과 정성으로 만듭니다","weBuild":"실시간 반응성을 염두에 두면서","reactiveJavascript":"최대의 작품을","fullest":"Javascript로","embrace":"21 세기를 맞이하여,","dynamicReactive":"이제 당신도","21stC":"실시간 반응성의 힘을 경험할 수 있습니다.","createProducts":"성공비결:","youInMind":"당신이 성곡하기 위해 ","createSuccess":"비즈니스에 맞는 계획 및 사이트를 만들겠습니다.","insteadOf":"단순히 사이트 제공하고 끝나는게 아니고, 당신이 원하는 결과를 성취하기 전까지는 포기하지 않습니다. 당신의 아이디어를 실험해 보고, 정보를 수집하고, 그 컨셉의 하이라이트들을 살리면서 아름다운 비주얼과 강력한 백엔드를 갖춘 상품을 개발하여 투자 준비의 MVP를 만들어 보겠습니다.","walkAway":"결과로는 모든 사람들이 원하는 서비스를 제공할 수 있는 마인드로 비즈니스를 시작할 수 있을 것입니다.","areYouGame":"준비됐습니까?","loveToHear":"같이 이야기를 나눠봅시다","getStarted":"시작해볼까요?","alwaysOpen":"저는 항상 제품 디자인 작업이나 파트너십 기회에 대해 이야기를 나누고 싶어합니다.","coffee":"커피는 제가 살게요 :)"});
TAPi18n._registerServerTranslator("ko", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"portfolio.ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/ko/portfolio.ko.i18n.json                                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"myWebsitesAre":"제가 개발하는 웹사이트들은 모두 ","secondMyWeb":"만들어져 있습니다","stateOfArt":"새로운 수준으로 반응성과 성능을 향상시키는 최신 네이티브 컨테이너 환경.","weMakeGraphics":"모든 그래픽들은 직접 처음부터 끝까지 만들며","aBitOf":"과 상상력으로 제작합니다."});
TAPi18n._registerServerTranslator("ko", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"service.ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/ko/service.ko.i18n.json                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"reactivity":"실시간 반응성","collaborate":"강력하고 뛰어난","unparalleled":"을 갖춘 사이트를 만들어봅시다.","meteorFirst":"Meteor를 사용하면 개발자가 실시간 웹 앱을 구축 할 수있는 근본적으로 간단한 방법을 제공 할 수 있습니다. 전적으로 하나의 코드베이스에서 JavaScript로 작성되었습니다. 우리는 예전과 다른 방향으로 Javascript를 활용할 수 있으며 웹 애플리케이션의 핵심 부분에서 놀라운 반응을 제공합니다.","meteorSecond":"동일한 코드가 클라이언트에서 클라우드, 패키지에서 데이터베이스 API로 실행되기 때문에 우리는 가장 약한 링크에 국한되지 않고 가장 강력한 링크 기준으로 작품을 판단 할 수 있을 것입니다.","simpleSleek":"가늘고, 빠르면서도 강력한 Meteor.js","iDevelopWith":"Meteor로 개발하여 강력한 웹 사이트와 웹 애플리케이션을 실용성 있고 아름답게 만듭니다. 실용적인 만큼 매끄러운 작품을 만나보세요.","my":"","service":"서비스들","gotQuestion":"저의 서비스에 대해 질문이 있으시다면 언제든지 연락 주세요.","giveUsaCall":"전화상으로든 이메일로든, 곧 바로 답장하겠습니다.","websitePackage":"웹사이트 페키지","ecommerce":"Ecommerce 패키지","logo":"로고 패키지","myServices":"당신의 비즈니스를 위해 웹 사이트 및 웹 응용 프로그램을 만들고, 디자인하고, 개발할 수 있습니다. 특별히 필요로하는 것을 알려주시면 최대한 도움이 될 수 있도록 노력하겠습니다."});
TAPi18n._registerServerTranslator("ko", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"success.ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n/ko/success.ko.i18n.json                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _ = Package.underscore._,
    package_name = "project",
    namespace = "project";

if (package_name != "project") {
    namespace = TAPi18n.packages[package_name].namespace;
}
TAPi18n.languages_names["ko"] = ["Korean","한국어"];
if(_.isUndefined(TAPi18n.translations["ko"])) {
  TAPi18n.translations["ko"] = {};
}

if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {
  TAPi18n.translations["ko"][namespace] = {};
}

_.extend(TAPi18n.translations["ko"][namespace], {"successDoesnt":"성공은 쉽게 오지 않습니다. ","combinationOf":"성공은 곧 A, B 및 C의 조합입니다."});
TAPi18n._registerServerTranslator("ko", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"i18n.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// both/i18n.js                                                                                      //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
getUserLanguage = function getUserLanguage() {                                                       // 1
  return "en";                                                                                       // 2
};                                                                                                   // 3
                                                                                                     //
if (Meteor.isClient) {                                                                               // 5
  Meteor.startup(function () {                                                                       // 6
    Session.set("showLoadingIndicator", true);                                                       // 7
                                                                                                     //
    TAPi18n.setLanguage(getUserLanguage()).done(function () {                                        // 9
      Session.set("showLoadingIndicator", false);                                                    // 11
    }).fail(function (error_message) {                                                               // 12
      // Handle the situation                                                                        //
      console.log(error_message);                                                                    // 15
    });                                                                                              // 16
  });                                                                                                // 17
}                                                                                                    // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"backend":{"backend.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// backend/backend.js                                                                                //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
                                                                                                     //
if (Meteor.isClient) {                                                                               // 2
  // This code only runs on the client                                                               //
                                                                                                     //
  Template.application.events({                                                                      // 5
                                                                                                     //
    "click .delete": function clickDelete() {                                                        // 7
      Rsvps.remove(this._id);                                                                        // 8
    }                                                                                                // 9
  });                                                                                                // 5
}                                                                                                    // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// backend/login.js                                                                                  //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
if (Meteor.isClient) {                                                                               // 1
    Template.dashboards.events({                                                                     // 2
        'click .logout': function clickLogout(event) {                                               // 3
            event.preventDefault();                                                                  // 4
            Meteor.logout();                                                                         // 5
        }                                                                                            // 6
    });                                                                                              // 2
    Template.register.events({                                                                       // 8
        'submit form': function submitForm(event) {                                                  // 9
            event.preventDefault();                                                                  // 10
            var emailVar = event.target.registerEmail.value;                                         // 11
            var passwordVar = event.target.registerPassword.value;                                   // 12
            Accounts.createUser({                                                                    // 13
                email: emailVar,                                                                     // 14
                password: passwordVar                                                                // 15
            });                                                                                      // 13
        }                                                                                            // 17
    });                                                                                              // 8
    Template.login.events({                                                                          // 19
        'submit form': function submitForm(event) {                                                  // 20
            event.preventDefault();                                                                  // 21
            var emailVar = event.target.loginEmail.value;                                            // 22
            var passwordVar = event.target.loginPassword.value;                                      // 23
            Meteor.loginWithPassword(emailVar, passwordVar);                                         // 24
        }                                                                                            // 25
    });                                                                                              // 19
}                                                                                                    // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"schemas.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// collections/schemas.js                                                                            //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
Rsvps = new Mongo.Collection("rsvps");                                                               // 1
                                                                                                     //
Rsvps.attachSchema(new SimpleSchema({                                                                // 3
  name: {                                                                                            // 4
    type: String,                                                                                    // 5
    label: "Name *",                                                                                 // 6
    optional: false,                                                                                 // 7
    min: 2,                                                                                          // 8
    max: 80                                                                                          // 9
  },                                                                                                 // 4
  last: {                                                                                            // 11
    type: String,                                                                                    // 12
    label: "Last Name *",                                                                            // 13
    optional: false,                                                                                 // 14
    min: 2,                                                                                          // 15
    max: 80                                                                                          // 16
  },                                                                                                 // 11
  organization: {                                                                                    // 18
    type: String,                                                                                    // 19
    label: "Name of your business *",                                                                // 20
    optional: false,                                                                                 // 21
    min: 2,                                                                                          // 22
    max: 80                                                                                          // 23
  },                                                                                                 // 18
  website: {                                                                                         // 25
    type: String,                                                                                    // 26
    label: "Web Address (If you have one)",                                                          // 27
    optional: false,                                                                                 // 28
    min: 4,                                                                                          // 29
    max: 80                                                                                          // 30
  },                                                                                                 // 25
  email: {                                                                                           // 32
    type: String,                                                                                    // 33
    label: "Email Address *",                                                                        // 34
    optional: false,                                                                                 // 35
    min: 5,                                                                                          // 36
    max: 80                                                                                          // 37
  },                                                                                                 // 32
  budget: {                                                                                          // 39
    type: String,                                                                                    // 40
    label: "Estimated Budget for your project",                                                      // 41
    optional: false,                                                                                 // 42
    min: 1,                                                                                          // 43
    max: 80                                                                                          // 44
  },                                                                                                 // 39
  phone: {                                                                                           // 46
    type: Number,                                                                                    // 47
    label: "Cellphone # *",                                                                          // 48
    optional: false                                                                                  // 49
  },                                                                                                 // 46
  industry: {                                                                                        // 51
    type: String,                                                                                    // 52
    label: "What industry is your business in? *",                                                   // 53
    optional: false                                                                                  // 54
  },                                                                                                 // 51
  Competitors: {                                                                                     // 56
    type: String,                                                                                    // 57
    label: "Competitors? *",                                                                         // 58
    optional: false                                                                                  // 59
  },                                                                                                 // 56
  iadSense: {                                                                                        // 61
    type: String,                                                                                    // 62
    optional: false,                                                                                 // 63
    label: "How did you hear about us?",                                                             // 64
    autoform: {                                                                                      // 65
                                                                                                     //
      options: [{                                                                                    // 67
        label: "Prior Client",                                                                       // 69
        value: "Prior Client"                                                                        // 70
      }, {                                                                                           // 68
        label: "Referral",                                                                           // 73
        value: "Referral"                                                                            // 74
      }, {                                                                                           // 72
        label: "Our Website",                                                                        // 77
        value: "Our Website"                                                                         // 78
      }, {                                                                                           // 76
        label: "Search Engine",                                                                      // 81
        value: "Search Engine"                                                                       // 82
      }, {                                                                                           // 80
        label: "Other",                                                                              // 85
        value: "Other"                                                                               // 86
      }]                                                                                             // 84
    }                                                                                                // 65
  },                                                                                                 // 61
                                                                                                     //
  whatElse: {                                                                                        // 92
    type: String,                                                                                    // 93
    optional: true,                                                                                  // 94
    label: "Anything else we might need to know?",                                                   // 95
    min: 20,                                                                                         // 96
    max: 1000,                                                                                       // 97
    autoform: {                                                                                      // 98
      rows: 5                                                                                        // 99
    }                                                                                                // 98
  },                                                                                                 // 92
  another: {                                                                                         // 102
    type: Boolean,                                                                                   // 103
    optional: false,                                                                                 // 104
    autoform: {                                                                                      // 105
      type: "switch",                                                                                // 106
      trueLabel: "Online",                                                                           // 107
      falseLabel: "Offline"                                                                          // 108
    }                                                                                                // 105
  },                                                                                                 // 102
                                                                                                     //
  createdAt: {                                                                                       // 112
    type: Date,                                                                                      // 113
    autoValue: function autoValue() {                                                                // 114
      return new Date();                                                                             // 115
    }                                                                                                // 116
  }                                                                                                  // 112
}));                                                                                                 // 3
                                                                                                     //
Rsvps.allow({                                                                                        // 120
  insert: function insert(userId, doc) {                                                             // 121
    return true;                                                                                     // 122
  },                                                                                                 // 123
  update: function update(userId, doc, fields, modifier) {                                           // 124
    return true;                                                                                     // 125
  },                                                                                                 // 126
  remove: function remove(userId, doc) {                                                             // 127
    return true;                                                                                     // 128
  }                                                                                                  // 129
});                                                                                                  // 120
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"controller":{"applicationcontroller.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// controller/applicationcontroller.js                                                               //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
main2Controller = RouteController.extend({                                                           // 1
  subscriptions: function subscriptions() {                                                          // 2
    // set up the subscriptions for the route and optionally                                         //
    // wait on them like this:                                                                       //
    //                                                                                               //
    this.subscribe('rsvps').wait();                                                                  // 6
    //                                                                                               //
    // "Waiting" on a subscription does not block. Instead,                                          //
    // the subscription handle is added to a reactive list                                           //
    // and when all items in this list are ready, this.ready()                                       //
    // returns true in any of your route functions.                                                  //
  },                                                                                                 // 12
                                                                                                     //
  data: function data() {                                                                            // 14
    return {                                                                                         // 15
      rsvps: Rsvps.find({}, { sort: { createdAt: -1 }, limit: 100 })                                 // 16
    };                                                                                               // 15
    // return a global data context like this:                                                       //
    // Items.findOne({_id: this.params._id});                                                        //
  },                                                                                                 // 20
                                                                                                     //
  action: function action() {                                                                        // 22
                                                                                                     //
    // You can create as many action functions as you'd like.                                        //
    // This is the primary function for running your route.                                          //
    // Usually it just renders a template to a page. But it                                          //
    // might also perform some conditional logic. Override                                           //
    // the data context by providing it as an option in the                                          //
    // last parameter.                                                                               //
    this.render('application', {/* data: {} */});                                                    // 30
  }                                                                                                  // 31
});                                                                                                  // 1
DashboardController = RouteController.extend({                                                       // 33
                                                                                                     //
  subscriptions: function subscriptions() {                                                          // 35
    // set up the subscriptions for the route and optionally                                         //
    // wait on them like this:                                                                       //
    //                                                                                               //
    this.subscribe('rsvps').wait();                                                                  // 39
    //                                                                                               //
    // "Waiting" on a subscription does not block. Instead,                                          //
    // the subscription handle is added to a reactive list                                           //
    // and when all items in this list are ready, this.ready()                                       //
    // returns true in any of your route functions.                                                  //
  },                                                                                                 // 45
                                                                                                     //
  data: function data() {                                                                            // 47
    return {                                                                                         // 48
      rsvps: Rsvps.find({}, { sort: { createdAt: -1 }, limit: 50 })                                  // 49
    };                                                                                               // 48
    // return a global data context like this:                                                       //
    // Items.findOne({_id: this.params._id});                                                        //
  }                                                                                                  // 53
});                                                                                                  // 33
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"ga.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// controller/ga.js                                                                                  //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
gaController = RouteController.extend({                                                              // 1
                                                                                                     //
  action: function action() {                                                                        // 4
                                                                                                     //
    // You can create as many action functions as you'd like.                                        //
    // This is the primary function for running your route.                                          //
    // Usually it just renders a template to a page. But it                                          //
    // might also perform some conditional logic. Override                                           //
    // the data context by providing it as an option in the                                          //
    // last parameter.                                                                               //
    this.render('home', {/* data: {} */});                                                           // 12
    GAnalytics.pageview();                                                                           // 13
  }                                                                                                  // 14
});                                                                                                  // 1
gaController2 = RouteController.extend({                                                             // 16
                                                                                                     //
  action: function action() {                                                                        // 19
                                                                                                     //
    // You can create as many action functions as you'd like.                                        //
    // This is the primary function for running your route.                                          //
    // Usually it just renders a template to a page. But it                                          //
    // might also perform some conditional logic. Override                                           //
    // the data context by providing it as an option in the                                          //
    // last parameter.                                                                               //
    this.render('applications', {/* data: {} */});                                                   // 27
    GAnalytics.pageview();                                                                           // 28
  }                                                                                                  // 29
});                                                                                                  // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"mainController.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// controller/mainController.js                                                                      //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
mainController = RouteController.extend({                                                            // 1
  subscriptions: function subscriptions() {                                                          // 2
    // set up the subscriptions for the route and optionally                                         //
    // wait on them like this:                                                                       //
    //                                                                                               //
    this.subscribe('rsvps').wait();                                                                  // 6
    //                                                                                               //
    // "Waiting" on a subscription does not block. Instead,                                          //
    // the subscription handle is added to a reactive list                                           //
    // and when all items in this list are ready, this.ready()                                       //
    // returns true in any of your route functions.                                                  //
  },                                                                                                 // 12
                                                                                                     //
  data: function data() {                                                                            // 14
    return {                                                                                         // 15
      rsvps: Rsvps.find({}, { sort: { createdAt: -1 }, limit: 1 })                                   // 16
    };                                                                                               // 15
    // return a global data context like this:                                                       //
    // Items.findOne({_id: this.params._id});                                                        //
  },                                                                                                 // 20
                                                                                                     //
  action: function action() {                                                                        // 22
                                                                                                     //
    // You can create as many action functions as you'd like.                                        //
    // This is the primary function for running your route.                                          //
    // Usually it just renders a template to a page. But it                                          //
    // might also perform some conditional logic. Override                                           //
    // the data context by providing it as an option in the                                          //
    // last parameter.                                                                               //
    this.render('applications', {/* data: {} */});                                                   // 30
  }                                                                                                  // 31
});                                                                                                  // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"application.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/application.js                                                                             //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
/*****************************************************************************/                      //
/* Server Only Methods */                                                                            //
/*****************************************************************************/                      //
Meteor.methods({                                                                                     // 4
  'submitRsvp': function submitRsvp(rsvp) {                                                          // 5
    console.log('new RSVP:', rsvp);                                                                  // 6
    Rsvps.insert(rsvp);                                                                              // 7
  }                                                                                                  // 8
});                                                                                                  // 4
/**                                                                                                  //
 * Meteor.publish('items', function (param1, param2) {                                               //
 *  this.ready();                                                                                    //
 * });                                                                                               //
 */                                                                                                  //
Meteor.publish('rsvps', function () {                                                                // 15
  return Rsvps.find();                                                                               // 16
});                                                                                                  // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////

},"sitemaps.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/sitemaps.js                                                                                //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
sitemaps.add('/sitemap.xml', function () {                                                           // 1
  // required: page                                                                                  //
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos                             //
  return [{ page: 'http://www.illumeweb.com/', lastmod: new Date().getTime() }, { page: 'http://www.illumeweb.com/about-illumeinc', lastmod: new Date().getTime() }, { page: 'http://www.illumeweb.com/about-hybrid-apps', lastmod: new Date().getTime() }, { page: 'http://www.illumeweb.com/work-with-us', lastmod: new Date().getTime() }, { page: 'http://www.illumeweb.com/how-we-work', lastmod: new Date().getTime() }, { page: 'http://www.illumeweb.com/our-work', lastmod: new Date().getTime() }, { page: 'http://www.illumeweb.com/what-we-do', lastmod: new Date().getTime() }];
});                                                                                                  // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".coffee"]});
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
require("./backend/backend.js");
require("./backend/login.js");
require("./both/i18n.js");
require("./collections/schemas.js");
require("./controller/applicationcontroller.js");
require("./controller/ga.js");
require("./controller/mainController.js");
require("./server/application.js");
require("./server/sitemaps.js");
//# sourceMappingURL=app.js.map
