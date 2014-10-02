define(['backbone', 'app/containers/router'], function (Backbone, ContainersRouter) {
  var containersRouter = new ContainersRouter();
  Backbone.history.start();
});
