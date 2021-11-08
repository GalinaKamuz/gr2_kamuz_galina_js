/*Напишите функцию get_count_work_days(date1, date2), 
которая будет считать количество рабочих дней между 
двумя заданными датами.*/

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

function get_count_work_days(date1, date2) {

	if (date1 instanceof Date && date2 instanceof Date) {
		
		let result = 0;
		let ms_day_dif = Math.abs(date1.getTime() - date2.getTime());
		let all_days = ms_day_dif / MS_DAY;

		for (let i = 0; i < all_days; i ++) {
			if (date1.getDay() >= 1 && date1.getDay() <= 5) {
			
			result ++;
			
			}
			date1 =date1.getTime() + MS_DAY;
			date1 = new Date(date1);
		}
		
		return result;
	}
	return null;
}

let d1 = new Date('2021-11-08');
let d2 = new Date('2021-11-29');
console.log(get_count_work_days(d1, d2));