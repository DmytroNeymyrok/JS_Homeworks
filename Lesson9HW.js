 /* У нас є масив обʼєктів в яких міститься email.

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

- одне, або два слова які, можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

Умови виконання ДЗ

Не використовувати функції або інші матеріали, які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework7.
Додайте туди ваше домашнє завдання
Вишліть посилання на вашу гілку     */

const arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
];

let rightEmailArray = arr
  .filter(function(item) {                // фільтрує масив, обираючи email, які відповідають умові регулярного виразу
    let email = item.email;
    let condition = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,19}@(gmail|yahoo)\.com$/;
    return condition.test(email);
  })
  .map(function(item) {                   // створює новий масив, не трансформуючи вихідний
    return item.email;
  });

console.log(rightEmailArray);

