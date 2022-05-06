const _ = require('lodash')

function getCityAndState([latitude, longitude]){
  const regions = [{
      city: 'London',
      state: 'Greater London',
      location: [32.7122222, -103.1405556]
    }, {
      city: 'Bristol',
      state: ' Gloucestershire',
      location: [31.7122222, -100.1405556]
    }]

  return _.find(regions, x => x.location[0] == latitude && x.location[1] == longitude )
}

it('should destructure the incoming parameter', () => {
  const location = [32.7122222, -103.1405556]
  const { city, state} = getCityAndState(location)

  expect(city).toBe('London')
  expect(state).toBe('Greater London')
})
