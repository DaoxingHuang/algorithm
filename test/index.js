var expect = require('expect.js'),
    algorithm = require('..');

describe('algorithm', function() {
  it('should say hello', function(done) {
    expect(algorithm()).to.equal('Hello, world');
    done();
  });
});
