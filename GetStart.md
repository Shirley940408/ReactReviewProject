# ReactReview using an application

## Geting started

### Two kinds of applications
- #### single page Applications
   - #### Only one Html page, Content is (re)rendered on Client
  >more popular these days, for it allow you manage the entire page with JavaScript and never have to go back to the server to reload the pages -- better user experience because everything happens instantly; Even if the user needs to wait, you are showing a spinner or you are still presenting a reactive web app
- #### Multi page Applications
   - #### Multiple Html pages, Content is rendered on Server
  >the individual widget does not knows other components' exist. The user always need to wait the server response for it is rendered on server.
  ## ES6 syntax review
### Copy value vs Copy reference
###### For primary data, it always copy value.
```Js
let a = 1
let b = a
a = 5
console.log(a)//a->5
console.log(b)//b->1
```
###### For the Object, it always copy reference. To avoid copy the reference, use a spread operator.
```Js
const person = {
  name: 'Max',
}

const secondPerson = person
person.name = 'Menu'
console.log(secondPerson)//{name: Menu}

const thirdPerson = {...person}
person.name = 'Sara'
console.log(thirdPerson)//{name: Menu}
//it is still named Menu, for using spread will copy the value, not reference.
```
### Arrow Function
###### Arrow function normally could make your code more delicate and concise.
```Js
const printMyName = name => "My name is "+ name
console.log(printMyName("Shura"))
// When you only need to return one line, then you can delete 'return' and the { }
// It also work when you just need a console.log() in your function
// const printMyName = name => console.log("My name is "+ name); printMyname("Shura"); the result is the same
```
###### Some of method that could be used
```Js
const numbers = [1,2,3]
const doubleNumArray = numbers.map(num => {return num*2})
//which equals to
//const doubleNumArray = numbers.map(num => num*2)
console.log(doubleNumArray)
```