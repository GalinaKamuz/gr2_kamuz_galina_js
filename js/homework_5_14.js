/*Создайте функцию is_empty(obj), которая возвращает true, 
если в объекте нет свойств и false – если хоть одно свойство есть.
Например:
var schedule = {};
isEmpty(schedule) ; // должно вернуть true
schedule["8:30"] = "подъём";
isEmpty(schedule) ; //должно вернуть false*/

function is_empty(obj) {
	if (typeof(obj) !== 'object' ) {
		return null;
	}
	let properties = 0;

	for (let key in obj) properties++;
	
	return (properties === 0) ? true : false;
	
}	
	
	let user = {
	name: 'Galina',
	surname: 'Kamuz',
};

console.log(is_empty(user));