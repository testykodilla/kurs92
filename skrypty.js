var imionaMeskie = ['Teofil', 'Jurek', 'Bill', 'Protazy'];
var imionaZenskie = ['Anna Maria', 'Maria Anotnina', 'Antonina Maria', 'Maria Maria'];

var wszystkieImiona = imionaMeskie.concat(imionaZenskie);
var imie = 'zenon';

if (wszystkieImiona.indexOf(imie) === -1) {
	wszystkieImiona.push(imie);
}

console.log(wszystkieImiona);