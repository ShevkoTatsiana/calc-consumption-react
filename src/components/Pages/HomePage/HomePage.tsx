import React from 'react';
import {MaterialsListContainer} from '../../containers/MaterialsListContainer/MaterialsList.container';
import {MenuPanelContainer} from '../../containers/MenuPanelContainer/MenuPanel.container';

export const HomePage: React.FunctionComponent = () => {

    return (
        <div className="home-page">
            <h2 className="home-page-title">Materials</h2>
            <div className="home-page-text">You can choose material from the list below or to add a new one</div>
            <MaterialsListContainer/>
            <MenuPanelContainer/>
        </div>
    );
}