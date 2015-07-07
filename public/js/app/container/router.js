define(['backbone',
  'app/container/models/container',
  'app/container/models/changes',
  'app/container/models/stats',
  'app/container/models/logs',
  'app/container/views/show',
  'app/container/views/changes',
  'app/container/views/stats',
  'app/container/views/logs'],
  function(Backbone,
    ContainerInfo,
    ContainerChanges,
    ContainerStats,
    ContainerLogs,
    ContainerInfoView,
    ContainerChangesView,
    ContainerStatsView,
    ContainerLogsView) {
    return Backbone.Router.extend({
      routes: {
        'container/show/:id': 'show',
        'container/changes/:id': 'changes',
        'container/logs/:id': 'logs',
        'container/stats/:id': 'stats'
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
      },
      logs: function(id) {
        var changes = new ContainerLogs({"id": id});
        var view = new ContainerLogsView({model: changes});
        changes.fetch({reset: true});
        $("#panel").html(view.render().el);
      },
      stats: function(id) {
        var stats = new ContainerStats({"id": id});
        var view = new ContainerStatsView({model: stats});
        stats.fetch({reset: true});
        $("#panel").html(view.render().el);
      }
    });
});
