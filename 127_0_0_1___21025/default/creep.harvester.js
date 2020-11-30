var creepclass = require('creep.class');

const STORES = [STRUCTURE_SPAWN];

exports.Harvester = class Harvester extends creepclass.Creep {
  constructor(creep) {
		super(creep);
	}

	run() {
		console.log("test" + this.creep);
		if (this.creep.store.getFreeCapacity() > 0) {
	    var energy = this.creep.room.find(FIND_SOURCES);
	    this.creep.say(this.creep.harvest(energy[0]));
	    if (this.creep.harvest(energy[0]) == ERR_NOT_IN_RANGE) {
	      this.creep.moveTo(energy[0]);
	    }
	  } else {
	    var stores = _.filter(this.creep.room.find(FIND_STRUCTURES, {
	      filter: (structure) => STORES.some((store) => structure.structureType == store) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
	    }));

	    if (this.creep.transfer(stores[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
	      this.creep.moveTo(stores[0]);
	    }
	  }
	}
}
