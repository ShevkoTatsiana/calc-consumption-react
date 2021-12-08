import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {AddConsumptionItemMutationMutation, AddConsumptionItemMutationMutationVariables} from '../../generated/graphql';
//import {AddResultData} from '../containers/MaterialsContainer/Materials.container';
import {MaterialsComponentProps, MaterialSubmitInput} from '../components/MaterialsComponent/Materials.component';
interface AddResultData extends MaterialSubmitInput {
    resultID?: string
}

const ConsumptionInput = gql`
input ConsumptionInput {
    name: String!
    area: Float
    height: Float
    consumption: Float
    general_consumption: Float
    coast: Float
    resultID: String
}`;
const ADD_CONSUMPTION_ITEM = gql`
    mutation AddConsumptionItemMutation($input: ConsumptionInput) {
    addConsumptionItem(input: $input) {
        id
        name
        area
        height
        consumption
        general_consumption
        coast
    }
}
`;
const RESULT = gql`
    query Result($id:ID) {
    result(id: $id) {
        id
        consumption_items {
            id
            name
            area
            height
            consumption
            general_consumption
            coast
        }
        title
        grand_total
    }
}
`;


export function useAddConsumptionItemMutation(opts = {variables:{}}, mutation=ADD_CONSUMPTION_ITEM) {
    const [addConsumptionItemMutation, {loading}] = useMutation<AddConsumptionItemMutationMutation, AddConsumptionItemMutationMutationVariables>(mutation);

    return [
        async (input: AddResultData) => await addConsumptionItemMutation({
            ...opts,
            variables: {
                ...opts.variables,
                input
            },
            refetchQueries: [{query: RESULT, variables: {id: input.resultID}}]
        }),
        loading
    ];
}