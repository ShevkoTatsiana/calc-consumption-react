import React from 'react';
import {ResultRouteComponent} from "../../components/ResultRouteComponent/ResultRoute.component";
import {useResultIdClientQuery} from '../../hooks/useResultIdClientQuery';

export function ResultRouteContainer(props) {
    const {data} = useResultIdClientQuery();
    const resultId = !!data && data.resultID;

    return (
        <ResultRouteComponent resultId={resultId}/>
    );
}