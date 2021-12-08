import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
const ADD_RESULT = gql`
    mutation AddResult {
        addResult {
            id
        }
    }
`;

export function useAddResultMutation(opts = {}, mutation=ADD_RESULT) {
    const [addResultMutation, {loading}] = useMutation(mutation);

    return [
        async () => await addResultMutation({
                ...opts
            }),
        loading
    ];
}
