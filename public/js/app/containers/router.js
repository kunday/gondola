define(['backbone',
  'app/containers/collections/containers',
  'app/containers/views/index'],
  function(Backbone, ContainerCollection, CollectionView, Container) {
  return Backbone.Router.extend({
    routes: {
      "containers": "running",
      "containers/running": "running",
      "containers/all": "all"
    },
    running: function () {
      var view = this._setupView(0);
      $("#panel").html(view.render().el);
    },
    all: function () {
      var view = this._setupView(1);
      $("#panel").html(view.render().el);
    },
    _setupView: function(running_status) {
      var containers = new ContainerCollection();
      containers.running_status = running_status;
      var view = new CollectionView({model: containers});
      containers.fetch({reset: true});
      setInterval(function () {
        containers.fetch({reset: true});
      }, 60000);
      return view;
    }
  });
});
