import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ResultContainer} from "../ResultContainer/Result.container";
import {EmptyResultComponent} from '../EmptyResultComponent/EmptyResult.component';

export function ResultRouteComponent(props) {

    return (
        <Switch>
            <Route path={`/result/:resultId`}><ResultContainer/></Route>
            <Route exact path={`/result`}><EmptyResultComponent/></Route>
        </Switch>


    );
}