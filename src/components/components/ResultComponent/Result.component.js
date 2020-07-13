import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {ResultTableComponent} from '../ResultTableComponent/ResultTable.component';

export function ResultComponent(props) {
    const {
        result,
        onDeleteItem,
        loading,
        onSave,
        resultGrandTotal,
        onAddTitle,
        onDeleteResult
    } = props;

    const ref = useRef();

    const {consumption_items, title} = result;

    if (loading) return <div>Loading...</div>;

    const handleOnAddTitle = () => {
        onAddTitle(ref.current.value);
    };


    return (
        <div className="result-component">
            {!!title ? (
                <h2 className="result-component-title">{`Result ${title}`}</h2>
            ) : (
                <h2 className="result-component-title">Result</h2>
            )}
            <ResultTableComponent consumption_items={consumption_items}
                                  onDeleteItem={onDeleteItem}/>
            <div className="result-component-total">
                <span className="result-component-total-title">Grand Total:</span>
                {!!resultGrandTotal ? (
                    <span>{resultGrandTotal}</span>
                ) : (
                    <span>Not calculated yet</span>
                )}
            </div>
            <div className="result-component-save">
                <div className="result-component-save-note">
                    To add or update Result Title please fill in an Input field and press Add button
                </div>
                <Button onClick={handleOnAddTitle}
                        className="button button-tertiary">Add Title</Button>
                <Form.Control
                    type="text"
                    placeholder="Result Title"
                    name="title"
                    ref={ref}
                    className="result-component-input"
                />
                <Button onClick={onSave}
                        className="button button-secondary">Save to the Gallery</Button>
            </div>
            <Button onClick={onDeleteResult}
                    className="button button-tertiary-reverse">Delete Result</Button>
        </div>
    );
}