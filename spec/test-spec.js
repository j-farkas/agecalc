import { Agecalc } from './../src/age.js';

describe('Agecalc', function() {

  it('should output the users age' , function() {
    let age = new Agecalc(new Date('January 17, 1995'));

     console.log(age);
     expect(age.GetEarthAge()).toEqual(25);
     age = new Agecalc(new Date('May 31, 1995'));
     expect(age.GetEarthAge()).toEqual(25);
    // expect(arr.length).toEqual(9);
    // // expect(romanIn(1)).not.toEqual("X");
  });


});
