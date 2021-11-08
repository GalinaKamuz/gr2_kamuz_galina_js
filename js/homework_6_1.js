/*Напишите функцию get_tomorrow(), 
которая возвращает завтрашнее число в формате 26 ноября 2019г*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_tomorrow() {

	const MONTH_NAMES = ['января', 'февраля', 'марта',
	'апреля', 'мая', 'июня', 'июля', 'августа', 
	'сентября', 'октября', 'ноября', 'декабря' ]

	let d = new Date;
	let ms_result_date = d.getTime() + MS_DAY;
	let result_date = new Date(ms_result_date);

	let month_name = MONTH_NAMES[result_date.getMonth()];
	let result = `${result_date.getDate()} ${month_name} ${result_date.getFullYear()}` ;
	return result;
}

console.log(get_tomorrow());