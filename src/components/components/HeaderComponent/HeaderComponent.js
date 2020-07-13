import React from 'react';
import {Link} from "react-router-dom";

export function HeaderComponent() {

    return (
        <div className="header-component">
            <Link to="/" className="header-component-title">Repair Cost Calculator</Link>
        </div>
    );
}