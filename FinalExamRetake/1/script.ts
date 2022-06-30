

function imitationGame(arr: Array<string>) {
    let message: string = arr.splice(0, 1)[0]

    for (const item of arr) {

        let command: string = item.split('|')[0]
        // if command is Decode the output is printed
        if (command == "Decode") {
            console.log(`The decrypted message is: ${message}`);
            
            break;
        }
        // if command is ChangeAll old symbols are replaced with new ones 
        else if (command == "ChangeAll") {
            let oldSymbol = item.split('|')[1];
            let newSymbol = item.split('|')[2];
            let array:Array<string> = message.split('');
            // message is converted into a string so we can iterate and check if there are old symbols
            for (const symbol of array) {
                if (symbol == oldSymbol) {
                    message = message.replace(oldSymbol, newSymbol);
                }
            }         
        }
        // if command is Insert we take the index from where we are inserting and the symbols that we are inserting
        else if(command == "Insert"){
            let index:string = item.split('|')[1];
            let symbol:string = item.split('|')[2];
            let array = message.split("")
            array.splice(Number(index), 0, symbol);
            message = array.join('');          
        } 
        // if command is Move we take the symbols that should be moved and we push them to the message
        else if(command == "Move"){
            let array = message.split("")
            let firstSymbols:Array<string> = array.splice(0,Number(item.split('|')[1]));
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
]
)

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  
)