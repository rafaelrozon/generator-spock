const Base = require('../base');

module.exports = class extends Base {
    prompting() {
        if (this.shouldPrompt()) {
            const prompts = [
                {
                    type: 'list',
                    name: 'type',
                    message: 'Enter action type',
                    choices: ['actions', 'types', 'both']
                },
                {
                    type: 'input',
                    name: 'actionFilename',
                    message: 'Enter action filename',
                    when: ({ type }) => {
                        return type === 'actions' || type === 'both';
                    }
                },
                {
                    type: 'input',
                    name: 'typesFilename',
                    message: 'Enter types filename',
                    default: 'types'
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
        const {
            destinationPath,
            moduleName,
            type,
            actionFilename = 'actions',
            typesFilename = 'types'
        } = this.options;

        const templateData = this.utils.getTemplateData({
            moduleName,
            typesFilename
        });

        if (type === 'both') {
            const actionsFile = '_actions.template.js';
            const typesFile = '_types.template.js';

            const actionFile = this.utils.getFilename(
                actionFilename,
                'js',
                destinationPath,
                typeof actionsFile !== 'undefined'
            );

            const typeFile = this.utils.getFilename(
                typesFilename,
                'js',
                destinationPath,
                typeof typesFile !== 'undefined'
            );

            this.fs.copyTpl(
                this.templatePath(actionsFile),
                this.destinationPath(actionFile),
                templateData
            );

            this.fs.copyTpl(
                this.templatePath(typesFile),
                this.destinationPath(typeFile),
                templateData
            );
        } else {
            const filename =
                type === 'actions' ? actionFilename : typesFilename;

            const file = this.utils.getFilename(
                filename || moduleName,
                'js',
                destinationPath,
                typeof filename !== 'undefined'
            );

            const source = `_${type}.template.js`;

            this.fs.copyTpl(
                this.templatePath(source),
                this.destinationPath(file),
                templateData
            );
        }
    }
};
