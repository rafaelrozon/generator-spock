/**
 * <%= moduleName %> Stories
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('<%= moduleName %>', module);

stories.add('<%= moduleName %>', () => (
    <div>
        <%= moduleName %>
    </div>
));
