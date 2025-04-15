/* ЗАДАЧА 1.
Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): на першому рядку - одна зірочка, на другому - дві, і так далі. Рішення оформіть у вигляді функції, куди передаються два параметри: висота трикутника та символ, яким його потрібно "малювати".

Якось так:

// виклик функції

drawTriangle(5, '*');

// результат роботи функції в консолі

*
**
***
****
*****

Умови виконання ДЗ:

Домашню роботу необхідно зробити двома способами
В задачі не потрібно використовувати prompt() або щось інше повязане з UI
Не використовувати функції або інші матеріали, які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки */



// Перший спосіб з використанням while та repeat

/* function drawTriangle (height, symbol) {  
    let i = 1;
    while (i <= height) {
        console.log (symbol.repeat (i)); //виводиться symbol i разів в одному рядку
        i++;
    }
    }
drawTriangle(7, "*");  */




// Другий спосіб з використанням while та циклів (без repeat) З ДВОМА ЦИКЛАМИ

/* function drawTriangle (height, symbol) {  
    let i = 1;
    while (i <= height) {
        let line = '';
        let j = 1;
        while (j <= i) {
            line += symbol;
            j++;
        }
        console.log (line);
        i++;
    }
}
    drawTriangle (8, "#");
 */



// Третій спосіб з використанням while та одного циклу (без repeat)

function drawTriangle (height, symbol) {  
    let i = 1;
    let line = '';
    while (i <= height) {
        line += symbol;
        console.log (line);
        i++;
    }
}
    drawTriangle (8, "#");





    

//  Перший спосіб з використанням for та repeat   

/* function drawTriangle (height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log (symbol.repeat (i));   //виводиться symbol i разів в одному рядку
          }
    }
drawTriangle(3, "*"); */




// Другий спосіб з використанням for та двома циклами (без repeat) ТАКИЙ, ЩО НЕ СПОДОБАВСЯ

/* function drawTriangle (height, symbol) { 
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += symbol;
        }
        console.log(line); 
    } 
}
    drawTriangle (5, "+");  */




// Третій спосіб з використанням for та одним циклом (без repeat) - покращений другий

/* function drawTriangle (height, symbol) {
    let line = "";
    for (let i = 1; i <= height; i++) {
        line += symbol;
        console.log(line); 
    } 
}
    drawTriangle (5, "*");  */


   