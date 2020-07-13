import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {LoaderComponent} from '../LoaderComponent/Loader.component';

export function GalleryComponent(props) {
    const {
        gallery,
        loading,
        onDeleteResult
    } = props;

    if (loading) return <LoaderComponent/>;

    return (
        <div className="gallery-component">
            {gallery.map((result, index) => (
                <div key={result.id}>
                    <h2>Result {index} {result.title}</h2>
                    <Table className="gallery-component-result">
                        <tr>
                            <th>Name</th>
                            <th>S, m2</th>
                            <th>Cons.</th>
                            <th>Total</th>
                        </tr>
                        {result.consumption_items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.area.toFixed(2)}m2</td>
                                <td>{item.general_consumption}</td>
                                <td>{item.coast}</td>
                            </tr>
                        ))}
                        {result.grand_total && (
                            <tr><td>Grand Total</td><td>{result.grand_total}</td></tr>
                        )}

                    </Table>
                    <Button onClick={() => onDeleteResult(result.id)}
                            className="button button-tertiary">Delete Result</Button>
                </div>

            ))}

        </div>
    );
}