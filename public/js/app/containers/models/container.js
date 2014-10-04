define(['backbone'], function(Backbone){
  return Backbone.Model.extend({
    initialize: function(options) {
      this.containerId = options.id;
    },
    urlRoot: '/api/request/containers/',
    url: function() {
      return this.urlRoot + this.containerId + "/json";
    },
    start: function() {
      this._post("start");
    },
    stop: function() {
      this._post("stop");
    },
    restart: function() {
      this._post("restart");
    },
    kill: function() {
      this._post("kill");
    },
    pause: function() {
      this._post("pause");
    },
    unpause: function() {
      this._post("unpause");
    },
    remove: function() {
      this._post("remove");
    },
    _post: function(endpoint) {
      $.ajax({
        type: 'POST',
        url: this.urlRoot+this.containerId+"/"+endpoint,
        async: false
      });
    }
  });
});
