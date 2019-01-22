'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Base = require('../base');

module.exports = class extends Base {
    constructor(args, props) {
        super(args, props);
        console.log('Selectors Generator');
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
                name: 'withTest',
                message: 'With test file?',
                choices: [
                    'yes',
                    'no'
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
        const { withTest, destinationPath } = this.props;

        const filename = this.utils.getFilename(
            this.props.moduleName,
            'jsx',
            destinationPath
        );
        const templateData = this.utils.getTemplateData(this.props);

        if (withTest === 'yes') {

            const testSource = `_selectors.spec.template.js`;
            const testFilename = this.utils.getFilename(
                this.props.moduleName,
                'spec.js',
                destinationPath
            );
            this.fs.copyTpl(
                this.templatePath(testSource),
                this.destinationPath(testFilename),
                templateData
            );
        }

        const source = `_selectors.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(filename),
            templateData
        );


    }
};
