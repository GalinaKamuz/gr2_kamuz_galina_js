/*Напишите функцию get_type_file( file_name ), которая получает 
расширение файла в заданном имени файла file_name 
(пример: get_type_file("readme.txt"), функция должна вернуть ".txt")*/

function get_type_file (file_name) {
	if (typeof(file_name)!=='string') {
		return false;
	}

	let result = '';
	let array = file_name.split('');
	let index_dot = array.indexOf('.');
	let temp = array.slice(index_dot, array.lenght);
	result = temp.join('');

	return result;
}

console.log(get_type_file('homework_5_7.js'));