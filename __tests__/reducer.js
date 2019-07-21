'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('reducer', () => {
    describe('Page reducer file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/reducer'))
                .withPrompts({
                    isTypescript: 'no',
                    type: 'page',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockReducer'
                });
        });
        it('creates files', () => {
            assert.file(['SpockReducer.js']);
        });
    });

    describe('Module reducer file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/reducer'))
                .withPrompts({
                    isTypescript: 'no',
                    type: 'module',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockReducer'
                });
        });
        it('creates files', () => {
            assert.file(['SpockReducer.js']);
        });
    });

    describe('Page reducer typescript file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/reducer'))
                .withPrompts({
                    isTypescript: 'yes',
                    type: 'page',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockReducer'
                });
        });
        it('creates files', () => {
            assert.file(['SpockReducer.ts']);
        });
    });

    describe('Module reducer file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/reducer'))
                .withPrompts({
                    isTypescript: 'yes',
                    type: 'module',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockReducer'
                });
        });
        it('creates files', () => {
            assert.file(['SpockReducer.ts']);
        });
    });
});
