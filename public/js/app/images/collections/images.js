define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    url: '/api/request/images/json',
    parse: function(response) {
      return response;
    }
  });
});
