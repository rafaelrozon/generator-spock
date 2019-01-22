'use strict';
const chalk = require('chalk');
const yosay = require('yosay');
const Base = require('../base');

const moduleReducer = 'module';
const pageReducer = 'page';

module.exports = class extends Base {
    constructor(args, props) {
        super(args, props);
        console.log('Reducer Generator', args, props.options);
    }

    prompting() {

      if (this.shouldPrompt()) {
        console.log('>>>> ', this.props);

        this.log(
            yosay(
                `Welcome to the ${chalk.red(
                    'generator-spock-2'
                )} generator! Let's create a reducer`
            )
        );
          this.log(chalk.red('Reducer generator'));
          const prompts = [
              {
                type: 'list',
                name: 'type',
                message: 'Enter reducer type',
                choices: [pageReducer, moduleReducer]
              },
              this.utils.getDestFolderPrompt(),
              this.utils.getModuleNamePrompt()
          ];

          return this.prompt(prompts).then(props => {
              this.props = props;
          });
      }

    }

    writing() {
        this.log(chalk.green('Scafolding Reducer'));
        console.log(this.props)
        const { type, destinationFolder, moduleName } = this.props;

        const filename = this.utils.getFilename(
            moduleName,
            'jsx',
            destinationFolder
        );
        const templateData = this.utils.getTemplateData(this.props);

        const source = `_${type}_reducer.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(filename),
            templateData
        );
    }
};
