import React from 'react';
import { Provider } from 'react-redux';
import store from './../redux/store';
import {App} from '../App/App';
import {addResult} from '../redux/actions';

export function Root() {
    //store.dispatch(addResult('hhkhkhj'));
    //console.log(store.getState());
  return (
    <Provider store={store}>
      <App/>
     </Provider>
  );
}

export default Root;