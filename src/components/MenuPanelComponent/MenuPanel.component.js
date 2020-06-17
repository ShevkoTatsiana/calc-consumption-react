import React from 'react';
import {Link, NavLink} from "react-router-dom";

export function MenuPanelComponent(props) {
    const {
        onResult,
        resultId
    } = props;

    const resultPath = (!!resultId && !!resultId.resultId) ? (`result/${resultId.resultId}`) : 'result';

    return (
        <div className="menu-panel-component">
            <nav>
                <ul className="menu-panel-component-list">
                    {/*<li className="menu-panel-component-item">*/}
                    {/*    <Link className="menu-panel-component-link"*/}
                    {/*          onClick={onResult}>*/}
                    {/*        Result*/}
                    {/*    </Link>*/}
                    {/*</li>*/}
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