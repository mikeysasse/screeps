var spawner = require('creep.spawner');
var storage = require('creep.storage');

function loop() {
    spawner.run();
    storage.all().forEach(creep => {
        if (creep != undefined)
          creep.run()
    });
}

module.exports = { loop }
