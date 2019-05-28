const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name:'Max'
}
const newPerson = {
  ...person,
  age:28,
}
console.log(newPerson)

const f = (...args) => {
  return args.filter(value => value === 1)
}
console.log(f(1,2,3))