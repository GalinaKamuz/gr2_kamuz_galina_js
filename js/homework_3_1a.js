/*Последовательно ввести 2 числа.
На отрезке из введенных чисел подсчитать количество чисел кратных 6 и сумму этих чисел.
Вывести ответ одним уведомлением.*/

let first_number = prompt('Введите первое число', '0');
let second_number = prompt('Введите второе число', '0');

first_number = Number(first_number);
second_number = Number(second_number);

let incorrect_data = isNaN(first_number) || isNaN(second_number);

if (incorrect_data) {
	alert('Были введены некорректные данные');
} else {

	let segment_start;
	let segment_end;

	//Определяем значения начала и конца отрезка

	if (first_number < second_number) { 
		segment_start = first_number;
		segment_end = second_number;
	} else {
		segment_start = second_number;
		segment_end = first_number;		
	}

	let amount = 0;
	let sum = 0;

	for (let i = segment_start; i <= segment_end; i++) {
  		if (i % 6 === 0) {
  			amount += 1;
  			sum += i;
  		}
	}
	alert(`Количество искомых чисел: ${amount}, сумма этих чисел: ${sum}`);
	}