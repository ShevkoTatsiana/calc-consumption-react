import React from 'react';
import {GalleryComponent} from '../GalleryComponent/Gallery.component';
import {useGalleryQuery} from '../hooks/useGalleryQuery';
import {useDeleteResult} from '../hooks/useDeleteResult';

export function GalleryContainer(props) {
    const {
        as: Component = GalleryComponent
    } = props;

    const q = useGalleryQuery();
    const [deleteResult, {loading: deleteLoading}] = useDeleteResult();
    const {gallery} = q.data;

    const onDeleteResult = async (resultId) => {
        await deleteResult(resultId);
    };


    if (q.loading) return <div>Loading...</div>;

    console.log(q.data);

    return (
        <Component as={GalleryComponent}
                   gallery={gallery}
                   loading={deleteLoading}
                   onDeleteResult={onDeleteResult}/>
    );
}