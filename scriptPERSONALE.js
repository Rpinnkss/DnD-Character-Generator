function caricaDati(file, callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', file, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          callback(xhr.responseText);
      }
  };
  xhr.send(null);
}

function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var nomiUtilizzati = [];

function generaPersonaggio() {
    caricaDati('data/class/index.json', function(response) {
        var classiFiles = JSON.parse(response);
        var classiKeys = Object.keys(classiFiles);
        var fileCasuale = classiFiles[classiKeys[generaNumeroCasuale(0, classiKeys.length - 1)]];

        caricaDati('data/class/' + fileCasuale, function(response) {
            var classe = JSON.parse(response).class;
            var nomiClasse = classe.map(function(classe) {
                return classe.name;
            });
            var classeCasuale = nomiClasse[generaNumeroCasuale(0, nomiClasse.length - 1)];

            caricaDati('data/races.json', function(response) {
                var razze = JSON.parse(response).race;
                var nomiRazze = razze.map(function(razza) {
                    return razza.name;
                });
                var razzaCasuale = nomiRazze[generaNumeroCasuale(0, nomiRazze.length - 1)];

                // Carica i nomi dei personaggi
                caricaDati('data/nomi.json', function(response) {
                    var nomi = JSON.parse(response).names;
                    var nomeCasuale = generaNomeCasuale(nomi);

                    var risultato = document.getElementById("risultato");
                    risultato.innerHTML = "<p>Name: " + nomeCasuale + "</p>" +
                        "<p>Class: " + classeCasuale + "</p>" +
                        "<p>Race: " + razzaCasuale + "</p>";
                });
            });
        });
    });
}

function generaNomeCasuale(nomi) {
    var nomeCasuale = nomi[generaNumeroCasuale(0, nomi.length - 1)];
    // Controlla se il nome è già stato utilizzato, se sì, genera un nuovo nome
    if (nomiUtilizzati.includes(nomeCasuale)) {
        return generaNomeCasuale(nomi);
    } else {
        nomiUtilizzati.push(nomeCasuale);
        return nomeCasuale;
    }
}
