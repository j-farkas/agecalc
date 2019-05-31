export class Agecalc{
  constructor(age){
    this.age = age;
  }

  GetEarthAge(){
    let age = 0;
    //if()

    age += new Date().getFullYear() - this.age.getFullYear();
    return age;
  }
}

const age = new Agecalc(new Date());
age.GetEarthAge();
