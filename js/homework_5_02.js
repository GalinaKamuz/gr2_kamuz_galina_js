/*Написать функцию count_symbol( symbol, string ), которая 
подсчитает количество указанного символа symbol, в строке string. 
Функция должна быть регистронезависимой и вернуть число*/

function count_symbol(symbol, string) {
	if (typeof(symbol)!=='string' || typeof(string)!=='string') {
		return false;
	}

	let result = 0;

	for (let char of string) {
	  	if (char.toLowerCase() === symbol.toLowerCase()) {
	  		result ++;
	  	}
	}

	return result;
}

console.log(count_symbol('o', 'OOHomeOwork'));
