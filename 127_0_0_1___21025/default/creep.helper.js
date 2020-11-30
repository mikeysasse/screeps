var roles = require('creep.roles');

exports.getCreepsWithType = (type) =>  {
    return _.filter(Game.creeps, (creep) => creep.memory.type == type);
};

exports.countCreepsWithType = (type) =>  {
  var creeps = exports.getCreepsWithType(type);
  return creeps.length == undefined ? 0 : creeps.length;
}

exports.getMainSpawn = () =>  {
  return Game.spawns[roles.SPAWN_MAIN];
}
