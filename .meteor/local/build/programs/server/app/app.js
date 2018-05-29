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
      content: 'illume Inc. is a full business idea & web/app product development workshop located in the heart of Santa Barbara, California. From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites and apps.'
    },                                                                                               //
    image: {                                                                                         //
      property: 'og:image',                                                                          //
      content: '/img/badge.png'                                                                      //
    },                                                                                               //
    author: {                                                                                        //
      name: 'author',                                                                                //
      content: 'illume inc.'                                                                         //
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
  title: 'Illume Inc. Web Design and Development',                                                   //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/'                                                           //
    }                                                                                                //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('about', {                                                                              // 55
  template: 'about',                                                                                 //
  path: '/about-illumeinc',                                                                          //
  title: 'About Us',                                                                                 //
  meta: {                                                                                            //
    url: {                                                                                           //
      property: 'og:url',                                                                            //
      itemprop: 'url',                                                                               //
      content: 'http://www.illumeweb.com/about-illumeinc'                                            //
    },                                                                                               //
    description: {                                                                                   //
      name: 'description',                                                                           //
      property: 'og:description',                                                                    //
      content: 'From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites. '
    },                                                                                               //
    image: {                                                                                         //
      itemprop: 'image',                                                                             //
      property: 'og:image',                                                                          //
      content: '/img/badge.png'                                                                      //
    },                                                                                               //
    keywords: {                                                                                      //
      name: 'keywords',                                                                              //
      itemprop: 'keywords',                                                                          //
      content: 'Santa Barbara, product vision, meteorjs, success, Node.JS, robust flexibility, creating success, high-end website',
      'og:type': 'website'                                                                           //
    },                                                                                               //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'About Us'                                                                       //
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
Router.route('service', {                                                                            // 82
  template: 'service',                                                                               //
  path: '/what-we-do',                                                                               //
  title: 'Our Services',                                                                             //
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
  path: '/our-work',                                                                                 //
  title: 'Our Portfolio',                                                                            //
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
      content: 'http://www.illumeweb.com/our-work'                                                   //
    },                                                                                               //
    'og:type': 'website',                                                                            //
    'og:title': function() {                                                                         //
      return document.title;                                                                         //
    },                                                                                               //
    'og:site_name': 'Our Services'                                                                   //
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
  path: '/work-with-us',                                                                             //
  title: 'Work with Illume Inc.',                                                                    //
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

}},"i18n":{"en.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// i18n/en.i18n.json                                                                                 //
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
translations[namespace] = {"hello":"hello","made":"Made with Javascript and"};
TAPi18n._loadLangFileObject("en", translations);
TAPi18n._registerServerTranslator("en", namespace);

///////////////////////////////////////////////////////////////////////////////////////////////////////

},"ko.i18n.json":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// i18n/ko.i18n.json                                                                                 //
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

_.extend(TAPi18n.translations["ko"][namespace], {"hello":"안녕하세요","made":"정성으로 다해서 코딩"});
TAPi18n._registerServerTranslator("ko", namespace);

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
require("./backend/backend.js");
require("./backend/login.js");
require("./collections/schemas.js");
require("./controller/applicationcontroller.js");
require("./controller/ga.js");
require("./controller/mainController.js");
require("./i18n/en.i18n.json");
require("./i18n/ko.i18n.json");
require("./server/application.js");
require("./server/sitemaps.js");
//# sourceMappingURL=app.js.map
