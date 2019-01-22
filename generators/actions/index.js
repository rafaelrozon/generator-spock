'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Base = require('../base');

module.exports = class extends Base {
    constructor(args, props) {
        super(args, props);
        console.log('Actions Generator');
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
            {
                type: 'list',
                name: 'type',
                message: 'Enter action type',
                choices: [
                    'actions',
                    'types'
                ]
            },
            this.utils.getDestFolderPrompt(),
            this.utils.getModuleNamePrompt()
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    writing() {
        const { type, destinationPath } = this.props;
        const filename = this.utils.getFilename(
            this.props.moduleName,
            'jsx',
            destinationPath
        );
        const templateData = this.utils.getTemplateData(this.props);

        const source = `_${type}.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(filename),
            templateData
        );
    }
};
