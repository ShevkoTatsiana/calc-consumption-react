import React from 'react';
import Button from 'react-bootstrap/Button';

export function GalleryComponent(props) {
    const {
        gallery,
        loading,
        onDeleteResult
    } = props;

    if (loading) return <div>Loading...</div>;

    return (
        <div className="gallery-component">
            {gallery.map((result, index) => (
                <div key={result.id}>
                    <h2>Result {index} {result.title}</h2>
                    <div className="gallery-component-result">
                        {result.consumption_items.map((item) => (
                            <div key={item.id}>
                                <span>{item.name}</span>
                                <span>{item.area}m2</span>
                                <span>{item.general_consumption}</span>
                                <span>{item.coast}</span>
                            </div>
                        ))}
                        <span>{result.grand_total}</span>
                    </div>
                    <Button onClick={() => onDeleteResult(result.id)}>Delete Result</Button>
                </div>

            ))}

        </div>
    );
}