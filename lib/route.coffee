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
     
 
      content:  'illume Inc. is a full business idea & web/app product development workshop located in the heart of Santa Barbara, California. From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites and apps.'

    image:
     
      
      property: 'og:image'
      content: '/img/badge.png'

    author:
        name: 'author'
        content: 'illume inc.'

    url:
      property: 'og:url'
       
      content: 'http://www.illumeweb.com'

    

    'http-equiv':
      'http-equiv': 'X-UA-Compatible'
      content: 'IE=edge,chrome=1'

    robots: 'index, follow'
    google: 'notranslate'

Router.route 'home',
  template: 'home'
   
  path: '/'
  title: 'Illume Inc. Web Design and Development'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.illumeweb.com/'

Router.route 'about',
  template: 'about'
  path: '/about-illumeinc'
  title: 'About Us'
  meta:
    url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.illumeweb.com/about-illumeinc'  
    description:
      name: 'description'
      property: 'og:description'
      content:  'From research to solutions, we drive the lifecycle of your idea to be successful in the online arena with our powerful websites. '
    image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/badge.png'    
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: 'Santa Barbara, product vision, meteorjs, success, Node.JS, robust flexibility, creating success, high-end website'  

      'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'About Us'   
   
Router.route 'service',
  template: 'service'
  path: '/what-we-do'
  title: 'Our Services' 
  meta:
    description:
      name: 'description'
      itemprop: 'description'
      property: 'og:description'
      content:  'We ensure that the design benefits the function. We produce features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: 'Santa Barbara, ecommerce site, Wordpress, Drupal, Mobile responsive,  speed, logo service, google search, seo, stripe, paypal, cms, web application, reactivity, javascript, meteor, meteor.js, web design santa barbara'
     image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/badge.png'
     url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.illumeweb.com/what-we-do'
        
     'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'Our Services'

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
      content: '/img/badge.png'
     url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.illumeweb.com/about-hybrid-app'
        
     'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'About Hybrid Apps'  
    
Router.route 'portfolio',
  template: 'portfolio'
  path: '/our-work'
  title: 'Our Portfolio' 
  meta:
    description:
      name: 'description'
      itemprop: 'description'
      property: 'og:description'
      content:  'We ensure that the design benefits the function. We produce features that work in harmony with the design all intertwined into a fast, controllable, and powerful website. '
    keywords: 
      name: 'keywords'
      itemprop: 'keywords'
      content: ' web, mobile, website, mobile app, meteor, meteor.js'
     image:
      itemprop: 'image'
      property: 'og:image'
      content: '/img/badge.png'
     url:
      property: 'og:url'
      itemprop: 'url'
      content: 'http://www.illumeweb.com/our-work'
        
     'og:type': 'website'
     'og:title': ->
      document.title
     'og:site_name': 'Our Services'        
        
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
      content: 'http://www.illumeweb.com/how-we-work'    
    
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
      content: 'http://www.illumeweb.com/services/web-lessons'    
    
    'og:type': 'website'
    'og:title': ->
      document.title
    'og:site_name': 'Web Lessons'     
 
Router.route 'applications',
  template: 'applications'
  layoutTemplate: 'appLayout'
   
  path: '/work-with-us'
  title: 'Work with Illume Inc.'
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
      