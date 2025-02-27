var quantity = 30;
var unit_of_meassure = "год";                  // валідні значення - км, кг, год
    switch (unit_of_meassure) {
    case "км":                                                                               // якщо ввели км
        console.log (quantity + " " + unit_of_meassure + " це " + quantity*1000 + " метрів");
        break;
    case "кг":                                                                               // якщо ввели кг
        console.log (quantity + " " + unit_of_meassure + " це " + quantity*1000 + " грам");
        break;
    case "год":                                                                              // якщо ввели кг
        console.log (quantity + " " + unit_of_meassure + " це " + quantity*60 + " хвилин");
        break;
    default:                                                                                 // якщо інша одиниця виміру
        console.log ("Ви ввели неправильну одиницю виміру");
}