import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route } from 'react-router';
import { PTPState } from '../store';
import {
    FlashCardPractice
} from '../flash_cards/components/';


interface AppProps {
    store: Store<PTPState>;
}


export const App: React.StatelessComponent<AppProps> = ({store}) => (
    <Provider store={store} >
        <div style={{ height: '100%' }}>
            <Router history={browserHistory}>
                <Route path='/' component={FlashCardPractice}></Route>
            </Router>
        </div>
    </Provider>
);