import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import {ResultTableComponent} from '../ResultTable.component';

window.MutationObserver = MutationObserver;

const mockedOnDeleteItem = jest.fn((id) => {
    return Promise.resolve({ id });
});

const mockedResult = [
    {
        id: 'cktbk7zteuuky0965p4gao3pd',
        area: 35,
        coast: 42,
        consumption: 0.1,
        general_consumption: 3.5,
        height: 2.5,
        name: 'Грунтовка'
    }];

describe("ResultTableComponent", () => {
    afterEach(cleanup);

    it('renders gallery without crashing', ()=> {
        const div = document.createElement('div');
        ReactDom.render(<ResultTableComponent consumption_items={mockedResult}/>, div);
    });

    it('renders an appropriate table', ()=> {
        render(<ResultTableComponent consumption_items={mockedResult}/>);
        const table = document.querySelectorAll('.result-table-component table')[0];
        expect(table.querySelectorAll('tbody tr')).toHaveLength(mockedResult.length);
        expect(table.querySelectorAll('tbody td')[1]).toHaveTextContent(mockedResult[0].name);
        expect(table.querySelectorAll('tbody td')[2]).toHaveTextContent(mockedResult[0].area);
        expect(table.querySelectorAll('tbody td')[3]).toHaveTextContent(mockedResult[0].height);
        expect(table.querySelectorAll('tbody td')[4]).toHaveTextContent(mockedResult[0].general_consumption);
        expect(table.querySelectorAll('tbody td')[5]).toHaveTextContent(mockedResult[0].coast);
    });

    it("should remove an item when button is clicked", async () => {
        render(<ResultTableComponent consumption_items={mockedResult}
                                     onDeleteItem={mockedOnDeleteItem}/>);
        const table = document.querySelectorAll('.result-table-component table')[0];
        await act(async () => {
            await fireEvent.click(table.querySelectorAll('button')[0])
        });
        expect(mockedOnDeleteItem).toHaveBeenCalledWith( mockedResult[0].id);
    });
});