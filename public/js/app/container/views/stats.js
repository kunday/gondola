define(['backbone',
  'text!app/container/templates/stats.html',
  'app/shared/helpers/disk'],
  function(Backbone, template, DiskHelper) {
    return Backbone.View.extend({
      template: _.template(template),
      initialize: function(){
        this.model.bind('change', this.render, this);
        this.model.bind('reset', this.render, this);
      },
      render: function(e) {
        $(this.el).html(this.template({model: this.model, DiskHelper: DiskHelper}));
        return this;
      }
    });
});
