import React, {useState} from 'react';
import {noop} from 'lodash';
import {useRouteMatch} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {AddNewMaterialComponent} from '../AddNewMaterialFormComponent/AddNewMaterialComponent';

import {useMaterialsQuery} from '../hooks/useMaterialsQuery';
import {useAddMaterialMutation} from '../hooks/useAddMaterial';

export function MaterialsListComponent(onAddMaterial=noop) {
    const [isShown, setShow] = useState(false);
    let match = useRouteMatch();
    const q = useMaterialsQuery();
    const [addMaterialMutation] = useAddMaterialMutation();
    if (q.loading) return <div>Loading...</div>;

    const {materials} = q.data;
    const handleOnAddMaterial = async (data) => {
        const {name, consumption} = data;
        setShow(false);
        return await addMaterialMutation(name, parseFloat(consumption));
    };


    return (
        <div className="materials-list-component">
        <div>Materials</div>
            {materials.map((Material) => {
                return (
                    <NavLink key={Material.id}
                             to={`material/${Material.id}`}
                             className="materials-list-component-link">
                        {Material.name}
                    </NavLink>
                )
            })}
            <Button className="materials-list-component-button"
                    onClick={()=>setShow(!isShown)}>Add New Material</Button>
            {isShown && (
                <>
                    <Button className="materials-list-component-close"
                            onClick={()=>setShow(!isShown)}>X</Button>
                    <AddNewMaterialComponent onAddMaterial={handleOnAddMaterial}/>
                </>
            )}
        </div>
    );
}