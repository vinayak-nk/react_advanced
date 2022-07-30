// import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: 'test 1',
    lastName: 'test 2',
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export const data = [
  {
    age: 9,
    firstName: "f 1",
    lastName: "l 1",
    progress: 28,
    status: "relationship",
    visits: 5,
    subRows: [
      {
        age: 9,
        firstName: "sf 1",
        lastName: "sl 1",
        progress: 28,
        status: "relationship",
        visits: 5,    
      },
      {
        age: 9,
        firstName: "sf 2",
        lastName: "sl 2",
        progress: 28,
        status: "relationship",
        visits: 5,    
      },
    ]
  },
  {
    subRows: [
      {
        age: 9,
        firstName: "sf 1",
        lastName: "sl 1",
        progress: 28,
        status: "relationship",
        visits: 5,    
      },
      {
        age: 9,
        firstName: "sf 2",
        lastName: "sl 2",
        progress: 28,
        status: "relationship",
        visits: 5,    
      },
    ]
  }
]

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}








