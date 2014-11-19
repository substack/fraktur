#!/usr/bin/env node

var fraktur = require('../');
var utf8 = require('utf8-stream');
var through = require('through2');

process.stdin.pipe(utf8())
    .pipe(through(function (buf, enc, next) {
        this.push(fraktur(buf.toString('utf8')));
        next();
    }))
    .pipe(process.stdout)
;
