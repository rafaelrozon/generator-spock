const Base = require('../base');

module.exports = class extends Base {
    prompting() {
        if (this.shouldPrompt()) {
            const prompts = [
                this.utils.getModuleNamePrompt(),
                this.utils.getDestFolderPrompt()
            ];

            return this.prompt(prompts).then(options => {
                this.options = options;
            });
        }
    }

    writing() {
        const { destinationPath, moduleName, filename } = this.options;

        const getName = name => `${moduleName}/${name}`;

        const indexFile = this.utils.getFilename(
            getName('index'),
            '.ts',
            destinationPath,
            true
        );
        const templateData = this.utils.getTemplateData({ moduleName });

        this.fs.copyTpl(
            this.templatePath('_index.template.js'),
            this.destinationPath(indexFile),
            templateData
        );

        const componentFile = this.utils.getFilename(
            getName(filename || moduleName),
            '.react.tsx',
            destinationPath,
            true
        );

        this.fs.copyTpl(
            this.templatePath('_functional_typescript_component.template.js'),
            this.destinationPath(componentFile),
            templateData
        );

        const storyFile = this.utils.getFilename(
            getName(filename || moduleName),
            '.story.tsx',
            destinationPath,
            true
        );

        this.fs.copyTpl(
            this.templatePath('_stories_typescript.template.js'),
            this.destinationPath(storyFile),
            templateData
        );

        const testFile = this.utils.getFilename(
            getName('__tests__/index'),
            '.test.tsx',
            destinationPath,
            true
        );

        this.fs.copyTpl(
            this.templatePath('_test.template.js'),
            this.destinationPath(testFile),
            templateData
        );
    }
};
