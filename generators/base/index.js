'use strict';
const Generator = require('yeoman-generator');
const utils = require('../../utils');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        console.log('Base Generator', args, opts);
        this.utils = utils;
    }

    shouldPrompt() {
        return typeof this.props === 'undefined' || this.props.options === 'undefined';
    }
};
