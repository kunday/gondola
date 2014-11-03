requirejs.config({
  baseUrl: 'app/js',
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore','jquery'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery']
    }
  },
  paths: {
    jquery: 'vendor/jquery-2.1.1.min',
    underscore: 'vendor/underscore-min',
    backbone: 'vendor/backbone-min',
    text: 'vendor/text',
    bootstrap: 'vendor/bootstrap.min'
  }
});
require(['application'], function(Application) {
});
