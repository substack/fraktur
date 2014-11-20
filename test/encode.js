var test = require('tape');
var fraktur = require('../');

test('encode', function (t) {
    t.plan(3);
    t.equal(fraktur('abc'), '𝔞𝔟𝔠');
    t.equal(fraktur.encode('abc'), '𝔞𝔟𝔠');
    t.equal(fraktur.encode('abc!'), '𝔞𝔟𝔠!');
});
