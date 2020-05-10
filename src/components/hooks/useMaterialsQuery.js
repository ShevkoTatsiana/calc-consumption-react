import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
//import MATERIALS from '../graphql/queries/Materials.query.graphql';
const MATERIALS = gql` {
    materials {
        id
        name
        consumption
    }
}`
export function useMaterialsQuery(query=MATERIALS, options={}) {
    return useQuery(query, options)
}