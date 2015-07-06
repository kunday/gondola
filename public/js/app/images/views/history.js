define(['backbone',
'text!app/images/views/templates/history.html',
'app/shared/helpers/disk'], function(Backbone, template, DiskHelper) {
  return Backbone.View.extend({
    template: _.template(template),
    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.model.bind('reset', this.render, this);
      this.info = options.info;
    },
    render: function() {
      $(this.el).html(this.template({model: this.model, info: this.info, helper: DiskHelper}));
      return this;
    }
  });
});
