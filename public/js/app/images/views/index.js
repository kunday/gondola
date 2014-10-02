define(['backbone', 'text!app/images/views/templates/index.html'], function(Backbone, template) {
  return Backbone.View.extend({
    template: _.template(template),
    initialize: function(options) {
      this.model.bind('change', this.render, this);
      this.model.bind('reset', this.render, this);
    },
    events: {
      "click .image-history": "history"
    },
    render: function() {
      $(this.el).html(this.template({model: this.model}));
      return this;
    },
    remove: function() {
    },
    inspect: function() {
    },
    history: function(e) {
      console.log($(e.currentTarget).data('image-id'));
    }
  });
});
