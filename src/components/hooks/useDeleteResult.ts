import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {DeleteResultMutation,DeleteResultMutationVariables} from '../../generated/graphql';
export const DELETE_RESULT = gql`
    mutation DeleteResult($id: ID!) {
    deleteResult(id: $id) {
        id
    }
}
`;
const GALLERY = gql` {
    gallery {
        id
        title
        consumption_items {
            id
            name
            area
            height
            consumption
            general_consumption
            coast
        }
        grand_total
    }
}`;

export function useDeleteResult(opts = {variables:{}}, mutation=DELETE_RESULT) {
    const [deleteResult, {loading}] = useMutation<DeleteResultMutation, DeleteResultMutationVariables>(mutation);

    return [
        async (id: string) => await deleteResult({
            ...opts,
            variables: {
                ...opts.variables,
                id
            },
            refetchQueries: [{query: GALLERY}]
            }),
        loading
    ];
}