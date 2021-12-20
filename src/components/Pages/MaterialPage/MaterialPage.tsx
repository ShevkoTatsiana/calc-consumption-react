import React from 'react';
import {BackComponent} from '../../components/BackComponent/BackComponent';
import {MaterialsContainer} from '../../containers/MaterialsContainer/Materials.container';

export const MaterialPage: React.FunctionComponent = () => {
    return (
        <div className="material-page">
            <BackComponent/>
            <MaterialsContainer/>
        </div>
    );
}