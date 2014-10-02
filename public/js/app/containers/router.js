define(['backbone'], function(Backbone) {
  return Backbone.Router.extend({
    routes: {
      "list": "list",
      "show": "show",
      "delete": "delete"
    },
    list: function () {
      $("#panel").html("list containers");
    },
    show: function () {
      $("#panel").html("show container");
    },
    delete: function () {
      $("#panel").html("delete containers");
    }
  });
});
