import React, {useState} from 'react';
import {noop} from 'lodash';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {AddNewMaterialComponent} from '../AddNewMaterialFormComponent/AddNewMaterialComponent';

export function MaterialsListComponent(props) {
    const {
        materials,
        onAddMaterial = noop
    } = props;

    const [isShown, setShow] = useState(false);
    const handleOnAddMaterial = (data) => {
        const {name, consumption} = data;
        setShow(false);
        onAddMaterial(name, consumption);
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