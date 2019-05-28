const person = {
  name: 'Max',
}

const secondPerson = person
person.name = 'Menu'
console.log(secondPerson)

const thirdPerson = {...person}
person.name = 'Sara'
console.log(thirdPerson)
