'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Storybook', () => {
    describe('Storybook file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/story'))
                .withPrompts({
                    isTypescript: 'no',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockStory'
                });
        });
        it('creates a selector file', () => {
            assert.file(['SpockStory.story.jsx']);
        });
    });

    describe('Storybook typescript file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/story'))
                .withPrompts({
                    isTypescript: 'yes',
                    type: 'module',
                    destinationFolder: '/tmp',
                    moduleName: 'SpockStory'
                });
        });
        it('creates a typescript selector file', () => {
            assert.file(['SpockStory.story.tsx']);
        });
    });
});
