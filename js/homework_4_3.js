/*Необходимо написать функцию, которая принимает слово 
в виде строки, функция будет возвращать слово с буквами 
в обратном порядке, например в функцию передаем слово 
“ТЕЛЕФОН”, на выходе имеем слово «НОФЕЛЕТ».*/

function reverse_word() {

	let string = prompt('Введите любое слово');
	
	//преобразование строки в массив
	let arr = string.split(''); 

	let result_arr = [];

	//добавление в новый массив элементов в обратном порядке
	for (let item of arr) {
		result_arr.unshift(item) 
	}

	//преобразование массива в строку
	let result_string = result_arr.join('');
	console.log(result_string);
}

reverse_word();