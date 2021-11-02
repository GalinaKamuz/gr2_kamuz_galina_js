let days = prompt('Введите количество дней', '0');
days = Number(days);

if (isNaN(days)) {
	alert('Введённое значение не является числом');

} else if (days < 0) {
	alert('Введённое значение отрицательное, количество дней не может быть отрицательным');

} else if ((days % 100 >= 11) && (days % 100 <= 14)) {
	alert( `${days} дней`);

} else if ((days % 10 >= 5) && (days % 10 <= 9)) {
	alert(`${days} дней`);

} else if ((days % 10 >= 2) && (days % 10 <= 4)) {
	alert(`${days} дня`);

} else if (days % 10 == 1) {
	alert(`${days} день`);

} else if (days % 10 == 0) {
	alert(`${days} дней`);

} 
window.location.reload();