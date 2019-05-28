//It will work based on Babel
class Human{
  gender = 'male';
  // printGender(){
  //   console.log(this.gender);
  // }
  printGender = () => { 
    // it still work with or without arrow function (no closure issue needs to be concerned)
    console.log(this.gender);
  }
} 

class Person extends Human{
  //no constructor needs and super() missing error anymore ~
  name = 'Shura';
  gender = 'female';//override
  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender(); //extended methods