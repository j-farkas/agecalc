export class Agecalc{
  constructor(age){
    this.age = age;
    this.msPerDay = 86400000;
  }

  GetEarthAge(){
    const earthYear = 365.25;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);

    return Math.floor(days / earthYear);
  }

  GetMercuryAge(){
    const mercYear = 88;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);

    return Math.floor(days / mercYear);
  }
}


//The Linter hates it when I don't have this, it's useless
const age = new Agecalc(new Date());
age.GetEarthAge();
