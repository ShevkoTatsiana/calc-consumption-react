import React from 'react';
import {Route} from 'react-router-dom';
import {MaterialFormComponent} from "../MaterialFormComponent/MaterialForm.component";

export function MaterialsComponent(props) {
    const {onFormSubmit, materials} = props;

    return (
        <Route path={`/material/:materialId`}><MaterialFormComponent onFormSubmit={onFormSubmit}
                                                                     materials={materials}/></Route>
    );
}