const Base = require('../base');

module.exports = class extends Base {
    prompting() {
        if (this.shouldPrompt()) {
            const prompts = [
                this.utils.getTypescriptPrompt(),
                this.utils.getModuleNamePrompt(),
                this.utils.getDestFolderPrompt()
            ];

            return this.prompt(prompts).then(options => {
                this.options = options;
            });
        }
    }

    writing() {
        const {
            destinationPath,
            moduleName,
            filename,
            isTypescript
        } = this.options;

        const file = this.utils.getFilename(
            filename || moduleName,
            isTypescript === 'yes' ? '.ts' : '.js',
            destinationPath,
            typeof filename !== 'undefined'
        );

        const templateData = this.utils.getTemplateData({
            moduleName
        });

        const source = `_selectors.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
