define(['backbone',
  'app/images/collections/images',
  'app/images/views/index',
  'app/images/collections/history',
  'app/images/views/history'],
  function(Backbone, ImagesCollection, ImagesView, HistoryCollection, HistoryView) {
  return Backbone.Router.extend({
    routes: {
      "images": "list",
      "images/history/:id": "history",
      "images/delete/:id": "delete"
    },
    list: function () {
      var collection = new ImagesCollection();
      var view = new ImagesView({model: collection});
      collection.fetch({reset: true});
      $("#panel").html(view.render().el);
    },
    history: function (id) {
      var historyCollection = new HistoryCollection({"imageId": id});
      var view = new HistoryView({model: historyCollection});
      historyCollection.fetch({reset: true});
      $("#panel").html(view.render().el);
    },
    delete: function (imageId) {
      $("#panel").html("delete image");
    }
  });
});
