const changeCase = require('change-case');

module.exports = function(props) {
    const { moduleBaseName, moduleName, name, ...rest } = props;
    return {
        name: name || '',
        moduleCss: changeCase.paramCase(moduleName),
        moduleBaseName: moduleBaseName || changeCase.snakeCase(moduleName),
        moduleName: moduleName || '',
        ...rest
    };
};
