let one = document.getElementById('b1');
let two = document.getElementById('b2');
let trhee = document.getElementById('b3');

let four = document.getElementById('b4');
let five = document.getElementById('b5');
let six = document.getElementById('b6');

let seven = document.getElementById('b7');
let eight = document.getElementById('b8');
let nine = document.getElementById('b9');

let minus = document.getElementById('menos');
let zero = document.getElementById('b0');
let pluz = document.getElementById('mas');

let total = document.getElementById('b');

one.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value+1;
 
});

two.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 2;
 
});
trhee.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 3;
 
});
four.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 4;
 
});
five.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 5;
 
});
six.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 6;
 
});
seven.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 7;
 
});
eight.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 8;
 
});
nine.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    screen.value = screen.value + 9;
 
});
zero.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    if(screen.value != 0 ){
        screen.value = screen.value += 0;
    }
});

pluz.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    let hide = document.getElementById('hide');
    hide.value = screen.value;
    screen.value = ' '; 
});

minus.addEventListener('click', function(){
    let screen = document.getElementById('screen');
    let hide = document.getElementById('hide');
    hide.value = screen.value;
    screen.value = ' '; 
});

total.addEventListener('click', function(){
    let hide = document.getElementById('hide');
    let screen = document.getElementById('screen');
    
    let pluz = parseInt(hide.value) + parseInt(screen.value);
    let minus = parseInt(hide.value) - parseInt(screen.value);
    
    screen.value = pluz;
    screen.value = minus;

});

