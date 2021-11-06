/*Напишите функцию, возвращает новый массив без 
предоставленных значений. Используйте примитивные типы.*/

function create_new_arr(arr_1, arr_2) {
	if (!Array.isArray(arr_1) || !Array.isArray(arr_2)){
		return null;
	}
	
	let result_array = [];

	for (let i = 0; i < arr_1.length; i++) {
		result_array.push(arr_1[i]);
	}

	for (let i = 0; i < arr_2.length; i++) {
		let element_to_compare = arr_2[i];
		let index = result_array.indexOf(element_to_compare);
		while (index !== -1) {
			result_array.splice(index, 1);
			index = result_array.indexOf(element_to_compare);
		}
		console.log(element_to_compare, result_array);
	}

	return result_array;
}

let array_1 = [1,3,4,6,3,1,4,1,1,3];
let array_2 = [1,3];
let check = create_new_arr(array_1, array_2);
console.log(check);
