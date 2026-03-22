define([
  'backbone',
  'text!app/container/templates/show.html',
  'app/container/helpers/navigation'
], function(Backbone, template, NavigationHelper) {
  return Backbone.View.extend({
    template: _.template(template),
    initialize: function(options) {
      this.model = options.model;
      this.section = NavigationHelper.normalize(options.section || 'info');
      this.model.bind('reset', this.render, this);
      this.model.bind('change', this.render, this);
    },
    render: function() {
      $(this.el).html(this.template({
        model: this.model,
        activeSection: this.section,
        sections: NavigationHelper.sections(this.model.id)
      }));
      this.toggleView(this.section);
      return this;
    },
    toggleView: function(target){
      $(this.el).find(".module-nav-content").hide();
      $(this.el).find("#module-nav-content-" + target).show();
    }
  });
});
