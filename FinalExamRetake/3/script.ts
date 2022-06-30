function thePianist(arr: Array<string>) {
    let numberOfPieces: number = Number(arr.shift());
    let piecesArray: any = [];
    //creating the list with initially object items
    for (let i = 0; i < numberOfPieces; i++) {
        let items = arr[i].split('|');
        piecesArray.push({ name: items[0], composer: items[1], key: items[2] })
    }
    //piecesArray - the array of obj
    arr.splice(0, numberOfPieces)
    for (const command of arr) {
        // checking if the command is Stop
        if (command == 'Stop') {
            //iterating the array and printing the output
            for (const items of piecesArray) {
                console.log(`${items.name} -> Composer: ${items.composer}, Key: ${items.key}`);         
            }
            break;
        }
        // checking if the command is Add
        else if (command.split("|")[0] == "Add") {
            let nameToAdd: string = command.split("|")[1];
            let composerToAdd: string = command.split("|")[2];
            let keyToAdd: string = command.split("|")[3];
            let isThere: boolean = false;
            // iterating the array to find the obj with the given name if exists
            for (const obj of piecesArray) {
                if (obj.name == nameToAdd) {
                    isThere = true;
                }
            }
            // if the obj exists item is added
            if (!isThere) {
                piecesArray.push({ name: nameToAdd, composer: composerToAdd, key: keyToAdd });
                console.log(`${nameToAdd} by ${composerToAdd} in ${keyToAdd} added to the collection!`);             
            }
            // if the object is not found err msg is displayed
            else {
                console.log(`${nameToAdd} is already in the collection!`);
            }
        } 
        // if the command is Remove
        else if (command.split("|")[0] == "Remove") {
            let itemToRemove:string = command.split("|")[1]
            let indexToDelete:number = 0;
            let isThere:boolean = false;    
            // iterating the array to search for the item that needs to be removed 
            for (const items of piecesArray) {    
                // if item is found it is deleted            
                if(items.name == itemToRemove){ 
                    isThere = true;                                                                          
                    piecesArray.splice(indexToDelete,1)  
                    console.log(`Successfully removed ${itemToRemove}!`);                   
                    break;                 
                }
                indexToDelete++              
            }
            //if item is not found err msg is displayed
            if(!isThere){
                console.log(`Invalid operation! ${itemToRemove} does not exist in the collection.`);  
            }
            indexToDelete = 0;
        } 
        // if command is ChangeKey 
        else if (command.split("|")[0] == "ChangeKey") {
            let nameOfChanged:string = command.split("|")[1];
            let keyToChange:string = command.split("|")[2];
            let isThere:boolean = false;
            // iterating the array to find if item that need to be changed is there 
            for (const items of piecesArray) {
                // if the item is there the key is changed 
                if(items.name == nameOfChanged){                  
                    items.key = keyToChange;
                    console.log(`Changed the key of ${nameOfChanged} to ${keyToChange}!`);                  
                    isThere = true;
                    break;
                } 
            }
            // if the item is not there err msg is displayed
            if(!isThere){
                console.log(`Invalid operation! ${nameOfChanged} does not exist in the collection.`);    
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
  ]  
)