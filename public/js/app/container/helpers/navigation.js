define(function() {
  var validSections = ['info', 'state', 'networking', 'changes', 'logs', 'stats'];

  return {
    normalize: function(section) {
      if (_.contains(validSections, section)) {
        return section;
      }

      return 'info';
    },
    sections: function(containerId) {
      return [
        {id: 'info', label: 'info', route: 'container/show/' + containerId + '/info'},
        {id: 'state', label: 'state', route: 'container/show/' + containerId + '/state'},
        {id: 'networking', label: 'networking', route: 'container/show/' + containerId + '/networking'},
        {id: 'changes', label: 'changes', route: 'container/changes/' + containerId},
        {id: 'logs', label: 'logs', route: 'container/logs/' + containerId},
        {id: 'stats', label: 'stats', route: 'container/stats/' + containerId}
      ];
    }
  };
});
