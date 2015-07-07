define(['backbone',
  'app/container/models/container',
  'app/container/models/changes',
  'app/container/views/show',
  'app/container/views/changes'],
  function(Backbone, ContainerInfo, ContainerChanges, ContainerInfoView, ContainerChangesView) {
    return Backbone.Router.extend({
      routes: {
        "container/show/:id": "show",
        'container/changes/:id': 'changes'
      },
      show: function (id) {
        var container = new ContainerInfo({"id": id});
        var view = new ContainerInfoView({model: container});
        container.fetch({reset: true});
        $("#panel").html(view.render().el);
      },
      changes: function(id) {
        var changes = new ContainerChanges({"id": id});
        var view = new ContainerChangesView({model: changes});
        changes.fetch({reset: true});
        $("#panel").html(view.render().el);
      }
    });
});
