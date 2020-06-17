import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MaterialsComponent} from '../MaterialsComponent/Materials.component';
import {useAddConsumptionItemMutation} from '../hooks/useAddConsumptionItem';
import {useAddResultMutation} from '../hooks/useAddResult';
import {addResult} from "../redux/actions";

export function MaterialsContainer(props) {
    const {
        as: Component = MaterialsComponent
    } = props;
    const [addConsumptionItemMutation] = useAddConsumptionItemMutation();
    const [addResultMutation] = useAddResultMutation();
    const result = useSelector(state => state);
    const dispatch = useDispatch();

    const handleGetResult = async () => {
        const resp =  await addResultMutation();
        dispatch(addResult(resp.data.addResult.id));
        return resp.data.addResult.id;
    };

    const onFormSubmit = async (data) => {
        if (!!result && !!result.resultId) {
            data.resultID = result.resultId;
        } else {
            data.resultID = await handleGetResult();
        }
        return await addConsumptionItemMutation(data);
    };

    return (
        <Component as={MaterialsComponent}
                   onFormSubmit={onFormSubmit}/>
    );
}