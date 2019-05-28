//It will work based on Babel
class Human{
  gender = 'male';
  // printGender(){
  //   console.log(this.gender);
  // }
  printGender= () => {
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