define(['backbone', "text!app/system/views/templates/index.html"], function(Backbone, template) {
  return Backbone.View.extend({
    template: _.template(template),
    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.model.bind('reset', this.render, this);
      this.version = options['version'];
      this.version.bind('change', this.render, this);
      this.version.bind('reset', this.render, this);
    },
    render: function() {
      $(this.el).html(this.template({model: this.model, version: this.version}));
      return this;
    }
  });
});
