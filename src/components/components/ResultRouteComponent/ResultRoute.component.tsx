import React from 'react';
import {ResultContainer} from '../../containers/ResultContainer/Result.container';
import {EmptyResultComponent} from '../EmptyResultComponent/EmptyResult.component';

interface ResultRouteComponentProps {
    resultId: String
}

export const ResultRouteComponent: React.FunctionComponent<ResultRouteComponentProps> = ({resultId}: ResultRouteComponentProps) => {
    if (!!resultId) {
        return  <ResultContainer resultId={resultId}></ResultContainer>
    }

    return (
        <EmptyResultComponent/>
    );
}