define(['backbone'], function (Backbone) {
  return Backbone.Collection.extend({
    initialize: function (options) {
      this.imageId = options["imageId"];
    },
    rootUrl: '/api/request/images/',
    url: function() {
      return this.rootUrl + this.imageId + "/history";
    },
    parse: function(response) {
      return response;
    }
  });
});
