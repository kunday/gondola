define(['backbone',
  'text!app/container/templates/changes.html'],
  function(Backbone, template) {
    return Backbone.View.extend({
      template: _.template(template),
      initialize: function(){
        this.model.bind('change', this.render, this);
        this.model.bind('reset', this.render, this);
      },
      render: function() {
        $(this.el).html(this.template({model: this.model}));
        return this;
      }
    });
});
