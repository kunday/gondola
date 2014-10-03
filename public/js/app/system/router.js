define(['backbone', 'app/system/views/index', 'app/system/models/info'], function(Backbone, IndexView, InfoModel) {
  return Backbone.Router.extend({
    routes: {
      "system": "index"
    },
    index: function() {
      var model = new InfoModel()
      var view = new IndexView({model: model});
      model.fetch({reset: true});
      $("#panel").html(view.render().el);
    }
  })
});
