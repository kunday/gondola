define(['backbone', 'app/containers/router', 'app/images/router'], function (Backbone, ContainersRouter, ImagesRouter) {
  var containersRouter = new ContainersRouter();
  var imagesRouter = new ImagesRouter();
  Backbone.history.start();
});
