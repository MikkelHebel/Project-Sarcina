// Key:  {Name, x, y}
const coords = { 
    "A": {"Name": "Mikkels hus", x:  900, y:  150},
    "B": {"Name": "Tims hus", x: 1000, y: 400},
    "C": {"Name": "Google", x: 1100, y: 100},
    "D": {"Name": "Facebook", x: 450, y: 600},
    "E": {"Name": "Elgiganten", x: 250, y: 590},
    "F": {"Name": "Tesla", x: 120, y: 160},
    "G": {"Name": "Sebastians hus", x: 120, y: 360},
    "H": {"Name": "Ikke postcenter", x: 350, y: 400},
    "P": {"Name": "Postcenter", x: 600, y: 100},
    "S": {"Name": "Shoppingcenter", x: 500, y: 150},
    "Z": {"Name": "SpaceX", x: 600, y: 350}
}

// Each element is an array of length 2 that defines starting point and ending point of a road
const roads = {
    "AB": {x1: 900, y1: 150, x2: 1000, y2: 400},
    "AC": {x1: 900, y1: 150, x2: 1100, y2: 100},
    "AP": {x1: 900, y1: 150, x2: 600, y2: 100},
    "BZ": {x1: 1000, y1: 400, x2: 600, y2: 350},
    "DE": {x1: 450, y1: 600, x2: 250, y2: 590},
    "DZ": {x1: 450, y1: 600, x2: 600, y2: 350},
    "EG": {x1: 250, y1: 590, x2: 120, y2: 360},
    "GF": {x1: 120, y1: 360, x2: 120, y2: 160},
    "GH": {x1: 120, y1: 360, x2: 350, y2: 400},
    "GS": {x1: 120, y1: 360, x2: 500, y2: 150},
    "SP": {x1: 500, y1: 150, x2: 600, y2: 100},
    "SH": {x1: 500, y1: 150, x2: 350, y2: 400},
    "SZ": {x1: 500, y1: 150, x2: 600, y2: 350},
    "HZ": {x1: 350, y1: 400, x2: 350, y2: 400},
    "FS": {x1: 120, y1: 160, x2: 500, y2: 150},
};

const connections = [
    ["A","B"],
    ["A","C"],
    ["A","P"],
    ["B","Z"],
    ["D","E"],
    ["D","Z"],
    ["E","G"],
    ["G","F"],
    ["G","H"],
    ["G","S"],
    ["S","P"],
    ["S","H"],
    ["S","Z"],
    ["H","Z"],
    ["F","S"]
  ];
