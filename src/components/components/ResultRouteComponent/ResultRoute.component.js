import React from 'react';
import {ResultContainer} from "../../containers/ResultContainer/Result.container";
import {EmptyResultComponent} from '../EmptyResultComponent/EmptyResult.component';

export function ResultRouteComponent(props) {
    const {
        resultId
    } = props;

    if (!!resultId) {
        return  <ResultContainer resultId={resultId}/>
    }

    return (
        <EmptyResultComponent/>
    );
}