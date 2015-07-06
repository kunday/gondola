define(['backbone',
'app/shared/helpers/disk',
'app/containers/router',
'app/images/router',
'app/system/router'], function (Backbone, Disk, ContainersRouter, ImagesRouter, SystemRouter) {
  var containersRouter = new ContainersRouter();
  var imagesRouter = new ImagesRouter();
  var systemRouter = new SystemRouter();
  Backbone.history.start();
});
