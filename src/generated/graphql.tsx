import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ConsumptionInput = {
  area?: InputMaybe<Scalars['Float']>;
  coast?: InputMaybe<Scalars['Float']>;
  consumption?: InputMaybe<Scalars['Float']>;
  general_consumption?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  resultID?: InputMaybe<Scalars['String']>;
};

export type ConsumptionItem = {
  __typename?: 'ConsumptionItem';
  area?: Maybe<Scalars['Float']>;
  coast?: Maybe<Scalars['Float']>;
  consumption?: Maybe<Scalars['Float']>;
  general_consumption?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  includeIn?: Maybe<Result>;
  name: Scalars['String'];
};

export type Material = {
  __typename?: 'Material';
  consumption?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addConsumptionItem?: Maybe<ConsumptionItem>;
  addMaterial?: Maybe<Material>;
  addResult?: Maybe<Result>;
  deleteConsumptionItem?: Maybe<ConsumptionItem>;
  deleteManyResults?: Maybe<Array<Maybe<Result>>>;
  deleteResult?: Maybe<Result>;
  updateResult?: Maybe<Result>;
};


export type MutationAddConsumptionItemArgs = {
  input?: InputMaybe<ConsumptionInput>;
};


export type MutationAddMaterialArgs = {
  consumption?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
};


export type MutationDeleteConsumptionItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteResultArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateResultArgs = {
  grand_total?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  gallery?: Maybe<Array<Maybe<Result>>>;
  material?: Maybe<Material>;
  materials?: Maybe<Array<Maybe<Material>>>;
  result?: Maybe<Result>;
};


