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

            let tmpClass = getRandomNumber(0, classDetails.class.length - 1);

            var className = classDetails.class[tmpClass].name;

            let classAbility = classDetails.class[tmpClass].spellcastingAbility;

            console.log(classAbility);

            loadJSON('data/races.json', raceData => {

                let validRaceFound = false;

                while (raceSource != "PHB" && raceSource != "MPMM" && raceSource != "DMG" && raceSource != "AAG" && raceSource != "TCE" && raceSource != "VRGR" && raceSource != "FTD" && raceSource != "MTF" && raceSource != "SCAG" && raceSource != "GGR" && raceSource != "ERLW" && raceSource != "VGM" && raceSource != "AI" && raceSource != "ToA" && raceSource != "MOT" && raceSource != "WBtW" && raceSource != "GoS" && raceSource != "SatO" && raceSource != "DSotDQ" && raceSource != "SCC" && raceSource != "BMT" && raceSource != "TDCSR" && raceSource != "DoDK" && raceSource != "EGW"){

                    let tmpRace = getRandomNumber(0, raceData.race.length - 1);

                    var raceSource = raceData.race[tmpRace].source;

                    var raceName = raceData.race[tmpRace].name;

                    var raceAbility = raceData.race[tmpRace].ability;

                    console.log(raceAbility);

                }

                loadJSON('data/backgrounds.json', backgroundData => {

                    while (backgroundSource != "PHB" && backgroundSource != "MPMM" && backgroundSource != "DMG" && backgroundSource != "AAG" && backgroundSource != "TCE" && backgroundSource != "VRGR" && backgroundSource != "FTD" && backgroundSource != "MTF" && backgroundSource != "SCAG" && backgroundSource != "GGR" && backgroundSource != "ERLW" && backgroundSource != "VGM" && backgroundSource != "AI" && backgroundSource != "ToA" && backgroundSource != "MOT" && backgroundSource != "WBtW" && backgroundSource != "GoS" && backgroundSource != "SatO" && backgroundSource != "DSotDQ" && backgroundSource != "SCC" && backgroundSource != "BMT" && backgroundSource != "TDCSR" && backgroundSource != "DoDK" && backgroundSource != "EGW"){

                        let tmpBack = getRandomNumber(0, backgroundData.background.length - 1);

                        var backgroundSource = backgroundData.background[tmpBack].source;

                        var backgroundName = backgroundData.background[tmpBack].name;

                        var backgroundSource = backgroundData.background[tmpBack].source;

                        console.log(backgroundSource);

                    }

                    var generator = NameGen.compile("sV i");

                    var name = generator.toString();
    
                    name = name.charAt(0).toUpperCase() + name.slice(1);
    
                    displayResult(name, className, raceName, backgroundName);
                });
            });
        });
    });
}

// Function to display the generated character
function displayResult(nome, className, raceName, backgroundName) {
    const resultContainer = document.getElementById('risultato');
    resultContainer.innerHTML = `
        <p>Name: <span class="white-text">${nome}</span></p>
        <p>Class: <span class="white-text">${className}</span></p>
        <p>Race: <span class="white-text">${raceName}</span></p>
        <p>Background: <span class="white-text">${backgroundName}</span></p>
    `;
}

// Add event listener to the generate button
document.getElementById('generate-button').addEventListener('click', generateCharacter);