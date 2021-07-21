const meinObjekt = {
    vorname: "Marie",
    lastname: "Persson",
    hobbies: ['Laufen', 'Lesen', 'Coden'],
    lieblingsES: [
      { title: "ES5", year: 2009 },
      { title: "ES6", year: 2015 },
      { title: "ES7", year: 2016 },
      { title: "ES8", year: 2017 },
      { title: "ES9", year: 2018 },
    ], 
    adresse: {
      strasse: 'Unter den Linden', 
      nummer: 6 
    }
  };

  // Set up für Handlebars: 
  // Damit Handlebars funktioniert: 
  // script finden:
  const source = document.getElementById('text-template').innerHTML
// Kompileiern (Template Bauen), template ist eine funktion.
const template = Handlebars.compile(source)
// Die template funktion wird mit dem Datenobjekt aufgerufen:
const html = template(meinObjekt)
// Diese Html wieder einfügen in der html-datei
// wohin soll die Seite?
const seitenInhalt = document.getElementById('inhalt')
// einfügen
seitenInhalt.insertAdjacentHTML('beforeend', html)
