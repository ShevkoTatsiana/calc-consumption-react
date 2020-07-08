import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import {useMaterialQuery} from '../../hooks/useMaterialQuery';

export function MaterialFormComponent(props) {
    const {onFormSubmit, materials} = props;
    const defaultWidth = 3;
    let { materialId } = useParams();
    const currentMaterial = materials.find((item) => item.name === materialId);
    const { register, handleSubmit } = useForm();
    const [useArea, setUseArea] = useState(true);
    const [showConsump, setConsump] = useState('');
    const [showPrice, setPrice] = useState('');
    const q = useMaterialQuery(currentMaterial.id);

    if (q.loading) return <div>Loading...</div>;

    const {material} = q.data;

    const onCalcMaterial = (data) => {
        let calcArea;
        let cons;
        let total;
        const {area, consumption, height, price, ...other} = data;
        if (!!other.length) {
            calcArea = (parseFloat(other.length) + parseFloat(other.width))*2*height;
        } else {
            calcArea = (area/defaultWidth + parseFloat(defaultWidth))*2*height;
        }
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
        <div className="material-component">
            <h2 className="material-component-title">Calc consumption of {material.name}</h2>
            <form onSubmit={handleSubmit(onCalcMaterial)}>
                {useArea ? (
                    <div>
                        <label htmlFor="area">Area, m<span>2</span></label>
                        <input
                            name="area"
                            placeholder="area"
                            ref={register({ required: true })}
                        />
                    </div>
                ) : (
                    <div>
                        <label htmlFor="width">Width, m</label>
                        <input
                            name="width"
                            placeholder="width"
                            ref={register({ required: true })}
                        />
                        <label htmlFor="length">Length, m</label>
                        <input
                            name="length"
                            placeholder="length"
                            ref={register({ required: true })}
                        />
                    </div>
                )}
                <Button onClick={()=>setUseArea(!useArea)}>
                    Toggle to use Width and Length instead of Area
                </Button>
                <div>
                    <label htmlFor="height">Height, m</label>
                    <input
                        name="height"
                        placeholder="Height"
                        ref={register()}
                    />
                </div>
                <div>
                    <label htmlFor="consumption">Consumption per 1m<span>2</span></label>
                    <input
                        name="consumption"
                        placeholder="Consumption"
                        defaultValue={material.consumption}
                        ref={register({ required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        name="price"
                        placeholder="Price"
                        ref={register()}
                    />
                </div>
                <Button type="submit">Calc Consumption</Button>
            </form>
            <div className="material-component-result">
                <div className="material-component-result-consumption">Total Consumption: {showConsump}</div>
                <div className="material-component-result-price">Total Price: {showPrice}</div>
            </div>
        </div>
    );
}