
  //pull out single elements
  [a, b] = ['Hello', 'Shura']
  console.log(a)
  console.log(b)

  const numbers = [1, 2, 3]
  var num1, num3
  [num1, , num3] = numbers
  console.log(num1, num3)

  const person = {
    name: 'Max',
    age: 25,
  }
  const { name, age } = person
  console.log(name)
  console.log(age)
