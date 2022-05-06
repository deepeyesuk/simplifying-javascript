const _ = require('lodash')

function convertWeight(weight, ounces = 0, roundTo = 2) {
  const total = weight + (ounces / 16)
  const conversion = total / 2.2

  return _.round(conversion, roundTo)
}

it('should convert weight', () => {
  expect(convertWeight(100)).toBe(45.45)
})

it('should support custom round decimal point', () => {
  expect(convertWeight(4, 0, 2)).toBe(1.82)
})
