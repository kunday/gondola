define(['backbone',
  'app/containers/collections/containers',
  'app/containers/views/index'],
  function(Backbone, ContainerCollection, CollectionView, Container) {
  return Backbone.Router.extend({
    routes: {
      "containers": "list"
    },
    list: function () {
      var containers = new ContainerCollection();
      var view = new CollectionView({model: containers});
      containers.fetch({reset: true});
      setInterval(function () {
        containers.fetch({reset: true});
      }, 60000);
      $("#panel").html(view.render().el);
    }
  });
});
