'use strict';
const Generator = require('yeoman-generator');
const utils = require('../../utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        console.log('Base Generator');

        this.utils = utils;
    }

    shouldPrompt() {
        return (
            typeof this.props.options === 'undefined' ||
            (typeof this.props.options.moduleName === 'undefined' &&
                typeof this.props.destinationFolder === 'undefined')
        );
    }
};
