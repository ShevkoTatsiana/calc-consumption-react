import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import {useMaterialQuery} from '../../hooks/useMaterialQuery';
import {LoaderComponent} from '../LoaderComponent/Loader.component';

export function MaterialFormComponent(props) {
    const {onFormSubmit, material} = props;
    const defaultWidth = 3;
    //let { materialId } = useParams();
    //const currentMaterial = materials.find((item) => item.name === materialId);
    const { register, handleSubmit, errors } = useForm();
    const [useArea, setUseArea] = useState(true);
    const [showConsump, setConsump] = useState('not calculated yet');
    const [showPrice, setPrice] = useState('not calculated yet');
    const errorMessage = "Please enter a value";
    //const q = useMaterialQuery(currentMaterial.id);

    //if (q.loading) return <LoaderComponent/>;

    //const {material} = q.data;

    const onCalcMaterial = (data) => {
        let calcArea;
        let cons;
        let total;
        const {area, consumption, height, price, ...other} = data;
        if (!!other.length) {
            calcArea = (parseFloat(other.length) + parseFloat(other.width));
        } else {
            calcArea = (area/defaultWidth + parseFloat(defaultWidth));
        }
        calcArea = height ? calcArea*2*height : calcArea;
        cons = (calcArea * consumption).toFixed(2);
        setConsump(cons);

        if (!!price) {
            total = (cons*price).toFixed(2);
            setPrice(total);
        }
        const input = {
            name: material.name,
            area: calcArea,
            height: parseFloat(height),
            consumption: parseFloat(consumption),
            general_consumption: parseFloat(cons),
            coast: parseFloat(total)
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
                            ref={register({ required: true })}
                        />
                        {!!errors && errors.width && <span role="alert"
                                                          className="material-form-component-error">
                        {errorMessage}
                    </span>}
                        <br/>
                        <label htmlFor="lengthInput"
                               className="material-form-component-element-label">Length, m</label>
                        <input
                            name="lengthInput"
                            placeholder="length"
                            ref={register({ required: true })}
                        />
                        {!!errors && errors.lengthInput && <span role="alert"
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
                        ref={register()}
                    />
                </div>
                <div className="material-form-component-element">
                    <label htmlFor="consumption"
                           className="material-form-component-element-label">Consumption per 1m<span>2</span></label>
                    <input
                        name="consumption"
                        placeholder="Consumption"
                        defaultValue={material.consumption}
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