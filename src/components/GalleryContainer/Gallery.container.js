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

    if (q.loading) return <div>Loading...</div>;

    const {gallery} = q.data;

    const onDeleteResult = async (resultId) => {
        await deleteResult(resultId);
    };

    return (
        <Component as={GalleryComponent}
                   gallery={gallery}
                   loading={deleteLoading}
                   onDeleteResult={onDeleteResult}/>
    );
}