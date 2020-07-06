import React from 'react';
import {NavLink} from "react-router-dom";

export function MenuPanelComponent(props) {
    const {
        resultId
    } = props;

    console.log(resultId);
    const resultPath = !!resultId ? (`result/${resultId}`) : 'result';
    console.log(resultPath);

    return (
        <div className="menu-panel-component">
            <nav>
                <ul className="menu-panel-component-list">
                    <li>
                        <NavLink key={resultId}
                                 to={resultPath}
                                 className="menu-panel-component-link">
                            Result
                        </NavLink>
                    </li>
                    <li className="menu-panel-component-item">
                        <NavLink to="/gallery" className="menu-panel-component-link">Gallery</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}