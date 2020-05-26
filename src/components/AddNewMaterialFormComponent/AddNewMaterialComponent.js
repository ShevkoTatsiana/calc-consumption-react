import React from 'react';
import {noop} from 'lodash';
import { useForm } from 'react-hook-form';

export function AddNewMaterialComponent(props) {
    const {
        onAddMaterial = noop
    } = props;
    const { register, handleSubmit } = useForm();

    return (
        <div className="add-new-material-form-component">
            <form onSubmit={handleSubmit(onAddMaterial)}>
                <div>
                    <label htmlFor="name">Material Name</label>
                    <input
                        name="name"
                        placeholder="material name"
                        ref={register({ required: true })}
                    />
                </div>

                <div>
                    <label htmlFor="consumption">Consumption</label>
                    <input
                        name="consumption"
                        placeholder="Consumption"
                        ref={register({ required: true })}
                    />
                </div>
                <button type="submit">Save Material</button>
            </form>
        </div>
    );
}