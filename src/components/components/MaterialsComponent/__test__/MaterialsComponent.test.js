import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, cleanup, fireEvent, waitFor, screen, act, wait} from '@testing-library/react';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import { MockedProvider } from '@apollo/react-testing';
import {MaterialsComponent} from '../Materials.component';
import {MATERIAL} from '../../../hooks/useMaterialQuery';

window.MutationObserver = MutationObserver;


const mockedMaterials = [
    {
        consumption: 0.08,
        id: 'ck9sfqjju2o4i0911lhvxz9x7',
        name: 'Śnieżka',
        __typename: 'Material'
    }, {
        consumption: 0.1,
        id: 'ck9sfv62gwai50940lg7gih9m',
        name: 'Грунтовка',
        __typename: 'Material'
    }
];

const mocks = [
    {
        request: {
            query: MATERIAL,
            variables: {
                id: 'ck9sfv62gwai50940lg7gih9m',
            },
        },
        result: {
            data: {
                material: { id: 'ck9sfv62gwai50940lg7gih9m', name: 'Грунтовка', consumption: '0.1' },
            },
        },
    },
];

describe("MaterialsComponent", () => {
    afterEach(cleanup);

    it('renders without crashing', async ()=> {
        const history = createMemoryHistory();
        const route = '/material/Śnieżka';
        history.push(route);
        await act(async () => {
            await render(
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Router history={createMemoryHistory({ initialEntries: [route] })}>
                        <MaterialsComponent materials={mockedMaterials}/>
                    </Router>
                </MockedProvider>
            );

        });

    });
});