/*Напишите функцию get_short_fio(full_fio), 
которая преобразует полное ФИО full_fio в краткое. 
Например: get_short_fio("Иванов Сергей Петрович"), 
функция должна вернуть "Иванов С.П."*/

function get_short_fio(full_fio) {
	if (typeof(full_fio)!=='string') {
		return false;
	}

	let result = '';

	let array_part_fio = full_fio.split(' ');

	if (array_part_fio.length !== 3) {
		return false;
	}

	let short_name = array_part_fio[1].slice(0, 1).toUpperCase();
	let short_last_name = array_part_fio[2].slice(0, 1).toUpperCase();

	result = `${array_part_fio[0]} ${short_name}. ${short_last_name}.`

	return result;
}
let fio = get_short_fio('Иванов Сергей петрович');
console.log(fio);
