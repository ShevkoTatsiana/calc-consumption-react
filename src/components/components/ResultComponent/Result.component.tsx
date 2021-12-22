import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ResultTableComponent} from '../ResultTableComponent/ResultTable.component';
import {LoaderComponent} from '../LoaderComponent/Loader.component';
import {Result, ConsumptionItem} from '../../../generated/graphql';

export interface ResultComponentProps {
    result: Result,
    onDeleteItem: (value: string) => void,
    loading: boolean,
    onSave: () => void,
    resultGrandTotal: number,
    onAddTitle: (value: string) => void,
    onDeleteResult: () => void,
    as?: React.FunctionComponent<ResultComponentProps>
}

export const ResultComponent: React.FunctionComponent<ResultComponentProps> = (props: ResultComponentProps) => {
    const {
        result,
        onDeleteItem,
        loading,
        onSave,
        resultGrandTotal,
        onAddTitle,
        onDeleteResult
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const {consumption_items, title} = result;

    if (loading) return <LoaderComponent/>;

    const handleOnAddTitle = () => {
        if(!ref.current) return;
        onAddTitle(ref.current.value);
    };


    return (
        <div className="result-component">
            {!!title ? (
                <h2 className="result-component-title">{`Result ${title}`}</h2>
            ) : (
                <h2 className="result-component-title">Result</h2>
            )}
            {!!consumption_items?.length && (
                <ResultTableComponent consumption_items={consumption_items}
                                      onDeleteItem={onDeleteItem}/>
            )}

            <div className="result-component-total">
                <span className="result-component-total-title">Grand Total:</span>
                {!!resultGrandTotal ? (
                    <span className="result-component-total-value">{resultGrandTotal}</span>
                ) : (
                    <span className="result-component-total-value">Not calculated yet</span>
                )}
            </div>
            <div className="result-component-save">
                <div className="result-component-save-note">
                    To add or update Result Title please fill in an Input field and press Add button
                </div>
                <Button onClick={handleOnAddTitle}
                        className="button button-tertiary result-component-add-action">Add Title</Button>
                <Form.Control
                    type="text"
                    placeholder="Result Title"
                    name="title"
                    ref={ref}
                    className="result-component-input"
                />
                <Button onClick={onSave}
                        className="button button-secondary result-component-save-action">Save to the Gallery</Button>
            </div>
            <Button onClick={onDeleteResult}
                    className="button button-tertiary-reverse result-component-delete-action">Delete Result</Button>
        </div>
    );
}