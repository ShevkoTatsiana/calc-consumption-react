import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
const RESULTID = gql`
    query ClientResultId {
        resultID @client
}
`;
export function useResultIdClientQuery(query=RESULTID, options={}) {
    return useQuery(query, options);
}