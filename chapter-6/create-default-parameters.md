# Create Default Parameters

## Tip 28 Create Default Parameters

```javascript
function convertWeight(weight, ounces = 0, roundTo = 2) {
  const total = weight + (ounces / 16)
  const conversion = total / 2.2

  return _.round(conversion, roundTo)
}
```

## Tip 29 Access Object Properties with Destructuring
