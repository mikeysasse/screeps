var roles = require('role.roles');
var harvester = require('role.harvester');

function run() {
    var harvesters = roles.getCreepsWithType('harvester');
    console.log("Harvesters: " + harvesters);
    
    if (harvesters.length < 2) {
        
    }
}

module.exports = { run };