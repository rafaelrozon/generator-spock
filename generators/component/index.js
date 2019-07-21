const Base = require('../base');

const CLASS_TYPESCRIPT = 'class typescript';
const FUNCTIONAL_TYPESCRIPT = 'functional typescript';
const FUNCTIONAL_NATIVE = 'functional native';

module.exports = class extends Base {
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
                        FUNCTIONAL_NATIVE,
                        CLASS_TYPESCRIPT,
                        FUNCTIONAL_TYPESCRIPT
                    ]
                },
                this.utils.getModuleNamePrompt(),
                this.utils.getFilenamePrompt(),
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
            type === FUNCTIONAL_TYPESCRIPT || type === CLASS_TYPESCRIPT
                ? '.tsx'
                : '.jsx',
            destinationPath,
            typeof filename !== 'undefined'
        );

        const templateData = this.utils.getTemplateData({
            moduleName
        });

        const typeMapping = {
            class: 'class',
            functional: 'functional',
            connected: 'connected',
            [CLASS_TYPESCRIPT]: 'class_typescript',
            [FUNCTIONAL_TYPESCRIPT]: 'functional_typescript',
            [FUNCTIONAL_NATIVE]: 'functional_native'
        };

        const source = `_${typeMapping[type]}_component.template.js`;

        this.fs.copyTpl(
            this.templatePath(source),
            this.destinationPath(file),
            templateData
        );
    }
};
