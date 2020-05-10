import React from 'react';
import {useMaterialsQuery} from '../hooks/useMaterialsQuery';

export function MaterialsComponent() {
    const q = useMaterialsQuery();
    //const {materials} = q.data;
    if (q.loading) return <div>Loading...</div>

    const {materials} = q.data;
    console.log(materials);

    return (
        <>
        <div>Materials</div>
            {materials.map((Material) => {
                return (
                    <div key={Material.id}>{Material.name}</div>
                )
            })}
        </>
    );
}