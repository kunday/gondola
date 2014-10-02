define(['backbone', 'app/images/collections/images', 'app/images/views/index'], function(Backbone, ImagesCollection, ImagesView) {
  return Backbone.Router.extend({
    routes: {
      "images": "list",
      "images/history/:id": "show",
      "images/delete/:id": "delete"
    },
    list: function () {
      var collection = new ImagesCollection();
      var view = new ImagesView({model: collection});
      collection.fetch({reset: true});
      $("#panel").html(view.render().el);
    },
    history: function (imageId) {
      $("#panel").html("show images");
    },
    delete: function (imageId) {
      $("#panel").html("delete image");
    }
  });
});
