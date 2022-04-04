## 2. Manage Data Collections with Arrays
array 는 바뀌지 않는다.
collection 을 핸들링하는 기본적이고 중요한 개념의 시작.
### Tip 5. Create Flexible Collections with Arrays
- collection's operation of add, remove, sort in array
- mutable array operation can be dangerous in 'sort'

### Tip 6. Check Existence in an Array with Includes()
- Object.keys 롤 object 들의 key들의 array를 리턴할수 있다. 
- .find 는 매칭되는 first item 만 리턴, 
  .filter 는 매칭되는 모든 item들의 콜렉션

- indexOf 대신 include를 써라. 
  이유는, indexOf 에서 0의 index를 리턴할때 이를 false 로 실수 할 가능성이 높아서 >-1 인 validation 을 반드시 해줘야 한다. 

### Tip 7. Mold Arrays with the Spread Operator
- spread operator 는 array 들의 list 를 리턴
> list =  element들만을 가지고 있는 collections
> memcopy가 일어나므로 mutation 을 막을 수있다

- e.g. 
  - loop를 통해서 원하는 조건의 값들을 찾아서 새로운 collections을 담아서 리턴 
  - splice를 통해서 사용하지만 mutation 할 경우에, 문제의 요소가 있어서 협업에 문제가 있다. > slice + concat + slice 의 조합 

### Tip 8. Avoid Push Mutations with the Spread Operator
```
// Copy
const toCopy = ['Moby Dick', 'White Teeth']; 
const copied = toCopy.slice();

const moreCopies = ['Moby Dick', 'White Teeth']; 
const addMore = [...moreCopies, 'More Ear'];

```

### Tip 9. Avoid Sort Confusion with the Spread Operator
[traditional way]
```
function sortByYears(a, b) { 
    if (a.years === b.years) {
        return 0;
    }
    return a.years - b.years;
}
```

[by spread operator]
```
[...staff].sort(sortByYears);
```
