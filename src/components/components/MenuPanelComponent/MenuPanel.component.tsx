import React from 'react';
import {NavLink} from 'react-router-dom';

interface MenuPanelComponent {
    resultId: string
}

export const MenuPanelComponent: React.FunctionComponent<MenuPanelComponent> = (props: MenuPanelComponent) => {
    const {
        resultId
    } = props;

    return (
        <div className="menu-panel-component">
            <nav>
                <ul className="menu-panel-component-list">
                    <li className="menu-panel-component-item">
                        <NavLink key={resultId}
                            to="/result"
                                 className="menu-panel-component-link">
                            Result
                        </NavLink>
                    </li>
                    <li className="menu-panel-component-item">
                        <NavLink to="/gallery"
                                 className="menu-panel-component-link">Gallery</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
