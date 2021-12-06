import React from 'react';
import type {ComponentType} from 'react';
import {GalleryComponent, GalleryComponentProps} from '../../components/GalleryComponent/Gallery.component';
import {LoaderComponent} from '../../components/LoaderComponent/Loader.component';
import {useGalleryQuery} from '../../hooks/useGalleryQuery';
import {useDeleteResult} from '../../hooks/useDeleteResult';

interface GalleryContainerProps {
    as: React.FunctionComponent<GalleryComponentProps>
}

export const GalleryContainer: React.FunctionComponent<GalleryContainerProps> = (props: GalleryContainerProps) => {
    const {
        as: Component = GalleryComponent
    } = props;

    const q = useGalleryQuery();
    const [deleteResult, data]= useDeleteResult();

    // @ts-ignore
    if (q.loading || data.loading) return <LoaderComponent/>;
    if (q.error) return <div>Something went wrong</div>;

    const {gallery} = q.data;

    const onDeleteResult = async (resultId: string) => {
        // @ts-ignore
        await deleteResult(resultId);
    };

    return (
        <Component as={GalleryComponent}
                   gallery={gallery}
                   loading={q.loading || data.loading}
                   onDeleteResult={onDeleteResult}/>
    );
}