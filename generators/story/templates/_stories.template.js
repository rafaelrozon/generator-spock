/**
 * <%= moduleName %> Stories
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';

const stories = storiesOf('<%= moduleName %>', module);

stories.addDecorator(withKnobs);

stories.add('<%= moduleName %>', () => (
    <div>
        <%= moduleName %>
    </div>
));
