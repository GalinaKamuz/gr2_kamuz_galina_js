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

  this.addition = function(arrg) {

    this.act = 'сумма';
    this.arrg = arrg;
    this.result = 0;

    for (let i = 0; i < arrg.length; i++) {
      this.result = this.result+(+arrg[i]);
    }
    calculator.add_history();
    return this.result;
  }

  this.subtraction = function(a1, a2) {

    this.act = 'разность';
    this.arrg = [a1, a2];
    this.result = a1 - a2;

    calculator.add_history();
    return this.result;
  }

  this.multiplication = function(arrg) {

    this.act = 'произведение';
    this.arrg = arrg;

    this.result = 1;

    for (let i = 0; i < arrg.length; i++) {
      this.result = this.result*(+arrg[i]);
    }
    calculator.add_history();
    return this.result;
  }

  this.division = function(a1, a2) {

    this.act = 'деление';
    this.arrg = [a1, a2];
    this.result = a1 / a2;

    calculator.add_history();
    return this.result;
  }

  this.add_history = function() {
    let d = new Date();
    this.date = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}` ;
    this.string = `${this.calculator_name}  (${this.date}): ${this.act} = ${this.result}, (${this.arrg})`;

    console.log(`${this.string}`);
    return this.string;
  }
  
  this.clear_history = function(massege) {
    this.massege = massege;
    if (massege === 'Да') {
    console.clear();
    }
  }

}

let calculator = new Сalculator ('Мой калькулятор');
calculator.addition([1,1,4,1,2]);
calculator.subtraction(21,3);
calculator.multiplication([1,3,4,1,5]);
calculator.division(24,6);
calculator.clear_history('Нет');
