import { Action } from 'redux-actions';


/** Actions for Flash Cards */
export const FETCH_FLASHCARDS_FOR_TOPIC = 'FETCH_FLASHCARDS_FOR_TOPIC';
export const FLASH_CARDS_RECEIVED = 'FLASH_CARDS_RECEIVED';

/**
 * Server response for fetching FlashCards, contains a `topic` if one was
 * requested
 * 
 * @export
 * @interface FetchFlashCardResponse
 */
export interface FetchFlashCardResponse {
    topic: string;
    cards: Map<string, any>;
}

export type FetchFlashCardByTopicAction = Action<{topic: string}>;

export type FlashCardsReceivedAction = Action<FetchFlashCardResponse>;