define(['backbone',
  'app/system/views/version',
  'app/system/views/info',
  'app/system/models/info',
  'app/system/models/version'],
  function(Backbone, VersionView, InfoView, InfoModel, VersionModel) {
  return Backbone.Router.extend({
    routes: {
      "system": "version",
      "system/version": "version",
      "system/info": "info"
    },
    version: function() {
      var version = new VersionModel();
      var view = new VersionView({model: version});
      version.fetch({reset: true});
      $("#panel").html(view.render().el);
    },
    info: function() {
      var model = new InfoModel();
      var view = new InfoView({model: model});
      model.fetch({reset: true});
      $("#panel").html(view.render().el);
    }
  });
});
