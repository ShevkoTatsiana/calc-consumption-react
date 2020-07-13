import React from 'react';
import {noop, get} from 'lodash';

import {useMaterialsQuery} from '../../hooks/useMaterialsQuery';
import {useAddMaterialMutation} from '../../hooks/useAddMaterial';
import {MaterialsListComponent} from '../../components/MaterialsListComponent/MaterialsList.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';

export function MaterialsListContainer(props) {
    const {
        as: Component = MaterialsListComponent,
        onAddMaterial = noop
    } = props;

    const q = useMaterialsQuery();
    const [addMaterialMutation] = useAddMaterialMutation();

    if (q.loading) return <LoaderComponent/>;
    if (q.error) return <div>Error</div>;

    const materials = get(q, 'data.materials');
    const handleOnAddMaterial = async (name, consumption) => {
        const resp =  await addMaterialMutation(name, parseFloat(consumption));
        onAddMaterial();
        return resp;
    };


    return (
        <Component as={MaterialsListComponent}
                   materials={materials}
                   onAddMaterial={handleOnAddMaterial}/>
    );
}