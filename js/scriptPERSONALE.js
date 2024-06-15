// Function to load JSON data from a file
function loadJSON(file, callback) {
    fetch(file)
        .then(response => response.json())
        .then(callback)
        .catch(error => console.error('Error loading JSON:', error));
}

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a character
function generateCharacter() {
    loadJSON('data/class/index.json', classData => {
        const classFiles = Object.values(classData);
        const randomClassFile = classFiles[getRandomNumber(0, classFiles.length - 1)];

        loadJSON(`data/class/${randomClassFile}`, classDetails => {
            const className = classDetails.class[getRandomNumber(0, classDetails.class.length - 1)].name;

            loadJSON('data/races.json', raceData => {
                const raceName = raceData.race[getRandomNumber(0, raceData.race.length - 1)].name;

                var generator = NameGen.compile("sV i");

                var name = generator.toString();

                name = name.charAt(0).toUpperCase() + name.slice(1);

                displayResult(name, className, raceName);
            });
        });
    });
}

// Function to display the generated character
function displayResult(nome, className, raceName) {
    const resultContainer = document.getElementById('risultato');
    resultContainer.innerHTML = `
        <p>Name: <span class="white-text">${nome}</span></p>
        <p>Class: <span class="white-text">${className}</span></p>
        <p>Race: <span class="white-text">${raceName}</span></p>
    `;
}

// Add event listener to the generate button
document.getElementById('generate-button').addEventListener('click', generateCharacter);
