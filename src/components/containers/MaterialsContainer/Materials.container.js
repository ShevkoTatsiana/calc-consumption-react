import React from 'react';
import {get} from 'lodash';
import {MaterialsComponent} from '../../components/MaterialsComponent/Materials.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';
import {useAddConsumptionItemMutation} from '../../hooks/useAddConsumptionItem';
import {useAddResultMutation} from '../../hooks/useAddResult';
import {useResultIdClientQuery} from '../../hooks/useResultIdClientQuery';
import {useAddResultIdClient} from '../../hooks/useAddResultIdClient';
import {useMaterialsQuery} from '../../hooks/useMaterialsQuery';

export function MaterialsContainer(props) {
    const {
        as: Component = MaterialsComponent
    } = props;
    const q = useMaterialsQuery();
    const [addConsumptionItemMutation] = useAddConsumptionItemMutation();
    const [addResultMutation] = useAddResultMutation();
    const [addResultId] = useAddResultIdClient();
    const {data} = useResultIdClientQuery();
    const result = !!data && data.resultID;

    if (q.loading) return <LoaderComponent/>;
    const materials = get(q, 'data.materials');

    const handleGetResult = async () => {
        const resp =  await addResultMutation();
        return resp.data.addResult.id;
    };

    const onFormSubmit = async (data) => {
        if (!!result) {
            data.resultID = result;
        } else {
            data.resultID = await handleGetResult();
            addResultId(data.resultID);
        }
        return await addConsumptionItemMutation(data);
    };

    return (
        <Component as={MaterialsComponent}
                   materials={materials}
                   onFormSubmit={onFormSubmit}/>
    );
}