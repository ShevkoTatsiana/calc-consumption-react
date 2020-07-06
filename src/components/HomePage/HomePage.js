import React from 'react';
import {MaterialsListContainer} from '../MaterialsListContainer/MaterialsList.container';
import {MenuPanelComponent} from '../MenuPanelComponent/MenuPanel.component';
import {MenuPanelContainer} from '../MenuPanelContainer/MenuPanel.container';

import { useSelector } from 'react-redux';

export function HomePage() {

    //const resultId = useSelector(state => state);

    return (
        <div className="home-page">
            <div>title</div>
            <MaterialsListContainer/>
            {/*<MenuPanelComponent/>*/}
            <MenuPanelContainer/>
        </div>
    );
}