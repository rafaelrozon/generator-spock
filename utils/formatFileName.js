const changeCase = require('change-case');

module.exports = function formatFileName(name) {
    return changeCase.pascalCase(name);
};

