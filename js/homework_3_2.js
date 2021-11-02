/*Написать программу, которая должна за минимальное количество
попыток отгадать задуманное пользователем число от 0 до 100.*/

let min = 0;
let max = 100;
let attempt = 0;
let limit;
let sub_result;

alert(`Загадайте любое число от 0 до 100`);

do {
	limit = min + (max - min) / 2;
	let answer = confirm(`Ваше число меньше ${limit}?`);
	attempt += 1;

	if (answer) {
		max = limit;
	} else {
		min = limit;
	}
	sub_result = Math.round(max) - Math.round(min) < 1;
} while (!sub_result);

let final_result = Math.round(limit);
alert (`Ваше число ${final_result}, количество попыток ${attempt}`);
