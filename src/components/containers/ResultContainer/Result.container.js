import React from 'react';
import {ResultComponent} from '../../components/ResultComponent/Result.component';
import {useResultQuery} from '../../hooks/useResultQuery';
import {useDeleteConsumptionItemMutation} from '../../hooks/useDeleteConsumptionItem';
import {useUpdateResultMutation} from '../../hooks/useUpdateResult';
import {useAddResultIdClient} from '../../hooks/useAddResultIdClient';
import {useDeleteResult} from '../../hooks/useDeleteResult';
import {LoaderComponent} from "../../components/LoaderComponent/Loader.component";

export function ResultContainer(props) {
    const {
        as: Component = ResultComponent,
        resultId
    } = props;

    const q = useResultQuery(resultId);
    const [deleteConsumptionItem, {loading}] = useDeleteConsumptionItemMutation();
    const [updateResultMutation, {loading: loadingTotal}] = useUpdateResultMutation();
    const [addResultId] = useAddResultIdClient();
    const [deleteResult] = useDeleteResult();

    if (q.loading || loading || loadingTotal) return <LoaderComponent/>;
    if (q.error) return <div>Error</div>;

    const {result} = q?.data;
    const calcGrand = (items) => items.reduce((total, item) => item.coast + total, 0);

    const resultGrandTotal = !!result && result.consumption_items.length > 0 && calcGrand(result.consumption_items);
    const onDeleteItem = async (id) => {
        return await deleteConsumptionItem(id, resultId);
    };

    const onUpdateResult = async (title) => {
        console.log(title);
        const newTitle = title || result.title || '';
        return await updateResultMutation(resultId, newTitle, resultGrandTotal);
    };

    /*
        when result was deleted or saved to the gallery the current result id is replaced with a new one
     */
    const replaceResultId = async () => {
        await addResultId(null);
    };

    const onAddTitle = (title) => {
        onUpdateResult(title);
    };

    const onSave = async () => {
        await onUpdateResult();
        await replaceResultId();
        window.open('/gallery', '_self');
    };

    const onDeleteResult = async () => {
        await deleteResult(resultId);
        await replaceResultId();
        window.open('/', '_self');
    };

    return (
        <Component as={ResultComponent}
                   result={result}
                   loading={loading||loadingTotal}
                   onDeleteItem={onDeleteItem}
                   onSave={onSave}
                   resultGrandTotal={resultGrandTotal}
                   onAddTitle={onAddTitle}
                   onDeleteResult={onDeleteResult}/>
    );
}