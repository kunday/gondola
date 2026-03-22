define(['backbone',
  'text!app/container/templates/changes.html',
  'app/container/helpers/navigation'],
  function(Backbone, template, NavigationHelper) {
    return Backbone.View.extend({
      template: _.template(template),
      initialize: function(){
        this.model.bind('change', this.render, this);
        this.model.bind('reset', this.render, this);
      },
      render: function() {
        $(this.el).html(this.template({
          model: this.model,
          containerId: this.model.id,
          activeSection: 'changes',
          sections: NavigationHelper.sections(this.model.id)
        }));
        return this;
      }
    });
});
