import React from 'react';
import {MaterialFormComponent} from '../../components/MaterialFormComponent/MaterialForm.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';
import {useMaterialQuery} from '../../hooks/useMaterialQuery';
import {useParams} from 'react-router-dom';

export function MaterialContainer(props) {
    const {
        as: Component = MaterialFormComponent,
        materials,
        onFormSubmit
    } = props;
    let { materialId } = useParams();
    const currentMaterial = materials.find((item) => item.name === materialId);
    const q = useMaterialQuery(currentMaterial.id);
    if (q.loading) return <LoaderComponent/>;

    const {material} = q?.data;

    return (
        <Component as={MaterialFormComponent}
                   material={material}
                   onFormSubmit={onFormSubmit}/>
    );
}