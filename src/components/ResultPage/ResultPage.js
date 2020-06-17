import React from 'react';
import {BackComponent} from '../BackComponent/BackComponent';
import {ResultRouteComponent} from '../ResultRouteComponent/ResultRoute.component';

export function ResultPage() {

    return (
        <div className="result-page">
            <BackComponent/>
            <div>Result Page</div>
            <ResultRouteComponent/>
        </div>
    );
}