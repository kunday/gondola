define(['backbone', 'backbone_routemanager', 'app/containers/router'], function (Backbone, RouteManager, ContainersRouter) {
  return RouteManager.extend({
    routes: {
      '': 'index',
      'containers/': ContainersRouter
    },
    index: function() {
      $('#panel').html('Welcome Home!');
    }
  });
});
