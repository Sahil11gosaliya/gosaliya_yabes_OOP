import { CelestialBody } from './celestial.js';
import { setupSlider } from './slider.js';
import { typeAnimation } from './gsap.js';






// Sun
const sun = new CelestialBody(
    "Sun",
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




const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);