define(['backbone',
  'app/containers/collections/containers',
  'app/containers/views/index',
  'app/containers/models/container',
  'app/containers/views/show'],
  function(Backbone, ContainerCollection, CollectionView, Container, ShowContainerView) {
  return Backbone.Router.extend({
    routes: {
      "containers": "list",
      "containers/show/:id": "show",
      "containers/delete": "delete"
    },
    list: function () {
      var containers = new ContainerCollection();
      var view = new CollectionView({model: containers});
      containers.fetch({reset: true});
      setInterval(function () {
        containers.fetch({reset: true});
      }, 60000);
      $("#panel").html(view.render().el);
    },
    show: function (id) {
      var container = new Container({"id": id});
      var view = new ShowContainerView({model: container});
      container.fetch({reset: true});
      $("#panel").html(view.render().el);
    },
    delete: function () {
      $("#panel").html("delete containers");
    }
  });
});
