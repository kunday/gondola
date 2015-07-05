define(['backbone',
'text!app/images/views/templates/index.html',
'app/shared/helpers/disk'], function(Backbone, template, DiskHelper) {
  return Backbone.View.extend({
    template: _.template(template),
    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.model.bind('reset', this.render, this);
    },
    render: function() {
      $(this.el).html(this.template({model: this.model, helper: DiskHelper}));
      return this;
    }
  });
});
