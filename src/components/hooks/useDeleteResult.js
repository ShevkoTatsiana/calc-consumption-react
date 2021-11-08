import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
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

export function useDeleteResult(opts = {}, mutation=DELETE_RESULT) {
    const [deleteResult, payload] = useMutation(mutation);

    return [
        async (id) => await deleteResult({
            ...opts,
            variables: {
                ...opts.variables,
                id
            },
            refetchQueries: [{query: GALLERY}]
            }),
        payload
    ];
}
