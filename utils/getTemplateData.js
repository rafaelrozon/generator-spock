const changeCase = require('change-case');

module.exports = function(props) {
    const { moduleName, name = '', ...rest } = props;

    return {
        name,
        moduleCss: changeCase.kebabCase(moduleName),
        moduleName: moduleName || '',
        ...rest
    };
};
