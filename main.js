
let basket = document.getElementById('basket');
let apple_Attack_varebal = document.getElementsByClassName('apple');
let num_score = document.getElementById('num-score');
let heart = document.getElementsByClassName('heart');
let num = 0;
let num2 = 3;
document.body.addEventListener('mousemove', function(event){ 
    if(num2 > 0){
        basket.style.left = event.pageX - 55;
    }
});

document.body.addEventListener('touchmove', function(event){ 
    if(num2 > 0){
        basket.style.left = event.touches[0].pageX - 55;
    }
});

let time_num = 3000;
let time;
let time2;
time = setInterval(creat_apple, time_num)
function creat_apple(){
    let apple = document.createElement('img');
    apple.src = 'img/apple.png';
    apple.classList.add('apple');
    document.body.appendChild(apple)
    document.body.insertBefore(apple, document.body.childNodes[0]); 
    apple.style.left = Math.floor(Math.random() * window.innerWidth)

    setTimeout(apple_down, 0)
    function apple_down(){
        apple.style.top = window.innerHeight;
    }
    
    setTimeout(apple_remove, 1700)
    function apple_remove(){
        if(apple.offsetTop > window.innerHeight - 100){
            if(num > 0){
                num = num - 1;
                num_score.textContent = num;
                fun();
            }
            num2 = num2 - 1;
            if(num2 <= heart.length && num2 > 0){
            heart[num2].style.opacity = .5;
            }else{
                document.getElementById('game-over').style.display = 'flex';
                clearInterval(time)
            }
        }
        apple.remove();
    }
}

setInterval(apple_Attack, 0)
function apple_Attack(){
    for(let i = 0; i < apple_Attack_varebal.length; i++){
        if(apple_Attack_varebal[i].offsetLeft > basket.offsetLeft - 15 && apple_Attack_varebal[i].offsetLeft < basket.offsetLeft + 60 && apple_Attack_varebal[i].offsetTop > basket.offsetTop + 58 && apple_Attack_varebal[i].offsetTop < basket.offsetTop + 85){
            apple_Attack_varebal[i].classList.add('gamed');
            num = num + 1;
            num_score.textContent = num;
            fun();
        } 
    }
}

function fun(){
    for(let i = 1; i <= 3; i++){
        let o = i * 5;
        if(num > o - 5 && num < o + 5){
            // console.log('asdas')
            clearInterval(time);
            time = setInterval(creat_apple, 2000 - (i * 500))
        }
    }
}