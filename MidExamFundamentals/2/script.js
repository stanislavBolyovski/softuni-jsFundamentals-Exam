function lift(arr) {
    var people = Number(arr[0]);
    var arrLift = arr[1].split(' ');
    var result = [];
    var hasEmpty = true;
    var peopleLeft = true;
    var capacity = arrLift.length * 4;
    for (var _i = 0, arrLift_1 = arrLift; _i < arrLift_1.length; _i++) {
        var currentState = arrLift_1[_i];
        var usedSeats = Number(currentState);
        while (usedSeats !== 4 && people !== 0) {
            usedSeats++;
            people--;
            capacity--;
        }
        if (usedSeats == 4) {
            hasEmpty = false;
        }
        if (people == 0) {
            peopleLeft = false;
        }
        result.push(usedSeats.toString());
    }
    if (capacity == 0 && people == 0) {
        return console.log(result.join(" "));
    }
    else if (peopleLeft && !hasEmpty) {
        console.log("There isn't enough space! ".concat(people, " people in a queue!\n").concat(result.join(" ")));
    }
    else if (!peopleLeft && !hasEmpty) {
        console.log("The lift has empty spots!\n".concat(result.join(" ")));
    }
}
lift([
    "15",
    "0 0 0 0 0"
]);
lift([
    "20",
    "0 2 0"
]);
lift([
    "16",
    "0 0 0 0"
]);
