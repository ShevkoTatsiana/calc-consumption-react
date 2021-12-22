import React from 'react';

import {
    GalleryComponent,
    GalleryComponentProps
} from '../../components/GalleryComponent/Gallery.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';
import {useGalleryQuery} from '../../hooks/useGalleryQuery';
import {useDeleteResult} from '../../hooks/useDeleteResult';

interface GalleryContainerProps {
    as?: React.FunctionComponent<GalleryComponentProps>
}

export const GalleryContainer: React.FunctionComponent<GalleryContainerProps> = (props: GalleryContainerProps) => {
    const {
        as: Component = GalleryComponent
    } = props;

    const q = useGalleryQuery();
    const [deleteResult, loading]= useDeleteResult();

    if (q.loading || loading) return <LoaderComponent/>;
    if (q.error) return <div>Something went wrong</div>;
    if(!q.data || !q.data.gallery) return <div>There are no items yet</div>;

    const gallery = q?.data?.gallery;

    const onDeleteResult = async (resultId: string) => {
        if (deleteResult === true || deleteResult===false) return;
        await deleteResult(resultId);
    };

    return (
        <Component as={GalleryComponent}
                   gallery={gallery}
                   loading={q.loading || loading}
                   onDeleteResult={onDeleteResult}/>
    );
}