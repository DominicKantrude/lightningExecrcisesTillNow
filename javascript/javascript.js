
    ////************************      1            */
// function go(direction, speed) {

//     console.log("the car is moving " + direction + " at " + speed + " mph " + printSlowIfFast(speed));
// }

// const printSlowIfFast = (speed) => {
//     if (speed > 75) {
//         return "slow Down"
//     }
// }

// const foods = ["pizza", "spaghetti", "burger", "hotdog", "corn dog", "taco"]

// const findDogs = (foods) => {
//     for (let i = 0; i < foods.length; i++) {
//         if (findDogs[i] === "hotdog") {
//             console.log("hotdog")
//         } else {
//             console.log("not hotdog")
//         }
//     }
// }



// let array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark" }, "JS", "rockstar"];







    ////************************      2            */
// const findStringInArray = (arrayTarget) => {

//     let newArray = [];
//     for (let i = 0; i < arrayTarget.length; i++) {
//         let element = arrayTarget[i];

//         if (typeof element === "string") {
          
//             newArray.push(element)
//         }
//     }
//     console.log(newArray);

// }








    ////************************      3            */
// // const wardrobe = {
// //     height: 80,
// //     manufacturer: "Killibrew & Sons",
// //     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
// //     depth: 38,
// //     width: 50
// // }

// // const propArray = (Object.getOwnPropertyNames(wardrobe));
// // console.log(propArray);
// // console.log(wardrobe.size());

// //     for (let index = 0; index < wardrobe.size; index++) {
// //         propValue = wardrobe[propArray[i]];
// //         console.log(propValue);
        
// //     }


   

//     const brandi = {
//         height: "5'7",
//         weight: 160,
//         favFood:"sushi",
//         age:54
//     }
//     const kellee = {
//         height: "5'3",
//         weight: 130,
//         favFood: "pizza",
//         age:27
//     }
//     const joe = {
//         height: "5'11",
//         weight:220,
//         favFood: "taco",
//         age:55
//     }
//     const john = {
//         height: "5'0",
//         weight: 160,
//         favFood: "tuna",
//         age:25
//     }
//     const famArray = {brandi, kellee, joe, john};


//     const kennel = {
//         name: "Nashville North Kennels",
//         address: "100 Demonbreun Road",
//         manager: "Harper Frankstone",
//         capacity: 50,
//         currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
//      }
// for (let index = 0; index < kennel.currentAnimals.length; index++) {
//     console.log(kennel.currentAnimals[index]);

    
// }







    ////************************      4            */
// const nashvilleSoftwareSchool = {
//     founded: 2012,
//     director: "John Wark",
//     instructors: {
//         fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//         partTime: ["Zoe", "Nathan"]
//     },
//     address: "500 Interstate Blvd. S"
// }

// let partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime;
// let fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;
// for (let index = 0; index < partTimeInstructors.length; index++) {
//     console.log(partTimeInstructors[index]);
// }

// for (let index = 0; index < fullTimeInstructors.length; index++) {
//     let instructor = fullTimeInstructors[index];
//     if (instructor === "Zoe" || instructor === "Andy") {
//         console.log("this is andy or zoe");
//     }
    
    
// }






    ////************************      5            */
// // const evenOrOdd = (number) => {
// //     if (number % 2 === 0) {
// //         console.log("even");
        
// //     }else{
// //         console.log("Odd");
// //     }
// // }

// const evenOrOdd = (number) => {
// console.log(number % 2 === 0  ? 'Even' : 'Odd');
// }



    





    ////************************      6            */

// arrayOfNumbers = [2 , 4 , 6, 5, 7, 8, 11, 14];

// arrayOfNumbers.forEach(evenOrOdd);
// // for (let index = 0; index < arrayOfNumbers.length; index++) {
// //     evenOrOdd(arrayOfNumbers[index]);
    
// // }













    ////************************      7            */
// const age = 30
// const timeSpan = 25
// const futureAge = age + timeSpan
// const name = "Biff"
// const generationStereotype = "millenial"
// const dadJoke = "milleni-old"



// console.log(`Hi. My name is ${name}, and Im ${age} old. They say that make me ${generationStereotype}. 
// In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} TouchEvent. haha!`);








    ////************************      8            */
const addNumbers = (num1, num2) => {
    return num1 + num2;
}

const subtractNumbers = (num1, num2) => {
    return num1 - num2;
}




const calculate = (calculatorFunction, num1, num2 )=>{
    console.log(calculatorFunction(num1, num2));
}

console.log(calculate(addNumbers, 1, 1))
console.log(calculate(addNumbers,2, 3))
console.log(calculate(subtractNumbers ,2 , 4))
console.log(calculate(subtractNumbers, 5, 4))