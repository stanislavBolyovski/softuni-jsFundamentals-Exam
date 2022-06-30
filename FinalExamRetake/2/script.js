function food(arr) {
    // generating regex for validaiton
    var regex = arr[0].match(/[a-zA-Z]+( [a-zA-Z]+)?\#[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]\#\d+|[a-zA-Z]+\|[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]\|\d+/gm);
    var result = [];
    var calories = 0;
    // iterating the result from the regex validation
    for (var _i = 0, regex_1 = regex; _i < regex_1.length; _i++) {
        var item = regex_1[_i];
        if (item.includes('#')) {
            item = item.split("#");
        }
        else {
            item = item.split("|");
        }
        calories += Number(item[2]);
        result.push("Item: ".concat(item[0], ", Best before: ").concat(item[1], ", Nutrition: ").concat(item[2]));
    }
    //suming the calories and unhshifting the days 
    calories = calories / 2000;
    result.unshift("You have food to last you for: ".concat(Math.floor(calories).toString(), " days!"));
    //iterate the result and print it 
    for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
        var item = result_1[_a];
        console.log(item);
    }
}
food(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
