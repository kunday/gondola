define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    url: '/api/request/version'
  });
});
