var harvester = require('creep.harvester');
var roles = require('creep.roles');
var storage = require('creep.storage');

exports.make = function(type, spawn) {
    switch (type) {
        case roles.ROLE_HARVESTER:
            console.log("test55555" + spawn.spawnCreep([WORK, MOVE, CARRY], type + Game.time, { memory: { role: roles.ROLE_HARVESTER } }));
            storage.register(new harvester.Harvester(creep));
            return;
          default: throw new Exception("No factory creep with type: " + type);
    }
};
