import React from 'react';
import {BackComponent} from '../BackComponent/BackComponent';
import {MaterialsComponent} from '../MaterialsComponent/Materials.component';
import {useAddConsumptionItemMutation} from '../hooks/useAddConsumptionItem';

export function MaterialPage() {
    const [addConsumptionItemMutation] = useAddConsumptionItemMutation();
    //temporary hard code
    const resultId = 'cka0ukzbfgmxg0918yv2ufcfd';
    const onFormSubmit = async (data) => {
        data.resultID = resultId;
        console.log(data);
        return await addConsumptionItemMutation(data);
    };

    return (
        <div className="material-page">
            <BackComponent/>
            <MaterialsComponent onFormSubmit={onFormSubmit}/>
        </div>
    );
}