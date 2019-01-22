'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Base = require('../base');

module.exports = class extends Base {
    constructor(args, props) {
        super(args, props);
        console.log('Component Generator');
    }

    prompting() {
        this.log(
            yosay(
                `Welcome to the sweet ${chalk.red(
                    'generator-spock-2'
                )} generator!`
            )
        );

        const prompts = [
            this.utils.getDestFolderPrompt(),
            this.utils.getModuleNamePrompt()
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {
        const { destinationPath, moduleName } = this.props;
        const filename = this.utils.getFilename(
            moduleName,
            'jsx',
            destinationPath
        );
        const templateData = this.utils.getTemplateData(this.props);
        console.log(templateData);

        const source = `_stories.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(filename),
            templateData
        );
    }
};
