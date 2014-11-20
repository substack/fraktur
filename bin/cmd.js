#!/usr/bin/env node

var fraktur = require('../');
var utf8 = require('utf8-stream');
var through = require('through2');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2), {
    alias: { d: 'decode' },
    default: { d: false }
});

if (argv.decode) {
}
else {
    process.stdin.pipe(utf8())
        .pipe(through(function (buf, enc, next) {
            this.push(fraktur(buf.toString('utf8')));
            next();
        }))
        .pipe(process.stdout)
    ;
}
