/*Напишите функцию get_day(date), 
которая возвращает день недели от заданной даты. 
Например: get_day(’27-11-1988’) должно вернуть «воскресенье»*/

function get_day(date) {

	const DAY_NAMES = ['Воскресенье', 'Понедельник', 'Вторник',
	'Среда', 'Четверг', 'Пятница', 'Суббота']

	if (date instanceof Date) {
		
		let day_number = date.getDay();
		let result = DAY_NAMES[day_number]
								
		return result;
	}
	return null;
}

let d = new Date('1988-11-27');
console.log(get_day(d));