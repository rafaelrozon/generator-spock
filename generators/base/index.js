'use strict';
const Generator = require('yeoman-generator');
const utils = require('../../utils');

// https://github.com/yeoman/generator-node/blob/master/generators/app/index.js
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.utils = utils;
    }

    shouldPrompt() {
        return typeof this.options['skip-prompting'] === 'undefined';
    }
};
