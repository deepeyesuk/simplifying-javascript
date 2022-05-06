it('should list all color of dogs', () => {
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

  const colors = dogs.reduce((colors, dog) => {
    if (colors.includes(dog.color)) {
      return colors;
    }
    return [...colors, dog.color]
  }, [])

  expect(colors).toEqual(['black', 'chocolate'])
})