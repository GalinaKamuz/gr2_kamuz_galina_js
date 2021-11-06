/*Напишите функцию, которая сравнивает 
два массива и возвращает true, если они идентичны.*/

function is_arr_identical(arr_1, arr_2) {
	if (!Array.isArray(arr_1) || !Array.isArray(arr_2)){
		return null;
	}
	
	if (arr_1.length === arr_2.length) {
		for (let i = 0; i < arr_1.length; i++) {
			if (arr_1[i] !== arr_2[i]) {
			return false;
			} else {
				continue;
			}
		}
		return true;
	} else {
		return false;
	}
}

let array_1 = [1,3,4,6,3,1,4,1,1,3];
let array_2 = [1,3,4,6,3,1,4,1,1,3];

let check = is_arr_identical(array_1, array_2);
console.log (check);
