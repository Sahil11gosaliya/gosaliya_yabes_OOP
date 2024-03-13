export class CelestialBody {
    constructor(name, description, diameter, mass, gravity, temperatureRange, numberOfMoons, distanceFromSun, orbitalPeriod, rotationPeriod, atmosphericComposition, specialFeatures, possibleLife, surfaceConditions, rains) {
        this.name = name;
        this.description = description;
        this.diameter = diameter; // in kilometers
        this.mass = mass; // in kilograms
        this.gravity = gravity; // in m/s²
        this.temperatureRange = temperatureRange;
        this.numberOfMoons = numberOfMoons;
        this.distanceFromSun = distanceFromSun; // in AU or MKm
        this.orbitalPeriod = orbitalPeriod;
        this.rotationPeriod = rotationPeriod;
        this.atmosphericComposition = atmosphericComposition;
        this.specialFeatures = specialFeatures;
        this.possibleLife = possibleLife;
        this.surfaceConditions = surfaceConditions;
        this.rains = rains;
    }

    createItemElement() {
        const item = document.createElement('li');
        item.className = 'item';

        const content = document.createElement('div');
        content.className = 'content';

        // Title and description
        const title = document.createElement('h2');
        title.className = 'title';
        title.textContent = this.name;

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = this.description;

        // Properties
        const propertiesDiv = document.createElement('div');
        propertiesDiv.className = 'properties';

        const properties = [
            { label: 'Diameter', value: `${this.diameter} km` },
            { label: 'Mass', value: `${this.mass} kg` },
            { label: 'Gravity', value: `${this.gravity} m/s²` },
            { label: 'Temperature Range', value: `${this.temperatureRange} °C` },
            { label: 'Number of Moons', value: `${this.numberOfMoons}` },
            { label: 'Distance from Sun', value: `${this.distanceFromSun} AU` },
            { label: 'Orbital Period', value: `${this.orbitalPeriod}` },
            { label: 'Rotation Period', value: `${this.rotationPeriod}` },
            { label: 'Atmospheric Composition', value: `${this.atmosphericComposition}` },
            { label: 'Special Features', value: `${this.specialFeatures}` },
            { label: 'Possible Life', value: `${this.possibleLife}` },
            { label: 'Surface Conditions', value: `${this.surfaceConditions}` },
            { label: 'Rains', value: `${this.rains}` }
        ];

        properties.forEach(prop => {
            const propertyParagraph = document.createElement('p');
            const strong = document.createElement('strong');
            strong.textContent = `${prop.label}:`;
            propertyParagraph.appendChild(strong);
            propertyParagraph.innerHTML += ` <span class="${prop.label.toLowerCase()}">${prop.value}</span>`;
            propertiesDiv.appendChild(propertyParagraph);
        });

        // Append elements to content
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(propertiesDiv);

        // Append content to the item
        item.appendChild(content);

        return item;
    }
}
