define(['backbone', 'app/containers/collections/containers', 'app/containers/views/index'], function(Backbone, ContainerCollection, CollectionView) {
  return Backbone.Router.extend({
    routes: {
      "containers": "list",
      "containers/show": "show",
      "containers/delete": "delete"
    },
    list: function () {
      var containers = new ContainerCollection();
      var view = new CollectionView({model: containers});
      containers.fetch({reset: true});
      $("#panel").html(view.render().el);
    },
    show: function () {
      $("#panel").html("show container");
    },
    delete: function () {
      $("#panel").html("delete containers");
    }
  });
});
