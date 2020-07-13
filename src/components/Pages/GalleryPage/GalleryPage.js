import React from 'react';
import {GalleryContainer} from '../../containers/GalleryContainer/Gallery.container';
import {BackComponent} from '../../components/BackComponent/BackComponent';

export function GalleryPage() {

    return (
        <div className="gallery-page">
            <BackComponent/>
            <h1>Gallery Page</h1>
            <GalleryContainer/>
        </div>
    );
}