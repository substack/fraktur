var test = require('tape');
var fraktur = require('../');

test('decode', function (t) {
    t.plan(2);
    t.equal(fraktur.decode('𝔞𝔟𝔠'), 'abc');
    t.equal(fraktur.decode('𝔞𝔟𝔠!!!'), 'abc!!!');
});
