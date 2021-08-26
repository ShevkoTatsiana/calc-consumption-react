import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import {EmptyResultComponent} from '../EmptyResult.component';

afterEach(cleanup);
it('renders without crashing', ()=> {
    const div = document.createElement('div');
    ReactDom.render(<EmptyResultComponent></EmptyResultComponent>, div);
});

it('renders component correctly', ()=> {
    const {getByTestId} = render(<EmptyResultComponent/>);
    expect(getByTestId('empty-result')).toHaveTextContent('Sorry, you don\'t have any active result');
});

it('match snapshot', ()=> {
    const tree = renderer.create(<EmptyResultComponent/>).toJSON();
    expect(tree).toMatchSnapshot();
});