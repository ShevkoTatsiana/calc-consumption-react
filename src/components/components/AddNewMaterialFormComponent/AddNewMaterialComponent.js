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
                <div className="add-new-material-form-component-row">
                    <label htmlFor="name"
                           className="add-new-material-form-component-label">Material Name</label>
                    <input
                        name="name"
                        placeholder="material name"
                        ref={register({ required: true })}
                    />
                </div>
                <div className="add-new-material-form-component-row">
                    <label htmlFor="consumption"
                           className="add-new-material-form-component-label">Consumption</label>
                    <input
                        name="consumption"
                        placeholder="Consumption"
                        ref={register({ required: true })}
                    />
                </div>
                <button type="submit"
                        className="button button-secondary">Save Material</button>
            </form>
        </div>
    );
}