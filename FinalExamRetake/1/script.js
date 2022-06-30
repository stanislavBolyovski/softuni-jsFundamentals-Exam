function imitationGame(arr) {
    var message = arr.splice(0, 1)[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var command = item.split('|')[0];
        // if command is Decode the output is printed
        if (command == "Decode") {
            console.log("The decrypted message is: ".concat(message));
            break;
        }
        // if command is ChangeAll old symbols are replaced with new ones 
        else if (command == "ChangeAll") {
            var oldSymbol = item.split('|')[1];
            var newSymbol = item.split('|')[2];
            var array = message.split('');
            for (var _a = 0, array_1 = array; _a < array_1.length; _a++) {
                var symbol = array_1[_a];
                if (symbol == oldSymbol) {
                    message = message.replace(oldSymbol, newSymbol);
                }
            }
        }
        else if (command == "Insert") {
            var index = item.split('|')[1];
            var symbol = item.split('|')[2];
            var array = message.split("");
            array.splice(Number(index), 0, symbol);
            message = array.join('');
        }
        else if (command == "Move") {
            var array = message.split("");
            var firstSymbols = array.splice(0, Number(item.split('|')[1]));
            array.push(firstSymbols.join(""));
            message = array.join('');
        }
    }
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);
