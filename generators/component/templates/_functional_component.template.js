/**
 * <%= moduleName %>
 */
import React from 'react';
import PropTypes from 'prop-types';

const <%= moduleName %> = props => {
    return (
        <div className="<%= moduleCss %>">
            <%= moduleName %> component
        </div>
    );
};

<%= moduleName %>.propTypes = {};
<%= moduleName %>.defaultProps = {};

export default <%= moduleName %>;
