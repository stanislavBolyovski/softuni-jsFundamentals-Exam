function memoryGame(arr: any) {

    let elements: Array<string> = arr.shift().split(' ');
    let counter: number = 0;
    for (const line of arr) {
        let firstGuess = Number(line.split(' ')[0]);
        let secondGuess = Number(line.split(' ')[1]);
        //  checking if the line is end or if there are elements 
        if (line == 'end' || elements.length == 0) {
            //check if the line is end and there are no more elements 
            if (elements.length == 0) {
                console.log(`You have won in ${counter} turns!`);
                break;
            }
            //if line is end but there are more elements 
            else {
                console.log('Sorry you lose :(');
                console.log(elements.join(' '));
            }
            // checking if the input is valid 
        } else if (firstGuess > 0 || secondGuess > 0) {
            counter++;
            let firstItem: string = elements[line[0]];
            let secondItem: string = elements[line[2]];
            //when the guess is right
            if (firstItem == secondItem) {

                console.log(`Congrats! You have found matching elements - ${firstItem}!`);
                elements.splice(line[0], 1);
                //when the first element is removed the second guess needs to be indexed -1 
                if (line[2] - 1 >= 0) {
                    elements.splice(line[2] - 1, 1);
                } else {
                    elements.splice(line[2], 1);
                }
            }
            //when the guess is not right  
            else {
                console.log("Try again!");

            }
            // if the input is invalid
        } else {
            counter++;
            console.log('Invalid input! Adding additional elements to the board');
            elements.splice(elements.length / 2, 0, `-${counter}a`, `-${counter}a`)
        }
    }

}



// memoryGame([
//     "a 2 4 a 2 4",
//     "0 3",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"
// ]
// )
// memoryGame([
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]  
// )
// memoryGame( [
//     "1 1 2 2 3 3 4 4 5 5", 
//     "1 0",
//     "-1 0",
//     "1 0", 
//     "1 0", 
//     "1 0", 
//     "end"
//     ]   
// );
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
)
