define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    url: '/api/request',
    parse: function(response) {
      return response;
    }
  });
});
