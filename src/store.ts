import { applyMiddleware, createStore, combineReducers, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { makeRootReducer, makeRootEpic } from './reducers';


export interface PTPState { };


export const makeStore = (): Store<PTPState> => {
    const epicMiddleware = createEpicMiddleware(makeRootEpic());
    const store = createStore(
        makeRootReducer(),
        applyMiddleware(epicMiddleware)
    );
    return store;
};

