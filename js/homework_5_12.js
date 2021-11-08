/*Напишите функцию get_uniq_arr( arr ), которая удаляет из 
заданного массива arr элементы, которые дублируются 
(необходимо использовать цикл)*/

function check_unique_arr(arr) {
	if (!Array.isArray(arr)) {
		return null;
	}

	let result = true;

	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		let next_index_element = i + 1;
		let index = arr.indexOf(element, next_index_element);
		while (index > 0) {
			result = false;
			array.splice(index, 1);
			index = arr.indexOf(element, next_index_element);
		}
	}

	return result;
}

let array = [1,3,4,6,3,1,4,1,7,1,3];
let check = check_unique_arr(array);
console.log(check, array);