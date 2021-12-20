import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {GalleryQuery, GalleryQueryVariables, Result} from '../../generated/graphql';
//import GALLERY from '../graphql/queries/Gallery.query.graphql';
export const GALLERY = gql` {
    gallery {
        id
        title
        consumption_items {
            id
            name
            area
            height
            consumption
            general_consumption
            coast
        }
        grand_total
    }
}`;
export function useGalleryQuery(query=GALLERY, options={}) {
    return useQuery<GalleryQuery,GalleryQueryVariables>(query, options)
}