'use strict';

function calcX(a, b){
	if(a > b){
		return a + b / 2 * 4;
	} else if (a < b){
		return a - b + 2 / b * 4;
	} else {
		return 400;
	}
}

let x = calcX(10, 15);

function searchDots(){
    let x = parseInt (prompt('x', ''));
    let y = parseInt (prompt('y', ''));

    if (y <= 4 && (x <=4 || x >= -4)){
        alert('Вы попали в точку!');
    } else {
        alert('Error');
    }
}

function weekDay (){
    let NumDayWeek = parseInt (prompt('Какой сегодня день?',''));
    switch (NumDayWeek){
        case 1:
            alert ('Понедельник');
        break;
        case 2:
            alert ('Вторник');
        break;
        case 3:
            alert ('Среда');
        break;
        case 4:
            alert ('Четверг');
        break;
        case 5:
            alert ('Пятница');
        break;
        case 6:
            alert ('Суббота');
        break;
        case 7:
            alert ('Воскресенье');
        break;
        default:
            alert ('Такого дня недели не существует!');
    }
}