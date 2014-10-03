define(['backbone', "text!app/system/views/templates/index.html"], function(Backbone, template) {
  return Backbone.View.extend({
    template: _.template(template),
    initialize: function() {
      this.model.bind('change', this.render, this);
      this.model.bind('reset', this.render, this);
    },
    render: function() {
      $(this.el).html(this.template({model: this.model}));
      return this;
    }
  });
});
