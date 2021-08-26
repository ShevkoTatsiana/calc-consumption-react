import React from 'react';
import {Route} from 'react-router-dom';
import {MaterialContainer} from '../../containers/MaterialContainer/Material.container';

export function MaterialsComponent(props) {
    const {onFormSubmit, materials} = props;

    return (
        <Route path={`/material/:materialId`}><MaterialContainer onFormSubmit={onFormSubmit}
                                                                     materials={materials}/></Route>
    );
}