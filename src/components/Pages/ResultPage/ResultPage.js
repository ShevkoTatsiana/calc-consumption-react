import React from 'react';
import {BackComponent} from '../../components/BackComponent/BackComponent';
import {ResultRouteComponent} from '../../components/ResultRouteComponent/ResultRoute.component';

export function ResultPage() {

    return (
        <div className="result-page">
            <BackComponent/>
            <h1>Result Page</h1>
            <ResultRouteComponent/>
        </div>
    );
}