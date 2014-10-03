define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    url: function() {
      return '/api/request/containers/json?all=1';
    },
    parse: function(response) {
      return response;
    }
  });
});
