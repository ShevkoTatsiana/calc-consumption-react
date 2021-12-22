import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {AddMaterialMutationMutation, AddMaterialMutationMutationVariables} from '../../generated/graphql';
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
    const [addMaterialMutation, {loading}] = useMutation<AddMaterialMutationMutation,AddMaterialMutationMutationVariables>(mutation);
    const refetchQuery = [{query: MATERIALS}];

    return [
        async (name:string, consumption:number) => await addMaterialMutation({
                ...opts,
                variables: {
                    name,
                    consumption
                },
                refetchQueries: () => refetchQuery
            }),
        loading
    ];
}