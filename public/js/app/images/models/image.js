define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    initialize: function(options) {
      this.imageId = options.imageId;
    },
    urlRoot: '/api/request/images/',
    url: function() {
      return this.urlRoot + this.imageId + "/json";
    }
  });
});
