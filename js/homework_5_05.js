/*Напишите функцию search_string(search, string), 
которая будет проверять наличие подстроки search в строке string. 
Функция должна вернуть булев тип и быть регистронезависимой 
(использовать метод indexOf)*/

function search_string(search, string) {
	if (typeof(search) !== 'string' || typeof(string) !== 'string') {
		return false;
	}

	search = search.toLowerCase();
	string = string.toLowerCase();

	if (string.indexOf(search) !== -1) {
		result = true;
	} else {
		result = false;
	}
	return result;
}
let sub_str = 'My';
let str = 'Please check my homework';
console.log(search_string(sub_str, str));