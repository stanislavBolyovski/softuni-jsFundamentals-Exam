function food(arr: Array<string>) {

    // generating regex for validaiton
    let regex: any = arr[0].match(/[a-zA-Z]+( [a-zA-Z]+)?\#[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]\#\d+|[a-zA-Z]+\|[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]\|\d+/gm);
    let result: Array<string> = [];
    let calories: number = 0;

    // iterating the result from the regex validation
    for (let item of regex) {
        if (item.includes('#')) {
            item = item.split("#");
        } else {
            item = item.split("|");
        }
        calories += Number(item[2]);
        result.push(`Item: ${item[0]}, Best before: ${item[1]}, Nutrition: ${item[2]}`)
    }

    //suming the calories and unhshifting the days 
    calories = calories / 2000;
    result.unshift(`You have food to last you for: ${Math.floor(calories).toString()} days!`);

    //iterate the result and print it 
    for (const item of result) {
        console.log(item);
    }
}

food(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])