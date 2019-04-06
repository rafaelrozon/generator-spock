'use strict';
const chalk = require('chalk');
const Base = require('../base');

const moduleReducer = 'module';
const pageReducer = 'page';

module.exports = class extends Base {
    constructor(args, opts) {
        super(args, opts);
        // console.log('Reducer Generator', args, opts);
    }

    prompting() {

        if (this.shouldPrompt()) {

            this.log(chalk.red('Reducer generator'));

            const prompts = [
                {
                    type: 'list',
                    name: 'type',
                    message: 'Enter reducer type',
                    choices: [pageReducer, moduleReducer]
                },
                this.utils.getModuleNamePrompt(),
                this.utils.getDestFolderPrompt()
            ];

            return this.prompt(prompts).then(props => {
                this.options = props;
            });
        }
    }

    writing() {
        const { moduleName, destinationPath, type, filename } = this.options;

        const file = this.utils.getFilename(
            filename || moduleName,
            'js',
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
