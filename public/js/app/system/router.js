define(['backbone',
  'app/system/views/index',
  'app/system/models/info',
  'app/system/models/version'], function(Backbone, IndexView, InfoModel, VersionModel) {
  return Backbone.Router.extend({
    routes: {
      "system": "index"
    },
    index: function() {
      var model = new InfoModel();
      var version = new VersionModel();
      var view = new IndexView({model: model, version: version});
      model.fetch({reset: true});
      version.fetch({reset: true});
      $("#panel").html(view.render().el);
    }
  });
});
