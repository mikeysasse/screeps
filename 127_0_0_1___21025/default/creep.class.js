exports.Creep = class {
    constructor(creep) {
        this.creep = creep;
        this.memory = creep.memory;
    }

    run() {
      throw new Error("run() not implemented, role: " + this.memory.role);
    }

    moveVisualize(target, color = '#ffaa00') {
        this.creep.moveTo(target, {visualizePathStyle: {stroke: color}});
    }
}
