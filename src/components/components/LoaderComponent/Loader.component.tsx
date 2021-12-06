import React from 'react';

import Spinner from 'react-bootstrap/Spinner'

export const LoaderComponent: React.FunctionComponent = () => {
    return (
        <div className="loader-component"
             data-testid="loader-component">
            <Spinner className="loader-component-spinner"
                     variant="primary"
                     animation="border"
                     role="status"/>
        </div>
    );
}
