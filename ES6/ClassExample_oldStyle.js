class Human{
  constructor(){
    this.gender = 'male';
  }
  printGender(){
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor(){
    super();
    //if you extends a class and have a constructor, then must write a super here, otherwise it will show error.
    this.name = 'Shura';
    this.gender = 'female';//override
  }
  printMyName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender(); //extended methods