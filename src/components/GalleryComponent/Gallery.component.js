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
            {gallery.map((result) => (
                <div key={result.id}>
                    <div>{result.title}</div>
                    {result.consumption_items.map((item) => (
                        <div key={item.id}>
                            <span>{item.name}</span>
                            <span>{item.general_consumption}</span>
                            <span>{item.coast}</span>
                        </div>
                    ))}
                    <div>{result.grand_total}</div>
                    <Button onClick={() => onDeleteResult(result.id)}>Delete Result</Button>
                </div>

            ))}

        </div>
    );
}