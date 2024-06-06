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

                      var risultato = document.getElementById("risultato");
                      risultato.innerHTML = "<p>Class: " + classeCasuale + "</p>" +
                          "<p>Race: " + razzaCasuale + "</p>";
          });
      });
  });
}
