import React from 'react';
import {MaterialsComponent} from '../../components/MaterialsComponent/Materials.component';
import {useAddConsumptionItemMutation} from '../../hooks/useAddConsumptionItem';
import {useAddResultMutation} from '../../hooks/useAddResult';
import {useResultIdClientQuery} from '../../hooks/useResultIdClientQuery';
import {useAddResultIdClient} from '../../hooks/useAddResultIdClient';

export function MaterialsContainer(props) {
    const {
        as: Component = MaterialsComponent
    } = props;
    const [addConsumptionItemMutation] = useAddConsumptionItemMutation();
    const [addResultMutation] = useAddResultMutation();
    const [addResultId] = useAddResultIdClient();
    const {data} = useResultIdClientQuery();
    const result = !!data && data.resultID;

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
                   onFormSubmit={onFormSubmit}/>
    );
}