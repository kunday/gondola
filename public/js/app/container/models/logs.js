define(['backbone'], function () {
  return Backbone.Model.extend({
    initialize: function(options) {
      this.containerId = options.id;
    },
    urlRoot: '/api/request/containers/',
    url: function() {
      return this.urlRoot + this.containerId + "/logs?stdout=true&stderr=true&follow=false&timestamps=true";
    },
    sync: function(method, model, options) {
      var self = this;
      options = options || {};
      return Backbone.ajax({
        url: this.url(),
        dataType: 'text',
        success: function(data) {
          // Docker multiplexed stream has 8-byte binary header per frame;
          // strip everything before the timestamp at the start of each line
          var lines = data.split('\n').map(function(line) {
            return line.replace(/^.*?(\d{4}-\d{2}-\d{2}T)/, '$1');
          }).filter(function(line) { return line.length > 0; });
          self.set('logs', lines.join('\n'));
          if (options.success) options.success(model, data, options);
        },
        error: function(xhr, status, err) {
          if (options.error) options.error(model, xhr, options);
        }
      });
    }
  })
});
