'use strict';

let a = 9;
let b = 5;
let numx;

if ( a > b) {
  numx = a + b / 2 * 4;
  console.log(numx);
} else if (a = b) {
  numx = 400;
  console.log(numx);
} else {
  numx = a - b + 2 / b * 4;
  console.log(numx);
}


    let x = parseInt (prompt('x', ''));
    let y = parseInt (prompt('y', ''));

    if (y <= 4 && (x <=4 || x >= -4)){
        alert('Точка попадает в область');
    } else {
        alert('Точка НЕ попадает в область');}


    let x1 = parseInt (prompt('x', ''));
    let y2 = parseInt (prompt('y', ''));

    if (y <= 1 && y >= -1 && (x <=1 && x >= -1)){
        alert('Точка попадает в область');
    } else {
        alert('Точка НЕ попадает в область');}





let dayNum = prompt('Please enter day' , '' );
switch (dayNum) {
    case  '1':
        alert('Понедельник');
        break;
    case  '2':
        alert('Вторник');
        break;
    case  '3':
        alert('Среда');
        break;
    case  '4':
        alert('Четверг');
        break;
    case  '5':
        alert('Пятница');
        break;
    case  '6':
        alert('Суббота');
        break;
    case  '7':
        alert('Воскресение');
        break;
    default:
        alert('Такого дня не существует!');
}

 





