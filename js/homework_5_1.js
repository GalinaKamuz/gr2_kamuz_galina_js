/*Напишите функцию random(min, max), 
которая будет возвращать случае целое число от min до max*/

function random(min, max) {
	function chek_param (param) {
		return typeof(param) !== 'number';
	}

	if (chek_param(min) || chek_param(max)) {
	return null;
	}

	let result = 0;
	let temp = Math.random();

	result = min + (max - min) * temp;
	result = Math.floor(result)

	return result;
}

let a = random(15,130);
console.log(a);