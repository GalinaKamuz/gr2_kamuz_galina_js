/*
Написать код, который создаст на странице 2 прямоугольника 
разного цвета и размера.
При наведении курсора мыши на прямоугольник вывести в 
консоль размер этого прямоугольника.
При клике на прямоугольник - выдать уведомление, 
в котором будет русское название цвета этого прямоугольника.
*/

  
  let rectangle_1 = document.createElement('div');
  rectangle_1.style.background = "green";
  let color_1 = 'зелёный';
  rectangle_1.style.height = '150px';
  rectangle_1.style.width = '300px';
  document.body.prepend(rectangle_1);

  let rectangle_2 = document.createElement('div');
  rectangle_2.style.background = "red";
  let color_2 = 'красный';
  rectangle_2.style.height = '250px';
  rectangle_2.style.width = '500px';
  document.body.append(rectangle_2);


rectangle_1.addEventListener("click", function (event) {
    alert(`${color_1}`);
});

rectangle_1.addEventListener("mouseover", function (event) {
    console.log(rectangle_1.style.height, rectangle_1.style.width);
});

rectangle_2.addEventListener("click", function (event) {
    alert(`${color_2}`);
});

rectangle_2.addEventListener("mouseover", function (event) {
    console.log(rectangle_2.style.height, rectangle_2.style.width);
});
