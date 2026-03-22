define(['backbone',
  'app/shared/views/module',
  'app/images/collections/images',
  'app/images/views/index',
  'app/images/collections/history',
  'app/images/views/history',
  'app/images/models/image'],
  function(Backbone, Module, ImagesCollection, ImagesView, HistoryCollection, HistoryView, Image) {
  return Backbone.Router.extend({
    moduleInitialize: function(subNav, imageId){
      var appModule = new Module({
        title: "Images",
        name: "images",
        subtitle: "Browse local images and inspect their layer history.",
        navigationTabs: [
          {id: "list", label: "list", route: "images/list"},
          {
            id: "history",
            label: "history",
            route: imageId ? "images/history/" + imageId : "images/list",
            disabled: !imageId
          }
        ],
        default: subNav
      });
      $("#panel").html(appModule.render().el);
      return appModule;
    },
    routes: {
      "images": "list",
      "images/list": "list",
      "images/history/:id": "history"
    },
    list: function () {
      var module = this.moduleInitialize('list');
      var collection = new ImagesCollection();
      var view = new ImagesView({model: collection});
      collection.fetch({reset: true});
      module.content(view.render().el);
    },
    history: function (id) {
      var module = this.moduleInitialize('history', id);
      var historyCollection = new HistoryCollection({"imageId": id});
      var image = new Image({"imageId": id});
      var view = new HistoryView({model: historyCollection, info: image});
      historyCollection.fetch({
        reset: true,
        success: function() {
          view.render();
        }
      });
      image.fetch({
        success: function() {
          view.render();
        }
      });
      module.content(view.render().el);
    }
  });
});
