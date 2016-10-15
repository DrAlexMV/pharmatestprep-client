import * as _ from 'lodash';
import { Reducer, Action } from 'redux';
import { createAction } from 'redux-actions';
import { Observable } from 'rxjs';
import { ActionsObservable, Epic } from 'redux-observable';
import { PTPState } from '../../store';
import {
    FETCH_FLASHCARDS_FOR_TOPIC,
    FLASH_CARDS_RECEIVED,
    NEXT_CARD,
    SHOW_CARD_BACK,
    FetchFlashCardResponse,
    FetchFlashCardByTopicAction,
    FlashCardsReceivedAction,
} from '../actions';


export const showCardBack = createAction<any>(SHOW_CARD_BACK);


export const nextCard = createAction<any>(NEXT_CARD);


const _fetchCardsByTopic = (topic: string):
    Observable<FetchFlashCardResponse> => Observable.of(
        { topic: 'TEST', cards: new Map<string, any>() });


const _flashCardsReceived =
    createAction<FetchFlashCardResponse>(FLASH_CARDS_RECEIVED);


export const fetchFlashCardByTopicEpic =
    (action$: ActionsObservable<FetchFlashCardByTopicAction>) => {
        return action$
            .ofType(FETCH_FLASHCARDS_FOR_TOPIC)
            .delay(1000)
            .switchMap(action => _fetchCardsByTopic(action.payload.topic)
                .map((res: FetchFlashCardResponse) => _flashCardsReceived(res))
            );
    };


export interface FlashCardsState {
    showingBack: boolean;
}


const initialState: FlashCardsState = {
    showingBack: false
};


export const flashCards: Reducer<any> = (state: FlashCardsState = initialState,
    action: Action) => {
    switch (action.type) {
        case NEXT_CARD:
            break;
        case SHOW_CARD_BACK:
            return _.assign({}, state, { showingBack: true });
    }
    return state;
};