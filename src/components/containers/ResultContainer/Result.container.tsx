import React from 'react';
import {isEmpty} from 'lodash';
import {ResultComponent} from '../../components/ResultComponent/Result.component';
import {useResultQuery} from '../../hooks/useResultQuery';
import {useDeleteConsumptionItemMutation} from '../../hooks/useDeleteConsumptionItem';
import {useUpdateResultMutation} from '../../hooks/useUpdateResult';
import {useAddResultIdClient} from '../../hooks/useAddResultIdClient';
import {useDeleteResult} from '../../hooks/useDeleteResult';
import {LoaderComponent} from "../../components/LoaderComponent/Loader.component";
import {ResultComponentProps} from '../../components/ResultComponent/Result.component';
import {Result, ConsumptionItem} from '../../../generated/graphql';

interface ResultContainerProps {
    as?: React.FunctionComponent<ResultComponentProps>,
    resultId: string
}

export const ResultContainer: React.FunctionComponent<ResultContainerProps> = (props: ResultContainerProps) => {
    const {
        as: Component = ResultComponent,
        resultId
    } = props;

    const q = useResultQuery(resultId);
    const [deleteConsumptionItem, loading] = useDeleteConsumptionItemMutation();
    const [updateResultMutation, loadingTotal] = useUpdateResultMutation();
    const [addResultId] = useAddResultIdClient();
    const [deleteResult] = useDeleteResult();

    if (q.loading || loading || loadingTotal) return <LoaderComponent/>;
    if (q.error) return <div>Error</div>;
    if(!q.data || !q.data.result) return <div>There is no result</div>;

    const result= q?.data?.result;

    let resultGrandTotal = 0;

    if(!!result?.consumption_items && result?.consumption_items.length > 0) {
        resultGrandTotal = result.consumption_items.reduce((total, item) => {
            if (!item?.coast) return total;
            return item?.coast + total;
        }, 0);
    }
    const onDeleteItem = async (id: string) => {
        if(deleteConsumptionItem===true || deleteConsumptionItem===false) return;
        return await deleteConsumptionItem(id, resultId);
    };

    const onUpdateResult = async (title?: string) => {
        const newTitle = title || result.title || '';
        if(updateResultMutation===true || updateResultMutation===false) return;
        return await updateResultMutation(resultId, newTitle, resultGrandTotal);
    };

    /*
        when result was deleted or saved to the gallery the current result id is replaced with a new one
     */
    const replaceResultId = async () => {
        await addResultId(null);
    };

    const onAddTitle = (title: string) => {
        onUpdateResult(title);
    };

    const onSave = async () => {
        await onUpdateResult();
        await replaceResultId();
        window.open('/gallery', '_self');
    };

    const onDeleteResult = async () => {
        if(deleteResult===true || deleteResult===false) return;
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