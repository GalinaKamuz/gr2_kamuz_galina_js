/*Напишите функцию get_max( arr ), 
которая находит максимальное значение в заданном массиве*/

function get_max(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	let result = -Infinity;

	for (let i=0; i < arr.length; i++) {
		let element = arr[i];
		if (element > result) {
			result = element;
		}
	}
	
	return result;
}

let array = [2,9,4,2,15,12,7,8,1,13];
console.log(get_max(array));