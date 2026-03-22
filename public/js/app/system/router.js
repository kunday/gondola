define(['backbone',
    'app/shared/views/module',
    'app/system/views/version',
    'app/system/views/info',
    'app/system/models/info',
    'app/system/models/version'],
    function(Backbone, Module, VersionView, InfoView, InfoModel, VersionModel) {
      return Backbone.Router.extend({
        moduleInitialize: function(subNav){
          var appModule = new Module({
            title: "System Information",
            name: "system",
            subtitle: "Docker daemon version and host level information.",
            navigationTabs: [
              {id: "version", label: "version", route: "system/version"},
              {id: "info", label: "info", route: "system/info"}
            ],
            default: subNav
          });
          $("#panel").html(appModule.render().el);
          return appModule;
        },
        routes: {
          "system": "version",
          "system/version": "version",
          "system/info": "info"
        },
        version: function() {
          var module = this.moduleInitialize('version');
          var version = new VersionModel();
          var view = new VersionView({model: version});
          version.fetch({reset: true});
          module.content(view.render().el);
        },
        info: function() {
          var module = this.moduleInitialize('info');
          var model = new InfoModel();
          var view = new InfoView({model: model});
          model.fetch({reset: true});
          module.content(view.render().el);
        }
      });
    });
