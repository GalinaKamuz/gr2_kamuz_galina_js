/*Написать функцию, которая находит разницу 
в днях между двумя заданными датами. 
Например, заданные даты «20/01/2010» и «15/01/2010», 
функция должна вернуть число 5. 
Разницу в днях необходимо считать по модулю.*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_day_diff(d1, d2) {
	if (d1 instanceof Date && d2 instanceof Date) {

		let ms_day_dif = Math.abs(d1.getTime() - d2.getTime());
		let result = Math.trunc(ms_day_dif / MS_DAY);

		return result;
	}
	return null;
}

let d1 = new Date('2021-11-08');
let d2 = new Date('2021-12-12')
console.log(get_day_diff(d1, d2));