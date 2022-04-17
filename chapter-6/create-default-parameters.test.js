const { it, expect } = require('@jest/globals')
const _ = require('lodash')

function convertWeight(weight, ounces, roundTo) {
  const oz = ounces ? ounces / 16 : 0
  const total = weight + oz
  const conversion = weight / 2.2
  const round = roundTo === undefined ? 2 : roundTo

  return _.round(conversion, round)
}

it('should convert weight', () => {
  expect(convertWeight(100)).toBe(45.45)
})

it('should support custom round decimal point', () => {
  expect(convertWeight(4, 0, 2)).toBe(1.82)
})
