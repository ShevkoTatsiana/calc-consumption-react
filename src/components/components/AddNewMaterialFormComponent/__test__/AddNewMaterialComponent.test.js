import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, fireEvent, waitFor, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import {AddNewMaterialComponent} from '../AddNewMaterialComponent';

window.MutationObserver = MutationObserver;
const mockAddMaterial = jest.fn((name, consumption) => {
    return Promise.resolve({ name, consumption });
});

describe("AddNewMaterialComponent", () => {
    afterEach(cleanup);
    beforeEach(() => {
        render(<AddNewMaterialComponent onAddMaterial={mockAddMaterial} />);
    });

    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDom.render(<AddNewMaterialComponent/>, div);
    });

    it("should display required error when value is invalid", async () => {
        fireEvent.submit(screen.getByRole("button"));

        expect(await screen.findAllByRole("alert")).toHaveLength(2);
        expect(mockAddMaterial).not.toBeCalled();
    });

    it("should display min length error when name is invalid", async () => {
        const materialInput = screen.getByLabelText('Material Name');
        const consumptionInput = screen.getByLabelText('Consumption');

        fireEvent.input(materialInput, {target: {value: 't'}});

        fireEvent.input(consumptionInput, {target: {value: '10'}});

        fireEvent.submit(screen.getByRole('button'));

        expect(await screen.findAllByRole('alert')).toHaveLength(1);
        expect(mockAddMaterial).not.toBeCalled();
        expect(materialInput.value).toBe(
            't'
        );
        expect(consumptionInput.value).toBe('10');
    });

    it("should display a required error when name is valid but consumption is empty", async () => {
        const materialInput = screen.getByLabelText('Material Name');
        const consumptionInput = screen.getByLabelText('Consumption');

        fireEvent.input(materialInput, {target: {value: 'test'}});

        fireEvent.input(consumptionInput, {target: {value: ''}});

        fireEvent.submit(screen.getByRole('button'));

        expect(await screen.findAllByRole('alert')).toHaveLength(1);
        expect(mockAddMaterial).not.toBeCalled();
        expect(materialInput.value).toBe(
            'test'
        );
        expect(consumptionInput.value).toBe('');
    });

    it("should not display error when value is valid", async () => {
        const materialInput = screen.getByLabelText('Material Name');
        const consumptionInput = screen.getByLabelText('Consumption');

        fireEvent.input(materialInput, {target: {value: 'test'}});

        fireEvent.input(consumptionInput, {target: {value: '10'}});

        await act(async () => {
            await fireEvent.submit(screen.getByRole('button'))
        });

        await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
        expect(mockAddMaterial).toHaveBeenCalledWith( {"consumption": "10", "name": "test"}, expect.anything());
    });
});