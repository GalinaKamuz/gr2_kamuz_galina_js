/*Напишите функцию get_count_days(date) , 
которая будет считать количество дней до Нового года от date, 
если оно задано, иначе посчитать количество дней от текущей даты*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_days(d) {

	let day_new_year = new Date('2022-01-01');
	let now = new Date();
	let ms_day_dif;
	let result;

	if (d instanceof Date) {
		ms_day_dif = day_new_year.getTime() - d.getTime();

	} else {
		ms_day_dif = day_new_year.getTime() - now.getTime();
		
	}
	result = Math.trunc(ms_day_dif / MS_DAY);
	return result;
}

let date = new Date('2021-11-15');
console.log(get_count_days(date));