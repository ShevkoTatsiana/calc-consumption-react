import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {LoaderComponent} from '../Loader.component';

afterEach(cleanup);
it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDom.render(<LoaderComponent></LoaderComponent>, div);
});

it('renders component correctly', ()=> {
    render(<LoaderComponent/>);
    expect(screen.getByTestId('loader-component')).toBeInTheDocument();
});