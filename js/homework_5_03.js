/*Напишите функцию get_string_length(str), которая 
в качестве аргумента принимает строку str и возвращает её длину, 
предварительно удалив из строки все пробелы 
(для решения данной задачи обязательно использовать цикл).*/

function get_string_length(str) {
	if (typeof(str) !== 'string') {
		return false;
	}

	let result_str = '';

	for (let char of str) {
	  	if (char !== ' ') {
	  		result_str = result_str + `${char}`;
	  	}  	
	}
	
	return result_str.length;
}

console.log(get_string_length('Please check my homework.'));