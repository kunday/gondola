define(['backbone',
  'text!app/shared/templates/module.html'], function (Backbone, template) {
    // Takes the following:
    // title  - to be displayed at the top of the module.
    // name   - name of your module, this has to be unique.
    // tabs   - tabs that appear as part of the module.
    // default- default location to navigateTo.
    // router - router that you intend to use with this module.
  return Backbone.View.extend({
    template: _.template(template),
    tagName: 'div',
    events: {
      'click .module-nav-tabs': 'navigate'
    },
    initialize: function(options) {
      this.model = {
        title:    options.title,
        name:     options.name,
        tabs:     options.navigationTabs,
      };
      this.default = options.default;
      this.router  = options.router;
    },
    render: function() {
      $(this.el).html(this.template({model: this.model}));
      this.setActiveHighlight();
      return this;
    },
    setActiveHighlight: function() {
      $(this.el).find("#module-nav-" + this.default).addClass('active');
    },
    navigate: function(e) {
      var navigateTarget = $(e.currentTarget).find('a').text();
      this.router.navigate('system/' + navigateTarget,  {trigger: true});
    },
    content: function(content) {
      $("#module-nav-content").html(content);
    }
  });
});
