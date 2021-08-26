import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {BackComponent} from '../BackComponent';

afterEach(cleanup);
it('renders without crashing', ()=> {
    const div = document.createElement('div');
    const history = createMemoryHistory();
    ReactDom.render(<Router history={history}><BackComponent/></Router>, div);
});
