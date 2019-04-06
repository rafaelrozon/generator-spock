'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Base = require('../base');

module.exports = class extends Base {
    constructor(args, options) {
        super(args, options);
        console.log('Component Generator');
    }

    prompting() {

        if (this.shouldPrompt()) {
            const prompts = [
                {
                    type: 'list',
                    name: 'type',
                    message: 'Enter component type',
                    choices: [
                        'class',
                        'functional',
                        'connected',
                        'functional_native'
                    ]
                },
                this.utils.getModuleNamePrompt(),
                this.utils.getDestFolderPrompt()
            ];

            return this.prompt(prompts).then(options => {
                this.options = options;
            });
        }
    }

    writing() {
        const { type, destinationPath, moduleName, filename } = this.options;

        const file = this.utils.getFilename(
            filename || moduleName,
            'jsx',
            destinationPath,
            typeof filename !== 'undefined'
        );

        const templateData = this.utils.getTemplateData({
            moduleName
        });

        const source = `_${type}_component.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
