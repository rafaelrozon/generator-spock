'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Selectors', () => {
    describe('Selector file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/selector'))
                .withPrompts({
                    isTypescript: 'no',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockSelector'
                });
        });
        it('creates a selector file', () => {
            assert.file(['SpockSelector.js']);
        });
    });

    describe('Selector typescrip file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/selector'))
                .withPrompts({
                    isTypescript: 'yes',
                    type: 'module',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockSelector'
                });
        });
        it('creates a typescript selector file', () => {
            assert.file(['SpockSelector.ts']);
        });
    });
});
