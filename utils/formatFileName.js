const changeCase = require('change-case');

module.exports = function(name) {
    return changeCase.pascalCase(name);
};
