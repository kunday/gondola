define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    url: '/api/request/containers/json',
    parse: function(response) {
      return response;
    }
  });
});
