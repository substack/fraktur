#!/usr/bin/env node

var fraktur = require('../');
var utf8 = require('utf8-stream');
var through = require('through2');
var minimist = require('minimist');
var fs = require('fs');
var path = require('path');

var argv = minimist(process.argv.slice(2), {
    alias: {
        d: [ 'decode', '𝔡𝔢𝔠𝔬𝔡𝔢', '𝔡' ],
        h: [ 'help', '𝔥𝔢𝔩𝔭', '𝔥' ],
        m: [ 'message', '𝔪' ],
        a: [ 'alphabet', '𝔞', '𝔞𝔩𝔭𝔥𝔞𝔟𝔢𝔱' ]
    },
    default: { d: false, a: 'fraktur' }
});
var fn = argv.decode ? fraktur.decode : fraktur.encode;

if (argv.help) {
    fs.createReadStream(path.join(__dirname, 'usage.txt'))
        .pipe(process.stdout)
    ;
}
else if (argv.message) {
    console.log(fn(argv.message, argv.alphabet));
}
else {
    process.stdin.pipe(utf8())
        .pipe(through(function (buf, enc, next) {
            this.push(fn(buf.toString('utf8'), argv.alphabet));
            next();
        }))
        .pipe(process.stdout)
    ;
}
