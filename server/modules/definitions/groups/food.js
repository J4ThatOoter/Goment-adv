const { basePolygonDamage, basePolygonHealth } = require('../constants.js');
const { makeRelic, makeRare, makeCrasher, makeLaby } = require('../facilitators.js');

// EGGS
Class.egg = {
    PARENT: "food",
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 4.5,
    COLOR: "veryLightGrey",
    INTANGIBLE: true,
    BODY: {
        DAMAGE: 0,
        DENSITY: 2,
        HEALTH: 0.5 * basePolygonHealth,
        PENETRATION: 1,
        PUSHABILITY: 0,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: false,
};
Class.gem = {
    PARENT: "food",
    LABEL: "Gem",
    VALUE: 2e3,
    SHAPE: 6,
    SIZE: 4.5,
    COLOR: "aqua",
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
Class.jewel = {
    PARENT: "food",
    LABEL: "Jewel",
    VALUE: 1e5,
    SHAPE: 6,
    SIZE: 8,
    COLOR: "yellow",
    BODY: {
        DAMAGE: basePolygonDamage / 4,
        DENSITY: 4,
        HEALTH: 50,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
        ACCELERATION: 0.015
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
Class.shinyEgg = makeRare("egg", 0);
Class.legendaryEgg = makeRare("egg", 1);
Class.shadowEgg = makeRare("egg", 2);
Class.rainbowEgg = makeRare("egg", 3);
Class.transEgg = makeRare("egg", 4); //ironic

// SQUARES
Class.square = {
    PARENT: "food",
    LABEL: "Square",
    VALUE: 30,
    SHAPE: 4,
    SIZE: 14,
    COLOR: "gold",
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 4,
        HEALTH: basePolygonHealth,
        PENETRATION: 2,
        ACCELERATION: 0.0075
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
Class.shinySquare = makeRare("square", 0);
Class.legendarySquare = makeRare("square", 1);
Class.shadowSquare = makeRare("square", 2);
Class.rainbowSquare = makeRare("square", 3);
Class.transSquare = makeRare("square", 4);

// TRIANGLES
Class.triangle = {
    PARENT: "food",
    LABEL: "Triangle",
    VALUE: 120,
    SHAPE: 3,
    SIZE: 10,
    COLOR: "orange",
    BODY: {
        DAMAGE: basePolygonDamage,
        DENSITY: 6,
        HEALTH: 3 * basePolygonHealth,
        RESIST: 1.15,
        PENETRATION: 1.5,
        ACCELERATION: 0.005
    },
    DRAW_HEALTH: true,
};
Class.shinyTriangle = makeRare("triangle", 0);
Class.legendaryTriangle = makeRare("triangle", 1);
Class.shadowTriangle = makeRare("triangle", 2);
Class.rainbowTriangle = makeRare("triangle", 3);
Class.transTriangle = makeRare("triangle", 4);

// PENTAGONS
Class.pentagon = {
    PARENT: "food",
    LABEL: "Pentagon",
    VALUE: 400,
    SHAPE: 5,
    SIZE: 21,
    COLOR: "purple",
    BODY: {
        DAMAGE: 1.5 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 10 * basePolygonHealth,
        RESIST: 1.25,
        PENETRATION: 1.1,
        ACCELERATION: 0.0035
    },
    DRAW_HEALTH: true,
};
Class.shinyPentagon = makeRare("pentagon", 0);
Class.legendaryPentagon = makeRare("pentagon", 1);
Class.shadowPentagon = makeRare("pentagon", 2);
Class.rainbowPentagon = makeRare("pentagon", 3);
Class.transPentagon = makeRare("pentagon", 4);
Class.betaPentagon = {
    PARENT: "food",
    LABEL: "Beta Pentagon",
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: "purple",
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 75 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        PENETRATION: 1.1,
        SHIELD: 20 * basePolygonHealth,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
Class.shinyBetaPentagon = makeRare("betaPentagon", 0);
Class.legendaryBetaPentagon = makeRare("betaPentagon", 1);
Class.shadowBetaPentagon = makeRare("betaPentagon", 2);
Class.rainbowBetaPentagon = makeRare("betaPentagon", 3);
Class.transBetaPentagon = makeRare("betaPentagon", 4);

// ALPHA PENTAGONS
Class.alphaPentagon = {
    PARENT: "food",
    LABEL: "Alpha Pentagon",
    VALUE: 15e3,
    SHAPE: 5,
    SIZE: 58,
    COLOR: "purple",
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 562.5 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        PENETRATION: 1.1,
        SHIELD: 40 * basePolygonHealth,
        ACCELERATION: 0.0025
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
Class.shinyAlphaPentagon = makeRare("alphaPentagon", 0);
Class.legendaryAlphaPentagon = makeRare("alphaPentagon", 1);
Class.shadowAlphaPentagon = makeRare("alphaPentagon", 2);
Class.rainbowAlphaPentagon = makeRare("alphaPentagon", 3);
Class.transAlphaPentagon = makeRare("alphaPentagon", 4);

// HEXAGONS
Class.hexagon = {
    PARENT: "food",
    LABEL: "Hexagon",
    VALUE: 500,
    SHAPE: 6,
    SIZE: 25,
    COLOR: "hexagon",
    BODY: {
        DAMAGE: 3 * basePolygonDamage,
        DENSITY: 8,
        HEALTH: 20 * basePolygonHealth,
        RESIST: 1.3,
        SHIELD: 50 * basePolygonHealth,
        PENETRATION: 1.1,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
};
Class.shinyHexagon = makeRare("hexagon", 0);
Class.legendaryHexagon = makeRare("hexagon", 1);
Class.shadowHexagon = makeRare("hexagon", 2);
Class.rainbowHexagon = makeRare("hexagon", 3);
Class.transHexagon = makeRare("hexagon", 4);
Class.heptagon = {
  VALUE: 1200,
  SHAPE: 7,
  LABEL: "Heptagon",
  SIZE: 30,
  COLOR: "green",
  PARENT: ["food"],
  BODY: {
    DAMAGE: 2.5 * basePolygonDamage,
    DENSITY: 9.5,
    HEALTH: 175,
    RESIST: 3,
     DISPLAY_NAME: true,
    PENETRATION: 1.8,
    ACCELERATION: 0.007,
  },
  DRAW_HEALTH: true,
};
Class.shinyHeptagon = makeRare(Class.heptagon, 0);
Class.legendaryHeptagon = makeRare(Class.heptagon, 1);
Class.shadowHeptagon = makeRare(Class.heptagon, 2);
Class.rainbowHeptagon = makeRare(Class.heptagon, 3);
Class.transHeptagon = makeRare(Class.heptagon, 4);
Class.octagon = {
  VALUE: 2860,
  DISPLAY_NAME: true,
  SHAPE: 8,
  SIZE: 45.5,
  LABEL: "Octagon",
  PARENT: ["food"],
  COLOR: "blue",
  BODY: {
    DAMAGE: 3.15 * basePolygonDamage,
    DENSITY: 11,
    HEALTH: 360,
    RESIST: 2,
    PENETRATION: 1.8,
    ACCELERATION: 0.007,
  },
  DRAW_HEALTH: true,
};
Class.shinyOctagon = makeRare(Class.octagon, 0);
Class.legendaryOctagon = makeRare(Class.octagon, 1);
Class.shadowOctagon = makeRare(Class.octagon, 2);
Class.rainbowOctagon = makeRare(Class.octagon, 3);
Class.transOctagon = makeRare(Class.octagon, 4);
Class.nonagon = {
  VALUE: 18800,
  PARENT: ["food"],
  SHAPE: 9,
  LABEL: "Nonagon",
  SIZE: 60,
  DISPLAY_NAME: true,
  COLOR: "#590195",
  BODY: {
    DAMAGE: 5 * basePolygonDamage,
    DENSITY: 11,
    HEALTH: 760,
    RESIST: 7,
    PENETRATION: 3.8,
    ACCELERATION: 0.002,
  },
  DRAW_HEALTH: true,
};
Class.decagon = {
  VALUE: 52860,
  PARENT: ["food"],
  LABEL: "Decagon",
  SHAPE: 10,
  SIZE: 109,
  COLOR: "#282828",
  DISPLAY_NAME: true,
  BODY: {
    DAMAGE: 9.15 * basePolygonDamage,
    DENSITY: 20,
    HEALTH: 1009,
    RESIST: 8,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.hendecagon = {
  PARENT: ["food"],
  VALUE: 325000,
  SHAPE: 11,
  DISPLAY_NAME: true,
  LABEL: "Hendeagon",
  SIZE: 125,
  COLOR: "#4F4F4F",
  BODY: {
    DAMAGE: 18.15 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 2900,
    RESIST: 18.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.dodecagon = {
  PARENT: ["food"],
  DISPLAY_NAME: true,
  VALUE: 325000,
  LABEL: "Dodecagon",
  SHAPE: 12,
  SIZE: 150,
  COLOR: "#2A2A2A",
  BODY: {
    DAMAGE: 26.55 * basePolygonDamage,
    DENSITY: 35.5,
    HEALTH: 3500,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.tridecagon = {
  PARENT: ["food"],
  VALUE: 890000,
  LABEL: "Tridecagon",
  SHAPE: 13,
  SIZE: 210,
  COLOR: "#EFEFEF",
  DISPLAY_NAME: true,
  BODY: {
    DAMAGE: 40.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 5000,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.tetradecagon = {
  PARENT: ["food"],
  VALUE: 890000,
  SHAPE: 14,
  LABEL: "Tetradecagon",
  DISPLAY_NAME: true,
  SIZE: 260,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 80.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 7500,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.pentadecagon = {
  VALUE: 6750000,
  DISPLAY_NAME: true,
  PARENT: ["food"],
  SHAPE: 15,
  LABEL: "Pentadecagon",
  SIZE: 340,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 80.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 10000,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.hexadecagon = {
  VALUE: 24250000,
  PARENT: ["food"],
  SHAPE: 16,
  DISPLAY_NAME: true,
  LABEL: "Hexadecagon",
  SIZE: 395,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 80.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 27500,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.heptadecagon = {
  VALUE: 194250000,
  PARENT: ["food"],
  SHAPE: 17,
  LABEL: "Heptadecagon",
  SIZE: 420,
  DISPLAY_NAME: true,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 80.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 50000,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.octadecagon = {
  VALUE: 194250000,
  PARENT: ["food"],
  DISPLAY_NAME: true,
  SHAPE: 18,
  SIZE: 480,
  LABEL: "Octadecagon",
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 80.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 75000,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.ennadecagon = {
  VALUE: 760250000,
  PARENT: ["food"],
  DISPLAY_NAME: true,
  SHAPE: 19,
  LABEL: "Ennadecagon",
  SIZE: 535,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 80.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 100000,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.icosagon = {
  VALUE: 3760250000,
  PARENT: ["food"],
  DISPLAY_NAME: true,
  SHAPE: 20,
  LABEL: "Icosagon",
  SIZE: 680,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 120.55 * basePolygonDamage,
    DENSITY: 70.5,
    HEALTH: 250000,
    RESIST: 20.5,
    PENETRATION: 3.8,
    ACCELERATION: 0.003,
  },
  DRAW_HEALTH: true,
};
Class.icosikaihenagon = {
  VALUE: 11882906712,
  PARENT: ["food"],
  DISPLAY_NAME: true,
  SHAPE: 21,
  LABEL: "Icosikaihenagon",
  SIZE: 749,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 180,
    HEALTH: 750000,
    PENETRATION: 31.8,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaidigon = {
  VALUE: 55882906712,
  PARENT: ["food"],
  DISPLAY_NAME: true,
  SHAPE: 22,
  LABEL: "Icosikaidigon",
  SIZE: 789,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 225,
    HEALTH: 1250000,
    PENETRATION: 31.8,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaitrigon = {
  VALUE: 102658909125,
  PARENT: ["food"],
  SHAPE: 23,
  LABEL: "Icosikaitrigon",
  SIZE: 805,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 315,
    HEALTH: 6290000,
    PENETRATION: 35.8,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaitetragon = {
  VALUE: 552658909125,
  PARENT: ["food"],
  SHAPE: 24,
  LABEL: "Icosikaitetragon",
  SIZE: 845,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 575,
    HEALTH: 10280000,
    PENETRATION: 40,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaipentagon = {
  VALUE: 1872658909125,
  PARENT: ["food"],
  SHAPE: 25,
  LABEL: "Icosikaipentagon",
  SIZE: 878,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 798,
    HEALTH: 61520000,
    PENETRATION: 50,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaihexagon = {
  VALUE: 8872658909125,
  PARENT: ["food"],
  SHAPE: 26,
  LABEL: "Icosikaihexagon",
  SIZE: 918,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 1078,
    HEALTH: 320000000,
    PENETRATION: 50,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaiheptagon = {
  VALUE: 68872658909125,
  PARENT: ["food"],
  SHAPE: 27,
  LABEL: "Icosikaiheptagon",
  SIZE: 978,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 1078,
    HEALTH: 980000000,
    PENETRATION: 50,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaioctagon = {
  VALUE: 128872658909125,
  PARENT: ["food"],
  SHAPE: 28,
  LABEL: "Icosikaioctagon",
  SIZE: 1068,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 1078,
    HEALTH: 8520000000,
    PENETRATION: 50,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.icosikaiennagon = {
  VALUE: 128872658909125,
  PARENT: ["food"],
  SHAPE: 29,
  LABEL: "Icosikaiennagon",
  SIZE: 1120,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 1378,
    HEALTH: 12020000000,
    PENETRATION: 50,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};
Class.triacontagon = {
  VALUE: 12228872658909125,
  PARENT: ["food"],
  SHAPE: 30,
  LABEL: "Triacontagon",
  SIZE: 1263,
  COLOR: "#2E2E2E",
  BODY: {
    DAMAGE: 2098,
    HEALTH: 2020320000000,
    PENETRATION: 50,
    ACCELERATION: 0.005,
  },
  DRAW_HEALTH: true,
};

// 3D POLYGONS
Class.sphere = {
    PARENT: "food",
    LABEL: "The Sphere",
    FACING_TYPE: "noFacing",
    VALUE: 1e7,
    SHAPE: 0,
    SIZE: 9,
    COLOR: {
        BASE: "veryLightGrey",
        BRIGHTNESS_SHIFT: -15,
    },
    BODY: {
        DAMAGE: 4,
        DENSITY: 16,
        HEALTH: 30,
        RESIST: 1.25,
        PENETRATION: 15,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
    PROPS: [{
        POSITION: [17, 0, 0, 0, 1],
        TYPE: ["egg", { COLOR: { BRIGHTNESS_SHIFT: -14 }, BORDERLESS: true }]
    }, {
        POSITION: [15, 1, -1, 0, 1],
        TYPE: ["egg", { COLOR: { BRIGHTNESS_SHIFT: -9 }, BORDERLESS: true }]
    }, {
        POSITION: [13, 2, -2, 0, 1],
        TYPE: ["egg", { COLOR: { BRIGHTNESS_SHIFT: -8 }, BORDERLESS: true }]
    }, {
        POSITION: [11, 3, -3, 0, 1],
        TYPE: ["egg", { COLOR: { BRIGHTNESS_SHIFT: -3 }, BORDERLESS: true }]
    }, {
        POSITION: [8, 3.25, -3.25, 0, 1],
        TYPE: ["egg", { COLOR: { BRIGHTNESS_SHIFT: 3 }, BORDERLESS: true }]
    }, {
        POSITION: [6, 3, -3, 0, 1],
        TYPE: ["egg", { COLOR: { BRIGHTNESS_SHIFT: 9 }, BORDERLESS: true }]
    }]
};
Class.cube = {
    PARENT: "food",
    LABEL: "The Cube",
    VALUE: 2e7,
    SIZE: 10,
    COLOR: "egg",
    SHAPE: "M -0.065 0.037 L -0.866 -0.425 L -0.866 0.5 L -0.065 0.962 Z M 0.065 0.037 L 0.065 0.962 L 0.866 0.5 L 0.866 -0.425 Z M 0 -0.075 L 0.801 -0.537 L 0 -1 L -0.801 -0.537 Z",
    BODY: {
        DAMAGE: 4.8,
        DENSITY: 20,
        HEALTH: 40,
        RESIST: 1.25,
        PENETRATION: 17.5,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
    GIVE_KILL_MESSAGE: true,
};
Class.tetrahedron = {
    PARENT: "food",
    LABEL: "The Tetrahedron",
    VALUE: 3e7,
    SIZE: 12,
    COLOR: "egg",
    SHAPE: "M -0.065 0.037 L -0.934 -0.477 L -0.054 1.047 Z M 0.065 0.037 L 0.054 1.047 L 0.934 -0.477 Z M 0 -0.075 L 0.88 -0.57 L -0.88 -0.57 Z",
    BODY: {
        DAMAGE: 6,
        DENSITY: 23,
        HEALTH: 50,
        RESIST: 1.25,
        PENETRATION: 22.5,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
Class.octahedron = {
    PARENT: "food",
    LABEL: "The Octahedron",
    VALUE: 4e7,
    SIZE: 13,
    COLOR: "egg",
    SHAPE: "M -0.053 0.053 L -0.947 0.053 L -0.053 0.947 Z M 0.053 0.053 L 0.053 0.947 L 0.947 0.053 Z M 0.053 -0.053 L 0.947 -0.053 L 0.053 -0.947 Z M -0.053 -0.053 L -0.053 -0.947 L -0.947 -0.053 Z",
    BODY: {
        DAMAGE: 6.5,
        DENSITY: 26,
        HEALTH: 60,
        RESIST: 1.25,
        PENETRATION: 30,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};
Class.dodecahedron = {
    PARENT: "food",
    LABEL: "The Dodecahedron",
    VALUE: 5e7,
    SIZE: 18,
    COLOR: "egg",
    SHAPE: "M -0.341 -0.469 H 0.341 L 0.552 0.179 L 0 0.58 L -0.552 0.179 Z M -0.951 -0.309 L -0.95 0.238 L -0.674 0.149 L -0.458 -0.517 L -0.629 -0.751 Z M -0.588 0.809 L -0.067 0.977 L -0.067 0.687 L -0.633 0.276 L -0.909 0.366 Z M 0.588 0.809 L 0.908 0.366 L 0.633 0.276 L 0.067 0.687 L 0.067 0.977 Z M 0.951 -0.309 L 0.629 -0.751 L 0.458 -0.517 L 0.674 0.149 L 0.95 0.238 Z M 0 -1 L -0.52 -0.83 L -0.35 -0.595 H 0.35 L 0.52 -0.83 Z",
    BODY: {
        DAMAGE: 7,
        DENSITY: 28,
        HEALTH: 70,
        RESIST: 1.25,
        PENETRATION: 32.5,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};
Class.icosahedron = {
    PARENT: "food",
    LABEL: "The Icosahedron",
    VALUE: 1e8,
    SIZE: 20,
    COLOR: "egg",
    SHAPE: "M -0.836 0.482 L -0.127 0.639 L -0.617 -0.209 Z M 0.699 -0.333 L 0.913 0.362 L 0.896 -0.447 Z M 0.638 -0.439 L 0.143 -0.972 L 0.836 -0.553 Z M 0.836 0.482 L 0.617 -0.209 L 0.127 0.639 Z M -0.638 -0.439 L -0.143 -0.972 L -0.836 -0.553 Z M -0.699 -0.333 L -0.913 0.362 L -0.896 -0.447 Z M 0 -0.965 L -0.49 -0.43 H 0.49 Z M -0.061 0.772 L -0.77 0.61 L -0.061 1 Z M 0.061 0.772 L 0.77 0.61 L 0.061 1 Z M 0 0.62 L -0.537 -0.31 L 0.537 -0.31 Z",
    BODY: {
        DAMAGE: 9,
        DENSITY: 30,
        HEALTH: 80,
        RESIST: 1.25,
        PENETRATION: 35,
        ACCELERATION: 0.002
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
};

// RELICS
for (let [gemColor, name] of [
    [undefined, ""],
    ["powerGem", "Power"],
    ["spaceGem", "Space"],
    ["realityGem", "Reality"],
    ["soulGem", "Soul"],
    ["timeGem", "Time"],
    ["mindGem", "Mind"]
]) {
    let gem;
    if (gemColor) {
        gem = Class[name + "Gem"] = {
            PARENT: 'gem',
            LABEL: name + ' Gem',
            SHAPE: 6,
            COLOR: gemColor
        }
    }

    Class[name + "EggRelic"] = makeRelic("egg", 0.5, gem, 7);
    Class[name + "SquareRelic"] = makeRelic("square", 1, gem);
    Class[name + "TriangleRelic"] = makeRelic("triangle", 1.45, gem);
    Class[name + "PentagonRelic"] = makeRelic("pentagon", -0.6, gem);
    Class[name + "BetaPentagonRelic"] = makeRelic("betaPentagon", -0.6, gem);
    Class[name + "AlphaPentagonRelic"] = makeRelic("alphaPentagon", -0.6, gem);
    Class[name + "HexagonRelic"] = makeRelic("hexagon", -0.4, gem, undefined, 6.25);
}

// 4D
Class.tesseract = {
    PARENT: "food",
    LABEL: "The Tesseract",
    VALUE: 42e7,
    SIZE: 25,
    COLOR: "egg",
    SHAPE: "M 0.47 -0.375 L 0.71 -0.615 L 0.71 0.615 L 0.47 0.375 Z M -0.375 -0.47 L -0.615 -0.71 L 0.615 -0.71 L 0.375 -0.47 Z M -0.47 0.375 L -0.71 0.615 L -0.71 -0.615 L -0.47 -0.375 Z M 0.375 0.47 L 0.615 0.71 L -0.615 0.71 L -0.375 0.47 Z M 0.35 0.35 L 0.35 -0.35 L -0.35 -0.35 L -0.35 0.35 Z",
    BODY: {
        DAMAGE: 10,
        DENSITY: 40,
        RESIST: 1.25,
        HEALTH: 200,
        PENETRATION: 50,
        ACCELERATION: 0.003
    },
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true
};

// LABY
let polyNames = [ "egg", "square", "triangle", "pentagon", "hexagon" ],
    shinyNames = [ "", "shiny", "legendary", "shadow", "rainbow", "trans" ];
for (let tier = 0; tier < 6; tier++) {
    for (let poly in polyNames) {

        let polyName = polyNames[poly];
        polyName = polyName[0].toUpperCase() + polyName.slice(1);

        for (let shiny in shinyNames) {

            let shinyName = shinyNames[shiny];
            let food = shinyName + polyName;
            food = food[0].toLowerCase() + food.slice(1);

            Class[`laby${tier}${food}`] = // backwards compatability, DO NOT ADD A SEMICOLON HERE. javascript is funny about whitespace characters :))))))
            Class[`laby_${poly}_${tier}_${shiny}_0`] = makeLaby(Class[food], tier, (polyName == "Triangle" && tier > 0) ? 2/3 : 1);

            Class[`laby_${poly}_${tier}_${shiny}_1`] = makeCrasher(Class[`laby_${poly}_${tier}_${shiny}_0`]);
        }
    }
}