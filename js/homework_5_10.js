/*Напишите функцию get_min( arr ), которая находит 
минимальное значение в заданном массиве.*/

function get_min(arr) {

	if (!Array.isArray(arr)) {
		return null;
	}

let result_min = Infinity;

for (let item of arr) {
	if (item < result_min) {
		result_min = item
	}
}
return result_min;
}

let array = [3,8,5,6,2,4,7,8];
console.log(get_min(array));
