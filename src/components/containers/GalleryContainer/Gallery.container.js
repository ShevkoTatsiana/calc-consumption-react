import React from 'react';
import {GalleryComponent} from '../../components/GalleryComponent/Gallery.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';
import {useGalleryQuery} from '../../hooks/useGalleryQuery';
import {useDeleteResult} from '../../hooks/useDeleteResult';

export function GalleryContainer(props) {
    const {
        as: Component = GalleryComponent
    } = props;

    const q = useGalleryQuery();
    const [deleteResult, {loading: deleteLoading}] = useDeleteResult();

    if (q.loading) return <LoaderComponent/>;

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