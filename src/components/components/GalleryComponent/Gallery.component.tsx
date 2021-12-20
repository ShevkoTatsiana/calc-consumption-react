import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {LoaderComponent} from '../LoaderComponent/Loader.component';
import {Result} from '../../../generated/graphql';

export interface consumptionItemsType {
    id: string,
    name: string,
    area: number,
    height: number,
    consumption: number,
    general_consumption: number,
    coast: number
}

export interface GalleryComponentProps {
    gallery: Result[],
    loading?: boolean,
    onDeleteResult: (value: string) => void,
    as: React.FunctionComponent<GalleryComponentProps>
}

export const GalleryComponent: React.FunctionComponent<GalleryComponentProps> = (props:GalleryComponentProps) => {
    const {
        gallery = [],
        loading = false,
        onDeleteResult
    } = props;

    if (loading) return <LoaderComponent/>;

    if (!gallery.length) return null;

    return (
        <div className="gallery-component"
             data-testid="gallery-component">
            {gallery.map((result, index) => (
                <div key={result.id}>
                    <h2>Result {index} {result.title}</h2>
                    <Table className="gallery-component-result">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>S, m2</th>
                                <th>Cons.</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.consumption_items?.map((item) => (
                                <tr key={item?.id}>
                                    <td>{item?.name}</td>
                                    <td>{item?.area?.toFixed(2)}m2</td>
                                    <td>{item?.general_consumption}</td>
                                    <td>{item?.coast}</td>
                                </tr>
                            ))}
                            {result.grand_total && (
                                <tr><td>Grand Total</td><td>{result.grand_total}</td></tr>
                            )}
                        </tbody>
                    </Table>
                    <Button onClick={() => onDeleteResult(result.id)}
                            type="button"
                            className="button button-tertiary">Delete Result</Button>
                </div>
            ))}
        </div>
    );
}