define(['backbone'], function(Backbone) {
  return Backbone.Collection.extend({
    url: '/api/containers/json'
  });
});
