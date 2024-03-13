//OD 1

//let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
//let {numPlanets, yearNeptuneDiscovered} = facts;

//console.log(numPlanets);
//console.log(yearNeptuneDiscovered);

// OD 2

//let planetFacts = {
    //numPlanets: 8,
    //yearNeptuneDiscovered: 1846,
    //yearsMarsDiscovered: 1659
//};

//let {numPlanets, ...discoveryYears} = planetFacts;

//console.log(discoveryYears);

// OD 3

//function getUserData({firstName, favoriteColor="green"}) {
    //return `Your name is ${firstName} and you like ${favoriteColor}`;
//}

//const result = getUserData({firstName: "Alejandro", favoriteColor: "purple"});
//console.log(result)

//const result = getUserData({firstName: "Melissa"});
//console.log(result)

//const result = getUserData({});
//console.log(result)

// Array Destruct 1

//let [first, second, third] = ["Maya", "Marisa", "Chi"];

//console.log(first);
//console.log(second);
//console.log(third);


// Array Destruct 2

//let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    //"Raindrops on roses",
    //"whiskers on kittens", 
    //"Bright copper kettles",
    //"warm woolen mittens",
    //"Brown paper packages tied up with strings"
//]

//console.log(raindrops);
//console.log(whiskers);
//console.log(aFewOfMyFavoriteThings);

// Array Destruct 3

//let numbers = [10, 20, 30];
//[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

//console.log(numbers)


// ES2015 Obj Destruct

//const obj = {
    //numbers: {
        //a: 1,
        //b: 2
    //}
//};

//const {a,b} = obj.numbers
//const result = obj.numbers
//console.log(result)

// ES2015 Array Swap

//var arr = [1, 2];
//var temp = arr[0];
//arr[0] = arr[1];
//arr[1] = temp;

//[arr[0], arr[1]] = [arr[1], arr[0]]

// Race Results

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

const result = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
console.log(result)


