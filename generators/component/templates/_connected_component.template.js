/**
 * <%= moduleName %>
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import <%= moduleName %> from './<%= moduleName %>';

const makeMapToStateProps = (state) => ({})

const mapDispatchToProps = (dispath) => ({});

export default connect(makeMapToStateProps, mapDispatchToProps)(<%= moduleName %>);
