import React from 'react';
import {MaterialsListContainer} from '../../containers/MaterialsListContainer/MaterialsList.container';
import {MenuPanelContainer} from '../../containers/MenuPanelContainer/MenuPanel.container';

export function HomePage() {

    return (
        <div className="home-page">
            <div>title</div>
            <MaterialsListContainer/>
            <MenuPanelContainer/>
        </div>
    );
}