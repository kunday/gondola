requirejs.config({
  baseUrl: 'js',
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore','jquery'],
      exports: 'Backbone'
    },
    'backbone_routemanager': {
      deps: ['backbone'],
      exports: 'Backbone.RouteManager'
    },
    'backbone_modal': {
      deps: ['backbone'],
      exports: 'Backbone.Modal'
    },
    'bootstrap': {
      deps: ['jquery']
    }
  },
  paths: {
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone',
    backbone_routemanager: 'vendor/backbone.routemanager',
    backbone_modal: 'vendor/backbone.modal-min',
    text: 'vendor/text',
    bootstrap: 'vendor/bootstrap.min'
  }
});
require(['application'], function(Application) {
});
