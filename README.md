# generator-spock

![Spock - Star Trek](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Leonard_Nimoy_as_Spock_Star_Trek.jpg/374px-Leonard_Nimoy_as_Spock_Star_Trek.jpg)

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]


## Installation

First, install [Yeoman](http://yeoman.io) and generator-spock using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-spock
```

## Available Generators
- Action
- Component
- Reducer
- Selector
- Story

## Options
All generators take these options:
- destinationFolder: where to create the file, defaults to current directory
- moduleName: the name of what you want to create, e.g.: MyComponent, reducer, CartActions, etc
- filename: unless specified the filename is the module name. You don't need to pass the extension

### Action Generator

```bash
yo spock:action
```

Actions example output:

```jsx
/**
 * ShoppingCart Actions
 */
//  Action Types

// Action Creators

// Async Actions
```

### Component Generator

```bash
yo spock:component
```

Options: class, functional, connected, native, class typescript, functional typescript

Class option example output:

```jsx
/**
 * ShoppingCart
 */
import React from 'react';

export default class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="shopping-cart">
                ShoppingCart component
            </div>
        );
    }
}
```

Functional option example output:

```jsx
/**
 * ShoppingCart
 */
import React from 'react';

const ShoppingCart = () => {
    return (
        <div className="shopping-cart">
            ShoppingCart component
        </div>
    );
};

export default ShoppingCart;
```

Connected option example output:

```jsx
/**
 * ShoppingCart
 */
import React from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';

const makeMapToStateProps = (state) => ({})

const mapDispatchToProps = (dispath) => ({});

export default connect(makeMapToStateProps, mapDispatchToProps)(ShoppingCart);
```

Functional Native option example output:

```jsx
/**
 * ShoppingCart
 */
import React from 'react';
import { View } from 'react-native';

const ShoppingCart = () => {
    return (
        <View>
            ShoppingCart component
        </View>
    );
};

export default ShoppingCart;
```

Class Typescript option example output:

```tsx
/**
 * ShoppingCart
 */
import * as React from 'react';

interface Props {

}

export default class ShoppingCart extends React.Component<Props, {}> {
    render() {
        return (
            <div className="shopping-cart">
                ShoppingCart component
            </div>
        );
    }
}
```

Functional Typescript option example output:

```tsx
/**
 * ShoppingCart
 */
import * as React from 'react';

interface Props {

}

const ShoppingCart: React.FC = (props: Props) => {
    return (
        <div className="shopping-cart">
            ShoppingCart component
        </div>
    );
};

export default ShoppingCart;
```

### Reducer Generator

```bash
yo spock:reducer
```

The reducer generator also supports typescript. The only difference will be the file extension.

Options: page, module

Page option example output:

```jsx
/**
* ShoppingCart Reducer
*/
import { combineReducers } from 'redux';

export default combineReducers({

});
```

Module option example output:

```jsx
/**
* ShoppingCart Reducer
*/
import * as Types from './types';

export default (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
```

### Selector Generator

```bash
yo spock:selector
```

The selector generator also supports typescript. The only difference will be the file extension.

Example output:

```jsx
/**
 * ShoppingCart Selectors
 */
import { createSelector } from 'reselect';

const rootSelector = state => state;

export const sampleSelector = createSelector(
    [rootSelector],
    state => state
);
```


### Story Generator

```bash
yo spock:story
```

Example output

```jsx
/**
* ShoppingCart Stories
*/
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, object, array } from '@storybook/addon-knobs';

const stories = storiesOf('ShoppingCart', module);

stories.addDecorator(withKnobs);

stories.add('ShoppingCart', () => (
    <div>
        ShoppingCart
    </div>
));
```

Example typescript output

```tsx
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
```

## License

MIT © [Rafael Rozon](rafaelrozon.com)


[npm-image]: https://badge.fury.io/js/generator-spock-2.svg
[npm-url]: https://npmjs.org/package/generator-spock-2
[daviddm-image]: https://david-dm.org/rafaelrozon/generator-spock-2.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/rafaelrozon/generator-spock-2
