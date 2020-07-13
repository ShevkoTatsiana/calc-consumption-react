import React from 'react';

import Spinner from 'react-bootstrap/Spinner'

export function LoaderComponent(props) {

    return (
        <div className="loader-component">
            <Spinner className="loader-component-spinner"
                     variant="primary"
                     animation="border"
                     role="status"/>
        </div>
    );
}
