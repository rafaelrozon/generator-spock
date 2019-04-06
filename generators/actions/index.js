'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Base = require('../base');

module.exports = class extends Base {
    constructor(args, opts) {
        super(args, opts);
        // console.log('Actions Generator', opts);
        // console.log('Actions Generator', opts);
    }

    prompting() {
        if (this.shouldPrompt()) {
            const prompts = [
                {
                    type: 'list',
                    name: 'type',
                    message: 'Enter action type',
                    choices: ['actions', 'types']
                },
                this.utils.getDestFolderPrompt(),
                this.utils.getModuleNamePrompt()
            ];

            return this.prompt(prompts).then(props => {
                this.options = props;
            });
        }
    }

    writing() {
        const { destinationPath, moduleName, type, filename } = this.options;

        const file = this.utils.getFilename(
            filename || moduleName,
            'js',
            destinationPath,
            typeof filename !== 'undefined'
        );

        const templateData = this.utils.getTemplateData({
            moduleName
        });

        const source = `_${type}.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
