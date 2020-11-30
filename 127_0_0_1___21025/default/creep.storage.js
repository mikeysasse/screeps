
var creeps = [];
var queue = [];

exports.all = () => {
	return creeps;
}

exports.spawned = (name) => {
	queue.push(name);
};

exports.processQueue = () => {// TODO need to wrap it still
	for (var name in Game.creeps) {
		for (var queued in queue) {
			if (name == queue) {
				queueRemove(queued);
				register(Game.creeps[name]);
				console.log("registered: " + name);
			}
		}
	}
}

function queueRemove(value) {
		 return arr.filter(function(ele){
				 return ele != value;
		 });
	 }

exports.freeMemory = () => {
	for (var name in Memory.creeps) {
		if (!Game.creeps[name]) {
			delete Memory.creeps[name];
			console.log("Deleted creep memory: " + name);
		}
	}
};
