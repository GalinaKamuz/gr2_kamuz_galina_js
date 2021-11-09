/*Есть объект points с оценками. Напишите код, 
который выведет сумму всех оценок. 
var points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};
Найти имена тех, кто получает минимальную и максимальную оценку.*/

let points = {
"Вася": 200,
"Петя": 300,
"Даша": 250,
"Андрей": 150,
"Сергей": 450,
};

let sum = 0;
let max = -Infinity;
let min = Infinity;
let name_max;
let name_min;

	for (let key in points) {

		sum = sum + points[key];

		if (points[key] > max) {
			max = points[key];
			name_max = key;
		}
		if (points[key] < min) {
			min = points[key];
			name_min = key;
		}
	}
	
console.log (`Сумма всех оценок ${sum}`);
console.log (`Максимальную оценку получил студент ${name_max}  ${max}`);
console.log (`Минимальную оценку получил студент ${name_min}  ${min}`);