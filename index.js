var data = require('./data.json');

module.exports = function (str) {
    return str.replace(/[A-Za-z]/g, function (s) { return data[s] });
};
