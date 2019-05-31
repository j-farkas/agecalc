import { Agecalc } from './../src/age.js';

describe('Agecalc', function() {

  it('should output the users age' , function() {
    let age = new Agecalc(new Date('December 17, 1995'));

     console.log(age);
     expect(age.GetEarthAge()).toEqual(23);
     age = new Agecalc(new Date('January 31, 1995'));
     expect(age.GetEarthAge()).toEqual(24);
  });

  it('should output the users age on mercury' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetMercuryAge()).toEqual(99);
  });

  it('should output the users age on venus' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetVenusAge()).toEqual(39);
  });

  it('should output the users age on mars' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetMarsAge()).toEqual(12);
  });

  it('should output the users age on jupiter' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetJupiterAge()).toEqual(2);
  });

  it('should output the users age on saturn' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetSaturnAge()).toEqual(0);
  });
  it('should output the users lifespan remaining' , function() {
    let age = new Agecalc(new Date('December 17, 1995'));

     console.log(age);
     expect(age.GetEarthAgeLeft()).toEqual(57);
     age = new Agecalc(new Date('January 31, 1995'));
     expect(age.GetEarthAgeLeft()).toEqual(56);
  });

  it('should output the users lifespan remaining on mercury' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetMercuryAgeLeft()).toEqual(99);
  });

  it('should output the users lifespan remaining on venus' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetVenusAgeLeft()).toEqual(39);
  });

  it('should output the users lifespan remaining on mars' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetMarsAgeLeft()).toEqual(12);
  });

  it('should output the users lifespan remaining on jupiter' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetJupiterAgeLeft()).toEqual(2);
  });

  it('should output the users lifespan remaining on saturn' , function() {
    let age = new Agecalc(new Date('May 31, 1995'));

     console.log(age);
     expect(age.GetSaturnAgeLeft()).toEqual(0);
  });

  it('should output the year the user turns 80' , function() {
    let age = new Agecalc(new Date('January 1, 1995'));


     expect(age.GetDeath().getFullYear()).toEqual(2075);
  });


});
