/**
 * ShoppingCart Stories
 */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';

const stories = storiesOf('ShoppingCart', module);

stories.addDecorator(withKnobs);

stories.add('ShoppingCart', () => (
    <div>
        ShoppingCart
    </div>
));
