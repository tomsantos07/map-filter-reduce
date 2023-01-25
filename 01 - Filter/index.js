const pets = [
  {
    name: 'Rex',
    type: 'Dog',
    age:  '3'
  },
  {
    name: 'Meowth',
    type: 'Cat',
    age:  '5'
  },
  {
    name: 'Gulp',
    type: 'Fish',
    age:  '1'
  },
  {
    name: 'Pipoca',
    type: 'Bird',
    age:  '4'
  },
  {
    name: 'Chefe',
    type: 'Hamster',
    age:  '8'
  },
]

console.log(pets);

// Filter the animals lower than 5 years old.

// const youngPets = pets.filter((pet) => {
//   return pet.age < 5
// })

// console.log(youngPets);

const lowerThanFive = (number) => number < 5;

const youngPets = pets.filter(({ age }) => lowerThanFive(age))

console.log(youngPets);
