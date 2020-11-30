var helper = require('creep.helper');
var roles = require('creep.roles');
var factory = require('creep.factory');
var storage = require('creep.storage');

module.exports = {
  run: function() {
    storage.refresh();
    var harvesters = helper.countCreepsWithType(roles.ROLE_HARVESTER);
    console.log("Harvesters: " + harvesters);
    if (harvesters < 2) {
      factory.make(roles.ROLE_HARVESTER, helper.getMainSpawn());
    }
  }
};
