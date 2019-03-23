function Building(floors, exits, windows) {
    this.floors = floors;
    this.exits = exits;
    this.windows = windows;
};

Building.prototype.structure = function printInfoAboutBuilding() {
    console.log("bulding have " + this.floors + " floors " +  this.exits + " exits and " + this.windows + " windows" );
};

var myHouse = new Building(11, 6, 552);
var magazine = new Building(2, 2, 22);
var hospital = new Building(4, 3, 55);

myHouse.structure();
magazine.structure();
hospital.structure();