import React from 'react';
import {Route} from 'react-router-dom';
import {MaterialContainer} from '../../containers/MaterialContainer/Material.container';

export interface Material {
    id: string,
    name: string,
    consumption?: number
}
export interface MaterialSubmitInput {
    name: string,
    area: number,
    consumption: number,
    height: number,
    general_consumption: number,
    coast: number
}
export interface MaterialsComponentProps {
    materials: Material[],
    onFormSubmit: (value: MaterialSubmitInput) => void,
    as?: React.FunctionComponent<MaterialsComponentProps>
}
export const MaterialsComponent: React.FunctionComponent<MaterialsComponentProps> = (props: MaterialsComponentProps) => {
    const {onFormSubmit, materials} = props;

    return (
        <Route path={`/material/:materialId`}><MaterialContainer onFormSubmit={onFormSubmit}
                                                                     materials={materials}/></Route>
    );
}