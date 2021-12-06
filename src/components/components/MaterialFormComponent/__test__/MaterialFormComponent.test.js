import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, fireEvent, waitFor, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import {MaterialFormComponent} from '../MaterialForm.component';

window.MutationObserver = MutationObserver;
const input = {
    name: 'name 1',
    area: 12.4,
    height: 3.1,
    consumption: 1.5,
    general_consumption: 10.2,
    coast: 24.7
};
const mockFormSubmit = jest.fn((input) => {
    return Promise.resolve(input);
});

const mockedMaterial = {
    consumption: 0.08,
    id: 'ck9sfqjju2o4i0911lhvxz9x7',
    name: 'Śnieżka',
    __typename: 'Material'
};

it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDom.render(<MaterialFormComponent material={mockedMaterial}/>, div);
});

describe("MaterialFormComponent", () => {
    afterEach(cleanup);
    beforeEach(() => {
        render(<MaterialFormComponent onFormSubmit={mockFormSubmit}
                                      material={mockedMaterial}/>);
    });


    it("should display required error when 'area' and 'consumption' values are  empty", async () => {
        const form = document.forms[0];
        const consumtionInput = form.elements['consumption'];
        consumtionInput.value = '';
        fireEvent.submit(screen.getByText('Calc Consumption'));
        expect(await screen.findAllByRole("alert")).toHaveLength(2);
        expect(mockFormSubmit).not.toBeCalled();
    });

    it("should display required error when 'width' and 'length' values are  empty", async () => {
        document.querySelectorAll('.button-tertiary')[0].click();
        fireEvent.submit(screen.getByText('Calc Consumption'));
        expect(await screen.findAllByRole("alert")).toHaveLength(2);
        expect(mockFormSubmit).not.toBeCalled();
    });

    it("should not display error when area and consumption value is valid", async () => {
        const form = document.forms[0];
        const areaInput = form.elements['area'];
        const consumtionInput = form.elements['consumption'];
        const consTotal = document.querySelectorAll('.material-component-result-consumption .total')[0];
        const priceTotal = document.querySelectorAll('.material-component-result-price .total')[0];

        fireEvent.input(areaInput, {target: {value: '12.5'}});
        fireEvent.input(consumtionInput, {target: {value: '0.8'}});

        await act(async () => {
            await fireEvent.submit(document.querySelectorAll('.button-secondary')[0])
        });

        await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
        expect(consTotal).toHaveTextContent('5.73');
        expect(priceTotal).toHaveTextContent('not calculated yet');
    });

    it("should not display error when width, length and consumption value is valid", async () => {
        document.querySelectorAll('.button-tertiary')[0].click();
        const form = document.forms[0];
        const widthInput = form.elements['width'];
        const lengthInput = form.elements['length'];
        const consumtionInput = form.elements['consumption'];
        const consTotal = document.querySelectorAll('.material-component-result-consumption .total')[0];
        const priceTotal = document.querySelectorAll('.material-component-result-price .total')[0];

        fireEvent.input(widthInput, {target: {value: '3.5'}});
        fireEvent.input(lengthInput, {target: {value: '4.2'}});
        fireEvent.input(consumtionInput, {target: {value: '0.8'}});

        await act(async () => {
            await fireEvent.submit(document.querySelectorAll('.button-secondary')[0])
        });

        await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
        expect(consTotal).toHaveTextContent('3.33');
        expect(priceTotal).toHaveTextContent('not calculated yet');
    });

    it("should not display error when area, consumption and height value is valid", async () => {
        const form = document.forms[0];
        const areaInput = form.elements['area'];
        const consumtionInput = form.elements['consumption'];
        const heightInput = form.elements['height'];
        const priceInput = form.elements['price'];
        const consTotal = document.querySelectorAll('.material-component-result-consumption .total')[0];
        const priceTotal = document.querySelectorAll('.material-component-result-price .total')[0];

        fireEvent.input(areaInput, {target: {value: '12.5'}});
        fireEvent.input(consumtionInput, {target: {value: '0.8'}});
        fireEvent.input(heightInput, {target: {value: '3.5'}});
        fireEvent.input(priceInput, {target: {value: '8.5'}});

        await act(async () => {
            await fireEvent.submit(document.querySelectorAll('.button-secondary')[0])
        });

        await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
        expect(consTotal).toHaveTextContent('40.13');
        expect(priceTotal).toHaveTextContent('341.11');
    });
});