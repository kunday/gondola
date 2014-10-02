define(['backbone', 'app/images/collections/images', 'app/images/views/index'], function(Backbone, ImagesCollection, ImagesView) {
  return Backbone.Router.extend({
    routes: {
      "images": "list",
      "images/show": "show",
      "images/delete": "delete"
    },
    list: function () {
      var collection = new ImagesCollection();
      var view = new ImagesView({model: collection});
      collection.fetch({reset: true});
      $("#panel").html(view.render().el);
    },
    show: function () {
      $("#panel").html("show images");
    },
    delete: function () {
      $("#panel").html("delete image");
    }
  });
});
