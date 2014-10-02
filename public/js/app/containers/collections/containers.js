define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    url: '/api/request/containers',
    parse: function(response) {
      return response;
    }
  });
});
