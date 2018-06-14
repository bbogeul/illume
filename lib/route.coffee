Router.configure
  meta:
    # <meta charset="UTF-8">
    charset:
      charset: 'UTF-8'

    # <meta name="keywords" content="Awes..">
    keywords: 
      name: 'keywords'
     
      content: 'applications, mobile, web, javascript, illume inc., santa barbara, meteor, meteor.js, hybrid applications, web design, web development, mobile app development, web design santa barbara, web development santa barbara' 

    # <meta name="description" itemprop="description" property="og:description" content="Default desc..">
    description:
      name: 'description'
     
 
      content:  'My name is Joe and I am a developer, a designer, and a coffee addict. Working with you to make a powerful web application for you and your business.'

    image:
     
      
      property: 'og:image'
      content: '/img/drawnPic.jpg'

    author:
        name: 'author'
        content: 'Joseph S. Lee'

    url:
      property: 'og:url'
       
      content: 'http://www.jaulzlee.com'

    

    'http-equiv':
      'http-equiv': 'X-UA-Compatible'
      content: 'IE=edge,chrome=1'

    robots: 'index, follow'
    google: 'notranslate'

Router.route 'home',
  template: 'home'
   
  path: '/'
  title: 'Joseph Lee | Designer & Developer using Meteor.JS'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.jaulzlee.com/'

Router.route 'about',
  template: 'about'
  path: '/about-me'
  title: 'About Me'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.jaulzlee.com/about-me'  
    description:
      name: 'description'
      property: 'og:description'
      content:  'I believe a strong background in successful customer relation is essential in developing a powerful application fit for your business, all within the boundaries of our imagination.'
    image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/drawnPic.jpg'
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: 'web design, web development, freelance webdeveloper, coding, designer, developer'  

      'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'About Me'   
   
Router.route 'service',
  template: 'service'
  path: '/my-services'
  title: 'My Services' 
  meta:
    description:
      name: 'description'
      itemprop: 'description'
      property: 'og:description'
      content:  'I ensure that the design benefits the function. Producing features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: 'Santa Barbara, ecommerce site, Wordpress, Drupal, Mobile responsive,  speed, logo service, google search, seo, stripe, paypal, cms, web application, reactivity, javascript, meteor, meteor.js, web design santa barbara'
     image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/drawnPic.jpg'
     url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.jaulzlee.com/my-services'
        
     'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'My Services'

Router.route 'hybrid',
  template: 'hybrid'
  path: '/about-hybrid-apps'
  title: 'About Hybrid Applications' 
  meta:
    description:
      name: 'description'
      itemprop: 'description'
      property: 'og:description'
      content:  ' Hybrid development combines the best (or worst) of both the native and HTML5 worlds. We define hybrid as a web app, primarily built using HTML5 and JavaScript, that is then wrapped inside a thin native container that provides access to native platform features '
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: 'screen, web, app, mobile, html5, hybrid app, javascript, native container, websites, mobile app, santa barbara websites'
     image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/drawnPic.jpg'
     url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.jaulzlee.com/about-hybrid-app'
        
     'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'About Hybrid Apps'  
    
Router.route 'portfolio',
  template: 'portfolio'
  path: '/my-work'
  title: 'My Portfolio' 
  meta:
    description:
      name: 'description'
      itemprop: 'description'
      property: 'og:description'
      content:  'Some of my past and recent works. Made with Meteor. '
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: ' web, mobile, website, mobile app, meteor, meteor.js'
     image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/drawnPic.jpg'
     url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.jaulzlee.com/my-work'
        
     'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'My Work'        
        
Router.route 'approach',
  template: 'approach'
  path: '/how-we-work'
  title: 'How We Work'
  meta:        
    description:
      name: 'description'
      itemprop: 'description'
      property: 'og:description'
      content:  'Building success is not for the feint of heart. It is for people who work tirelessly towards their goal. That is our philosophy here. We strive in providing you with the best of our abilities.'
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: 'aware, bold, create, success, illume inc., web space, designer, development roadmap'
    url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.jaulzlee.com/how-we-work'    
    
    'og:type': 'website'
    'og:title': ->
      document.title
    'og:site_name': 'How We Work'

Router.route 'lessons',
  template: 'lessons'
  path: '/services/web-lessons'
  title: 'Web Lessons'
  meta:        
    description:
      name: 'description'
      itemprop: 'description'
      property: 'og:description'
      content:  ' .'
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: ' '
    image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/reas.png'    
    url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.jaulzlee.com/services/web-lessons'    
    
    'og:type': 'website'
    'og:title': ->
      document.title
    'og:site_name': 'Web Lessons'     
 
Router.route 'applications',
  template: 'applications'
  layoutTemplate: 'appLayout'
   
  path: '/contact-me'
  title: 'Contact'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: ' '
Router.route 'application',
  template: 'application'
  path: '/backend'
  
  layoutTemplate: 'loginLayout'
  controller:'main2Controller'
  title: ''
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: ' ' 
Router.route 'rsvp',
  template: 'rsvp'
  controller: 'RsvpController',
  action: 'action',
  where: 'client'
Router.route 'login',
  template: 'login'
  layoutTemplate: 'loginLayout'
  path: '/login'
  title: 'Login'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: ' '
Router.route 'dashboards',
  template: 'dashboards'
  layoutTemplate: 'loginLayout'
  controller:'main2Controller'
  path: '/dashboard'
  title: 'Dashboard'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: ' '
Router.route 'register',
  template: 'register'
  layoutTemplate: 'registerTemplate'
  path: '/register'
  title: 'Register'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: ' '       
Router.route 'policy',
  template: 'policy'
  path: '/policies'
      