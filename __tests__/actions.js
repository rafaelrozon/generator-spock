'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('actions', () => {
    describe('actions file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/action'))
                .withPrompts({
                    type: 'actions',
                    destinationFolder: '/tmp',
                    moduleName: 'Van'
                });
        });
        it('creates files', () => {
            assert.file(['Van.js']);
        });
    });

    describe('actions type file with filename', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/action'))
                .withPrompts({
                    isTypescript: 'no',
                    destinationPath: '/tmp',
                    moduleName: 'Van',
                    filename: 'VanActions'
                });
        });
        it('creates action types file', () => {
            assert.file(['VanActions.js']);
        });
    });
});
