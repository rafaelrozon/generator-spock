# generator-spock-2 [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
>

## Installation

First, install [Yeoman](http://yeoman.io) and generator-spock-2 using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-spock
```

Then generate your new project:

```bash
yo spock
```

## Available Generators
- Action
- Component
- Reducer
- Selector
- Story

### Action Generator

Command:

```bash
yo spock:action
```

Options: actions and types

Actions option output:

```bash
/**
* ShoppingCart Actions
*/
import * as Types from './types';
```

Types option output:

```bash
/**
* ShoppingCart Types
*/
```

### Component Generator

Command:

```bash
yo spock:component
```

Options: class, functional, connected, native

Class option ouput:

```bash
/**
* DatePicker
*/
import React from 'react';

export default class DatePicker extends React.Component {
    render() {
        return (
            <div className="date-picker">
                DatePicker component
            </div>
        );
    }
}
```


Function option output:

```bash
/**
* DatePicker
*/
import React from 'react';

const DatePicker = () => {
    return (
        <div className="date-picker">
            DatePicker component
        </div>
    );
};

export default DatePicker;
```

Connected option output:

```bash
/**
* DatePicker
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from './DatePicker';

const makeMapToStateProps = (state) => ({})

const mapDispatchToProps = (dispath) => ({});

export default connect(makeMapToStateProps, mapDispatchToProps)
```

Functional Native option output:

```bash
/**
* DatePicker
*/
const React = require('react');
const { View } = require('react-native');

const DatePicker = () => {
    return (
        <View>
            DatePicker component
        </View>
    );
};

module.exports = DatePicker;
```

### Reducer Generator

Command:

```bash
yo spock:reducer
```

Options: page, module

Page option output:

```bash
/**
* ShoppingCart Reducer
*/
import { combineReducers } from 'redux';

export default combineReducers({

});
```

Module option output:

```bash
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

Command:

```bash
yo spock:selector
```

Output:

```bash
/**
* ShoppingCart Selectors
*/
import { createSelector } from 'reselect';
```


### Story Generator

Command:

```bash
yo spock:story
```

Output

```bash
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


## License

MIT © [Rafael Rozon](rafaelrozon.com)


[npm-image]: https://badge.fury.io/js/generator-spock-2.svg
[npm-url]: https://npmjs.org/package/generator-spock-2
[travis-image]: https://travis-ci.org/rafaelrozon/generator-spock-2.svg?branch=master
[travis-url]: https://travis-ci.org/rafaelrozon/generator-spock-2
[daviddm-image]: https://david-dm.org/rafaelrozon/generator-spock-2.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/rafaelrozon/generator-spock-2
