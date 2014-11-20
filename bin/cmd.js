#!/usr/bin/env node

var fraktur = require('../');
var utf8 = require('utf8-stream');
var through = require('through2');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2), {
    alias: { d: 'decode' },
    default: { d: false }
});

var fn = argv.decode ? fraktur.decode : fraktur.encode;
process.stdin.pipe(utf8())
    .pipe(through(function (buf, enc, next) {
        this.push(fn(buf.toString('utf8')));
        next();
    }))
    .pipe(process.stdout)
;
