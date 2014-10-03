define(['backbone', 'app/system/views/index'], function(Backbone, IndexView) {
  return Backbone.Router.extend({
    routes: {
      "system": "index"
    },
    index: function() {
      var view = new IndexView();
      $("#panel").html(view.render().el);
    }
  })
});
