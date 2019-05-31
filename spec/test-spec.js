import { Agecalc } from './../src/age.js';

describe('Agecalc', function() {

  it('should output the users age' , function() {
    var age = new Agecalc(new Date('December 17, 1995'));

     console.log(age);
     expect(age).toEqual(24);
    // expect(arr.length).toEqual(9);
    // // expect(romanIn(1)).not.toEqual("X");
  });


});
