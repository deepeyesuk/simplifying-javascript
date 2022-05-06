const { filter } = require("lodash");

describe('Reduce Test with Dogs', () => {
  const dogs = [ 
    {     
      name: 'max',
      size: 'small',
      breed: 'boston terrier', 
      color: 'black',
    },
    {    
      name: 'don',
      size: 'large', 
      breed: 'labrador', 
      color: 'black',
    },
    {    
      name: 'shadow', 
      size: 'medium', 
      breed: 'labrador', 
      color: 'chocolate',
    },
  ]
  
  it('should list all color of dogs', () => {
    const colors = dogs.reduce((colors, dog) => {
      if (colors.includes(dog.color)) {
        return colors;
      }
      return [...colors, dog.color]
    }, [])
  
    expect(colors).toEqual(['black', 'chocolate'])
  })
  
  it('should form a different shape from the original data', () => {

    const expectedResult = {
      bread: ['boston terrier', 'labrador', 'labrador'],
      size: ['small', 'large', 'medium'],
      color: ['black', 'black', 'chocolate']
    }

    const filters = dogs.reduce((filters, dog) => {
      filters.breed.add(dog.breed)
      filters.size.add(dog.size)
      filters.color.add(dog.color)
      return filters
    }, {
      bread: new Set(),
      size: new Set(),
      color: new Set()
    })

    expect(filters).toEqual(expectedResult)
  })
})


