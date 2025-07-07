# JavaScript forEach Method

The `forEach()` method executes a provided function once for each array element.

## Syntax
```javascript
array.forEach(function(currentValue, index, arr), thisValue)

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(item, index) {
    console.log(index, item);
});

// Arrow function version
fruits.forEach((item) => console.log(item));


### 2. `data.md`
This likely contains notes about handling data in the backend. Here's a possible content:

```markdown
# Data Handling in Backend

## Common Data Operations
1. Reading/Writing files
2. Database operations
3. API data fetching

## Example: Reading a JSON file
```javascript
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data);
    console.log(jsonData);
});

# JavaScript forEach() Method Guide

## Basic Syntax
```javascript
array.forEach(function(currentValue, index, array) {
  // code to execute for each element
}, thisArg);


// 1. Logging array elements
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(fruit));

// Output:
// apple
// banana
// cherry

// 2. Using index parameter
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

// Output:
// 1. apple
// 2. banana
// 3. cherry