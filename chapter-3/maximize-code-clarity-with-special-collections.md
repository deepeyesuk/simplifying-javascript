# Simplifying Javascript

## 3. Maximize Code Clarity with Special Collections
### Tip 14. Iterate Over Key-Value Data with Map and the Spread Operator
- Objects are very frustrating to iterate over
  - key-value pair를 얻기 위해서 Object.keys()로 키를 가져오고, value 를 가져오기 위해서 object를 key로 다시 참조해야한다.
  - 찾아서 만들 key-value pair 의 order를 보장할 수 없다
- Map() is better but not support .sort()
- ... 로 sort된 key-value pair 를 얻을 수 있다. [...objects].sort()
- .map() 으로 [...objects].sort() + 결과.join()를 for loop 없이 간단하게 만들 수 있다. 
- summary
  1. Convert your map to an array.
  2. Sort the array.
  3. Convert each pair to a string of the form 'key:value'.
  4. Join the array items creating a string.
  5. Combine the string with other information using a template literal.
  
  
### Tip 15. Create Maps Without Side Effects
```
const defaults14_1 = new Map()
    .set('color', 'brown')
    .set('breed', 'beagle')
    .set('state', 'kansas');

const filters14_1 = new Map()
    .set('color', 'black');
console.log(defaults14_1)
console.log(defaults14_1.get('color'))
console.log(filters14_1.get('color'))

const filters14_2 = new Map()
    .set('color', 'black')
    .set('color', 'brown');
console.log(filters14_2)
console.log(filters14_2.get('color'))

const combined = new Map([...defaults14_1, ...filters14_1])
console.log(combined)
console.log(combined.get('color'))
```
> Map(3) { 'color' => 'brown', 'breed' => 'beagle', 'state' => 'kansas' }
  brown
  black
  Map(1) { 'color' => 'brown' }
  brown
  Map(3) { 'color' => 'black', 'breed' => 'beagle', 'state' => 'kansas' }
  black

### Tip 16. Keep Unique Values with Set
- The interface is very simple and resembles Map in many ways. The main difference is that instead of taking an array of pairs, you can create a new instance of Set by passing a flat array as an argument.
```
const colors = ['black', 'black', 'chocolate']; 
const unique = new Set(colors);
// Set {'black', 'chocolate'}

function getColors(dogs) {
  return dogs.map(dog => dog.color)
}
getColors(dogs);
// ['black', 'black', 'chocolate']

function getUnique(attributes) {
  return [...new Set(attributes)];
}
// Set ['black', 'chocolate']
```

Traditionally, you have to combine each piece with a + sign.
Template literals: ``` = `string ${variable}` ``` are such an improvement on string concatenation
