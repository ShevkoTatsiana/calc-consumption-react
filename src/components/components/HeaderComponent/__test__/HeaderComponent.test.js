import React from 'react';
import ReactDom from 'react-dom';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {HeaderComponent} from '../HeaderComponent';

afterEach(cleanup);
it('renders without crashing', ()=> {
    const div = document.createElement('div');
    const history = createMemoryHistory();
    ReactDom.render(<Router history={history}><HeaderComponent/></Router>, div);
});
