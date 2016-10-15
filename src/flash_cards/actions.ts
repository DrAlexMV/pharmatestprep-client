import { Action } from 'redux-actions';


/** Actions for Flash Cards */
export const FETCH_FLASHCARDS_FOR_TOPIC = 'FETCH_FLASHCARDS_FOR_TOPIC';
export const FLASH_CARDS_RECEIVED = 'FLASH_CARDS_RECEIVED';
export const SHOW_CARD_BACK = 'SHOW_CARD_BACK';
export const NEXT_CARD = 'NEXT_CARD';

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