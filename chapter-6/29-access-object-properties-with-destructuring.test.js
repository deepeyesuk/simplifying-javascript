it('should destructure simple properties', () => {
  const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    equipment: 'Canon',
    format: 'digital',
    src: '/landscape-nm.jpg',
    location: [32.7122222, -103.1405556],
  }

  const { photographer, title } = landscape

  expect(photographer).toBe(landscape.photographer)
  expect(title).toBe(landscape.title)
})

it('should set a default value to destructured variable', () => {
  const landscape = {
    title: 'Landscape',
    equipment: 'Canon',
    format: 'digital',
    src: '/landscape-nm.jpg',
    location: [32.7122222, -103.1405556],
  };

  const { photographer = 'Anonymous', title } = landscape

  expect(photographer).toBe('Anonymous')
  expect(title).toBe(landscape.title)
})

it('should name a variable for remaining key-value pairs', () => {
  const landscape = {
    title: 'Landscape',
    equipment: 'Canon',
    format: 'digital',
    src: '/landscape-nm.jpg',
  };

  const { title, ...additional } = landscape

  expect(title).toBe(landscape.title)
  expect(additional).toEqual({'equipment': 'Canon', 'format': 'digital', 'src': '/landscape-nm.jpg'})
})

it('should destructure a value', () => {
  const landscape = {
    title: 'Landscape',
    equipment: 'Canon',
    format: 'digital',
    src: '/landscape-nm.jpg',
  };

  const { src: url } = landscape
  expect(url).toBe(url)
})

it('should destructure an array', () => {
  const landscape = {
    location: [32.7122222, -103.1405556],
  };

  const { location } = landscape
  expect(location).toEqual([32.7122222, -103.1405556])

  const { location: [latitude, longitude]} = landscape
  expect(latitude).toBe(landscape.location[0])
  expect(longitude).toBe(landscape.location[1])
})
