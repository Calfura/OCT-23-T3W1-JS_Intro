//let exampleEmptyVariable = null;
//let anotherEmptyVariable = undefined;

//console.log(anotherEmptyVariable);

//let message = "hello from the script.js file!"

//console.log(message);

// no keyword = declared with var
//world = "Earth"

//console.log(`Hello ${world}, I am Alex!`);

//console.log("Hello " + world + ", I am Alex!")

//let world = "Mars";

//console.log(`Hello ${world}, I am Alex!`)

//{

//    let world = "Mars";

//    console.log(`Hello ${world}, I am Alex!`)

//}







// List in Python is Array in JS

let favouriteFruits = [
    "mango",
    "banana",
    "grapes",
    "passionfruit",
    "pear",
    "strawberry",
    "watermelon",
    "lychee",
    "cherry",
    "blueberry",
    "tomato",
    "papaya",
    "dragonfruit",
    "kiwi"
];

console.log(favouriteFruits);

console.log("The class' favourite fruits are: " + favouriteFruits);


// favouriteFruits.forEach(fruit => {
//     console.log("Someone in the class loves " + fruit)
// });

for (fruitIndex in favouriteFruits) {
    console.log("Someone in the class loves " + favouriteFruits[fruitIndex]);
}


console.log(Array.isArray(favouriteFruits));



let sortedFavouriteFruits = favouriteFruits.sort();

console.log(sortedFavouriteFruits);

let someNewArray = new Array(10);

someNewArray.push("manago")

console.log(someNewArray);






// Dictionary in Python is Object in JS

let alex = {
    name: "Alex",
    condingLanguages: ["C#", "JavaScript", "HTML", "CSS"],
    hobbies: [
        {
            name: "gardening",
            skill: 10,
        },
		{
			"name": "gaming",
			"favouriteGames": ["pokemon", "halo"],
			"skill": 9001,
		}
	],
};

alex.hobbies[1]["favouriteGames"][0] = "digimon";

alex.hobbies[1].favouriteGames[0] = "palworld";

console.log(alex);


let weather = "rainy";
switch (weather) {
    case "sunny":
        console.log("Sunny weather is nice when its not hot!")
        break;
    case "rainy":
        console.log("Rain is nice when it's not torrential!")
        break;
    case "hail":
        console.log("Man that hail is wild")
        break;
    case "storm":
    case "snowy":
    default:
        console.log("Crazy weather, am I right?")
        break;
}