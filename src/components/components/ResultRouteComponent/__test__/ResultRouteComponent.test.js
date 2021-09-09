import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import {ResultRouteComponent} from '../ResultRoute.component';
import {RESULT} from '../../../hooks/useResultQuery';
import {MATERIAL} from "../../../hooks/useMaterialQuery";
import {Router} from "react-router-dom";
import {MaterialsComponent} from "../../MaterialsComponent/Materials.component";

const mockedResultId = "cktbk7zj69ebk0a32aafgai8y";

const mocks = [
    {
        request: {
            query: RESULT,
            variables: {
                id: mockedResultId,
            },
        },
        result: {
            data: {
                result: { id: mockedResultId },
            },
        },
    },
];

afterEach(cleanup);
it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDom.render(<ResultRouteComponent/>, div);
});

it('renders empty result', () => {
    render(<ResultRouteComponent/>);
    expect(screen.getByTestId('empty-result')).toHaveTextContent('Sorry, you don\'t have any active result');
});

it('renders a result table', async ()=> {
    await act(async () => {
        await render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <ResultRouteComponent resultId={mockedResultId}/>
            </MockedProvider>
        );
    });
    //expect(document.querySelectorAll('.result-component')).toHaveLength(1);
});