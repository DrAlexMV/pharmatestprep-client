import * as React  from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from 'redux';
import { App } from './layout/app';
import { PTPState, makeStore } from './store';


const renderApp = (node: Element, store: Store<PTPState>) => {
    ReactDOM.render(<App store={store}/>, node);
};


const main = () => {
    const mount = document.getElementById('root');
    const store = makeStore();
    renderApp(mount, store);
};


main();