function thePianist(arr) {
    var numberOfPieces = Number(arr.shift());
    var piecesArray = [];
    //creating the list with initially object items
    for (var i = 0; i < numberOfPieces; i++) {
        var items = arr[i].split('|');
        piecesArray.push({ name: items[0], composer: items[1], key: items[2] });
    }
    //piecesArray - the array of obj
    arr.splice(0, numberOfPieces);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var command = arr_1[_i];
        // checking if the command is Stop
        if (command == 'Stop') {
            //iterating the array and printing the output
            for (var _a = 0, piecesArray_1 = piecesArray; _a < piecesArray_1.length; _a++) {
                var items = piecesArray_1[_a];
                console.log("".concat(items.name, " -> Composer: ").concat(items.composer, ", Key: ").concat(items.key));
            }
            break;
        }
        // checking if the command is Add
        else if (command.split("|")[0] == "Add") {
            var nameToAdd = command.split("|")[1];
            var composerToAdd = command.split("|")[2];
            var keyToAdd = command.split("|")[3];
            var isThere = false;
            // iterating the array to find the obj with the given name if exists
            for (var _b = 0, piecesArray_2 = piecesArray; _b < piecesArray_2.length; _b++) {
                var obj = piecesArray_2[_b];
                if (obj.name == nameToAdd) {
                    isThere = true;
                }
            }
            // if the obj exists item is added
            if (!isThere) {
                piecesArray.push({ name: nameToAdd, composer: composerToAdd, key: keyToAdd });
                console.log("".concat(nameToAdd, " by ").concat(composerToAdd, " in ").concat(keyToAdd, " added to the collection!"));
            }
            // if the object is not found err msg is displayed
            else {
                console.log("".concat(nameToAdd, " is already in the collection!"));
            }
        }
        // if the command is Remove
        else if (command.split("|")[0] == "Remove") {
            var itemToRemove = command.split("|")[1];
            var indexToDelete = 0;
            var isThere = false;
            // iterating the array to search for the item that needs to be removed 
            for (var _c = 0, piecesArray_3 = piecesArray; _c < piecesArray_3.length; _c++) {
                var items = piecesArray_3[_c];
                // if item is found it is deleted            
                if (items.name == itemToRemove) {
                    isThere = true;
                    piecesArray.splice(indexToDelete, 1);
                    console.log("Successfully removed ".concat(itemToRemove, "!"));
                    break;
                }
                indexToDelete++;
            }
            //if item is not found err msg is displayed
            if (!isThere) {
                console.log("Invalid operation! ".concat(itemToRemove, " does not exist in the collection."));
            }
            indexToDelete = 0;
        }
        // if command is ChangeKey 
        else if (command.split("|")[0] == "ChangeKey") {
            var nameOfChanged = command.split("|")[1];
            var keyToChange = command.split("|")[2];
            var isThere = false;
            // iterating the array to find if item that need to be changed is there 
            for (var _d = 0, piecesArray_4 = piecesArray; _d < piecesArray_4.length; _d++) {
                var items = piecesArray_4[_d];
                // if the item is there the key is changed 
                if (items.name == nameOfChanged) {
                    items.key = keyToChange;
                    console.log("Changed the key of ".concat(nameOfChanged, " to ").concat(keyToChange, "!"));
                    isThere = true;
                    break;
                }
            }
            // if the item is not there err msg is displayed
            if (!isThere) {
                console.log("Invalid operation! ".concat(nameOfChanged, " does not exist in the collection."));
            }
        }
    }
}
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]
// )
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);
