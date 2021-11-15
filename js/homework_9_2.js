/*
Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, 
в котором будет русское название цвета этого прямоугольника.

сделать на jQuery
*/
$(document).ready(function() {
  
for(let i = 0; i < 2; i++) {
    $('body').append('<div></div>');
  }

  $('div:first').attr('rus_color', 'зелёный');
  $('div:last').attr('rus_color', 'красный');

  $('div:first').css({
    background: 'green',
    height: '150px',
    width: '300px',
  });
  
  $('div:last').css({
    background: 'red',
    height: '250px',
    width: '500px',
  });
  
$('div').on('click', function (event) {
    alert(`${$(this).attr('rus_color')}`);
});

$('div').on('mouseover', function (event) {
    console.log($(this).css('height'), $(this).css('width'));
});
});
