var fs = require('fs');
var path = require('path');

function load(file) {
    var filepath = path.join(__dirname, '..', file);
    var contents = fs.readFileSync(filepath);
    return contents.toString().split('\n');
}

var nouns = load('lib/nouns.txt');
var adjectives = load('lib/adjectives.txt');

function generate() {
    var noun = nouns[Math.random() * nouns.length | 0];
    var adjective = adjectives[Math.random() * adjectives.length | 0];

    return adjective + ' ' + noun;
}

module.exports = {
    generate: generate
}
