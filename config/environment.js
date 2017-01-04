/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tech-test',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: function(){

      // load config file (development & production)
      if(environment!=='test'){
        try{
          let APP = require('./APP');
          return APP(environment);
        }catch(e){
          const msg = 'missing/invalid configuration.\nCreate `config/APP.JS` from `config/APP.dist.js`';
          console.error(msg);
          throw new Error(msg);
        }
      }

      return {};
    }(),
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {

    ENV.APP.openweathermap = {
      appid: process.env.OWM_APPID,
      host: process.env.OWM_HOST,
    },

    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
