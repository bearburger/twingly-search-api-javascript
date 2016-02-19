var setup = require('./support/setup');

var expect = require('chai').expect;

var Parser = require('../lib/parser');
var Result = require('../lib/result');

describe('result', function(){
    it('creation', function(done){
        var data = setup.getFixture('valid_result');
        (new Parser()).parse(data, function(error, result){
            expect(result.posts).to.be.instanceof(Array);
            expect(result.numberOfMatchesReturned).to.be.a('number');
            expect(result.numberOfMatchesTotal).to.be.a('number');
            expect(result.secondsElapsed).to.be.a('number');
            expect(result.allResultsReturned()).to.be.equal(false);
            done();
        });
    });
});
