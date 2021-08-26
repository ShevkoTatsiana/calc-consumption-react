import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

export function renderWithRouterMatch(
    ui,
    {
        route = "/",
        history = createMemoryHistory({ initialEntries: [route] })
    } = {}
) {
    return {
        ...render(
            <Router history={history}>
                <Route path={route}>{ui}</Route>
            </Router>
        ),
        history
    };
}