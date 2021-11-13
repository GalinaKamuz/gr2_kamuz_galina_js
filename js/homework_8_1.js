/*
Написать код, который будет выполнять 4 действия на странице index.html:
1. Создать 10 квадратов голубого цвета размером 50 на 50 пикселей, 
и распологает их вертикально.
2. Изменить цвет каждого квадрата на зеленый, 
и увеличить размер до 100 на 100 пикселей.
3. Изменить цвет каждого 3-го квадрата на красный, 
остальных на желтый.
4. Удалить все квадраты, и сделать фон страницы черным.
Каждое действие должно выполниться через 3 секунды от предыдущего, 
первое действие также должно иметь задержку 3 секунды.
*/

create_shapes = function() {
  
  let number_of_square = 10;
  
  for (let i = 0; i < number_of_square; i++) {
    let square = document.createElement('div');
    square.style.background = "blue";
    square.style.height = '50px';
    square.style.width = '50px';
    document.body.append(square);
  }
}

change_сolor_of_square = function() {
  
  let square = document.querySelectorAll('div');
  for (let i = 0; i < square.length; i++) {
    square[i].style.background = "green";
    square[i].style.height = '100px';
    square[i].style.width = '100px';
  }
}

change_color_palette_of_square = function() {
  
  let square = document.querySelectorAll('div');
  for (let i = 0; i < square.length; i++) {
    if ((i+1) % 3 === 0) {
    square[i].style.background = "red";
    } else {
    square[i].style.background = "yellow";
    }
  }
}

delete_square = function() {
  
  let square = document.querySelectorAll('div');
  for (let i = 0; i < square.length; i++) {
    square[i].remove()
  }

  let body = document.querySelector('body');
  body.style.background = "black";
}

setTimeout(() => create_shapes(), 3000);
setTimeout(() => change_сolor_of_square(), 6000);
setTimeout(() => change_color_palette_of_square(), 9000);
setTimeout(() => delete_square(), 12000);
