/*reduce:convert array into objects */
const people = [
    { id: 1, name: 'Donald', born: 1938 },
    { id: 2, name: 'Vin', born: 1943 },
    { id: 3, name: 'Ben', born: 1947 },
    { id: 4, name: 'Thomas', born: 1912 },
    { id: 5, name: 'John', born: 1903 },
    { id: 6, name: 'Peter', born: 1956 },
    { id: 7, name: 'Alem', born: 1956 },
    { id: 8, name: 'Jack', born: 1953 },
    { id: 9, name: 'Ron', born: 1955 },
    { id: 10, name: 'Alan', born: 1952 }
]

const byId = (stored, current) => ({ ...stored, [current.id]: current })

const peoplebyId = people.reduce(byId, {})
console.log(peoplebyId)
