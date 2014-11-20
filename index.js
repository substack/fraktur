var data = require('./data.json');
var rdata = {};
Object.keys(data).forEach(function (key) {
    rdata[data[key]] = key;
});

module.exports = encode;
module.exports.encode = encode;
module.exports.decode = decode;

function encode (str) {
    return str.replace(/[A-Za-z]/g, function (s) { return data[s] });
}

function decode (str) {
    return str.replace(
        /\ud835[\udd04-\udd85\dd1e-\udd37]/g,
        function (s) { return rdata[s]
    });
}
