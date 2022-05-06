const _ = require('lodash')

function convertWeight(weight, ounces = 0, roundTo = 2) {
  const total = weight + (ounces / 16)
  const conversion = total / 2.2

  return _.round(conversion, roundTo)
}

it('should use defaut values', () => {
  expect(convertWeight(100)).toBe(45.45)
})

it('should use passed parameter values', () => {
  expect(convertWeight(4, 0, 2)).toBe(1.82)
})
