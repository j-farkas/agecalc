export class Agecalc{
  constructor(age){
    this.age = age;
    this.msPerDay = 86400000;
  }

  GetDeath(){
    let lifespan = this.age.getFullYear() + 80;
    return new Date(lifespan, this.age.getMonth(), this.age.getDay()+1);

  }
  GetEarthAge(){
    const year = 365.26;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetMercuryAge(){
    const year = 87.97;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetVenusAge(){
    const year = 224.7;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetMarsAge(){
    const year = 685.75;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetJupiterAge(){
    const year = 4332.59;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetSaturnAge(){
    const year = 10759;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetEarthAgeLeft(){
    const year = 365.26;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return 80 - Math.floor(days / year);
  }
  GetMercuryAgeLeft(){
    const year = 87.97;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetVenusAgeLeft(){
    const year = 224.7;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetMarsAgeLeft(){
    const year = 685.75;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetJupiterAgeLeft(){
    const year = 4332.59;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
  GetSaturnAgeLeft(){
    const year = 10759;
    let days = Math.floor((new Date() - this.age) / this.msPerDay);
    return Math.floor(days / year);
  }
}


//The Linter hates it when I don't have this, it's useless
const age = new Agecalc(new Date());
age.GetEarthAge();
