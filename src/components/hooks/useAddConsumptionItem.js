import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
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


export function useAddConsumptionItemMutation(opts = {}, mutation=ADD_CONSUMPTION_ITEM) {
    const [addConsumptionItemMutation, payload] = useMutation(mutation);

    return [
        async (input) => await addConsumptionItemMutation({
            ...opts,
            variables: {
                ...opts.variables,
                input
            }
            }),
        payload
    ];
}
