/*
Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, 
каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды от предыдущего, 
первое действие также должно иметь задержку 2 секунды.

сделать на jQuery
*/
$(document).ready(function() {

create_shapes = function() {

  let number_of_square = 100;

  for(let i = 0; i < number_of_square; i++) {
    $('body').append('<div></div>');
  }

  $('div').css({
    background: 'SkyBlue',
    height: '70px',
    width: '70px',
    margin: '5px',
  })
}

change_сolor_of_square = function() {
  
  $('div').css({
    background: 'purple',
    height: '100px',
    width: '100px',
  })
}

display_serial_number = function() {

  $('div').text(function(index, text) {
    text = index + 1;
    return text;
  });
  $('div').css({
    fontSize: '40px',
    color: 'white',
    textAlign: 'center',
  })
}

change_color_palette_of_square = function() {
  
  $('div').each(function(i, elem) {
    if ((i+1) % 3 === 0) {
    $(this).css('background', 'red');
    } 
    if ((i+1) % 15 === 0) {
    $(this).css('background', 'linear-gradient(to right bottom, transparent 50%, olive 50%) left / 51% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, olive 50%) right / 51% 100% no-repeat');
    }
  });

  $('div:odd').each(function(i, elem) {
    if (i < 5) {
      $(this).css('background', 'yellow');
    }
  });
}

delete_square = function() {

  $('div').each(function(i, elem) {
    if ($(this).css('backgroundColor') === 'rgb(255, 0, 0)') {
    $(this).remove();
    } 
  });
}

setTimeout(() => create_shapes(), 2000);
setTimeout(() => change_сolor_of_square(), 4000);
setTimeout(() => display_serial_number(), 6000);
setTimeout(() => change_color_palette_of_square(), 8000);
setTimeout(() => delete_square(), 10000);
});