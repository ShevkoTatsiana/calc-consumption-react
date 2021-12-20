import React, {ComponentType, useState} from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';

import {MaterialSubmitInput} from '../MaterialsComponent/Materials.component';
import {Material} from '../../../generated/graphql';

export interface MaterialInput {
    area: number,
    consumption: number,
    height: number,
    width?: number,
    length?: number,
    price?: number
}

export interface MaterialFormComponentProps {
    material: Material,
    onFormSubmit: (value: MaterialSubmitInput) => void,
    as?: React.FunctionComponent<MaterialFormComponentProps>
}

export const MaterialFormComponent: React.FunctionComponent<MaterialFormComponentProps> = (props:MaterialFormComponentProps) => {
    const {onFormSubmit, material} = props;
    const defaultWidth = 3;
    const { register, handleSubmit, errors } = useForm<MaterialInput>();
    const [useArea, setUseArea] = useState(true);
    const [showConsump, setConsump] = useState<string | number>('not calculated yet');
    const [showPrice, setPrice] = useState<string | number>('not calculated yet');
    const errorMessage = "Please enter a value";

    const onCalcMaterial = (data:MaterialInput) => {
        let calcArea: number;
        let cons: number;
        let total = 0;
        const {area, consumption, height, price, ...other} = data;
        if (!!other.length && !!other.width) {
            calcArea = other.length + other.width;
        } else {
            calcArea = (area/defaultWidth + defaultWidth);
        }
        calcArea = height ? calcArea*2*height : calcArea;
        cons = +(calcArea * consumption).toFixed(2);
        setConsump(cons);

        if (!!price) {
            total = +(+cons*price).toFixed(2);
            setPrice(total);
        }
        const input = {
            name: material.name,
            area: calcArea,
            height: +height,
            consumption: +consumption,
            general_consumption: cons,
            coast: total
        };
        onFormSubmit(input);
    };

    return (
        <div className="material-form-component">
            <h2 className="material-form-component-title">Calc consumption of {material.name}</h2>
            <form onSubmit={handleSubmit(onCalcMaterial)}
                  data-testid="material-form">
                {useArea ? (
                    <div className="material-form-component-element">
                        <label htmlFor="area"
                               className="material-form-component-element-label">Area, m<span>2</span></label>
                        <input
                            name="area"
                            placeholder="area"
                            type="number"
                            ref={register({ required: true })}
                        />
                        {!!errors && errors.area && <span role="alert"
                                                          className="material-form-component-error">
                        {errorMessage}
                    </span>}
                    </div>
                ) : (
                    <div className="material-form-component-element">
                        <label htmlFor="width"
                               className="material-form-component-element-label">Width, m</label>
                        <input
                            name="width"
                            placeholder="width"
                            type="number"
                            ref={register({ required: true })}
                        />
                        {!!errors && errors.width && <span role="alert"
                                                           className="material-form-component-error">
                        {errorMessage}
                    </span>}
                        <br/>
                        <label htmlFor="length"
                               className="material-form-component-element-label">Length, m</label>
                        <input
                            name="length"
                            placeholder="length"
                            type="number"
                            ref={register({ required: true })}
                        />
                        {!!errors && errors['length'] && <span role="alert"
                                                                 className="material-form-component-error">
                        {errorMessage}
                    </span>}
                    </div>
                )}
                <Button onClick={()=>setUseArea(!useArea)}
                        className="button button-tertiary">
                    Toggle to use Width and Length instead of Area
                </Button>
                <div className="material-form-component-element">
                    <label htmlFor="height"
                           className="material-form-component-element-label">Height, m</label>
                    <input
                        name="height"
                        placeholder="Height"
                        type="number"
                        ref={register()}
                    />
                </div>
                <div className="material-form-component-element">
                    <label htmlFor="consumption"
                           className="material-form-component-element-label">Consumption per 1m<span>2</span></label>
                    <input
                        name="consumption"
                        placeholder="Consumption"
                        type="number"
                        defaultValue={!!material.consumption ? material.consumption : ''}
                        ref={register({ required: true })}
                    />
                    {!!errors && errors.consumption && <span role="alert"
                                                             className="material-form-component-error">
                        {errorMessage}
                    </span>}
                </div>
                <div className="material-form-component-element">
                    <label htmlFor="price"
                           className="material-form-component-element-label">Price</label>
                    <input
                        name="price"
                        placeholder="Price"
                        ref={register()}
                    />
                </div>
                <Button type="submit"
                        className="button button-secondary">Calc Consumption</Button>
            </form>
            <div className="material-component-result">
                <div className="material-component-result-consumption">
                    Total Consumption:
                    <span className="total">
                    {showConsump}</span>
                </div>
                <div className="material-component-result-price">Total Price: <span className="total">{showPrice}</span></div>
            </div>
        </div>
    );
}