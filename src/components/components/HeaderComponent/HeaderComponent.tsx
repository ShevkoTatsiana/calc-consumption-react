import React from 'react';
import {Link} from "react-router-dom";

export const HeaderComponent: React.FunctionComponent = () => {

    return (
        <div className="header-component j">
            <Link to="/" className="header-component-title">Repair Cost Calculator</Link>
        </div>
    );
}