/*Напишите функцию get_random( arr ), 
которая вернет случайный элемент входящего массива arr.*/

function get_random(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	let index = 0;
	let temp = Math.random();
	
	index = Math.floor(arr.length * temp);
	let result = arr[index];

	return result;
}

let array = [27,9,44,2,151,12,7,85,1,13];
console.log(get_random(array));
