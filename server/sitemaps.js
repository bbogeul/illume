sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    { page: 'http://www.illumeweb.com/', lastmod: new Date().getTime() },
     { page: 'http://www.illumeweb.com/about-illumeinc', lastmod: new Date().getTime() },
           { page: 'http://www.illumeweb.com/about-hybrid-apps', lastmod: new Date().getTime() },
    { page: 'http://www.illumeweb.com/work-with-us', lastmod: new Date().getTime() },
    { page: 'http://www.illumeweb.com/how-we-work', lastmod: new Date().getTime() },
    
       { page: 'http://www.illumeweb.com/our-work', lastmod: new Date().getTime() },  
    { page: 'http://www.illumeweb.com/what-we-do', lastmod: new Date().getTime() }
  ];
});