/*
Написать код, который будет выполнять 5 действия на странице index.html:
1. Создать 1000 квадратов голубого цвета размером 70*70 пикселей, и распологает их горизонтально.
2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 10*10 пикселей.
3. Вывести на каждом квадрате его порядковый номер.
4. Изменить цвет каждого 3-го квадрата на красный, 
каждый 15 квадрат сделать треугольником цветом хаки.
5. Удалить все красные квадраты.
Каждое действие должно выполниться через 2 секунды 
от предыдущего, первое действие также должно иметь задержку 2 секунды.
*/

create_shapes = function() {

  document.body.style.display = 'flex';
  document.body.style.width = 'max-content';
  let number_of_square = 1000;

  for (let i = 0; i < number_of_square; i++) {
    let square = document.createElement('div');
    square.style.background = "SkyBlue";
    square.style.height = '70px';
    square.style.width = '70px';
    square.style.margin = '5px';
    
    document.body.append(square);
  }
}

change_сolor_of_square = function() {
  
  let square = document.querySelectorAll('div');
  for (let i = 0; i < square.length; i++) {
    square[i].style.background = "purple";
    square[i].style.height = '10px';
    square[i].style.width = '10px';
  }
}

display_serial_number = function() {

  let square = document.querySelectorAll('div');
  for (let i = 0; i < square.length; i++) {
    square[i].innerText = `${i+1}`;
    square[i].style.fontSize = '8px';
    square[i].style.color = 'white';
    square[i].style.textAlign = 'center';
  }
}

change_color_palette_of_square = function() {
  
  let square = document.querySelectorAll('div');
  for (let i = 0; i < square.length; i++) {
    if ((i+1) % 3 === 0) {
    square[i].style.background = "red";
    } 
    if ((i+1) % 15 === 0) {
    square[i].style.background = 'linear-gradient(to right bottom, transparent 50%, olive 50%) left / 51% 100% no-repeat, linear-gradient(to left bottom, transparent 50%, olive 50%) right / 51% 100% no-repeat';
    square[i].style.textShadow = '0 0 1px black';
    } 
  }
}

delete_square = function() {
  
  let square = document.querySelectorAll('div');
  for (let i = 0; i < square.length; i++) {
    if ((square[i].style.background === "red") && (square[i].style.height !== '0px')) {
    square[i].remove()
    } 
  }
}

setTimeout(() => create_shapes(), 2000);
setTimeout(() => change_сolor_of_square(), 4000);
setTimeout(() => display_serial_number(), 6000);
setTimeout(() => change_color_palette_of_square(), 8000);
setTimeout(() => delete_square(), 10000);
