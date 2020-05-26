import React from 'react';
import {Link} from "react-router-dom";

export function MenuPanelComponent() {

    return (
        <div className="menu-panel-component">
            <nav>
                <ul className="menu-panel-component-list">
                    <li className="menu-panel-component-item">
                        <Link to="/result" className="menu-panel-component-link">Result</Link>
                    </li>
                    <li className="menu-panel-component-item">
                        <Link to="/gallery" className="menu-panel-component-link">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}