import React from 'react';
import {noop} from 'lodash';
import { useForm } from 'react-hook-form';

import {AddMaterialInput} from '../MaterialsListComponent/MaterialsList.component';

interface AddNewMaterialComponentProps {
    onAddMaterial: (data:AddMaterialInput) => void
}

export const AddNewMaterialComponent : React.FunctionComponent<AddNewMaterialComponentProps> = (props: AddNewMaterialComponentProps) => {
    const {
        onAddMaterial = noop
    } = props;
    const { register, handleSubmit, errors } = useForm();
    const errorMessage = "Please enter a value";

    return (
        <div className="add-new-material-form-component">
            <form onSubmit={handleSubmit(onAddMaterial)}>
                <div className="add-new-material-form-component-row">
                    <label htmlFor="name"
                           className="add-new-material-form-component-label">Material Name</label>
                    <input
                        name="name"
                        id="name"
                        placeholder="material name"
                        ref={register({
                            required: true,
                            minLength: {
                                value: 2,
                                message: "min length is 2"
                            }
                        })}
                    />
                    {!!errors && errors.name && <span role="alert"
                                                      className="add-new-material-form-component-error">
                        {errorMessage}
                    </span>}
                </div>
                <div className="add-new-material-form-component-row">
                    <label htmlFor="consumption"
                           className="add-new-material-form-component-label">Consumption</label>
                    <input
                        name="consumption"
                        placeholder="Consumption"
                        id="consumption"
                        ref={register({required: true})}
                    />
                    {!!errors && errors.consumption && <span role="alert"
                                                      className="add-new-material-form-component-error">
                        {errorMessage}
                    </span>}
                </div>
                <button type="submit"
                        className="button button-secondary">Save Material</button>
            </form>
        </div>
    );
}