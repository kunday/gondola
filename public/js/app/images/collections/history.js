define(['backbone'], function (Backbone) {
  var HistoryLayer = Backbone.Model.extend({
    idAttribute: '_index'
  });

  return Backbone.Collection.extend({
    model: HistoryLayer,
    initialize: function (options) {
      this.imageId = options.imageId;
    },
    rootUrl: '/api/request/images/',
    url: function() {
      return this.rootUrl + this.imageId + "/history";
    },
    parse: function(response) {
      return _.map(response, function(layer, index) {
        layer._index = index;
        return layer;
      });
    }
  });
});
