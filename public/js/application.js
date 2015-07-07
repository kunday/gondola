define(['backbone',
'app/shared/helpers/disk',
'app/containers/router',
'app/container/router',
'app/images/router',
'app/system/router'], function (Backbone, Disk, ContainersRouter, ContainerRouter, ImagesRouter, SystemRouter) {
  var containersRouter = new ContainersRouter();
  var containerRouter = new ContainerRouter();
  var imagesRouter = new ImagesRouter();
  var systemRouter = new SystemRouter();
  Backbone.history.start();
});
