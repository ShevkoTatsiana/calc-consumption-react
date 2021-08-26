import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {render, cleanup, fireEvent, waitFor, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import { MockedProvider } from '@apollo/client/testing';
import {MaterialContainer} from '../Material.container';
import {MATERIAL} from '../../../hooks/useMaterialQuery';
import {useMaterialQuery} from '../../../hooks/useMaterialQuery';
import {renderWithRouterMatch} from '../../../../utils/renderWithRouter';

window.MutationObserver = MutationObserver;
const input = {
    name: 'name 1',
    area: 12.4,
    height: 3.1,
    consumption: 1.5,
    general_consumption: 10.2,
    coast: 24.7
};

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

describe("MaterialContainer", () => {
    afterEach(cleanup);
    // beforeEach(() => {
    //     const history = createMemoryHistory();
    //     const route = '/material/ck9sfv62gwai50940lg7gih9m';
    //     history.push(route);
    //     // render(<Router history={history}><MaterialFormComponent onFormSubmit={mockFormSubmit}
    //     //                               materials={mockedMaterials}/></Router>);
    //
    //     // renderWithRouterMatch(<MaterialFormComponent  materials={mockedMaterials}
    //     //                                               onFormSubmit={mockFormSubmit}/>, {
    //     //     route: '/material/ck9sfv62gwai50940lg7gih9m',
    //     //     path: '/material/:id'
    //     // });
    // });

    // it("Test with Provider wrapper", async () => {
    //     //const { getByText } = renderWithRouterMatch(<MaterialFormComponent materials={mockedMaterials}/>);
    //     console.log(mocks);
    //     const { findByText } = renderWithRouterMatch(
    //         <MockedProvider mocks={mocks} addTypename={false}>
    //             <Route path="/material/:materialId">
    //                 <MaterialContainer materials={mockedMaterials}/>
    //             </Route>
    //         </MockedProvider>,
    //         {
    //             route: '/material/Грунтовка'
    //         }
    //     );
    //     await findByText("consumption");
    // });

    // it('renders without crashing', ()=> {
    //     //const div = document.createElement('div');
    //     //ReactDom.render(<MaterialFormComponent/>, div);
    // });

    // it("should display required error when value is invalid", async () => {
    //     fireEvent.submit(screen.getByRole("button"));
    //
    //     expect(await screen.findAllByRole("alert")).toHaveLength(2);
    //     expect(mockAddMaterial).not.toBeCalled();
    // });
    //
    // it("should display min length error when name is invalid", async () => {
    //     const materialInput = screen.getByLabelText('Material Name');
    //     const consumptionInput = screen.getByLabelText('Consumption');
    //
    //     fireEvent.input(materialInput, {target: {value: 't'}});
    //
    //     fireEvent.input(consumptionInput, {target: {value: '10'}});
    //
    //     fireEvent.submit(screen.getByRole('button'));
    //
    //     expect(await screen.findAllByRole('alert')).toHaveLength(1);
    //     expect(mockAddMaterial).not.toBeCalled();
    //     expect(materialInput.value).toBe(
    //         't'
    //     );
    //     expect(consumptionInput.value).toBe('10');
    // });
    //
    // it("should display a required error when name is valid but consumption is empty", async () => {
    //     const materialInput = screen.getByLabelText('Material Name');
    //     const consumptionInput = screen.getByLabelText('Consumption');
    //
    //     fireEvent.input(materialInput, {target: {value: 'test'}});
    //
    //     fireEvent.input(consumptionInput, {target: {value: ''}});
    //
    //     fireEvent.submit(screen.getByRole('button'));
    //
    //     expect(await screen.findAllByRole('alert')).toHaveLength(1);
    //     expect(mockAddMaterial).not.toBeCalled();
    //     expect(materialInput.value).toBe(
    //         'test'
    //     );
    //     expect(consumptionInput.value).toBe('');
    // });
    //
    // it("should not display error when value is valid", async () => {
    //     const materialInput = screen.getByLabelText('Material Name');
    //     const consumptionInput = screen.getByLabelText('Consumption');
    //
    //     fireEvent.input(materialInput, {target: {value: 'test'}});
    //
    //     fireEvent.input(consumptionInput, {target: {value: '10'}});
    //
    //     await act(async () => {
    //         await fireEvent.submit(screen.getByRole('button'))
    //     });
    //
    //     await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    //     expect(mockAddMaterial).toHaveBeenCalledWith( {"consumption": "10", "name": "test"}, expect.anything());
    // });
});