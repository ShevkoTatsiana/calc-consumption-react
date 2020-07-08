import React from 'react';
import {BackComponent} from '../../components/BackComponent/BackComponent';
import {ResultRouteContainer} from '../../containers/ResultWrapContainer/ResultRoute.container';

export function ResultPage() {

    return (
        <div className="result-page">
            <BackComponent/>
            <h1>Result Page</h1>
            <ResultRouteContainer/>
        </div>
    );
}