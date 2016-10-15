import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { partial } from 'lodash';
import { Store } from 'redux';
import { App } from './layout/app';
import { PTPState, makeStore } from './store';
import { makeRootReducer, makeRootEpic } from './reducers';
import { AppContainer } from 'react-hot-loader';


export const setUpDevTools = (window: any, mountNode: Element,
    store: Store<any>) => {
    if (window.devToolsExtension) {
        window.devToolsExtension.open();
    }
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(makeRootReducer());
        });
        module.hot.accept('./layout/app', () => {
            const App = require('./layout/app').App;
            ReactDOM.unmountComponentAtNode(mountNode);
            ReactDOM.render(
                <AppContainer>
                    <App store={store} />
                </AppContainer>,
                mountNode);
        });
    }
};


const renderApp = (node: Element, store: Store<PTPState>) => {
    ReactDOM.render(
        <AppContainer>
            <App store={store} />
        </AppContainer>,
        node);
};


const main = () => {
    const mount = document.getElementById('root');
    const store = makeStore();
    setUpDevTools(window, mount, store);
    renderApp(mount, store);
};


main();