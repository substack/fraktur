module.exports = encode;
module.exports.encode = encode;
module.exports.decode = decode;

function reverse (data) {
    var rdata = {};
    Object.keys(data).forEach(function (key) {
        rdata[data[key]] = key;
    });

    return rdata;
}

function alphabet (name) {
    try {
        return require('./alphabets/' + name + '.json');
    } catch (e) {
        return {};
    }
}

function encode (str, alpha) {
    alpha = alpha || 'fraktur';
    var data = alphabet(alpha);
    return str.replace(/[A-Za-z]/g, function (s) { return data[s] });
}

function decode (str, alpha) {
    alpha = alpha || 'fraktur';
    var data = alphabet(alpha);
    var rdata = reverse(data);

    return str.replace(
        /\ud835[\udd04-\udd85\dd1e-\udd37]/g,
        function (s) { console.log('✓', s); return rdata[s]
    });
}
