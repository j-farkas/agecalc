export class Agecalc{
  constructor(age){
    this.age = age;
  }

  GetEarthAge(){
    let age = 0;
    if(this.age.getMonth()<new Date().getMonth()){
      age++;
    }else if(this.age.getMonth() === new Date().getMonth()){
      if(this.age.getDay() <= new Date().getDay()){
        age++;
      }
    }

    age += new Date().getFullYear() - this.age.getFullYear();
    return age;
  }
}

const age = new Agecalc(new Date());
age.GetEarthAge();
