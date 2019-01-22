const changeCase = require('change-case');

const formatFilename = name => {
    return changeCase.pascalCase(name);
};

const getFilename = (name, ext = 'jsx', path = null) =>
    `${path || ''}${path ? '/' : ''}${formatFilename(name)}.${ext}`;

const getTemplateData = props => {
    const { moduleBaseName, moduleName, name } = props;
    return {
        name: name || '',
        moduleCss: changeCase.paramCase(moduleName),
        moduleBaseName: moduleBaseName || changeCase.snakeCase(moduleName),
        moduleName: moduleName || ''
    };
};

const getModuleNamePrompt = () => {
    return {
        type: 'input',
        name: 'moduleName',
        message: 'Enter module name'
    };
};

const getDestFolderPrompt = () => {
    return {
        type: 'input',
        name: 'destinationFolder',
        message: 'Enter destination folder'
    };
};

module.exports = {
    formatFilename,
    getFilename,
    getTemplateData,
    getModuleNamePrompt,
    getDestFolderPrompt
};
