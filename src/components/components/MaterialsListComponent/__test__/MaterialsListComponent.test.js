import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, cleanup, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import {MaterialsListComponent} from '../MaterialsList.component';

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

describe("MaterialsListComponent", () => {
    afterEach(cleanup);

    it('renders an empty message when there are no materials', ()=> {
        render(<MaterialsListComponent />);
        expect(document.querySelectorAll('.materials-list-component-empty')[0]).toHaveTextContent('There are no saved materials yet');
    });

    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        const history = createMemoryHistory();
        ReactDom.render(<Router history={history}><MaterialsListComponent materials={mockedMaterials}/></Router>, div);
    });

    it('renders an appropriate list of materials', () => {
        const history = createMemoryHistory();
        render(<Router history={history}><MaterialsListComponent materials={mockedMaterials}/></Router>);
        expect(document.querySelectorAll('.materials-list-component-link')).toHaveLength(mockedMaterials.length);
    });

    it('a form should be hidden before click', () => {
        const history = createMemoryHistory();
        render(<Router history={history}><MaterialsListComponent materials={mockedMaterials}/></Router>);
        expect(document.querySelectorAll('.materials-list-component-add')).toHaveLength(0);
    });

    it('should display a form after clicking', async () => {
        const history = createMemoryHistory();
        render(<Router history={history}><MaterialsListComponent materials={mockedMaterials}/></Router>);
        const button = document.querySelectorAll('.materials-list-component-button')[0];
        await act(async () => {
            await fireEvent.click(button)
        });
        expect(document.querySelectorAll('.materials-list-component-add')).toHaveLength(1);
    });
});