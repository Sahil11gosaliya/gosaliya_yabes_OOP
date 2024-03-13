import { CelestialBody } from './celestial.js';
import { greensock } from './gsap.js';
import { setupSlider } from './slider.js';

greensock();
setupSlider();

// Sun
const sun = new CelestialBody(
    "Sun",
    "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. The Sun's diameter is about 1.39 million kilometers, i.e., 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System.",
    1392700, // Diameter in km
    1.989e30, // Mass in kg
    274, // Gravity in m/s²
    "5,500°C", // Temperature Range
    0, // Number of Moons
    "N/A", // Distance from Sun
    "N/A", // Orbital Period
    "25.05 days", // Rotation Period (equatorial)
    "Hydrogen, Helium", // Atmospheric Composition
    "Contains 99.8% of the total mass of the Solar System", // Special Features
    "No", // Possible Life
    "Plasma", // Surface Conditions
    "No rain" // Rains
);

// Planets
const mercury = new CelestialBody(
    "Mercury",
    "Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods. Mercury is a rocky planet, composed mostly of silicate minerals and metals. It has no natural satellites and no substantial atmosphere, meaning it has a surface that is heavily cratered and similar in appearance to the Moon.",
    4879,
    3.3011e23,
    3.7,
    "-173 to 427°C",
    0,
    "0.39 AU",
    "88 days",
    "58.7 days",
    "Minimal (Hydrogen, Helium)",
    "Smallest planet, no significant atmosphere",
    "No",
    "Rocky",
    "No rain"
);

const venus = new CelestialBody(
    "Venus",
    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. It is often called Earth's sister planet because of their similar size, mass, proximity to the Sun, and bulk composition. However, it has a dense atmosphere that consists mainly of carbon dioxide, which causes a runaway greenhouse effect that raises its surface temperature to about 462 degrees Celsius.",
    12104,
    4.867e24,
    8.87,
    "462°C",
    0,
    "0.72 AU",
    "225 days",
    "-243 days (retrograde rotation)",
    "Carbon dioxide, Nitrogen",
    "Hottest planet, thick atmosphere",
    "No",
    "Rocky",
    "Sulfuric acid rain"
);

const earth = new CelestialBody(
    "Earth",
    "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. It is home to millions of species, including humans. Earth's atmosphere primarily consists of nitrogen and oxygen. It has one natural satellite, the Moon, which plays a significant role in stabilizing Earth's axial tilt and thus its climate.",
    12756,
    5.972e24,
    9.807,
    "-88 to 58°C",
    1, // Moon
    "1 AU",
    "365.25 days",
    "24 hours",
    "Nitrogen, Oxygen",
    "Only planet known to support life",
    "Yes",
    "Water, land",
    "Water rain"
);

const mars = new CelestialBody(
    "Mars",
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. It is often called the 'Red Planet' because of its reddish appearance, which is caused by iron oxide prevalent on its surface. Mars has surface features reminiscent of both the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
    6779,
    6.417e23,
    3.721,
    "-153 to 20°C",
    2, // Phobos and Deimos
    "1.52 AU",
    "687 days",
    "24.6 hours",
    "Carbon dioxide, Nitrogen, Argon",
    "Largest volcano and canyon in the solar system",
    "Potentially in the past",
    "Desert, icy poles",
    "No rain (frozen water and carbon dioxide snow)"
);

const jupiter = new CelestialBody(
    "Jupiter",
    "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun but is two and a half times the mass of all the other planets in the Solar System combined. Jupiter is primarily composed of hydrogen and helium. It lacks a well-defined solid surface, but it may have a solid core at its center.",
    139820,
    1.898e27,
    24.79,
    "-108°C",
    79, // Known moons
    "5.20 AU",
    "12 years",
    "9.9 hours",
    "Hydrogen, Helium",
    "Largest planet, Great Red Spot",
    "No",
    "Gas giant",
    "No rain (ammonia crystals)"
);

const saturn = new CelestialBody(
    "Saturn",
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has a prominent ring system that consists of nine continuous main rings and three discontinuous arcs. Saturn is primarily composed of hydrogen and helium.",
    116460,
    5.683e26,
    10.44,
    "-139°C",
    82, // Known moons
    "9.58 AU",
    "29 years",
    "10.7 hours",
    "Hydrogen, Helium",
    "Extensive ring system",
    "No",
    "Gas giant",
    "No rain (ammonia crystals)"
);

const uranus = new CelestialBody(
    "Uranus",
    "Uranus is the seventh planet from the Sun and the third-largest in the Solar System. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of -224°C. Like the other giant planets, Uranus has a ring system, a magnetosphere, and numerous moons. The atmosphere of Uranus is composed primarily of hydrogen and helium.",
    50724,
    8.681e25,
    8.69,
    "-195°C",
    27, // Known moons
    "19.22 AU",
    "84 years",
    "-17.2 hours (retrograde rotation)",
    "Hydrogen, Helium, Methane",
    "Rotates on its side, coldest atmosphere",
    "No",
    "Ice giant",
    "No rain (methane ice crystals)"
);

const neptune = new CelestialBody(
    "Neptune",
    "Neptune is the eighth planet from the Sun and the fourth-largest in the Solar System. It is named after the Roman god of the sea and has the fastest winds in the Solar System, reaching speeds of up to 2,100 kilometers per hour. Neptune's atmosphere is primarily composed of hydrogen, helium, and methane.",
    49244,
    1.024e26,
    11.15,
    "-201°C",
    14, // Known moons
    "30.05 AU",
    "165 years",
    "16 hours",
    "Hydrogen, Helium, Methane",
    "Strongest winds in the solar system",
    "No",
    "Ice giant",
    "No rain (methane ice crystals)"
);

const pluto = new CelestialBody(
    "Pluto",
    "Although no longer officially a planet, Pluto is a large world in the Kuiper belt, a ring of bodies beyond Neptune. It was discovered in 1930 and was long considered the ninth planet. However, in 2006, the International Astronomical Union reclassified Pluto as a 'dwarf planet' due to its small size and eccentric orbit.",
    2376,
    1.309e22,
    0.62,
    "-229°C",
    5, // Known moons
    "39.48 AU",
    "248 years",
    "-153.3 hours",
    "Nitrogen, Methane, Carbon Monoxide",
    "Dwarf planet, heart-shaped glacier",
    "Potentially in the past",
    "Icy plains, mountains",
    "Nitrogen snow"
);

const bodies = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];

// Append celestial body properties to respective HTML elements
const appendProperties = (element, celestialBody) => {
    const propertiesDiv = celestialBody.createItemElement();
    element.querySelector('.properties').appendChild(propertiesDiv);
};

const celestialElements = [
    document.querySelector('.item.sun'),
    document.querySelector('.item.mercury'),
    document.querySelector('.item.venus'),
    document.querySelector('.item.earth'),
    document.querySelector('.item.mars'),
    document.querySelector('.item.jupiter'),
    document.querySelector('.item.saturn'),
    document.querySelector('.item.uranus'),
    document.querySelector('.item.neptune'),
    document.querySelector('.item.pluto')
];

celestialElements.forEach((element, index) => {
    appendProperties(element, bodies[index]);
});
