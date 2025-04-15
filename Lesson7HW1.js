/* Задача 1

Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(),
 який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". Зверніть увагу: метод повинен працювати
 навіть після додавання нових властивостей до об'єкта. 

Наприклад так:

obj.getInfo(); // Правильна інформація про об'єкт
obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
Умови виконання ДЗ

Не використовувати функції або інші матеріали які ми не вивчали
Не використовувати методи keys, values, entries
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework5.
Додайте туди ваше домашне завдання
Вислати вашу гілку */

//First version

/* let clientInformation = {
    nickname: "Tor",
    age: 24,
    city: "Kyiv",
    getInfo: function() {
        for (let key in this) {
        console.log (key + ": " + this[key]);
        }
    }
}
console.log ("Об'єкт з базовими властивостями:");
clientInformation.getInfo();
clientInformation.discount = 5;//Додаю нову властивість для об'єкта clientInformation
console.log ("\nОб'єкт після додавання нової властивості:");
clientInformation.getInfo(); */

// Second version
let clientInformation = {
    nickname: "Tor",
    age: 24,
    city: "Kyiv"
};
    function getInfo(obj) {
        for (let key in obj) {
        console.log (key + ": " + obj[key]);
        }
    }
console.log ("Об'єкт з базовими властивостями:");
getInfo(clientInformation);
clientInformation.discount = 5;//Додаю нову властивість для об'єкта clientInformation
console.log ("\nОб'єкт після додавання нової властивості:");
getInfo(clientInformation); 