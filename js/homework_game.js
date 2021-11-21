$(document).ready(function() {
    
    let display = document.getElementById('canvas');
    let ctx = display.getContext('2d');

    let fish = new Image();
    let bg = new Image();
    let fg = new Image();
    let net_left = new Image();
    let net_right = new Image();

    bg.src = "img/bg.png";
    net_left.src = "img/net_l.png";
    net_right.src = "img/net_r.png";

    let score = 0;
    let level = 1;
    let gap = 80;

    // Позиция рыбки
    let xPos = 120;
    let yPos = 410;
    
    //Анимация рыбки
    function animation_fish() {
        
        fish.src = "img/fish_1.png";

        function animation_fish_item() {
            fish.src = "img/fish_2.png";  
        }
        setTimeout(() => animation_fish_item(), 500);
        setTimeout(() => animation_fish(), 1000);
    }
    animation_fish();


    //Движение рыбки по движению курсора (по горизонтали)
   // document.addEventListener('mousemove', do_move);

   // function do_move() {
    //    if (event.x <= display.width - 40) {
    //        xPos = event.x;
    //    }
   // }

    //Создание сеток
    let net = [];
    net[0] = {
        x : 0,
        y : 0,
    }

    //Проверка попадания рыбки в сетку
    function checkCollision(x, y) {
        if(yPos <= y + net_left.height
                && yPos + fish.height - 10 >= y
                && (xPos <= x + net_left.width
                    || xPos + fish.width >= x + net_left.width + gap)) {
                    
                    alert('Рыбка попалась в сетку! Игра окончена!');
                    location.reload(); 
                    return true;                                  
            }
    }
    //Вывод счёта на игровой дисплей
    function output_score() {
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Счёт: ' + score, 10, display.height - 20);
    }

    function up_level(score) {
        if (score >= 3 && score <=6) {
            gap = 70;
            level = 2;
        } 
        if (score >= 7 && score <=10) {
            gap = 60;
            level = 3;
        } 
        if (score >= 11 && score <=13) {
            gap = 50;
            level = 4;
        } 
        if (score >= 14 && score <=17) {
            gap = 40;
            level = 5;
        } 
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Уровень: ' + level, 180, display.height - 20);
    }

    //Прорисовка объектов после старта
    function draw() {
        ctx.drawImage(bg, 0, 0);
        
        for(let i = 0; i < net.length; i++) {

            ctx.drawImage(fish, xPos, yPos);
            
            output_score();
            up_level(score);

            ctx.drawImage(net_left, net[i].x, net[i].y);
            ctx.drawImage(net_right, net[i].x + net_left.width + gap, net[i].y);  
        
            net[i].y++;

            if(net[i].y == 200) {
                net.push({
                    x : Math.floor(Math.random() * net_left.width) - net_left.width,
                    y : 0,
                });
            }

            if (checkCollision(net[i].x, net[i].y) === true) {
                net[i].x = 0;
                net[i].y = 0;      
            }
            
            if (net[i].y == yPos + fish.height) {
                score++;
            }
        }

        requestAnimationFrame(draw);
    }

    draw();

});
