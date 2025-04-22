/* Вам необхідно написати функцію findValueByKey(Object, companyName), яка буде приймати значення
 у вигляді 'Клієнт 1.2' ('Велика Компанія', 'Клієнт 2'... ) та надавати інформацію про цю subCompany */

 const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(company, companyName) {
    if (company.name === companyName) {                  // якщо companyName збігається з company.name, то повертається об'єкт company
        return company;
    }

    if (company.clients && Array.isArray(company.clients)) {  // якщо clients є властівістю об'єкту company і масивом
        for (let client of company.clients) {                   //цикл, що перебирає всі елементи масиву  clients
            let result = findValueByKey(client, companyName);  // знов викликається функція findValueByKey для пошуку на нижчих рівнях
            if (result) {
                return result;
            }
        
        }
    }

    if (company.partners && Array.isArray(company.partners)) {  //якщо partners є властівістю об'єкту company і масивом
        for (let partner of company.partners) {                 //цикл, що перебирає всі елементи масиву  partners
            let result = findValueByKey(partner, companyName);   // знов викликається функція findValueByKey для пошуку на нижчих рівнях
            if (result) {
                return result;
            }
        }
    }
    return null;                       // повертає null, якщо не знаходить такої назви компанії
}

//Блок для зручності перевірки пошуку інформації про компанії різних рівнів

console.log(findValueByKey(company, 'Велика Компанія')); 
//console.log(findValueByKey(company, 'Клієнт 1')); 
//console.log(findValueByKey(company, 'Клієнт 1.1')); 
//console.log(findValueByKey(company, 'Клієнт 1.2.3')); 
//console.log(findValueByKey(company, 'Клієнт 3')); 

