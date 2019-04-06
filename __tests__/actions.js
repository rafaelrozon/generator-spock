'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-spock-2:actions', () => {
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

    describe('actions type file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/action'))
                .withPrompts({
                    type: 'types',
                    destinationFolder: '/tmp',
                    moduleName: 'Vanx'
                });
        });
        it('creates action types file', () => {
            assert.file(['Vanx.js']);
        });
    });

    describe('actions type file with filename', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/action'))
                .withPrompts({
                    type: 'types',
                    destinationFolder: '/tmp',
                    moduleName: 'Van',
                    filename: 'Van.actions'
                });
        });
        it('creates action types file', () => {
            assert.file(['Van.actions.js']);
        });
    });
});
