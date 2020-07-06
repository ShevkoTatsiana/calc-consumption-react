import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
const DELETE_CONSUMPTION_ITEM = gql`
    mutation DeleteConsumptionItemMutation($id: ID!) {
    deleteConsumptionItem(id: $id) {
        id
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


export function useDeleteConsumptionItemMutation(opts = {}, mutation=DELETE_CONSUMPTION_ITEM) {
    const [deleteConsumptionItem, payload] = useMutation(mutation);

    return [
        async (id, resultID) => await deleteConsumptionItem({
            ...opts,
            variables: {
                ...opts.variables,
                id
            },
            refetchQueries: [{query: RESULT, variables: {id: resultID}}]
            }),
        payload
    ];
}
