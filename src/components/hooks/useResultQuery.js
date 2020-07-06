import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
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
export function useResultQuery(id, query=RESULT, options={}) {
    return useQuery(query, {
        variables: {id},
        ...options
    });
}