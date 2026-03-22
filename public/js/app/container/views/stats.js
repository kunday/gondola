define(['backbone',
  'text!app/container/templates/stats.html',
  'app/shared/helpers/disk',
  'app/container/helpers/navigation'],
  function(Backbone, template, DiskHelper, NavigationHelper) {
    return Backbone.View.extend({
      template: _.template(template),
      initialize: function(){
        this.model.bind('change', this.render, this);
        this.model.bind('reset', this.render, this);
      },
      render: function(e) {
        $(this.el).html(this.template({
          model: this.model,
          DiskHelper: DiskHelper,
          containerId: this.model.id,
          activeSection: 'stats',
          sections: NavigationHelper.sections(this.model.id)
        }));
        return this;
      }
    });
});
