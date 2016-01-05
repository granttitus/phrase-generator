/*eslint no-console: 0*/

var generator = require('./generator');

if (module.parent == null) {
    var phrase = generator.generate();
    console.log(phrase);
}

module.exports = generator;
