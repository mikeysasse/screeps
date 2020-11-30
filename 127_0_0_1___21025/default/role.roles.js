var harvester = require("role.harvester");

function run(creep) {
    if (creep.memory.role == 'harvester') {
        harvester.run(creep);
    }
};

function getCreepsWithType(type) {
    return _.filter(Game.creeps, (creep) => creep.memory.type == type);
};

module.exports = {run, getCreepsWithType};