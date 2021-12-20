import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {MaterialQuery, MaterialQueryVariables} from '../../generated/graphql';
//import MATERIAL from '../graphql/queries/Material.query.graphql';
export const MATERIAL = gql`
    query Material($id:ID) {
        material(id: $id) {
            id
            name
            consumption
        }
    }
`;
export function useMaterialQuery(id: string | undefined, query=MATERIAL, options={}) {
    return useQuery<MaterialQuery,MaterialQueryVariables>(query, {
        variables: {id},
        skip: !id,
        ...options
    });
}