let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let nameArray = [];
let preisArray = [];
let veränderungArray = [];

edelMetallPreise.forEach((key) => {
    nameArray.push(key.name);
    preisArray.push(key.preiseGramEuro);
    veränderungArray.push(key.veraenderung);
});
console.log(nameArray);


const mapNames = edelMetallPreise.map((key) => {
    console.log(key.name);
    console.log(key.preiseGramEuro);
    console.log(key.veraenderung);
});


const over50 = preisArray.filter(checkPreis);
function checkPreis(preis) {
    return preis >= 50;
}
console.log(over50);

let table = document.createElement("table");
let headline = ["Name", "PreisGrammEuro", "Veränderung"];

let tableRowHead = document.createElement("tr");
let tableHead1 = document.createElement("th");
let tableHead2 = document.createElement("th");
let tableHead3 = document.createElement("th");
table.appendChild(tableRowHead);
tableRowHead.appendChild(tableHead1);
tableRowHead.appendChild(tableHead2);
tableRowHead.appendChild(tableHead3);

tableHead1.textContent = "Name";
tableHead2.textContent = "PreisProGramm";
tableHead3.textContent = "Veränderung";


for (let i = 0; i < edelMetallPreise.length; i++) {
    let tableRow = document.createElement("tr");
    let tableData = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    table.appendChild(tableRow);
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableData.textContent = nameArray[i];
    tableData2.textContent = preisArray[i];
    tableData3.textContent = veränderungArray[i];
    tableData.style.border = "3px double black";
    tableData2.style.border = "3px double black";
    tableData3.style.border = "3px double black";
}

document.body.appendChild(table);






