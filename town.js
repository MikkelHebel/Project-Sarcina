let packages = [{ current: "A", destination: "B" }, { current: "A",
destination: "C" }, { current: "A", destination: "G" }];

// Build connection object, each key (location) should contain an array of all connected locations
function build_connections() {
  let conn = Object.create(null);
  function addConn(from, to) {
    if (conn[from] == null) {
      conn[from] = [to];
    } else {
      conn[from].push(to);
    }
  }
  for (let [from, to] of roadConnections) {
    addConn(from, to);
    addConn(to, from);
  }
  return conn;
}

const connections = build_connections();
console.log(connections.A);
// Output: Array(3) [ "B", "C", "P" ]

// State object template for the town
const state = {
    init(robot_loc, packages) {
        this.robot_loc = robot_loc;
        this.packages = packages;
    },

    move(to) {
      if (!connections[this.robot_loc].includes(to)) {
        return this;
      } else {
        let packages = this.packages.roadConnections(p => {
          if (p.robot_loc != this.robot_loc) return p;
          return {current: to, destination: p.to};
        }).filter(p => p.robot_loc != p.to);
        return new state(to, packages);
      }
    }
};

let test = Object.create(state);
test.init("A", [{ current: "A", destination: "B" }, { current: "A",destination: "C" }]);
let travel = ["B", "A", "C", "P"];
for (let to of travel) {    
  test = test.move(to);
  console.log(test);
}

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.packages.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return {direction: randomPick(connections[state.place])};
}