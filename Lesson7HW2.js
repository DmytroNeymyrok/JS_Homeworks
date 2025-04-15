/* Задача 2. Сума вартості послуг

 Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість, вигляду:

var services = {

"стрижка": "60 грн",

"гоління": "80 грн",

"Миття голови": "100 грн"

};

"Послуги" можуть додаватися по ходу роботи:

services['Розбити скло'] = "200 грн";

Умови виконання ДЗ

створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework5.
Додайте туди ваше домашне завдання
Вислати вашу гілку */


var services = {
    "Стрижка": "60 грн",  
    "Гоління": "80 грн",    
    "Миття голови": "100 грн",
    price : function() {                  //Метод для розрахунку загальної вартості послуг
        let totalPrice = 0;               //Вводиться змінна для підрахунку загальної вартості
        for (let key in this) {
            if (typeof this[key] === "string") {           // дії виконуються тільки для string
            let currentPrice = Number.parseInt (this[key]);     // перетворюю ціну в числове значення
            totalPrice += currentPrice;                  //розраховую загальну ціну
            }               
        }
        return totalPrice;                            // віддається значення totalPrice по-за циклом
    },
    minPrice : function() {                           //Метод для розрахунку мінімальної ціни
    let minimalPrice = Infinity;                      
    for (let key in this) {
        if (typeof this[key] === "string") {
            let currentPrice = Number.parseInt (this[key]);
            if (currentPrice < minimalPrice) {
                minimalPrice = currentPrice;
            }
        }
    }
    return minimalPrice;                              
    },
    maxPrice : function() {                           //Метод для розрахунку максимальної ціни
        let maximalPrice = -Infinity;                      
        for (let key in this) {
            if (typeof this[key] === "string") {
                let currentPrice = Number.parseInt (this[key]);
                if (currentPrice > maximalPrice) {
                    maximalPrice = currentPrice
                }
            }
        }
        return maximalPrice;                              
        }
}
let total = services.price();
console.log ("Загальна вартість послуг: " + total + " грн.");         //По черзі виводимо дані з початкового прайсу
let minimalPrice = services.minPrice();
console.log ("Мінімальна ціна послуги: " + minimalPrice + " грн.");
let maximalPrice = services.maxPrice();
console.log ("Максимальна ціна послуги: " + maximalPrice + " грн.");

services["Фарбування волосся"] = "1500 грн"                          //Додавання нової властивості

total = services.price();
console.log ("\nЗагальна вартість послуг: " + total + " грн.");         //По черзі виводимо дані з модифікованого прайсу
minimalPrice = services.minPrice();
console.log ("Мінімальна ціна послуги: " + minimalPrice + " грн.");
maximalPrice = services.maxPrice();
console.log ("Максимальна ціна послуги: " + maximalPrice + " грн.");