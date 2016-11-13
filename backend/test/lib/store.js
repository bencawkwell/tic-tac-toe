'use strict';

var chai      = require('chai'),
    validator = require('validator'),
    lib       = require('requirefrom')('lib'),

    store     = lib('store'),

    expect    = chai.expect;

describe('the store module', function () {

    describe('set() method', function () {
        it('should return a UUID', function () {
            var result = store.set('some data');

            expect(result).to.be.a('string');

            expect(validator.isUUID(result)).to.be.true;
        });
    });

    describe('get() method', function () {
        it('should return null for an id that does not exist', function () {
            var result = store.get('some-uuid-that-isnot-there');

            expect(result).to.be.null;
        });

        it('should return the stored value for an id that does exist', function () {
            var id     = store.set('some new data'),
                result = store.get(id);

            expect(result).to.equal('some new data');
        });
    });

    describe('flush() method', function () {
        it('should remove everything that has been stored', function () {
            var id = store.set('some other data');

            store.flush();
            expect(store.get(id)).to.be.null;
        });
    });

});
