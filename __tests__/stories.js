'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-spock-2:stories', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/stories'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