export type QueryMaterialArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryResultArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Result = {
  __typename?: 'Result';
  consumption_items?: Maybe<Array<Maybe<ConsumptionItem>>>;
  grand_total?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type AddConsumptionItemMutationMutationVariables = Exact<{
  input?: InputMaybe<ConsumptionInput>;
}>;


export type AddConsumptionItemMutationMutation = { __typename?: 'Mutation', addConsumptionItem?: { __typename?: 'ConsumptionItem', id: string, name: string, area?: number | null | undefined, height?: number | null | undefined, consumption?: number | null | undefined, general_consumption?: number | null | undefined, coast?: number | null | undefined } | null | undefined };

export type AddMaterialMutationMutationVariables = Exact<{
  name: Scalars['String'];
  consumption?: InputMaybe<Scalars['Float']>;
}>;


export type AddMaterialMutationMutation = { __typename?: 'Mutation', addMaterial?: { __typename?: 'Material', name: string, consumption?: number | null | undefined } | null | undefined };

export type AddResultMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type AddResultMutationMutation = { __typename?: 'Mutation', addResult?: { __typename?: 'Result', id: string } | null | undefined };

export type DeleteConsumptionItemMutationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteConsumptionItemMutationMutation = { __typename?: 'Mutation', deleteConsumptionItem?: { __typename?: 'ConsumptionItem', id: string } | null | undefined };

export type DeleteResultMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteResultMutation = { __typename?: 'Mutation', deleteResult?: { __typename?: 'Result', id: string } | null | undefined };

export type GalleryQueryVariables = Exact<{ [key: string]: never; }>;


export type GalleryQuery = { __typename?: 'Query', gallery?: Array<{ __typename?: 'Result', id: string, title?: string | null | undefined, grand_total?: number | null | undefined, consumption_items?: Array<{ __typename?: 'ConsumptionItem', id: string, name: string, area?: number | null | undefined, height?: number | null | undefined, consumption?: number | null | undefined, general_consumption?: number | null | undefined, coast?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type MaterialQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type MaterialQuery = { __typename?: 'Query', material?: { __typename?: 'Material', id: string, name: string, consumption?: number | null | undefined } | null | undefined };

export type MaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type MaterialsQuery = { __typename?: 'Query', materials?: Array<{ __typename?: 'Material', id: string, name: string, consumption?: number | null | undefined } | null | undefined> | null | undefined };

export type ResultQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type ResultQuery = { __typename?: 'Query', result?: { __typename?: 'Result', id: string, title?: string | null | undefined, grand_total?: number | null | undefined, consumption_items?: Array<{ __typename?: 'ConsumptionItem', id: string, name: string, area?: number | null | undefined, height?: number | null | undefined, consumption?: number | null | undefined, general_consumption?: number | null | undefined, coast?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const AddConsumptionItemMutationDocument = gql`
    mutation AddConsumptionItemMutation($input: ConsumptionInput) {
  addConsumptionItem(input: $input) {
    id
    name
    area
    height
    consumption
    general_consumption
    coast
  }
}
    `;
export type AddConsumptionItemMutationMutationFn = Apollo.MutationFunction<AddConsumptionItemMutationMutation, AddConsumptionItemMutationMutationVariables>;

/**
 * __useAddConsumptionItemMutationMutation__
 *
 * To run a mutation, you first call `useAddConsumptionItemMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddConsumptionItemMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addConsumptionItemMutationMutation, { data, loading, error }] = useAddConsumptionItemMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddConsumptionItemMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddConsumptionItemMutationMutation, AddConsumptionItemMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddConsumptionItemMutationMutation, AddConsumptionItemMutationMutationVariables>(AddConsumptionItemMutationDocument, options);
      }
export type AddConsumptionItemMutationMutationHookResult = ReturnType<typeof useAddConsumptionItemMutationMutation>;
export type AddConsumptionItemMutationMutationResult = Apollo.MutationResult<AddConsumptionItemMutationMutation>;
export type AddConsumptionItemMutationMutationOptions = Apollo.BaseMutationOptions<AddConsumptionItemMutationMutation, AddConsumptionItemMutationMutationVariables>;
export const AddMaterialMutationDocument = gql`
    mutation AddMaterialMutation($name: String!, $consumption: Float) {
  addMaterial(name: $name, consumption: $consumption) {
    name
    consumption
  }
}
    `;
export type AddMaterialMutationMutationFn = Apollo.MutationFunction<AddMaterialMutationMutation, AddMaterialMutationMutationVariables>;

/**
 * __useAddMaterialMutationMutation__
 *
 * To run a mutation, you first call `useAddMaterialMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMaterialMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMaterialMutationMutation, { data, loading, error }] = useAddMaterialMutationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      consumption: // value for 'consumption'
 *   },
 * });
 */
export function useAddMaterialMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddMaterialMutationMutation, AddMaterialMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMaterialMutationMutation, AddMaterialMutationMutationVariables>(AddMaterialMutationDocument, options);
      }
export type AddMaterialMutationMutationHookResult = ReturnType<typeof useAddMaterialMutationMutation>;
export type AddMaterialMutationMutationResult = Apollo.MutationResult<AddMaterialMutationMutation>;
export type AddMaterialMutationMutationOptions = Apollo.BaseMutationOptions<AddMaterialMutationMutation, AddMaterialMutationMutationVariables>;
export const AddResultMutationDocument = gql`
    mutation AddResultMutation {
  addResult {
    id
  }
}
    `;
export type AddResultMutationMutationFn = Apollo.MutationFunction<AddResultMutationMutation, AddResultMutationMutationVariables>;

/**
 * __useAddResultMutationMutation__
 *
 * To run a mutation, you first call `useAddResultMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResultMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResultMutationMutation, { data, loading, error }] = useAddResultMutationMutation({
 *   variables: {
 *   },
 * });
 */
export function useAddResultMutationMutation(baseOptions?: Apollo.MutationHookOptions<AddResultMutationMutation, AddResultMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddResultMutationMutation, AddResultMutationMutationVariables>(AddResultMutationDocument, options);
      }
export type AddResultMutationMutationHookResult = ReturnType<typeof useAddResultMutationMutation>;
export type AddResultMutationMutationResult = Apollo.MutationResult<AddResultMutationMutation>;
export type AddResultMutationMutationOptions = Apollo.BaseMutationOptions<AddResultMutationMutation, AddResultMutationMutationVariables>;
export const DeleteConsumptionItemMutationDocument = gql`
    mutation DeleteConsumptionItemMutation($id: ID!) {
  deleteConsumptionItem(id: $id) {
    id
  }
}
    `;
export type DeleteConsumptionItemMutationMutationFn = Apollo.MutationFunction<DeleteConsumptionItemMutationMutation, DeleteConsumptionItemMutationMutationVariables>;

/**
 * __useDeleteConsumptionItemMutationMutation__
 *
 * To run a mutation, you first call `useDeleteConsumptionItemMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteConsumptionItemMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteConsumptionItemMutationMutation, { data, loading, error }] = useDeleteConsumptionItemMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteConsumptionItemMutationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteConsumptionItemMutationMutation, DeleteConsumptionItemMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteConsumptionItemMutationMutation, DeleteConsumptionItemMutationMutationVariables>(DeleteConsumptionItemMutationDocument, options);
      }
export type DeleteConsumptionItemMutationMutationHookResult = ReturnType<typeof useDeleteConsumptionItemMutationMutation>;
export type DeleteConsumptionItemMutationMutationResult = Apollo.MutationResult<DeleteConsumptionItemMutationMutation>;
export type DeleteConsumptionItemMutationMutationOptions = Apollo.BaseMutationOptions<DeleteConsumptionItemMutationMutation, DeleteConsumptionItemMutationMutationVariables>;
export const DeleteResultDocument = gql`
    mutation DeleteResult($id: ID!) {
  deleteResult(id: $id) {
    id
  }
}
    `;
export type DeleteResultMutationFn = Apollo.MutationFunction<DeleteResultMutation, DeleteResultMutationVariables>;

/**
 * __useDeleteResultMutation__
 *
 * To run a mutation, you first call `useDeleteResultMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteResultMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteResultMutation, { data, loading, error }] = useDeleteResultMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteResultMutation(baseOptions?: Apollo.MutationHookOptions<DeleteResultMutation, DeleteResultMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteResultMutation, DeleteResultMutationVariables>(DeleteResultDocument, options);
      }
export type DeleteResultMutationHookResult = ReturnType<typeof useDeleteResultMutation>;
export type DeleteResultMutationResult = Apollo.MutationResult<DeleteResultMutation>;
export type DeleteResultMutationOptions = Apollo.BaseMutationOptions<DeleteResultMutation, DeleteResultMutationVariables>;
export const GalleryDocument = gql`
    query Gallery {
  gallery {
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

/**
 * __useGalleryQuery__
 *
 * To run a query within a React component, call `useGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGalleryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGalleryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGalleryQuery(baseOptions?: Apollo.QueryHookOptions<GalleryQuery, GalleryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GalleryQuery, GalleryQueryVariables>(GalleryDocument, options);
      }
export function useGalleryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GalleryQuery, GalleryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GalleryQuery, GalleryQueryVariables>(GalleryDocument, options);
        }
export type GalleryQueryHookResult = ReturnType<typeof useGalleryQuery>;
export type GalleryLazyQueryHookResult = ReturnType<typeof useGalleryLazyQuery>;
export type GalleryQueryResult = Apollo.QueryResult<GalleryQuery, GalleryQueryVariables>;
export const MaterialDocument = gql`
    query Material($id: ID) {
  material(id: $id) {
    id
    name
    consumption
  }
}
    `;

/**
 * __useMaterialQuery__
 *
 * To run a query within a React component, call `useMaterialQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMaterialQuery(baseOptions?: Apollo.QueryHookOptions<MaterialQuery, MaterialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaterialQuery, MaterialQueryVariables>(MaterialDocument, options);
      }
export function useMaterialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialQuery, MaterialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaterialQuery, MaterialQueryVariables>(MaterialDocument, options);
        }
export type MaterialQueryHookResult = ReturnType<typeof useMaterialQuery>;
export type MaterialLazyQueryHookResult = ReturnType<typeof useMaterialLazyQuery>;
export type MaterialQueryResult = Apollo.QueryResult<MaterialQuery, MaterialQueryVariables>;
export const MaterialsDocument = gql`
    query Materials {
  materials {
    id
    name
    consumption
  }
}
    `;

/**
 * __useMaterialsQuery__
 *
 * To run a query within a React component, call `useMaterialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMaterialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMaterialsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMaterialsQuery(baseOptions?: Apollo.QueryHookOptions<MaterialsQuery, MaterialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MaterialsQuery, MaterialsQueryVariables>(MaterialsDocument, options);
      }
export function useMaterialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MaterialsQuery, MaterialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MaterialsQuery, MaterialsQueryVariables>(MaterialsDocument, options);
        }
export type MaterialsQueryHookResult = ReturnType<typeof useMaterialsQuery>;
export type MaterialsLazyQueryHookResult = ReturnType<typeof useMaterialsLazyQuery>;
export type MaterialsQueryResult = Apollo.QueryResult<MaterialsQuery, MaterialsQueryVariables>;
export const ResultDocument = gql`
    query Result($id: ID) {
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

/**
 * __useResultQuery__
 *
 * To run a query within a React component, call `useResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResultQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResultQuery(baseOptions?: Apollo.QueryHookOptions<ResultQuery, ResultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ResultQuery, ResultQueryVariables>(ResultDocument, options);
      }
export function useResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResultQuery, ResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ResultQuery, ResultQueryVariables>(ResultDocument, options);
        }
export type ResultQueryHookResult = ReturnType<typeof useResultQuery>;
export type ResultLazyQueryHookResult = ReturnType<typeof useResultLazyQuery>;
export type ResultQueryResult = Apollo.QueryResult<ResultQuery, ResultQueryVariables>;