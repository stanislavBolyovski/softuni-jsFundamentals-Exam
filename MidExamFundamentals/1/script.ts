function computerStor(arr: Array<number | string>) {
    let sum: number = 0;
    let customerDiscount: number = 0;
    // iterating the commands 
    for (const price of arr) {
        // if command is special there are no more commands and discount is applied
        if (price == "special") {
            customerDiscount = 10;
            break;
        }
        // if command is regular there are no more commands and discount is not applied
        else if (price == "regular") {
            customerDiscount = 0;
            break;
        }
        // if there are more commands
        else {
            //if the command is invalid price 
            if (price < 0) {
                console.log("Invalid price!");
            } 
            // if the command is valid price
            else {
                sum += Number(price)
            }
        }
    }


    let taxes: number = ((sum * 20) / 100);
    let total: number = sum + taxes;
    let discount: number = ((total * customerDiscount) / 100);

    // if the total price is less than 0 the order is invalid
    if (sum <= 0) {
        console.log('Invalid order!');
    } 
    // if the total price is more than 0 the order is valid and the output is printed
    else {
        console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${sum.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${(total - discount).toFixed(2)}$
    `);
    }
}

// computerStor([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
//     ]);
computerStor([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);
