define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    url: '/api/request/images',
    parse: function(response) {
      return response;
    }
  });
});
