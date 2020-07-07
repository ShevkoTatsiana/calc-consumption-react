import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export function ResultTableComponent(props) {
    const {
        consumption_items,
        onDeleteItem
    } = props;

    const handleOnDelete = (id) => {
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
                        <td>Consumption</td>
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
                        <td>{item.area}</td>
                        <td>{item.height}</td>
                        <td>{item.general_consumption}</td>
                        <td>{item.coast}</td>
                        <td>
                            <Button onClick={()=>handleOnDelete(item.id)}>Delete</Button>
                        </td>
                    </tr>
                )
            })}
                </tbody>
            </Table>
        </div>
    );
}