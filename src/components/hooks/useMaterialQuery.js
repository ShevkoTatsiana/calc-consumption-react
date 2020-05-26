import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
//import MATERIAL from '../graphql/queries/Material.query.graphql';
const MATERIAL = gql`
    query Material($id:ID) {
        material(id: $id) {
            id
            name
            consumption
        }
    }
`;
export function useMaterialQuery(id, query=MATERIAL, options={}) {
    return useQuery(query, {
        variables: {id},
        ...options
    });
}