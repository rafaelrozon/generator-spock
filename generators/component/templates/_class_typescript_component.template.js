/**
 * <%= moduleName %>
 */
import * as React from 'react';

interface Props {

}

export default class <%= moduleName %> extends React.Component<Props, {}> {
    render() {
        return (
            <div className="<%= moduleCss %>">
                <%= moduleName %> component
            </div>
        );
    }
}
