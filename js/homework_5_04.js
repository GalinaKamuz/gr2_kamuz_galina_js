/*Напишите функцию up_first(str), которая возвращает 
строку str с заглавным первым символом, 
остальные символы должны быть в нижнем регистре 
(пример: up_first("иванов"), должно вернуть "Иванов", 
up_first("ИВАНОВ"), должно вернуть "Иванов")*/

function up_first(str) {
	if (typeof(str) !== 'string') {
		return false;
	}

	let result = '';

	for (let i = 0; i < str.length; i++) {
	  	if (i === 0) {
	  		result = result + `${str[i].toUpperCase()}`;
	  	}  else {
	  		result = result + `${str[i].toLowerCase()}`;
	  	}	
	}
	return result;
}

console.log(up_first('ИваНОв'));