import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {ResultQuery, ResultQueryVariables} from '../../generated/graphql';
export const RESULT = gql`
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
export function useResultQuery(id: string, query=RESULT, options={}) {
    return useQuery<ResultQuery,ResultQueryVariables>(query, {
        variables: {id},
        ...options
    });
}