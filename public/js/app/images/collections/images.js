define(['backbone', 'app/images/models/image'], function(Backbone, Image) {
  return Backbone.Collection.extend({
    url: '/api/request/images/json',
    model: Image,
    parse: function(response) {
      return response;
    }
  });
});
