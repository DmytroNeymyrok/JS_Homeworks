let quantity = 30;
let unit_of_measure = "год";
let newQuantity;                  // валідні значення - км, кг, год
    switch (unit_of_measure) {
    case "км":
        newQuantity = quantity*1000;                                                                               // якщо ввели км
        console.log (quantity + " " + unit_of_measure + " це " + newQuantity + " м");
        break;
    case "кг":
        newQuantity = quantity*1000;                                                                                // якщо ввели кг
        console.log (quantity + " " + unit_of_measure + " це " + newQuantity + " г");
        break;
    case "год":
        newQuantity = quantity*60;                                                                               // якщо ввели кг
        console.log (quantity + " " + unit_of_measure + " це " + newQuantity + " хв");
        break;
    default:                                                                                 // якщо інша одиниця виміру
        console.log ("Ви ввели неправильну одиницю виміру");
}


/* Попередня версія

var quantity = 30;
var unit_of_measure = "год";                  // валідні значення - км, кг, год
    switch (unit_of_measure) {
    case "км":                                                                               // якщо ввели км
        console.log (quantity + " " + unit_of_measure + " це " + quantity*1000 + " метрів");
        break;
    case "кг":                                                                               // якщо ввели кг
        console.log (quantity + " " + unit_of_measure + " це " + quantity*1000 + " грам");
        break;
    case "год":                                                                              // якщо ввели кг
        console.log (quantity + " " + unit_of_measure + " це " + quantity*60 + " хвилин");
        break;
    default:                                                                                 // якщо інша одиниця виміру
        console.log ("Ви ввели неправильну одиницю виміру");
} */