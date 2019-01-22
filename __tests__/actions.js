'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-spock-2:actions', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/actions'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
