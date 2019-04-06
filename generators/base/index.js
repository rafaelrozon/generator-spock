'use strict';
const Generator = require('yeoman-generator');
const utils = require('../../utils');

// https://github.com/yeoman/generator-node/blob/master/generators/app/index.js

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // console.log('Base Generator: args', args);
        // console.log('Base Generator: opts', opts);
        this.utils = utils;
    }

    shouldPrompt() {
        return typeof this.options['skip-prompting'] === 'undefined';
    }
};
