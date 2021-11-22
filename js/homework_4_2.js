/*Создайте массив с четными числами 
в диапазоне от 500 до 888 включительно.*/

let arr = [];

function get_array(first_num, second_num, step) {
	
	for (let i = first_num; i <= second_num; i+=step){
	arr.push(i);
};

}
get_array(500, 888, 2);
console.log(`Полученный массив ${arr}`);
