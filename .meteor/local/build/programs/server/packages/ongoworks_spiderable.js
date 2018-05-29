(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var _ = Package.underscore._;

/* Package-scope variables */
var Spiderable;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/ongoworks_spiderable/packages/ongoworks_spiderable.js    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ongoworks:spiderable/spiderable.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Spiderable = {};                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/ongoworks:spiderable/spiderable_server.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var fs = Npm.require('fs');                                                                                            // 1
var child_process = Npm.require('child_process');                                                                      // 2
var querystring = Npm.require('querystring');                                                                          // 3
var urlParser = Npm.require('url');                                                                                    // 4
var crypto = Npm.require('crypto');                                                                                    // 5
                                                                                                                       // 6
// list of bot user agents that we want to serve statically, but do                                                    // 7
// not obey the _escaped_fragment_ protocol. The page is served                                                        // 8
// statically to any client whos user agent matches any of these                                                       // 9
// regexps. Users may modify this array.                                                                               // 10
//                                                                                                                     // 11
// An original goal with the spiderable package was to avoid doing                                                     // 12
// user-agent based tests. But the reality is not enough bots support                                                  // 13
// the _escaped_fragment_ protocol, so we need to hardcode a list                                                      // 14
// here. I shed a silent tear.                                                                                         // 15
Spiderable.userAgentRegExps = [                                                                                        // 16
    /^facebookexternalhit/i, /^linkedinbot/i, /^twitterbot/i];                                                         // 17
                                                                                                                       // 18
// how long to let phantomjs run before we kill it                                                                     // 19
var REQUEST_TIMEOUT = 15*1000;                                                                                         // 20
// maximum size of result HTML. node's default is 200k which is too                                                    // 21
// small for our docs.                                                                                                 // 22
var MAX_BUFFER = 5*1024*1024; // 5MB                                                                                   // 23
                                                                                                                       // 24
// Exported for tests.                                                                                                 // 25
Spiderable._urlForPhantom = function (siteAbsoluteUrl, requestUrl) {                                                   // 26
  // reassembling url without escaped fragment if exists                                                               // 27
  var parsedUrl = urlParser.parse(requestUrl);                                                                         // 28
  var parsedQuery = querystring.parse(parsedUrl.query);                                                                // 29
  delete parsedQuery['_escaped_fragment_'];                                                                            // 30
  var parsedAbsoluteUrl = urlParser.parse(siteAbsoluteUrl);                                                            // 31
  // If the ROOT_URL contains a path, Meteor strips that path off of the                                               // 32
  // request's URL before we see it. So we concatenate the pathname from                                               // 33
  // the request's URL with the root URL's pathname to get the full                                                    // 34
  // pathname.                                                                                                         // 35
  if (parsedUrl.pathname.charAt(0) === "/") {                                                                          // 36
    parsedUrl.pathname = parsedUrl.pathname.substring(1);                                                              // 37
  }                                                                                                                    // 38
  parsedAbsoluteUrl.pathname = urlParser.resolve(parsedAbsoluteUrl.pathname,                                           // 39
                                                 parsedUrl.pathname);                                                  // 40
  parsedAbsoluteUrl.query = parsedQuery;                                                                               // 41
  // `url.format` will only use `query` if `search` is absent                                                          // 42
  parsedAbsoluteUrl.search = null;                                                                                     // 43
                                                                                                                       // 44
  return urlParser.format(parsedAbsoluteUrl);                                                                          // 45
};                                                                                                                     // 46
                                                                                                                       // 47
var PHANTOM_SCRIPT = Assets.getText("phantom_script.js");                                                              // 48
                                                                                                                       // 49
WebApp.connectHandlers.use(function (req, res, next) {                                                                 // 50
  // _escaped_fragment_ comes from Google's AJAX crawling spec:                                                        // 51
  // https://developers.google.com/webmasters/ajax-crawling/docs/specification                                         // 52
  // This spec was designed during the brief era where using "#!" URLs was                                             // 53
  // common, so it mostly describes how to translate "#!" URLs into                                                    // 54
  // _escaped_fragment_ URLs. Since then, "#!" URLs have gone out of style, but                                        // 55
  // the <meta name="fragment" content="!"> (see spiderable.html) approach also                                        // 56
  // described in the spec is still common and used by several crawlers.                                               // 57
  if (/\?.*_escaped_fragment_=/.test(req.url) ||                                                                       // 58
      _.any(Spiderable.userAgentRegExps, function (re) {                                                               // 59
        return re.test(req.headers['user-agent']); })) {                                                               // 60
                                                                                                                       // 61
    // handle a port assigned even (should be siteAbsoluteUrl)                                                         // 62
                                                                                                                       // 63
    // use Docker hostname if available to deal with proxy, otherwise append port if defined                           // 64
    // need to also detemine if ssl is local or via proxy, this currently assumes ssl is in proxy                      // 65
    var port = '80';                                                                                                   // 66
    if (process.env.PORT)                                                                                              // 67
      port = process.env.PORT                                                                                          // 68
                                                                                                                       // 69
    // are we using force-ssl, then use localhost                                                                      // 70
    // per http://docs.meteor.com/#forcessl                                                                            // 71
    // unencrypted connections from localhost are always accepted over HTTP.                                           // 72
    // TBD: exploits unknown                                                                                           // 73
                                                                                                                       // 74
    if (Meteor.absoluteUrl.defaultOptions.secure == true || process.env.PORT){                                         // 75
      var absoluteUrl = "http://localhost:" + port;                                                                    // 76
    } else {                                                                                                           // 77
      var absoluteUrl = Meteor.absoluteUrl();                                                                          // 78
    }                                                                                                                  // 79
                                                                                                                       // 80
                                                                                                                       // 81
    var url = Spiderable._urlForPhantom(absoluteUrl , req.url);                                                        // 82
                                                                                                                       // 83
    // This string is going to be put into a bash script, so it's important                                            // 84
    // that 'url' (which comes from the network) can neither exploit phantomjs                                         // 85
    // or the bash script. JSON stringification should prevent it from                                                 // 86
    // exploiting phantomjs, and since the output of JSON.stringify shouldn't                                          // 87
    // be able to contain newlines, it should be unable to exploit bash as                                             // 88
    // well.                                                                                                           // 89
    var phantomScript = "var url = " + JSON.stringify(url) + ";" +                                                     // 90
          PHANTOM_SCRIPT;                                                                                              // 91
                                                                                                                       // 92
    // Run phantomjs.                                                                                                  // 93
    //                                                                                                                 // 94
    // Use '/dev/stdin' to avoid writing to a temporary file. We can't                                                 // 95
    // just omit the file, as PhantomJS takes that to mean 'use a                                                      // 96
    // REPL' and exits as soon as stdin closes.                                                                        // 97
    //                                                                                                                 // 98
    // However, Node 0.8 broke the ability to open /dev/stdin in the                                                   // 99
    // subprocess, so we can't just write our string to the process's stdin                                            // 100
    // directly; see https://gist.github.com/3751746 for the gory details. We                                          // 101
    // work around this with a bash heredoc. (We previous used a "cat |"                                               // 102
    // instead, but that meant we couldn't use exec and had to manage several                                          // 103
    // processes.)                                                                                                     // 104
                                                                                                                       // 105
    // DOCKER ISSUE: Phatomjs on docker doesn't work well with stdin.                                                  // 106
    // WORKAROUND: Write script to a temporary file. (this part forked from http://atmospherejs.com/lemmih/spiderable) // 107
                                                                                                                       // 108
    // ongoworks: Note: tmp solution might not work with corodova/mobile builds                                        // 109
                                                                                                                       // 110
    var filename = '/tmp/meteor_'+crypto.randomBytes(4).readUInt32LE(0);                                               // 111
    fs.writeFileSync(filename, phantomScript);                                                                         // 112
    child_process.execFile(                                                                                            // 113
      '/bin/bash',                                                                                                     // 114
      ['-c',                                                                                                           // 115
       ("exec phantomjs --load-images=no --ignore-ssl-errors=yes " + filename)],                                       // 116
      {timeout: REQUEST_TIMEOUT, maxBuffer: MAX_BUFFER},                                                               // 117
      function (error, stdout, stderr) {                                                                               // 118
        fs.unlink(filename);                                                                                           // 119
        if (!error && /<html/i.test(stdout)) {                                                                         // 120
          res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});                                            // 121
          res.end(stdout);                                                                                             // 122
        } else {                                                                                                       // 123
          // phantomjs failed. Don't send the error, instead send the                                                  // 124
          // normal page.                                                                                              // 125
          if (error && error.code === 127)                                                                             // 126
            Meteor._debug("spiderable: phantomjs not installed. Download and install from http://phantomjs.org/");     // 127
          else                                                                                                         // 128
            Meteor._debug("spiderable: phantomjs failed:", error, "\nstderr:", stderr);                                // 129
                                                                                                                       // 130
          next();                                                                                                      // 131
        }                                                                                                              // 132
      });                                                                                                              // 133
  } else {                                                                                                             // 134
    next();                                                                                                            // 135
  }                                                                                                                    // 136
});                                                                                                                    // 137
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['ongoworks:spiderable'] = {}, {
  Spiderable: Spiderable
});

})();

//# sourceMappingURL=ongoworks_spiderable.js.map
