import React from 'react';
import {MaterialsListComponent} from '../MaterialsListComponent/MaterialsList.component';
import {MenuPanelComponent} from '../MenuPanelComponent/MenuPanelComponent'

export function HomePage() {

    return (
        <div className="home-page">
            <div>title</div>
            <MaterialsListComponent/>
            <MenuPanelComponent/>
        </div>
    );
}