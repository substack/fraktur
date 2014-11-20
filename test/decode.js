var test = require('tape');
var fraktur = require('../');

test('decode fraktur', function (t) {
    t.plan(2);
    t.equal(fraktur.decode('𝔞𝔟𝔠'), 'abc');
    t.equal(fraktur.decode('𝔞𝔟𝔠!!!'), 'abc!!!');
});

test('decode squared', function (t) {
    t.plan(2);
    t.equal(fraktur.decode('🄰🄱🄲', 'squared'), 'abc');
    t.equal(fraktur.decode('🄰🄱🄲!!!!', 'squared'), 'abc!!!');
});
