/*Необходимо написать мини-игру «Города». Нужно бесконечно 
запрашивать у пользователя ввод города. 
Проверять если последняя буква предыдущего слова 
совпадает с первой буквой следующего слова – засчитываем +1 очко. 
Если не совпадает выдаем сообщение «Игра окончена. 
Ваши очки: {кол-во очков}».*/

function start_game_city_chain ( start_city = 'Киев') {
	if (typeof(start_city)!== 'string') {
		return null;
	}

	alert (`Игра началась. Первый город ${start_city}`)

	let score = 0;
	let previos_cities = [start_city];

	while (true) {
		let new_city = prompt('Введите город');

		if (previos_cities.indexOf(new_city) !== -1) {
			alert (`Такой город уже был`);
			continue;
		}

		let prev_city = previos_cities[previos_cities.length - 1];

		let last_char = prev_city[prev_city.length - 1];
		let first_char = new_city[0];

		last_char = last_char.toLowerCase();
		first_char = first_char.toLowerCase();

		if (last_char === 'ь' || last_char === 'ы' ) {
			let last_char = prev_city[prev_city.length - 2];
			last_char = last_char.toLowerCase();
		}

		if (last_char === first_char) {
			score+=1;
		} else {
			alert (`Игра окончена. Ваши очки: ${score}`);
			return score;
		}

		previos_cities.push(new_city);
	
	}
	return score;
	
}
start_game_city_chain ();
