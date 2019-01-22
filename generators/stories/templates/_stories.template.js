/**
 * <%= moduleName %> Stories
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';
import './index.scss';
import <%= moduleName %> from './<%= moduleBaseName %>';

const stories = storiesOf('<%= moduleName %>', module);

stories.addDecorator(withKnobs);

stories.add('<%= moduleName %>', () => {
    return (
        <<%= moduleName %> />
    );
});
