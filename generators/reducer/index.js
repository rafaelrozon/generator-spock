const Base = require('../base');

const moduleReducer = 'module';
const pageReducer = 'page';

module.exports = class extends Base {
    prompting() {
        if (this.shouldPrompt()) {
            const prompts = [
                this.utils.getTypescriptPrompt(),
                {
                    type: 'list',
                    name: 'type',
                    message: 'Enter reducer type',
                    choices: [pageReducer, moduleReducer]
                },
                this.utils.getModuleNamePrompt(),
                this.utils.getFilenamePrompt(),
                this.utils.getDestFolderPrompt()
            ];

            return this.prompt(prompts).then(props => {
                this.options = props;
            });
        }
    }

    writing() {
        const {
            moduleName,
            destinationPath,
            type,
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

        const source = `_${type}_reducer.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
