define(['backbone', 'text!app/container/templates/show.html'], function(Backbone, template) {
  return Backbone.View.extend({
    template: _.template(template),
    events: {
      'click .module-nav-tabs': 'navigate'
    },
    initialize: function(options) {
      this.model = options.model;
      this.model.tabs = ['info', 'state', 'networking'];
      this.model.bind('reset', this.render, this);
      this.model.bind('change', this.render, this);
    },
    render: function() {
      $(this.el).html(this.template({model: this.model, log: this.log}));
      this.toggleView("info");
      return this;
    },
    resetActiveLinks: function(currentTarget) {
      $(this.el).find("li").removeClass("active");
      $(currentTarget).addClass("active");
    },
    toggleView: function(target){
      $(this.el).find(".module-nav-content").hide();
      $(this.el).find("#module-nav-content-" + target).show();
    },
    navigate: function(e) {
      this.resetActiveLinks(e.currentTarget);
      this.toggleView($(e.currentTarget).find("a").data("target"));
    }
  });
});
