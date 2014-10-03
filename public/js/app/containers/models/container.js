define(['backbone'], function(Backbone){
  return Backbone.Model.extend({
    initialize: function(options) {
      this.containerId = options.id;
    },
    urlRoot: '/api/request/containers/',
    url: function() {
      return this.urlRoot + this.containerId + "/json";
    }
  });
});
