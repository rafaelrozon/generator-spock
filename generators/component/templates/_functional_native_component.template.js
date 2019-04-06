/**
 * <%= moduleName %>
 */
const React = require('react');
const PropTypes = require('prop-types');
const { View } = require('react-native');

const <%= moduleName %> = props => {
    return (
        <View>
            <%= moduleName %> component
        </View>
    );
};

<%= moduleName %>.propTypes = {};
<%= moduleName %>.defaultProps = {};

module.exports = <%= moduleName %>;
