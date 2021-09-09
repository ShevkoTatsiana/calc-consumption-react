import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, fireEvent, waitFor, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import Adapter from 'enzyme-adapter-react-16';
import {ResultComponent} from '../Result.component';

window.MutationObserver = MutationObserver;

const mockedOnDeleteResult = jest.fn((id) => {
    return Promise.resolve({ id });
});
const mockedOnAddTitle = jest.fn((val) => {
    return Promise.resolve({ val });
});
const mockedOnSave = jest.fn(() => {
    return Promise.resolve();
});

const mockedResult =
    {
        id: '1',
        consumption_items: [{
            id: '11',
            name: 'test1',
            area: 12.4,
            height: '3',
            consumption: '1.5',
            general_consumption: '30',
            coast: '45'
        }],
        title: '',
        grand_total: '45'
    };
const mockedGrandTotal = 45;

describe("ResultComponent", () => {
    afterEach(cleanup);

    it('renders loader component when loading', ()=> {
        render(<ResultComponent result={mockedResult}
                                 loading={true}/>)
        expect(screen.getByTestId('loader-component')).toBeInTheDocument();
    });

    it('renders gallery without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render(<ResultComponent result={mockedResult}
                                         loading={false}/>, div);
    });

    it('grand total is not displayed', () => {
        render(<ResultComponent result={mockedResult}
                                loading={false}/>);
        expect(document.querySelectorAll('.result-component-total-value')[0]).toHaveTextContent('Not calculated yet');
    });

    it('grand total is displayed', () => {
        render(<ResultComponent result={mockedResult}
                                resultGrandTotal={mockedGrandTotal}
                                loading={false}/>);
        expect(document.querySelectorAll('.result-component-total-value')[0]).toHaveTextContent(mockedGrandTotal);
    });

    it('able to add title', async () => {
        render(<ResultComponent result={mockedResult}
                                loading={false}
                                onAddTitle={mockedOnAddTitle}/>);
        const titleInput = document.querySelectorAll('.result-component-input')[0];
        const addButton = document.querySelectorAll('.result-component-add-action')[0];
        fireEvent.input(titleInput, {target: {value: 'test result 1'}});
        await act(async () => {
            await fireEvent.click(addButton);
        });
        expect(mockedOnAddTitle).toHaveBeenCalledWith( 'test result 1');
    });

    it('able to delete result', async () => {
        render(<ResultComponent result={mockedResult}
                                loading={false}
                                onDeleteResult={mockedOnDeleteResult}/>);
        const deleteButton = document.querySelectorAll('.result-component-delete-action')[0];
        await act(async () => {
            await fireEvent.click(deleteButton);
        });
        await waitFor(() => expect(mockedOnDeleteResult).toHaveBeenCalled());
    });

    it('able to save result', async () => {
        render(<ResultComponent result={mockedResult}
                                loading={false}
                                onSave={mockedOnSave}/>);
        const saveButton = document.querySelectorAll('.result-component-save-action')[0];
        await act(async () => {
            await fireEvent.click(saveButton);
        });
        await waitFor(() => expect(mockedOnSave).toHaveBeenCalled());
    });
});