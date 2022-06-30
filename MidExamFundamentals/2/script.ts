function lift(arr: Array<string>) {
    let people: number = Number(arr[0]);
    let arrLift: Array<string> = arr[1].split(' ');
    let result: Array<string> = [];
    let hasEmpty: boolean = true;
    let peopleLeft: boolean = true;
    let capacity: number = arrLift.length * 4
    // iterating the input
    for (const currentState of arrLift) {
        let usedSeats: number = Number(currentState)
        //checking if there are free space and if there are people left
        while (usedSeats !== 4 && people !== 0) {
            usedSeats++;
            people--;
            capacity--;
        }
        //checking if there if there is space 
        if (usedSeats == 4) {
            hasEmpty = false;
        }
        //checking if there are more people
        if (people == 0) {
            peopleLeft = false;
        }
        result.push(usedSeats.toString());
    }
    // if there is no more space and no more people 
    if (capacity == 0 && people == 0) {
        return console.log(result.join(" "));
    }
    // if there is no space but there are people left
    else if (peopleLeft && !hasEmpty) {
        console.log(`There isn't enough space! ${people} people in a queue!
${result.join(" ")}`);
    }
    // if there is more space but there are no more people
    else if (!peopleLeft && !hasEmpty) {
        console.log(`The lift has empty spots!
${result.join(" ")}`);
    }
}

lift(
    [
        "15",
        "0 0 0 0 0"
    ]
)
lift([
    "20",
    "0 2 0"
]
)
lift(
    [
        "16",
        "0 0 0 0"
    ]
)
