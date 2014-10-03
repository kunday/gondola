define(['backbone',
    "text!app/system/views/templates/index.html"],
    function(Backbone, template) {
      return Backbone.View.extend({
        template: _.template(template),
        render: function() {
          $(this.el).html(this.template());
          return this;
        }
      });
    });
