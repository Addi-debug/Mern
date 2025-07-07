// // const car = {
// //     type: "fiat",
// //     model: "500",
// //     color: "white"
// // };

// // // Update car's type
// // car.type = "bmw";  // changed from "hello" to "bmw"

// // // Add a new property
// // car.name = "xyz";

// // // Output the updated car object
// // console.log(car);       // Should include type: 'bmw'
// // console.log(car.type);  // Should output: bmw

// // // Object with nested properties
// // let myobj = {
// //     name: "john",
// //     age: 30,
// //     mycars: {
// //         car1: "ford",
// //         car2: "fiat"
// //     }
// // };

// // // Output "john"
// // console.log(myobj.name);

// // // Output second car
// // console.log(myobj.mycars.car2);

// // // Output final car object
// // console.log(car);

// // // arrays
// // const cars = ["saab", "volvo", "BMW"];

// // // Check original index 3 (will be undefined)
// // console.log(cars[3]);

// // // Add a new car at index 3
// // cars[3] = "Toyota";

// // // Check index 3 again
// // console.log(cars[3]);

// // // Show full array
// // console.log(cars);

// // // Show length of array
// // console.log(cars.length);

// // // Sort the array
// // console.log(cars.sort());

// // let numbers = [2, 3, 5, 1];

// // // Sort numbers correctly (in ascending order)
// // numbers.sort(function(a, b) {
// //   return a - b;
// // });
// // console.log("Sorted:", numbers);

// // // Reverse the array
// // numbers.reverse();
// // console.log("Reversed:", numbers);

// // // Add 10 to the end
// // numbers.push(10);
// // console.log("After push:", numbers);

// // // Remove the last item (10 in this case)
// // numbers.pop();  // pop() removes last element
// // console.log("After pop:", numbers);

// // const myObj = {
// //     name: "John",
// //     age: 30,
// //     cars: [
// //         { name: "Ford", models: ["FIESTA", "FOCUS", "MUSTANG"] },
// //         { name: "BMW", models: ["320", "x3", "x5"] },
// //         { name: "fiat", models: ["500", "Panda"] }
// //     ]
// // };

// // // // Accessing the name of the 3rd car (index 2)
// // // console.log(myObj.cars[2].name);  // Output: fiat

// // // Fruits array
// // // 1. Using toLocaleString
// // // const fruits1 = ["Banana", "Orange", "Apple", "Mango", 1];
// // // let mylist = fruits1.toLocaleString();
// // // console.log(mylist);  // Output: Banana,Orange,Apple,Mango,1

// // // // 2. Using flat()
// // // const myArr = [[1, 2], [3, 4], 5, 6];
// // // const newArr = myArr.flat();
// // // console.log(newArr);  // Output: [1, 2, 3, 4, 5, 6]

// // // // 3. Using copyWithin()
// // // const fruits2 = ["Banana", "Orange", 4, "Apple", "Mango", "kiwi"];
// // // fruits2.copyWithin(2, 0, 2);  // Copy elements from index 0 to 2 into position 2
// // // console.log(fruits2);  
// // // // Output: ["Banana", "Orange", "Banana", "Orange", "Mango", "kiwi"]



// // const months = ["jan", "feb", "mar", "apr"];
// // const sorted = months.toSorted();
// // months.sort()
// // console.log(sorted);   // Output: [ 'apr', 'feb', 'jan', 'mar' ]
// // console.log(months);   // Output: [ 'jan', 'feb', 'mar', 'apr' ] (original unchanged)

// const numbers = [3,1,18,12,89,13];
// const aaa = (max,num) => {(num > max ? num : max);
// }

// const max = numbers.reduce((max, num) => num > max? max, 0)
// console.log(max);

// const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

// const countReducer = (accumulator, currentValue) => {
//   if (accumulator[currentValue]) {
//     accumulator[currentValue]++;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// };

// const fruitCounts = fruits.reduce(countReducer, {});
// console.log(fruitCounts);

// Step-by-step breakdown:
// Iteration 1: accumulator = {}, currentValue = "apple" → {apple: 1}
// Iteration 2: accumulator = {apple:1}, currentValue = "banana" → {apple:1, banana:1}
// Iteration 3: accumulator = {apple:1, banana:1}, currentValue = "orange" → {apple:1, banana:1, orange:1}
// Iteration 4: accumulator = {apple:1, banana:1, orange:1}, currentValue = "apple" → {apple:2, banana:1, orange:1}
// Iteration 5: accumulator = {apple:2, banana:1, orange:1}, currentValue = "banana" → {apple:2, banana:2, orange:1}
// Iteration 6: accumulator = {apple:2, banana:2, orange:1}, currentValue = "apple" → {apple:3, banana:2, orange:1}

