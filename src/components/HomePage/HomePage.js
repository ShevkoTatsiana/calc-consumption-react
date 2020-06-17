import React from 'react';
import {MaterialsListComponent} from '../MaterialsListComponent/MaterialsList.component';
import {MenuPanelComponent} from '../MenuPanelComponent/MenuPanel.component';

import { useSelector } from 'react-redux';

export function HomePage() {

    const resultId = useSelector(state => state);

    return (
        <div className="home-page">
            <div>title</div>
            <MaterialsListComponent/>
            <MenuPanelComponent resultId={resultId}/>
        </div>
    );
}