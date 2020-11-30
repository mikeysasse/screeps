var roles = require('role.roles');
var spawner = require('role.spawner');

function loop() {
    spawner.run();
    for (var creep in Game.creeps) {
        roles.run(creep);
    }
}

function getMainSpawn() {
    return Game.spawns['main'];
}

module.exports = { loop, getMainSpawn }