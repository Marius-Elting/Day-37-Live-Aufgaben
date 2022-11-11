({
    "plugins": ["jsdom-quokka-plugin"]
});


// Thema Objects

// Das alles unter einem Namen zusammen Fassen
// Objekte
// const penis = document.getElementsByName("body");
// {}Geschweifte Klammern definieren Objekte
const sKlasse = {
    marke: "Mercedes-Benz",
    ps: 510,
    model: "S 580 e",
    ausstattung: ["Sitzheizung", "Matrix-LED", "Carbon-Paket", "Burmester 4D Sound"]
};

console.log(sKlasse);


console.log(sKlasse.ps);

// so können werte Bearbeitet werden
sKlasse.ps = 520;
console.log(sKlasse.ps);

// ändert den Wert
sKlasse.model = "eKlasse";
console.log(sKlasse.model);

sKlasse.länge = "4.5m";
console.log(sKlasse.länge);



const cKlasse = {
    marke: "Mercedes-Benz",
    ps: 680,
    model: "c 63se",

    fährt: () => {
        console.log(cKlasse.marke + cKlasse.model + "Auto Fährt");
    }
};

cKlasse.fährt();

// gibt die keys aus
console.log(Object.keys(sKlasse));

const sKlasseKeys = Object.keys(sKlasse);

console.log(sKlasseKeys);

sKlasseKeys.forEach(key => {
    console.log(key);

    // über den Key kommen wir an die Value
    const value = sKlasse[key];
    console.log("value: " + value);
});

// Object Loop

for (let aKey in sKlasse) {
    // gibt die keys aus
    console.log(aKey);
    // gibt die Value der Keys aus 
    console.log(sKlasse[aKey]);
}


const fächer = {
    math: 4,
    sport: 1,
    informattik: 2,
    chemie: 1,
};

let summe = 0;

for (let fach in fächer) {
    summe += fächer[fach];
}
console.log(summe);

let durchSchnitt = summe / Object.keys(fächer).length;
console.log(durchSchnitt);


let euLänder = {
    Belgien: "BE",
    Griechenland: "GL",
    Deutschland: "DE",
};


let author = {
    firstName: "Haruki",
    lastName: "Murakami",
    book1: {
        nameBook: "1Q84"
    }
};

console.log(author.book1.nameBook);

//bearbeitet die Variable im Object
author.book1.nameBook = "Norwegian Wood";

console.log(author.book1.nameBook);

console.log("verschachtelung.exe");


