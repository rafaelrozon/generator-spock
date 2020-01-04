/**
 * <%= moduleName %> Tests
 */
import React from 'react';
import renderer from 'react-test-renderer';
import <%= moduleName %> from '../<%= moduleName %>.react';

describe('<%= moduleName %>', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<<%= moduleName %> />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
