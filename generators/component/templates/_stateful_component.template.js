import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const <%= moduleName %> = props => {
    return (
        <div className="<%= moduleCss %>">
        </div>
    );
};

<%= moduleName %>.propTypes = {};
<%= moduleName %>.defaultProps = {};

const makeMapToStateProps = (state) => ({})

const mapDispatchToProps = (dispath) => ({});

export default connect(makeMapToStateProps, mapDispatchToProps)(<%= moduleName %>);
