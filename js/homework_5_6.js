/*Напишите функцию truncate(str, maxlength), которая проверяет 
длину строки str, и если она превосходит maxlength – 
заменяет конец str на "...", так чтобы ее длина стала равна maxlength.*/

function truncate (str, max_length) {
	if (typeof(str)!=='string') {
		return false;
	}
	if (typeof(max_length)!=='number') {
		return false;
	}

	let result = str;

	if (str.length > max_length) {
		let temp = str.slice(0, max_length - 3);
		result = `${temp}...`;
	}

	return result;
}
let string = truncate('Homework_5_6', 7);
console.log(string);