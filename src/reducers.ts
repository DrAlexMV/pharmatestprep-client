import { combineReducers, Reducer } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import {
    fetchFlashCardByTopicEpic
} from './flash_cards/reducers/flash_cards';


export const makeRootReducer = (): Reducer<any> => {
    return combineReducers({});
};


export const makeRootEpic = (): Epic<any> => {
    return combineEpics(fetchFlashCardByTopicEpic);
};