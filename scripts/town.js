// Build connection object, each key (location) should contain an array of all connected locations
function build_connections() {
const connections = build_connections();
console.log(connections.A);
// Output: Array(3) [ "B", "C", "P" ]

let packages = [{ current: "A", destination: "B" }, { current: "A",
destination: "C" }, { current: "A", destination: "G" }];

}


// State object template for the town
const state = {
    init(robot_loc, packages) {
        this.robot_loc = robot_loc;
        this.packages = packages;

    let test = Object.create(state);test.init("A", [{ current: "A", destination: "B" }, { current: "A",destination: "C" }]);
    let travel = ["B", "A", "C", "P"];
    for (let to of travel) {    
      test = test.move(to);
      console.log(test);
      }
    },

    move(to) {}
};
