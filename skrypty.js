var imionaMeskie = ['Teofil', 'Jurek', 'Bill', 'Protazy'];
var imionaZenskie = ['Anna Maria', 'Maria Anotnina', 'Antonina Maria', 'Maria Maria'];

var wszystkieImiona = imionaMeskie.concat(imionaZenskie);
var imie = 'Bill';

if (wszystkieImiona.indexOf(imie) === -1) {
	wszystkieImiona.splice(6, 0, imie);
}

console.log(wszystkieImiona);