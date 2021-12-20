import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {MaterialsQuery, MaterialsQueryVariables} from '../../generated/graphql';
//import MATERIALS from '../graphql/queries/MaterialsListComponent.query.graphql';
export const MATERIALS = gql` {
    materials {
        id
        name
        consumption
    }
}`;
export function useMaterialsQuery(query=MATERIALS, options={}) {
    return useQuery<MaterialsQuery,MaterialsQueryVariables>(query, options)
}