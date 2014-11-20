var test = require('tape');
var fraktur = require('../');

test('encode fraktur', function (t) {
    t.plan(3);
    t.equal(fraktur('abc'), '𝔞𝔟𝔠');
    t.equal(fraktur.encode('abc'), '𝔞𝔟𝔠');
    t.equal(fraktur.encode('abc!'), '𝔞𝔟𝔠!');
});

test('encode squared', function (t) {
    t.plan(3);
    t.equal(fraktur('abc', 'squared'), '🄰🄱🄲');
    t.equal(fraktur.encode('abc', 'squared'), '🄰🄱🄲');
    t.equal(fraktur.encode('abc!', 'squared'), '🄰🄱🄲!');
});

test('encode negative-squared', function (t) {
    t.plan(3);
    t.equal(fraktur('abc', 'negative-squared'), '🅰🅱🅲');
    t.equal(fraktur.encode('abc', 'negative-squared'), '🅰🅱🅲');
    t.equal(fraktur.encode('abc!', 'negative-squared'), '🅰🅱🅲!');
});

test('encode circled', function (t) {
    t.plan(3);
    t.equal(fraktur('abc', 'circled'), 'ⓐⓑⓒ');
    t.equal(fraktur.encode('abc', 'circled'), 'ⓐⓑⓒ');
    t.equal(fraktur.encode('abc!', 'circled'), 'ⓐⓑⓒ!');
});

test('encode negative-circled', function (t) {
    t.plan(3);
    t.equal(fraktur('abc', 'negative-circled'), '🅐🅑🅒');
    t.equal(fraktur.encode('abc', 'negative-circled'), '🅐🅑🅒');
    t.equal(fraktur.encode('abc!', 'negative-circled'), '🅐🅑🅒!');
});

test('encode fullwidth', function (t) {
    t.plan(3);
    t.equal(fraktur('abc', 'fullwidth'), 'ａｂｃ');
    t.equal(fraktur.encode('abc', 'fullwidth'), 'ａｂｃ');
    t.equal(fraktur.encode('abc!', 'fullwidth'), 'ａｂｃ!');
});
