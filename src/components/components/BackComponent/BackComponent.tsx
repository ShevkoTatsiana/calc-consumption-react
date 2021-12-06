import React from 'react';
import {Link} from "react-router-dom";

export const BackComponent: React.FunctionComponent = () => {

    return (
        <div className="back-component">
            <Link to="/" className="back-component-link" data-testid="back-link">Back</Link>
        </div>
    );
}