define(['backbone',
'app/containers/router',
'app/images/router',
'app/system/router'], function (Backbone, ContainersRouter, ImagesRouter, SystemRouter) {
  var containersRouter = new ContainersRouter();
  var imagesRouter = new ImagesRouter();
  var systemRouter = new SystemRouter();
  Backbone.history.start();
});
