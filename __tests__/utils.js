'use strict';
const utils = require('./../utils');

describe('utils tests', () => {
    describe('formatFilename', () => {
        it('converts a word to pascal case', () => {
            const input = 'myButton';
            const expected = 'MyButton';
            const result = utils.formatFilename(input);
            expect(result).toBe(expected);
        });
    });

    describe('getFilename', () => {
        it('gets a filename using default params', () => {
            const input = 'myButton';
            const expected = 'MyButton.jsx';
            const result = utils.getFilename(input);
            expect(result).toBe(expected);
        });

        it('gets a filename passing all params', () => {
            const name = 'myButton';
            const expected = '/tmp/MyButton.js';
            const ext = '.js';
            const pathStr = '/tmp';
            const result = utils.getFilename(name, ext, pathStr);
            expect(result).toBe(expected);
        });

        it('returns a file name if user pass extension', () => {
            const name = 'myButton.js';
            const expected = '/tmp/MyButton.js';
            const ext = '.js';
            const pathStr = '/tmp';
            const result = utils.getFilename(name, ext, pathStr);
            expect(result).toBe(expected);
        });

        it('returns a file name if user pass bad extension', () => {
            const name = 'myButton.';
            const expected = '/tmp/MyButton.js';
            const ext = '.js';
            const pathStr = '/tmp';
            const result = utils.getFilename(name, ext, pathStr);
            expect(result).toBe(expected);
        });
    });

    describe('getTemplateData', () => {
        it('returns default data for template', () => {
            const expected = {
                name: '',
                moduleCss: 'my-button',
                moduleName: 'myButton'
            };
            const input = {
                moduleName: 'myButton'
            };
            const result = utils.getTemplateData(input);
            expect(result).toEqual(expected);
        });

        it('returns default data for template', () => {
            const expected = {
                name: 'Component',
                moduleCss: 'my-button',
                moduleName: 'myButton'
            };
            const input = {
                name: 'Component',
                moduleName: 'myButton'
            };
            const result = utils.getTemplateData(input);
            expect(result).toEqual(expected);
        });
    });
});
