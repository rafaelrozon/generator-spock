/**
 * <%= moduleName %>
 */
import * as React from 'react';

interface Props {

}

const <%= moduleName %>: React.FC = (props: Props) => {
    return (
        <div className="<%= moduleCss %>">
            <%= moduleName %> component
        </div>
    );
};

export default <%= moduleName %>;
