function computerStor(arr) {
    var sum = 0;
    var customerDiscount = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var price = arr_1[_i];
        if (price == "special") {
            customerDiscount = 10;
            break;
        }
        else if (price == "regular") {
            customerDiscount = 0;
            break;
        }
        else {
            if (price < 0) {
                console.log("Invalid price!");
            }
            else {
                sum += Number(price);
            }
        }
    }
    var taxes = ((sum * 20) / 100);
    var total = sum + taxes;
    var discount = ((total * customerDiscount) / 100);
    if (sum <= 0) {
        console.log('Invalid order!');
    }
    else {
        console.log("Congratulations you've just bought a new computer!\n    Price without taxes: ".concat(sum.toFixed(2), "$\n    Taxes: ").concat(taxes.toFixed(2), "$\n    -----------\n    Total price: ").concat((total - discount).toFixed(2), "$\n    "));
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
