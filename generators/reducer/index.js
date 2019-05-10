const Base = require('../base');

const moduleReducer = 'module';
const pageReducer = 'page';

module.exports = class extends Base {
    prompting() {
        if (this.shouldPrompt()) {
            const prompts = [
                {
                    type: 'list',
                    name: 'type',
                    message: 'Enter reducer type',
                    choices: [pageReducer, moduleReducer]
                },
                this.utils.getModuleNamePrompt(),
                this.utils.getFilenamePrompt(),
                {
                    type: 'input',
                    name: 'typesFilename',
                    message: 'Enter name of action types file',
                    when: ({ type }) => {
                        return type === moduleReducer;
                    }
                },
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
            destinationFolder,
            type,
            filename,
            typesFilename
        } = this.options;

        console.log(this.config.set('test', 123));

        const file = this.utils.getFilename(
            filename || moduleName,
            'js',
            destinationFolder,
            typeof filename !== 'undefined'
        );

        const templateData = this.utils.getTemplateData({
            moduleName,
            typesFilename
        });

        const source = `_${type}_reducer.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
