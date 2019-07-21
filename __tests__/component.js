'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-spock-2:component', () => {
    describe('Functional component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'functional',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.jsx']);
        });
    });

    //
    describe('Class component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'class',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.jsx']);
        });
    });

    describe('Connected component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'connected',
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
                    type: 'functional native',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.jsx']);
        });
    });

    describe('Functional Typescript component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'functional typescript',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.tsx']);
        });
    });

    describe('Class Typescript component', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/component'))
                .withPrompts({
                    type: 'class typescript',
                    destinationFolder: '/tmp',
                    moduleName: 'Button'
                });
        });
        it('creates files', () => {
            assert.file(['Button.tsx']);
        });
    });
});
