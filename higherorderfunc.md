### 4. Calculate Average  
Find the average of numbers in an array.  
```javascript  
const scores = [85, 90, 78, 92, 88];  
// Expected output: 86.6

### 5. Sum of Even Numbers  
Find the sum of only even numbers in an array.  
```javascript  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
// Expected output: 30 (2+4+6+8+10)

### 6. Sum of Odd Numbers  
Find the sum of only odd numbers in an array.  
```javascript  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
// Expected output: 25 (1+3+5+7+9)

### 7. Reverse a String  
Use reduce to reverse a string.  
```javascript  
const str = "hello";  
// Expected output: "olleh"

### 8. Find Product of Numbers  
Calculate the product of all numbers in an array.  
```javascript  
const numbers = [2, 3, 4, 5];  
// Expected output: 120 (2*3*4*5)

### 9. Create Shopping Cart Total  
Calculate the total price of items in a shopping cart.  
```javascript  
const cart = [  
  { item: 'apple', price: 1.50, quantity: 3 },  
  { item: 'banana', price: 0.75, quantity: 5 },  
  { item: 'orange', price: 2.00, quantity: 2 }  
];  
// Expected output: 12.25




## Reduce

-returns a single item

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((sum, num) => sum + num, 0)
console.log(sum)

const factorial = numbers.reduce((product, num) => product * num, 1)
console.log(factorial)

const max = numbers.reduce((max, num) => num > max? num : max, 0)
console.log(max)

iteratio 1, max = 0, num 1 => return 1 max = 1
iteration 2, max  = 1, num 2 => return 2 => max =2

const numbers = [3,1,18,12,89,13]

const max = numbers.reduce((max, num) => num > max? max, 0)
console.log(max)

iteration 1, max = 0, num 1 => return 1 => max= 3

iteraion 2, max = 3, num 3 => return 1=> max = 3

iteration 3, max = 3, num 8 => return 8 => max= 8

iteraion 4, max = 8, num 12 => return 12 => max = 12
iteraion 5, max = 12, num 89 => return 89 => max = 89
iteraion 5, max = 89, num 13 => return 89 => max = 89
const numbers = {}

a = 5
b=6
if a > b:
return a
else:
return b

ternary operator
max = a > b ? a: b
(consition) ? True : False

## practice questions

##1. sum of numbers
write a reducer to find the sum of all numbers in an array.
const numbers = [1,2,3,4,5];

##2. find maximum number
use reduce to find the largest number in an array
const numbers = [10,5,8,20,3];

##3. count occurences
count how many times each element appears in an array.
const fruits = []'apple', 'banana', 'orange', 'banana', ' apple'];

##4. calculate average
fine the avaerage of numbers in an array
const scpres = [85,90,78,88];

5. sum of even numers
find the sum of only odd numbers in an array
const numbers= [1,2,3,4,5,6,7,8,9,10];

##6. sum of odd numbers
find the sum of oly odd numbers in an array
const numbers= [1,2,3,4,5,6,7,8,9,10];

##7. reverse a string
used to reverse a string
const str="hello"

##8. count words
const sentences =["hello world","javascrpt is fun, "reduce is powerful"]


// SOME some() example
const numbers = [2, 3, 1, 4, 6, 7, 8];
const letters = ['a', 'b', 'c', 'd', 'e'];

const hasEven = numbers.some(num => num % 2 === 0); // Checks if ANY number is even
console.log(hasEven); // Output: true (because 2, 4, 6, 8 are even)

const numbers = [2, 4, 6, 8, 10];
const mixedNumbers = [2, 3, 4, 6, 8];

// Check if ALL numbers are even
const allEven = numbers.every(num => num % 2 === 0);
console.log('All numbers even:', allEven); // true (all are even)

const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
console.log('All mixed numbers even:', allEvenMixed); // false (3 is odd)


const numbers = [5, 12, 8, 130, 44];
const fruits = ['apple', 'banana', 'mango', 'orange'];

// Find first number > 10
const firstBigNumber = numbers.find(num => num > 10);
console.log(firstBigNumber); // 12 (stops after finding first match)

// Find first fruit starting with 'm'
const firstMFruit = fruits.find(fruit => fruit.startsWith('m'));
console.log(firstMFruit); // 'mango'

// With objects
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// Find user with id 2
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }


# JavaScript Higher-Order Functions Practice (reduce, find, some, every)

---

##1. Sum of Numbers (Using `reduce`)
Write a reducer to find the sum of all numbers in an array.
```javascript
const numbers = [1, 2, 3, 4, 5];
// Expected output: 15

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);



##16. Check If All Numbers Are Even (With One Odd) (Using every)
Use every to verify if a mixed array has all even numbers.

javascript
Copy
Edit
const mixedNumbers = [2, 3, 4, 6, 8];
// Expected output: false

const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
console.log('All mixed numbers even:', allEvenMixed);


##13. Find User by ID (Using find)
Find the user object with a specific ID.


const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
// Expected output: { id: 2, name: 'Bob' }

const user = users.find(u => u.id === 2);
console.log(user);


##2. Find Maximum Number (Using reduce)
Use reduce to find the largest number in an array.

// javascript
// Copy
// Edit
const numbers = [10, 5, 8, 20, 3];
// Expected output: 20

const max = numbers.reduce((max, curr) => curr > max ? curr : max, numbers[0]);
console.log(max);
##3. Count Occurrences (Using reduce)
Count how many times each element appears in an array.

// javascript
// Copy
// Edit
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Expected output: { apple: 3, banana: 2, orange: 1 }

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
##4. Calculate Average (Using reduce)
Find the average of numbers in an array.

// javascript
// Copy
// Edit
const scores = [85, 90, 78, 92, 88];
// Expected output: 86.6

const average = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
console.log(average);
##5. Sum of Even Numbers (Using reduce)
Find the sum of only even numbers in an array.

// javascript
// Copy
// Edit
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: 30

const evenSum = numbers.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);
console.log(evenSum);
##6. Sum of Odd Numbers (Using reduce)
Find the sum of only odd numbers in an array.

// javascript
// Copy
// Edit
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: 25

const oddSum = numbers.reduce((acc, num) => num % 2 !== 0 ? acc + num : acc, 0);
console.log(oddSum);
##7. Reverse a String (Using reduce)
Use reduce to reverse a string.

// javascript
// Copy
// Edit
const str = "hello";
// Expected output: "olleh"

const reversed = str.split('').reduce((rev, char) => char + rev, '');
console.log(reversed);
##8. Product of Numbers (Using reduce)
Calculate the product of all numbers in an array.

// javascript
// Copy
// Edit
const numbers = [2, 3, 4, 5];
// Expected output: 120

const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);
##9. Shopping Cart Total (Using reduce)
Calculate the total price of items in a shopping cart.


const cart = [
  { item: 'apple', price: 1.50, quantity: 3 },
  { item: 'banana', price: 0.75, quantity: 5 },
  { item: 'orange', price: 2.00, quantity: 2 }
];
// Expected output: 12.25

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(total);
##10. Count Words in Sentences (Using reduce)
Count how many total words exist in an array of sentences.


const sentences = ["hello world", "javascript is fun", "reduce is powerful"];
// Expected output: 7

const wordCount = sentences.reduce((acc, sentence) => acc + sentence.split(' ').length, 0);
console.log(wordCount);
##11. Find First Even Number (Using find)
Find the first even number in an array.


const numbers = [1, 3, 5, 2, 7];
// Expected output: 2

const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);