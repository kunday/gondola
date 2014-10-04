define(['backbone',
    'app/shared/views/module',
    'app/system/views/version',
    'app/system/views/info',
    'app/system/models/info',
    'app/system/models/version'],
    function(Backbone, Module, VersionView, InfoView, InfoModel, VersionModel) {
      return Backbone.Router.extend({
        moduleInitialize: function(subNav){
          var index = new Module({
            title: "System Information",
            name: "system",
            navigationTabs: ["version", "info"],
            router: this,
            default: subNav
          });
          $("#panel").html(index.render().el);
        },
        routes: {
          "system": "version",
          "system/version": "version",
          "system/info": "info"
        },
        version: function() {
          this.moduleInitialize('version');
          var version = new VersionModel();
          var view = new VersionView({model: version});
          version.fetch({reset: true});
          $("#module-nav-content").html(view.render().el);
        },
        info: function() {
          this.moduleInitialize('info');
          var model = new InfoModel();
          var view = new InfoView({model: model});
          model.fetch({reset: true});
          $("#module-nav-content").html(view.render().el);
        }
      });
    });
