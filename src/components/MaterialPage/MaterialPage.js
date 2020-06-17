import React from 'react';
import {BackComponent} from '../BackComponent/BackComponent';
import {MaterialsContainer} from '../MaterialsContainer/Materials.container';

export function MaterialPage() {
    return (
        <div className="material-page">
            <BackComponent/>
            <MaterialsContainer/>
        </div>
    );
}