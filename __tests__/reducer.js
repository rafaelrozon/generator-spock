'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-spock-2:reducer', () => {
    describe('reducer file', () => {
        beforeAll(() => {
            return helpers
                .run(path.join(__dirname, '../generators/reducer'))
                .withPrompts({
                    type: 'reducer',
                    destinationFolder: '/tmp',
                    moduleName: 'Van'
                });
        });
        it('creates files', () => {
            assert.file(['Van.js']);
        });
    });
});
