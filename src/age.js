export class Agecalc{
  constructor(age){
    this.age = age;
    this.msPerDay = 86400000;
    this.getAge = function(year){
      let days = Math.floor((new Date() - this.age) / this.msPerDay);
      return Math.floor(days / year);
    }
    this.getTimeLeft = function(year){
      let days = Math.floor((new Date() - this.GetDeath()) / this.msPerDay);
      return Math.abs(Math.floor(days / year));
    }
  }

  GetDeath(){
    let lifespan = this.age.getFullYear() + 80;
    return new Date(lifespan, this.age.getMonth(), this.age.getDay()+1);

  }
  GetEarthAge(){
    const year = 365.26;
    return this.getAge(year);
  }
  GetMercuryAge(){
    const year = 87.97;
    return this.getAge(year);
  }
  GetVenusAge(){
    const year = 224.7;
    return this.getAge(year);
  }
  GetMarsAge(){
    const year = 685.75;
    return this.getAge(year);
  }
  GetJupiterAge(){
    const year = 4332.59;
    return this.getAge(year);
  }
  GetSaturnAge(){
    const year = 10759;
    return this.getAge(year);
  }
  GetEarthAgeLeft(){
    const year = 365.26;
    return this.getTimeLeft(year);
  }
  GetMercuryAgeLeft(){
    const year = 87.97;
    return this.getTimeLeft(year);
  }
  GetVenusAgeLeft(){
    const year = 224.7;
    return this.getTimeLeft(year);
  }
  GetMarsAgeLeft(){
    const year = 685.75;
    return this.getTimeLeft(year);
  }
  GetJupiterAgeLeft(){
    const year = 4332.59;
    return this.getTimeLeft(year);
  }
  GetSaturnAgeLeft(){
    const year = 10759;
    return this.getTimeLeft(year);
  }
}


//The Linter hates it when I don't have this, it's useless
const age = new Agecalc(new Date());
age.GetEarthAge();
