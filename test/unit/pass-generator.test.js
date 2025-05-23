const {generatePass} = require('../../utils/pass-generator');

   
jest.mock('crypto-random-string', () => {
    return jest.fn(() => 'YMiMbaQl6IYMiMbaQl6I');
});
  
  
  describe('generatePass', () => {

    it('it should generate password with Max length of 20', () =>{
     const actual = generatePass(20);
     expect(actual.length).toEqual(20);
     expect(actual.length).toBeLessThanOrEqual(20);
    });
   
    it('it should generate password and should be greater than 8 letters', () =>{
        const actual = generatePass(20);
        expect(actual.length).toBeGreaterThanOrEqual(8);
    });
    
    it('it should generate password and be a base 64', () =>{
       const b64it = buffer => buffer.toString('base64')
       const actual = generatePass(20);
       expect(b64it(actual)).toEqual(actual);
    });
 });
