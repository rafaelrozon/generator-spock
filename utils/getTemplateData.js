const changeCase = require('change-case');

module.exports = function(props) {
    const { moduleName, name = '', ...rest } = props;

    return {
        name,
        moduleCss: changeCase.lowerCase(changeCase.paramCase(moduleName)),
        moduleName: moduleName || '',
        ...rest
    };
};
