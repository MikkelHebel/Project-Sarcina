let packages = [{ current: "A", destination: "B" }, { current: "A",
destination: "C" }, { current: "A", destination: "G" }];

// Build connection object, each key (location) should contain an array of all connected locations
function build_connections(connections) {
  let conn = Object.create(null);
  function addConn(from, to) {
    if (conn[from] == null) {
      conn[from] = [to];
    } else {
      conn[from].push(to);
    }
  }
  for (let [from, to] of connections.map(r => r.split("-"))) {
    addConn(from, to);
    addConn(to, from);
  }
  return conn;
}

const connections = build_connections(connections);


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
