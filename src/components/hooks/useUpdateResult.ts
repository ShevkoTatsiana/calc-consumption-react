import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
const UPDATE_RESULT = gql`
    mutation UpdateResult($id:ID!, $title:String, $grand_total: Float) {
        updateResult(id: $id, title: $title, grand_total: $grand_total) {
            title
            grand_total
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

export function useUpdateResultMutation(opts = {}, mutation=UPDATE_RESULT) {
    const [updateResultMutation, {loading}] = useMutation(mutation);

    return [
        async (id: string, title: string, grand_total: number) => await updateResultMutation({
                ...opts,
                variables: {
                    id,
                    title,
                    grand_total
                },
            refetchQueries: [{query: RESULT, variables: {id: id}}, {query: GALLERY}]
            }),
        loading
    ];
}
