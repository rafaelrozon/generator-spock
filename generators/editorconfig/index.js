const Base = require('../base');

module.exports = class extends Base {

    writing() {
        const { destinationPath, moduleName, filename } = this.options;

        const file = this.utils.getFilename(
            filename || moduleName,
            '',
            destinationPath,
            typeof filename !== 'undefined'
        );

        const source = `_editorconfig.template`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
