import React from 'react';


export const EmptyResultComponent: React.FunctionComponent = () => {
    return (
        <div data-testid="empty-result">Sorry, you don't have any active result</div>
    );
}