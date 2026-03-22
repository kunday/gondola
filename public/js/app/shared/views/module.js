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
    initialize: function(options) {
      this.model = {
        title:    options.title,
        subtitle: options.subtitle,
        name:     options.name,
        tabs:     this.normalizeTabs(options.navigationTabs || [], options.default),
      };
    },
    normalizeTabs: function(tabs, activeTab) {
      return _.map(tabs, function(tab) {
        if (_.isString(tab)) {
          return {
            id: tab,
            label: tab,
            route: tab,
            active: tab === activeTab,
            disabled: false
          };
        }

        return {
          id: tab.id,
          label: tab.label || tab.id,
          route: tab.route,
          active: tab.id === activeTab,
          disabled: !!tab.disabled
        };
      });
    },
    render: function() {
      $(this.el).html(this.template({model: this.model}));
      return this;
    },
    content: function(content) {
      this.$("#module-nav-content").html(content);
    }
  });
});
