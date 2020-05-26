import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
const ADD_MATERIAL = gql`
    mutation AddMaterial($name:String!, $consumption: Float) {
        addMaterial(name: $name, consumption: $consumption) {
            name
            consumption
        }
    }
`;
const MATERIALS = gql` {
    materials {
        id
        name
        consumption
    }
}`;

export function useAddMaterialMutation(opts = {}, mutation=ADD_MATERIAL) {
    const [addMaterialMutation, payload] = useMutation(mutation);
    const refetchQuery = [{query: MATERIALS}];

    return [
        async (name, consumption) => await addMaterialMutation({
                ...opts,
                variables: {
                    name,
                    consumption
                },
                refetchQueries: () => refetchQuery
            }),
        payload
    ];
}
