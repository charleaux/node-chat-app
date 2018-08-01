const expect = require('expect');

const {isRealString} = require('./validation');


describe('isRealString', () => {
    it('should reject non-string values', () => {
        var number = 5;
        expect(isRealString(number)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var emptyString = '     ';
        expect(isRealString(emptyString)).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var goodString = 'this is a good string';
        expect(isRealString(goodString)).toBe(true);
    });
});