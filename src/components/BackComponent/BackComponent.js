import React from 'react';
import {Link} from "react-router-dom";

export function BackComponent() {

    return (
        <div className="back-component">
            <Link to="/" className="back-component-link">Back</Link>
        </div>
    );
}