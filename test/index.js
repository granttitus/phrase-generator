var expect = require('chai').expect;
var generator = require('../src');

describe('#generate', function() {

    it('returns a string', function() {
        var out = generator.generate();
        expect(Object.prototype.toString.apply(out)).to.eql('[object String]');
    });
});
