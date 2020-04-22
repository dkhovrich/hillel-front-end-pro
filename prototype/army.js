function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
    return distance >= this.maxDistance;
};

Unit.prototype.isReadyToFight = function () {
    return this.health >= this.maxHealth / 2;
};

Unit.prototype.restore = function () {
    if (this.health < this.maxHealth) {
        this.health = this.maxHealth;
    }
};

Unit.prototype.clone = function () {
    return Object.assign({}, this);
};

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) {
        this.combineUnits(defaultUnits);
    }
}

Army.prototype.isReadyToMove = function (distance) {
    return this.units.every(unit => unit.isReadyToMove(distance));
};

Army.prototype.isReadyToFight = function () {
    return this.units.every(unit => unit.isReadyToFight());
};

Army.prototype.restore = function () {
    this.units.forEach(unit => unit.restore());
};

Army.prototype.getReadyToMoveUnits = function (distance) {
    return this.units.filter(unit => unit.isReadyToMove(distance));
};

Army.prototype.combineUnits = function (unitsArray) {
    unitsArray.forEach(unit => this.units.push(unit));
};

Army.prototype.cloneUnit = function (unitId) {
    return Object.assign({}, this.units[unitId]);
};
