import React from 'react';
import {noop, get} from 'lodash';

import {useMaterialsQuery} from '../../hooks/useMaterialsQuery';
import {useAddMaterialMutation} from '../../hooks/useAddMaterial';
import {MaterialsListComponent} from '../../components/MaterialsListComponent/MaterialsList.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';
import {MaterialsListComponentProps} from "../../components/MaterialsListComponent/MaterialsList.component";
import {AddMaterialMutationMutation, AddMaterialMutationMutationVariables} from "../../../generated/graphql";

interface MaterialsListContainerProps {
    as?: React.FunctionComponent<MaterialsListComponentProps>,
    onAddMaterial: () => void
}

export const MaterialsListContainer: React.FunctionComponent<MaterialsListContainerProps> = (props: MaterialsListContainerProps) => {
    const {
        as: Component = MaterialsListComponent,
        onAddMaterial = noop
    } = props;

    const q = useMaterialsQuery();
    const [addMaterialMutation] = useAddMaterialMutation();

    if (q.loading) return <LoaderComponent/>;
    if (q.error) return <div>Error</div>;

    const materials = get(q, 'data.materials');
    const handleOnAddMaterial = async (name:string, consumption: number) => {
        // @ts-ignore
        const resp =  await addMaterialMutation(name, consumption);
        onAddMaterial();
        return resp;
    };


    return (
        <Component as={MaterialsListComponent}
                   materials={materials}
                   onAddMaterial={handleOnAddMaterial}/>
    );
}