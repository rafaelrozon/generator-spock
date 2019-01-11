'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-spock-2:component', () => {
    describe('Stateless component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'stateless',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.jsx']);
        });
    });

    describe('Statelful component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'stateful',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.jsx']);
        });
    });

    describe('Container component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'container',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.jsx']);
        });
    });

    describe('Native component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'native',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.jsx']);
        });
    });
});
