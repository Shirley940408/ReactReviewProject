const printMyName = name => "My name is "+ name
console.log(printMyName("Shura"))
// When you only need to return one line, then you can delete 'return' and the { }
// It also work when you just need a console.log() in your function
// const printMyName = name => console.log("My name is "+ name); printMyname("Shura"); the result is the same
const numbers = [1,2,3]
const doubleNumArray = numbers.map(num => num*2)
console.log(doubleNumArray)