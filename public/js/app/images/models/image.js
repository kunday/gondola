define(['backbone', 'app/images/collections/history'], function(Backbone, HistoryCollection) {
  return Backbone.Model.extend({
    urlRoot: '/api/request/images/',
    endpoint: function(id, path) {
      return this.urlRoot + "/" + id + "/" + path;
    },
    history: function () {
      return new HistoryCollection({url: this.endpoint(this.get("Id"), "history")});
    }
  });
});
