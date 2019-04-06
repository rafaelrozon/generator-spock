'use strict';
const chalk = require('chalk');

const Base = require('../base');

module.exports = class extends Base {
    constructor(args, props) {
        super(args, props);
        console.log('Story Generator');
    }

    prompting() {
        if (this.shouldPrompt()) {
            const prompts = [
                this.utils.getDestFolderPrompt(),
                this.utils.getModuleNamePrompt()
            ];

            return this.prompt(prompts).then(options => {
                this.options = options;
            });
        }

    }

    writing() {
        const { destinationPath, moduleName, filename } = this.options;
        const file = this.utils.getFilename(
            filename || moduleName,
            'story.jsx',
            destinationPath,
            typeof filename !== 'undefined'
        );
        const templateData = this.utils.getTemplateData({
            moduleName
        });

        const source = `_stories.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
