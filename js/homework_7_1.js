/*
Ч1
С помощью функции-конструктора, написать создание объекта Калькулятор. 
Функция конструктор принимает в качестве единственного параметра 
название калькулятора.
Ч2
Объект калькулятор должен уметь выполнять такие действия: 
сложение, вычитаение, умножение и деление.
В действия сложение/умножение возможно передать 
произвольное количество слогаемых/множителей.
Действия вычитаение/деление принимают только 2 аргумента. 
Первый параметр вычитаемое/делимое, второй параметр вычитатель/делитель.
Ч3
Калькулятор должен хранить историю действий в виде строки 
в таком формате: Имя калькулятора (Дата Время): 
действие, результат, (параметры).
Например после действия сумма в истории должна появится такая запись: 
"Мой калькулятор (8.11.2021 20:30): сумма = 10, (5, 5)"
Калькулятор должен уметь вывести историю действий в консоль 
и уметь очищать историю действий.
*/

function Сalculator (calculator_name) {
	
	this.calculator_name = calculator_name;
	
	this.action = function() {
	this.act = prompt('Выберите действие. + - * /');
	
	if (this.act === '+') {
		this.act = 'сумма';
		this.a = prompt('Введите слагаемые через пробел');
		let arr = this.a.split(' ');

		this.result = 0;

		for (let i = 0; i < arr.length; i++) {
			this.result = this.result+(+arr[i]);
		}
		alert(`Сумма = ${this.result}`);
	}

	if (this.act === '-') {
		this.act = 'разность';
	  	this.a = +prompt('Вычитаемое?', 0);
	    this.b = +prompt('Вычитатель?', 0);
	    this.result = this.a - this.b;
	    alert(`Разность = ${this.result}`);
	}

	if (this.act === '*') {
		this.act = 'произведение';
		this.a = prompt('Введите множители через пробел');
		let arr = this.a.split(' ');

		this.result = 1;

		for (let i = 0; i < arr.length; i++) {
			this.result = this.result*(+arr[i]);
		}
		alert(`Произведение = ${this.result}`);
  	};

	if (this.act === '/') {
		this.act = 'деление';
	  	this.a = +prompt('Делимое?', 0);
	    this.b = +prompt('Делитель?', 0);
	    this.result = this.a / this.b;
	    alert(`Результат деления = ${this.result}`);
	    
		};
		
		calculator.history();

		return this.result;
	};

	this.history = function() {
		let d = new Date();
		this.date = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}` ;
		this.string = `${this.calculator_name}  (${this.date}): ${this.act} = ${this.result}, (${this.a}, ${this.b})`;
		
		console.log(`${this.string}`);
		
		let massege = prompt('Очистить историю калькулятора? (да/нет)');
		if (massege === 'да') {
			console.clear();
			calculator.action();
		} else {
			calculator.action();
		}

		return this.string;

	}
}

let calculator = new Сalculator ('Мой калькулятор');

calculator.action();
