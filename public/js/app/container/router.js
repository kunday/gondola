define(['backbone',
  'app/container/models/container',
  'app/container/models/log',
  'app/container/views/show'],
  function(Backbone, ContainerInfo, ContainerLog, ContainerInfoView) {
    return Backbone.Router.extend({
      routes: {
        "containers/show/:id": "show"
      },
      show: function (id) {
        var container = new ContainerInfo({"id": id});
        var view = new ContainerInfoView({model: container});
        container.fetch({reset: true});
        $("#panel").html(view.render().el);
      }
    });
});
