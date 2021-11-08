/*Напишите функцию get_order(string), которая отсортирует 
все слова в заданном предложении string в алфавитном порядке. 
Например: get_order("ноты акустика гитара"), 
функция должна вернуть "акустика гитара ноты"*/

function get_order(string) {
	if (typeof(string)!=='string') {
		return false;
	}

	//С использованием метода sort
	
	//return string.split(' ').sort().join(' ');

	//или

	/*
	let array = string.split(' ');
	array = array.sort();
	let result = array.join(' ');
	return result;
	*/

	//Без метода sort

	let result = '';

	let array = string.split(' ');
	
	for (let j=0; j < array.length; j++) {
		for (let i=0; i < array.length; i++) {
			
			if (array[i] > array[i+1]) {

				let temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
			}
		}
	}
	result = array.join(' ');

	return result;
}
let str = 'ноты акустика гитара гармонь артист';
console.log(get_order(str));