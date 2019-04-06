const changeCase = require('change-case');

module.exports = function getTemplateData(props) {
    console.log('> getTemplateData', props)
    const { moduleBaseName, moduleName, name } = props;
    return {
        name: name || '',
        moduleCss: changeCase.paramCase(moduleName),
        moduleBaseName: moduleBaseName || changeCase.snakeCase(moduleName),
        moduleName: moduleName || ''
    };
};
