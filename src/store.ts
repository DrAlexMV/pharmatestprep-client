import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { makeRootReducer, makeRootEpic } from './reducers';
import { FlashCardsState } from './flash_cards/reducers/flash_cards';


export interface PTPState {
    flashCards: FlashCardsState;
};


export const makeStore = (): Store<PTPState> => {
    const epicMiddleware = createEpicMiddleware(makeRootEpic());
    const store = createStore(
        makeRootReducer(),
        applyMiddleware(epicMiddleware)
    );
    return store;
};