define(['backbone',
    'app/system/views/index',
    'app/system/views/version',
    'app/system/views/info',
    'app/system/models/info',
    'app/system/models/version'],
    function(Backbone, Index, VersionView, InfoView, InfoModel, VersionModel) {
      return Backbone.Router.extend({
        moduleInitialize: function(subNav){
          var index = new Index();
          $("#panel").html(index.render().el);
          this.resetLinks();
          this.setActiveLink(subNav);
        },
        resetLinks: function() {
          $('.system-nav-tabs').removeClass('active');
        },
        setActiveLink: function(element) {
          console.log("#system-nav-"+element);
          $("#system-nav-"+element).addClass('active');
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
          $("#system-nav-content").html(view.render().el);
        },
        info: function() {
          this.moduleInitialize('info');
          var model = new InfoModel();
          var view = new InfoView({model: model});
          model.fetch({reset: true});
          $("#system-nav-content").html(view.render().el);
        }
      });
    });
