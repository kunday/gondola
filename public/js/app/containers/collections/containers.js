define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    exited: 1,
    all: 0,
    url: function() {
      return '/api/request/containers/json?all=' + this.running_status;
    },
    parse: function(response) {
      return response;
    }
  });
});
