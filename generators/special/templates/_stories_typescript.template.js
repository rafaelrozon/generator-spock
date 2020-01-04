/**
 * <%= moduleName %> Stories
 */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import <%= moduleName %> from './<%= moduleName %>.react';

const stories = storiesOf('<%= moduleName %>', module);

stories.addDecorator(withKnobs);

stories.add('<%= moduleName %>', () => (
    <div>
        <<%= moduleName %> />
    </div>
));
