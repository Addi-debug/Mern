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

// 3. Modifying original array (caution!)
const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});
console.log(numbers); // [2, 4, 6]

// 4. Working with objects
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
users.forEach(user => console.log(user.name));

// 5. Using thisArg parameter
function Counter() {
  this.count = 0;
  this.add = function(items) {
    items.forEach(function(item) {
      this.count += item;
    }, this); // `this` refers to Counter instance
  };
}
const counter = new Counter();
counter.add([1, 2, 3]);
console.log(counter.count); // 6

document.querySelectorAll('.buttons').forEach(button => {
  button.addEventListener('click', handleClick);
});

fetch('/api/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => processUser(user));
  });

  const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 }
];

inventory.forEach(item => {
  item.lastUpdated = new Date();
});