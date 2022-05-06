# Simplifying Javascript

## 4. Write Clear Conditionals
간결한게 좋아요

### Tip 17. Shorten Conditionals with Falsy Values
- Doublas Crookford 가 처음 쓰기 시작 (json 의 표준화에도 기여)
- falsy 의 종류 : '', false, null, 0, NaN
- falsy value로 조건의 간결하게 할수 있다. 
  e.g.) if (a === '' ) return 'xx' => if (!a) return 'xx'
  
### Tip 18. Check Data Quickly with the Ternary Operator
- mutaion을 최소화하기 위해서 ternary 로 사용하자
  e.g. let + if문 => ternary expression  
- ternary 가 복잡해질때는 function 으로 분리하자

### Tip 19. Maximize Efficiency with Short Circuiting
- relevant 값을 던지고 default 값을 || op 로 설정하자. 
  e.g. const path = anyPath || 'default value'
- 중첩된 truthy 조건은 && 로 합치자


