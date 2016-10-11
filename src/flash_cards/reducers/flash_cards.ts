import { createAction } from 'redux-actions';
import { Observable } from 'rxjs';
import { ActionsObservable, Epic } from 'redux-observable';
import {
    FETCH_FLASHCARDS_FOR_TOPIC,
    FLASH_CARDS_RECEIVED,
    FetchFlashCardResponse,
    FetchFlashCardByTopicAction,
    FlashCardsReceivedAction,
} from '../actions';


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