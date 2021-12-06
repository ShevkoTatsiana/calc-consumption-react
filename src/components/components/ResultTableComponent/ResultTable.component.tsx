import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import {ConsumptionItem} from '../ResultComponent/Result.component';

interface ResultTableComponentProps {
    consumption_items: ConsumptionItem[],
    onDeleteItem: (value: string) => void
}

export const ResultTableComponent: React.FunctionComponent<ResultTableComponentProps> = (props: ResultTableComponentProps) => {
    const {
        consumption_items,
        onDeleteItem
    } = props;

    const handleOnDelete = (id: string) => {
        onDeleteItem(id);
    };

    return (
        <div className="result-table-component">
            <Table>
                <thead>
                    <tr>
                        <td>№</td>
                        <td>Name</td>
                        <td>S, m2</td>
                        <td>h, m</td>
                        <td>Cons.</td>
                        <td>Total</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
            {consumption_items.map((item, index) => {
                return (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.area.toFixed(2)}</td>
                        <td>{item.height}</td>
                        <td>{item.general_consumption}</td>
                        <td>{item.coast}</td>
                        <td>
                            <Button onClick={()=>handleOnDelete(item.id)}
                                    className="button button-tertiary">Delete</Button>
                        </td>
                    </tr>
                )
            })}
                </tbody>
            </Table>
        </div>
    );
}