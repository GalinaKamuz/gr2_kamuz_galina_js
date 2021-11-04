/*Напишите функцию get_min( arr ), которая находит 
минимальное значение в заданном массиве.*/

let arr = [3,8,5,6,2,4,7,8];

console.log(`Заданный массив ${arr}`);

function get_min() {

let result_min = arr[0];

for (let item of arr) {
	if (item < result_min) {
		result_min = item
	}
}
console.log(`Минимальное значение: ${result_min}`);
}

get_min();