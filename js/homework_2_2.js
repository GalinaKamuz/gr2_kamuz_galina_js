let n_km = prompt('Введите значение расстояния в км, которое проехал автомобиль', '0');
n_km = Number(n_km);

if ((isNaN(n_km)) || (n_km < 0)) {
	console.log('Были введены некорректные данные');
} else {

	let d_inch = prompt('Введите значение диаметра колеса автомобиля в дюймах', '0');
	d_inch = Number(d_inch);

	if ((isNaN(d_inch)) || (d_inch <= 0)) {
		console.log('Были введены некорректные данные');
	} else {

		//Решение

		let n_m = n_km * 1000;
		let d_m = d_inch * 0.0254;
		const PI = 3.14;
		let wheel_circle = PI * d_m;
		let wheel_numb_turns = n_m / wheel_circle;
		let wheels_numb_turns = wheel_numb_turns * 4;

		alert(`Количество оборотов, которое совершило каждое колесо - ${wheel_numb_turns.toFixed(2)}`);
		alert(`Общее количество оборотов всех колёс - ${wheels_numb_turns.toFixed(2)}`);
	}
}
