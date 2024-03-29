import React from 'react';
import {MaterialFormComponent, MaterialFormComponentProps} from '../../components/MaterialFormComponent/MaterialForm.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';
import {useMaterialQuery} from '../../hooks/useMaterialQuery';
import {useParams} from 'react-router-dom';
import {MaterialSubmitInput} from '../../components/MaterialsComponent/Materials.component';
import {Material} from '../../../generated/graphql';

interface MaterialContainerProps {
    as?: React.FunctionComponent<MaterialFormComponentProps>,
    materials: Material[],
    onFormSubmit: (value: MaterialSubmitInput) => void,
}
interface ParamTypes {
    materialId: string;
}

export const MaterialContainer: React.FunctionComponent<MaterialContainerProps> = (props: MaterialContainerProps) => {
    const {
        as: Component = MaterialFormComponent,
        materials,
        onFormSubmit
    } = props;
    let { materialId }:ParamTypes = useParams<ParamTypes>();

    const currentMaterial = materials.find((item) => item.name === materialId);
    const q = useMaterialQuery(currentMaterial?.id);

    if (q.loading) return <LoaderComponent/>;
    if (q.error) return <div>Something went wrong</div>;
    if(!q.data || !q.data.material) return <div>There is no material</div>;

    const {material} = q?.data;

    return (
        <Component as={MaterialFormComponent}
                   material={material}
                   onFormSubmit={onFormSubmit}/>
    );
}