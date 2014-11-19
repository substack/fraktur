var test = require('tape');
var fraktur = require('../');

test('convert', function (t) {
    t.plan(1);
    t.equal(fraktur('abc'), '𝔞𝔟𝔠');
});
